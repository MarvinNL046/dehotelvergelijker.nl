import { Hotel, SearchParams, Provider } from '@/types/hotel'

interface TravelpayoutsHotel {
  id: string
  cityId: string
  label: string
  locationName: string
  fullName: string
  location: {
    lat: number
    lon: number
  }
  locationId: string
  cityName: string
  countryCode: string
  propertyType: string
  hotelChain: string
  _score: number
}

interface TravelpayoutsPrice {
  hotelId: string
  price: number
  currency: string
  partner: string
}

export class TravelpayoutsService {
  private token: string
  private marker: string
  private baseUrl = 'https://api.travelpayouts.com/hotellook'

  constructor() {
    this.token = process.env.TRAVELPAYOUTS_TOKEN || ''
    this.marker = process.env.TRAVELPAYOUTS_MARKER || ''
  }

  /**
   * Search hotels by location
   */
  async searchHotels(params: SearchParams): Promise<Hotel[]> {
    try {
      // Step 1: Search for location
      const locationData = await this.searchLocation(params.destination || '')
      if (!locationData || locationData.length === 0) {
        return []
      }

      const cityId = locationData[0].id

      // Step 2: Get hotels in the city
      const hotels = await this.getHotelsByCity(cityId)

      // Step 3: Get prices for these hotels
      const hotelIds = hotels.map(h => h.id)
      const prices = await this.getHotelPrices(
        hotelIds,
        params.checkIn,
        params.checkOut,
        params.guests
      )

      // Step 4: Combine data and filter
      return this.combineHotelData(hotels, prices, params)
    } catch (error) {
      console.error('Travelpayouts search error:', error)
      return []
    }
  }

  /**
   * Search for location/city
   */
  private async searchLocation(query: string) {
    const response = await fetch(
      `${this.baseUrl}/v2/lookup?query=${encodeURIComponent(query)}&lang=nl&lookFor=city&token=${this.token}`
    )
    
    if (!response.ok) {
      throw new Error('Location search failed')
    }

    const data = await response.json()
    return data.results
  }

  /**
   * Get hotels in a specific city
   */
  private async getHotelsByCity(cityId: string): Promise<TravelpayoutsHotel[]> {
    const response = await fetch(
      `${this.baseUrl}/v1/hotels?cityId=${cityId}&token=${this.token}`
    )

    if (!response.ok) {
      throw new Error('Hotels search failed')
    }

    return response.json()
  }

  /**
   * Get hotel prices
   */
  private async getHotelPrices(
    hotelIds: string[],
    checkIn: Date,
    checkOut: Date,
    adults: number
  ): Promise<TravelpayoutsPrice[]> {
    const checkInStr = checkIn.toISOString().split('T')[0]
    const checkOutStr = checkOut.toISOString().split('T')[0]

    // Travelpayouts allows max 50 hotels per request
    const chunks = this.chunkArray(hotelIds, 50)
    const allPrices: TravelpayoutsPrice[] = []

    for (const chunk of chunks) {
      const response = await fetch(
        `${this.baseUrl}/v1/prices/direct?` +
        `hotelIds=${chunk.join(',')}&` +
        `checkIn=${checkInStr}&` +
        `checkOut=${checkOutStr}&` +
        `adults=${adults}&` +
        `currency=EUR&` +
        `token=${this.token}`
      )

      if (response.ok) {
        const data = await response.json()
        allPrices.push(...data)
      }
    }

    return allPrices
  }

  /**
   * Combine hotel and price data
   */
  private combineHotelData(
    hotels: TravelpayoutsHotel[],
    prices: TravelpayoutsPrice[],
    params: SearchParams
  ): Hotel[] {
    const priceMap = new Map(prices.map(p => [p.hotelId, p]))

    return hotels
      .filter(hotel => priceMap.has(hotel.id))
      .map(hotel => {
        const price = priceMap.get(hotel.id)!
        const nights = Math.ceil(
          (params.checkOut.getTime() - params.checkIn.getTime()) / (1000 * 60 * 60 * 24)
        )

        return {
          id: hotel.id,
          externalId: hotel.id,
          provider: Provider.BOOKING_COM,
          name: hotel.fullName || hotel.label,
          slug: this.createSlug(hotel.label),
          description: `${hotel.propertyType} in ${hotel.cityName}`,
          address: hotel.locationName,
          city: hotel.cityName,
          country: hotel.countryCode,
          latitude: hotel.location.lat,
          longitude: hotel.location.lon,
          stars: this.extractStars(hotel.label),
          amenities: [], // Travelpayouts doesn't provide amenities
          images: [this.getHotelImage(hotel.id)],
          minPrice: price.price / nights,
          currency: price.currency,
          rating: hotel._score ? hotel._score / 20 : undefined, // Convert score to 0-5 scale
          reviewCount: 0,
          viewCount: 0,
          bookingCount: 0,
          active: true,
          featured: false,
          createdAt: new Date(),
          updatedAt: new Date(),
        }
      })
      .sort((a, b) => (a.minPrice || 999999) - (b.minPrice || 999999))
  }

  /**
   * Generate affiliate booking URL
   */
  generateBookingUrl(hotelId: string, checkIn: Date, checkOut: Date, guests: number): string {
    const checkInStr = checkIn.toISOString().split('T')[0]
    const checkOutStr = checkOut.toISOString().split('T')[0]
    
    const bookingUrl = `https://www.booking.com/hotel/${hotelId}.html?` +
      `checkin=${checkInStr}&` +
      `checkout=${checkOutStr}&` +
      `group_adults=${guests}&` +
      `no_rooms=1`

    // Travelpayouts affiliate link wrapper
    return `https://tp.media/r?marker=${this.marker}&p=4&u=${encodeURIComponent(bookingUrl)}`
  }

  /**
   * Get hotel image URL (Booking.com CDN)
   */
  private getHotelImage(hotelId: string): string {
    // Booking.com's public CDN pattern
    return `https://cf.bstatic.com/xdata/images/hotel/max1024x768/${hotelId}.jpg`
  }

  /**
   * Extract star rating from hotel name
   */
  private extractStars(hotelName: string): number | undefined {
    const match = hotelName.match(/(\d)\s*[sS]tar/)
    return match ? parseInt(match[1]) : undefined
  }

  /**
   * Create URL-friendly slug
   */
  private createSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }

  /**
   * Helper to chunk array
   */
  private chunkArray<T>(array: T[], size: number): T[][] {
    const chunks: T[][] = []
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size))
    }
    return chunks
  }
}