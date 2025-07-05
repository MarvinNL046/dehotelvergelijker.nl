import { NextResponse } from 'next/server'
import { TravelpayoutsService } from '@/services/travelpayouts'

export async function GET() {
  try {
    const service = new TravelpayoutsService()
    
    // Test search for Amsterdam hotels
    const testParams = {
      destination: 'Amsterdam',
      checkIn: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      checkOut: new Date(Date.now() + 9 * 24 * 60 * 60 * 1000), // 9 days from now
      guests: 2,
      rooms: 1,
    }
    
    const hotels = await service.searchHotels(testParams)
    
    return NextResponse.json({
      success: true,
      count: hotels.length,
      sample: hotels.slice(0, 3), // First 3 hotels
      params: testParams,
      message: hotels.length > 0 
        ? 'API connection successful!' 
        : 'No hotels found - check your API token'
    })
  } catch (error) {
    console.error('Travelpayouts test error:', error)
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      message: 'Check your TRAVELPAYOUTS_TOKEN in .env.local'
    }, { status: 500 })
  }
}