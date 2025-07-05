import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { SearchParams, SortOption } from '@/types/hotel'

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams
    
    // Parse search parameters
    const destination = searchParams.get('destination') || ''
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const guests = parseInt(searchParams.get('guests') || '2')
    const page = parseInt(searchParams.get('page') || '1')
    const pageSize = parseInt(searchParams.get('pageSize') || '20')
    const sortBy = (searchParams.get('sortBy') as SortOption) || SortOption.POPULARITY_DESC
    
    // Parse filters
    const priceMin = searchParams.get('priceMin') ? parseFloat(searchParams.get('priceMin')!) : undefined
    const priceMax = searchParams.get('priceMax') ? parseFloat(searchParams.get('priceMax')!) : undefined
    const stars = searchParams.get('stars')?.split(',').map(Number) || []
    const rating = searchParams.get('rating') ? parseFloat(searchParams.get('rating')!) : undefined
    const amenities = searchParams.get('amenities')?.split(',') || []
    
    // Build where clause
    const where: any = {
      active: true,
    }
    
    if (destination) {
      where.OR = [
        { city: { contains: destination, mode: 'insensitive' } },
        { name: { contains: destination, mode: 'insensitive' } },
        { address: { contains: destination, mode: 'insensitive' } },
      ]
    }
    
    if (priceMin !== undefined || priceMax !== undefined) {
      where.minPrice = {}
      if (priceMin !== undefined) where.minPrice.gte = priceMin
      if (priceMax !== undefined) where.minPrice.lte = priceMax
    }
    
    if (stars.length > 0) {
      where.stars = { in: stars }
    }
    
    if (rating !== undefined) {
      where.rating = { gte: rating }
    }
    
    if (amenities.length > 0) {
      where.amenities = { hasEvery: amenities }
    }
    
    // Build orderBy clause
    let orderBy: any = {}
    switch (sortBy) {
      case SortOption.PRICE_ASC:
        orderBy = { minPrice: 'asc' }
        break
      case SortOption.PRICE_DESC:
        orderBy = { minPrice: 'desc' }
        break
      case SortOption.RATING_DESC:
        orderBy = { rating: 'desc' }
        break
      case SortOption.POPULARITY_DESC:
        orderBy = { bookingCount: 'desc' }
        break
      default:
        orderBy = { featured: 'desc' }
    }
    
    // Execute queries
    const [hotels, totalCount] = await Promise.all([
      prisma.hotel.findMany({
        where,
        orderBy,
        skip: (page - 1) * pageSize,
        take: pageSize,
        include: {
          reviews: {
            select: {
              rating: true,
            },
          },
        },
      }),
      prisma.hotel.count({ where }),
    ])
    
    // Calculate facets for filters
    const allHotels = await prisma.hotel.findMany({
      where: { active: true, ...(destination ? where.OR : {}) },
      select: {
        minPrice: true,
        stars: true,
        amenities: true,
        provider: true,
      },
    })
    
    const priceRange = {
      min: Math.min(...allHotels.filter(h => h.minPrice).map(h => h.minPrice!)),
      max: Math.max(...allHotels.filter(h => h.minPrice).map(h => h.minPrice!)),
    }
    
    const starCounts = [1, 2, 3, 4, 5].map(star => ({
      value: star,
      count: allHotels.filter(h => h.stars === star).length,
    }))
    
    const amenityCounts = Array.from(
      new Set(allHotels.flatMap(h => h.amenities))
    ).map(amenity => ({
      value: amenity,
      count: allHotels.filter(h => h.amenities.includes(amenity)).length,
    }))
    
    const result = {
      hotels: hotels as any,
      totalCount,
      filters: {
        priceMin,
        priceMax,
        stars,
        rating,
        amenities,
        sortBy,
      },
      facets: {
        priceRange,
        stars: starCounts,
        amenities: amenityCounts,
        providers: [],
      },
    }
    
    return NextResponse.json({
      ...result,
      page,
      pageSize,
      totalPages: Math.ceil(totalCount / pageSize),
    })
  } catch (error) {
    console.error('Error fetching hotels:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hotels' },
      { status: 500 }
    )
  }
}

// POST endpoint for creating hotels (admin only)
export async function POST(request: NextRequest) {
  try {
    // TODO: Add authentication check for admin users
    
    const body = await request.json()
    
    const hotel = await prisma.hotel.create({
      data: {
        ...body,
        slug: body.name.toLowerCase().replace(/\s+/g, '-'),
      },
    })
    
    return NextResponse.json(hotel, { status: 201 })
  } catch (error) {
    console.error('Error creating hotel:', error)
    return NextResponse.json(
      { error: 'Failed to create hotel' },
      { status: 500 }
    )
  }
}