import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { Provider } from '@prisma/client'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const searchParams = request.nextUrl.searchParams
    const checkIn = searchParams.get('checkIn')
    const checkOut = searchParams.get('checkOut')
    const guests = parseInt(searchParams.get('guests') || '2')
    
    if (!checkIn || !checkOut) {
      return NextResponse.json(
        { error: 'Check-in and check-out dates are required' },
        { status: 400 }
      )
    }
    
    const checkInDate = new Date(checkIn)
    const checkOutDate = new Date(checkOut)
    
    // Get rooms with availability for the date range
    const rooms = await prisma.room.findMany({
      where: {
        hotelId: id,
        maxGuests: { gte: guests },
      },
      include: {
        availability: {
          where: {
            date: {
              gte: checkInDate,
              lt: checkOutDate,
            },
            available: true,
          },
          orderBy: {
            price: 'asc',
          },
        },
      },
    })
    
    // Group availability by provider and calculate total price
    const availabilityByProvider = rooms.map(room => {
      const providers = new Map<Provider, { totalPrice: number; bookingUrl: string; nights: number }>()
      
      room.availability.forEach(avail => {
        const current = providers.get(avail.provider) || { totalPrice: 0, bookingUrl: avail.bookingUrl, nights: 0 }
        providers.set(avail.provider, {
          totalPrice: current.totalPrice + avail.price,
          bookingUrl: avail.bookingUrl,
          nights: current.nights + 1,
        })
      })
      
      const nights = Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24))
      
      // Only include providers that have availability for all nights
      const completeProviders = Array.from(providers.entries())
        .filter(([_, data]) => data.nights === nights)
        .map(([provider, data]) => ({
          provider,
          totalPrice: data.totalPrice,
          avgPricePerNight: data.totalPrice / nights,
          bookingUrl: data.bookingUrl,
        }))
      
      return {
        room,
        availability: completeProviders,
      }
    }).filter(item => item.availability.length > 0)
    
    // TODO: In production, also check real-time availability from provider APIs
    
    return NextResponse.json({
      checkIn: checkInDate,
      checkOut: checkOutDate,
      nights: Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)),
      guests,
      rooms: availabilityByProvider,
    })
  } catch (error) {
    console.error('Error fetching availability:', error)
    return NextResponse.json(
      { error: 'Failed to fetch availability' },
      { status: 500 }
    )
  }
}

// POST endpoint to sync availability from providers
export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    // TODO: Add authentication check for system/cron jobs
    
    const body = await request.json()
    const { provider, roomData, availability } = body
    
    // Bulk upsert availability data
    const operations = availability.map((avail: any) => {
      return prisma.availability.upsert({
        where: {
          roomId_date_provider: {
            roomId: avail.roomId,
            date: new Date(avail.date),
            provider: avail.provider,
          },
        },
        update: {
          available: avail.available,
          price: avail.price,
          originalPrice: avail.originalPrice,
          bookingUrl: avail.bookingUrl,
          updatedAt: new Date(),
        },
        create: {
          roomId: avail.roomId,
          date: new Date(avail.date),
          available: avail.available,
          price: avail.price,
          originalPrice: avail.originalPrice,
          provider: avail.provider,
          bookingUrl: avail.bookingUrl,
        },
      })
    })
    
    await prisma.$transaction(operations)
    
    return NextResponse.json({ success: true, updated: operations.length })
  } catch (error) {
    console.error('Error syncing availability:', error)
    return NextResponse.json(
      { error: 'Failed to sync availability' },
      { status: 500 }
    )
  }
}