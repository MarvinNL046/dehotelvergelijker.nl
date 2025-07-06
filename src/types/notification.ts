export type NotificationType = 'price_alert' | 'new_deal' | 'booking_reminder' | 'system'

export interface Notification {
  id: string
  type: NotificationType
  title: string
  message: string
  timestamp: Date
  read: boolean
  link?: string
  metadata?: {
    hotelName?: string
    originalPrice?: number
    newPrice?: number
    discount?: number
    destination?: string
  }
}

export interface NotificationPreferences {
  priceAlerts: boolean
  newDeals: boolean
  bookingReminders: boolean
  systemNotifications: boolean
  email: boolean
  push: boolean
}