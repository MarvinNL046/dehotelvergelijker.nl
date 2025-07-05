import { NextRequest, NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    const hotel = await prisma.hotel.findUnique({
      where: {
        id: id,
      },
      include: {
        rooms: {
          include: {
            availability: {
              where: {
                date: {
                  gte: new Date(),
                  lte: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // Next 30 days
                },
              },
              orderBy: {
                price: 'asc',
              },
            },
          },
        },
        reviews: {
          orderBy: {
            createdAt: 'desc',
          },
          take: 10,
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
    
    if (!hotel) {
      return NextResponse.json(
        { error: 'Hotel not found' },
        { status: 404 }
      )
    }
    
    // Increment view count
    await prisma.hotel.update({
      where: { id: id },
      data: { viewCount: { increment: 1 } },
    })
    
    return NextResponse.json(hotel)
  } catch (error) {
    console.error('Error fetching hotel:', error)
    return NextResponse.json(
      { error: 'Failed to fetch hotel' },
      { status: 500 }
    )
  }
}

export async function PUT(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    // TODO: Add authentication check for admin users
    
    const body = await request.json()
    
    const hotel = await prisma.hotel.update({
      where: { id: id },
      data: body,
    })
    
    return NextResponse.json(hotel)
  } catch (error) {
    console.error('Error updating hotel:', error)
    return NextResponse.json(
      { error: 'Failed to update hotel' },
      { status: 500 }
    )
  }
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params
  try {
    // TODO: Add authentication check for admin users
    
    await prisma.hotel.delete({
      where: { id: id },
    })
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error deleting hotel:', error)
    return NextResponse.json(
      { error: 'Failed to delete hotel' },
      { status: 500 }
    )
  }
}