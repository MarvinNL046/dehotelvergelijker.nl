import { prisma } from '@/lib/prisma'
import { SearchParams, SearchResult } from '@/types/hotel'
import { Provider } from '@prisma/client'

export class HotelService {
  /**
   * Search hotels based on parameters
   */
  static async searchHotels(params: SearchParams): Promise<SearchResult> {
    const {
      destination,
      checkIn,
      checkOut,
      guests,
      filters = {},
    } = params

    const where: any = {
      active: true,
    }

    // Location filter
    if (destination) {
      where.OR = [
        { city: { contains: destination, mode: 'insensitive' } },
        { name: { contains: destination, mode: 'insensitive' } },
        { country: { contains: destination, mode: 'insensitive' } },
      ]
    }

    // Price filter
    if (filters.priceMin || filters.priceMax) {
      where.minPrice = {}
      if (filters.priceMin) where.minPrice.gte = filters.priceMin
      if (filters.priceMax) where.minPrice.lte = filters.priceMax
    }

    // Stars filter
    if (filters.stars && filters.stars.length > 0) {
      where.stars = { in: filters.stars }
    }

    // Rating filter
    if (filters.rating) {
      where.rating = { gte: filters.rating }
    }

    // Amenities filter
    if (filters.amenities && filters.amenities.length > 0) {
      where.amenities = { hasEvery: filters.amenities }
    }

    const hotels = await prisma.hotel.findMany({
      where,
      include: {
        rooms: {
          where: {
            maxGuests: { gte: guests },
          },
          include: {
            availability: {
              where: {
                date: {
                  gte: checkIn,
                  lte: checkOut,
                },
                available: true,
              },
              orderBy: {
                price: 'asc',
              },
              take: 1,
            },
          },
        },
      },
      orderBy: this.getOrderBy(filters.sortBy),
    })

    // Filter hotels that have available rooms
    const availableHotels = hotels.filter(hotel => 
      hotel.rooms.some(room => room.availability.length > 0)
    )

    return {
      hotels: availableHotels as any,
      totalCount: availableHotels.length,
      filters,
      facets: await this.getSearchFacets(destination),
    }
  }

  /**
   * Get hotel by ID with full details
   */
  static async getHotelById(id: string) {
    const hotel = await prisma.hotel.findUnique({
      where: { id },
      include: {
        rooms: true,
        reviews: {
          take: 10,
          orderBy: { createdAt: 'desc' },
          include: {
            user: {
              select: {
                name: true,
                image: true,
              },
            },
          },
        },
      },
    })

    if (hotel) {
      // Increment view count
      await prisma.hotel.update({
        where: { id },
        data: { viewCount: { increment: 1 } },
      })
    }

    return hotel
  }

  /**
   * Get featured hotels for homepage
   */
  static async getFeaturedHotels(limit = 8) {
    return prisma.hotel.findMany({
      where: {
        active: true,
        featured: true,
      },
      take: limit,
      orderBy: [
        { featured: 'desc' },
        { rating: 'desc' },
      ],
    })
  }

  /**
   * Get popular destinations
   */
  static async getPopularDestinations() {
    const destinations = await prisma.hotel.groupBy({
      by: ['city', 'country'],
      where: { active: true },
      _count: {
        id: true,
      },
      orderBy: {
        _count: {
          id: 'desc',
        },
      },
      take: 12,
    })

    return destinations.map(dest => ({
      city: dest.city,
      country: dest.country,
      hotelCount: dest._count.id,
    }))
  }

  /**
   * Sync hotel data from external providers
   */
  static async syncHotelData(provider: Provider, hotelData: any) {
    // This would be called by scheduled jobs to update hotel data
    // Implementation depends on specific provider APIs
    
    const hotel = await prisma.hotel.upsert({
      where: {
        externalId: hotelData.externalId,
      },
      update: {
        name: hotelData.name,
        description: hotelData.description,
        amenities: hotelData.amenities,
        images: hotelData.images,
        rating: hotelData.rating,
        minPrice: hotelData.minPrice,
        updatedAt: new Date(),
      },
      create: {
        externalId: hotelData.externalId,
        provider,
        name: hotelData.name,
        slug: this.generateSlug(hotelData.name),
        description: hotelData.description,
        address: hotelData.address,
        city: hotelData.city,
        country: hotelData.country,
        postalCode: hotelData.postalCode,
        latitude: hotelData.latitude,
        longitude: hotelData.longitude,
        stars: hotelData.stars,
        amenities: hotelData.amenities,
        images: hotelData.images,
        checkInTime: hotelData.checkInTime,
        checkOutTime: hotelData.checkOutTime,
        minPrice: hotelData.minPrice,
        rating: hotelData.rating,
      },
    })

    return hotel
  }

  /**
   * Helper methods
   */
  private static getOrderBy(sortBy?: string) {
    switch (sortBy) {
      case 'PRICE_ASC':
        return { minPrice: 'asc' as const }
      case 'PRICE_DESC':
        return { minPrice: 'desc' as const }
      case 'RATING_DESC':
        return { rating: 'desc' as const }
      case 'POPULARITY_DESC':
        return { bookingCount: 'desc' as const }
      default:
        return { featured: 'desc' as const }
    }
  }

  private static async getSearchFacets(destination?: string) {
    // This would return aggregated data for filters
    // Implementation would query the database for counts
    return {
      priceRange: { min: 50, max: 500 },
      stars: [],
      amenities: [],
      providers: [],
    }
  }

  private static generateSlug(name: string): string {
    return name
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '')
  }
}