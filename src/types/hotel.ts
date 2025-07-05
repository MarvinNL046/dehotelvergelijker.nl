// Hotel related types for dehotelvergelijker.nl

export interface Hotel {
  id: string
  externalId: string
  provider: Provider
  name: string
  slug: string
  description: string
  address: string
  city: string
  country: string
  postalCode?: string
  latitude: number
  longitude: number
  stars?: number
  
  // Features
  amenities: string[]
  images: string[]
  checkInTime?: string
  checkOutTime?: string
  
  // Pricing
  minPrice?: number
  currency: string
  
  // Stats
  rating?: number
  reviewCount: number
  viewCount: number
  bookingCount: number
  
  active: boolean
  featured: boolean
  createdAt: Date
  updatedAt: Date
  
  // Relations
  rooms?: Room[]
  reviews?: Review[]
}

export interface Room {
  id: string
  hotelId: string
  externalId: string
  name: string
  description?: string
  maxGuests: number
  bedConfiguration?: string
  size?: number // in m²
  amenities: string[]
  images: string[]
  
  // Relations
  availability?: Availability[]
}

export interface Availability {
  id: string
  roomId: string
  date: Date
  available: boolean
  price: number
  originalPrice?: number
  provider: Provider
  bookingUrl: string
  
  createdAt: Date
  updatedAt: Date
}

export interface Review {
  id: string
  userId: string
  hotelId: string
  rating: number // 1-5
  title: string
  content: string
  pros?: string
  cons?: string
  travelType?: TravelType
  visitDate?: Date
  helpful: number
  verified: boolean
  createdAt: Date
  updatedAt: Date
  
  // Relations
  user?: User
}

export interface User {
  id: string
  email: string
  name?: string
  image?: string
  role: UserRole
}

export interface PriceAlert {
  id: string
  userId: string
  hotelId: string
  targetPrice: number
  checkIn: Date
  checkOut: Date
  guests: number
  active: boolean
  triggered: boolean
  lastChecked: Date
  createdAt: Date
}

export interface SearchParams {
  destination?: string
  checkIn: Date
  checkOut: Date
  guests: number
  rooms?: number
  filters?: SearchFilters
}

export interface SearchFilters {
  priceMin?: number
  priceMax?: number
  stars?: number[]
  rating?: number
  amenities?: string[]
  providers?: Provider[]
  distanceFromCenter?: number
  sortBy?: SortOption
}

export interface SearchResult {
  hotels: Hotel[]
  totalCount: number
  filters: SearchFilters
  facets: SearchFacets
}

export interface SearchFacets {
  priceRange: { min: number; max: number }
  stars: { value: number; count: number }[]
  amenities: { value: string; count: number }[]
  providers: { value: Provider; count: number }[]
}

// Enums
export enum Provider {
  BOOKING_COM = 'BOOKING_COM',
  HOTELS_COM = 'HOTELS_COM',
  EXPEDIA = 'EXPEDIA',
  AGODA = 'AGODA',
  INTERNAL = 'INTERNAL'
}

export enum UserRole {
  USER = 'USER',
  ADMIN = 'ADMIN',
  MODERATOR = 'MODERATOR'
}

export enum TravelType {
  BUSINESS = 'BUSINESS',
  COUPLE = 'COUPLE',
  FAMILY = 'FAMILY',
  FRIENDS = 'FRIENDS',
  SOLO = 'SOLO'
}

export enum SortOption {
  PRICE_ASC = 'PRICE_ASC',
  PRICE_DESC = 'PRICE_DESC',
  RATING_DESC = 'RATING_DESC',
  DISTANCE_ASC = 'DISTANCE_ASC',
  POPULARITY_DESC = 'POPULARITY_DESC'
}

// API Response types
export interface ApiResponse<T> {
  data?: T
  error?: string
  status: number
}

export interface PaginatedResponse<T> {
  data: T[]
  total: number
  page: number
  pageSize: number
  totalPages: number
}

// Common hotel amenities for filtering
export const HOTEL_AMENITIES = [
  'wifi',
  'parking',
  'pool',
  'gym',
  'spa',
  'restaurant',
  'bar',
  'room_service',
  'air_conditioning',
  'pet_friendly',
  'non_smoking',
  'wheelchair_accessible',
  'breakfast_included',
  'airport_shuttle',
  'business_center',
  'laundry',
  'family_friendly'
] as const

export type HotelAmenity = typeof HOTEL_AMENITIES[number]