import { Notification, NotificationType } from '@/types/notification'

class NotificationService {
  private static instance: NotificationService
  private notifications: Notification[] = []

  private constructor() {
    // Initialize with some example notifications for development
    // In production, these would come from an API
    this.notifications = this.getInitialNotifications()
  }

  static getInstance(): NotificationService {
    if (!NotificationService.instance) {
      NotificationService.instance = new NotificationService()
    }
    return NotificationService.instance
  }

  private getInitialNotifications(): Notification[] {
    const now = new Date()
    return [
      {
        id: '1',
        type: 'price_alert',
        title: 'Prijsalert: NH Amsterdam Zuid',
        message: 'De prijs is gedaald van €120 naar €85 per nacht',
        timestamp: new Date(now.getTime() - 30 * 60000), // 30 minutes ago
        read: false,
        link: '/hotels/nh-amsterdam-zuid',
        metadata: {
          hotelName: 'NH Amsterdam Zuid',
          originalPrice: 120,
          newPrice: 85,
          discount: 29
        }
      },
      {
        id: '2',
        type: 'new_deal',
        title: 'Nieuwe deal in Barcelona',
        message: '25% korting op 4-sterren hotels dit weekend',
        timestamp: new Date(now.getTime() - 2 * 3600000), // 2 hours ago
        read: false,
        link: '/search?destination=barcelona&discount=true',
        metadata: {
          destination: 'Barcelona',
          discount: 25
        }
      },
      {
        id: '3',
        type: 'booking_reminder',
        title: 'Vergeet je reis niet!',
        message: 'Je vertrek naar Parijs is over 3 dagen',
        timestamp: new Date(now.getTime() - 24 * 3600000), // 1 day ago
        read: true,
        link: '/account/bookings',
        metadata: {
          destination: 'Parijs'
        }
      }
    ]
  }

  async getNotifications(): Promise<Notification[]> {
    // In production, this would fetch from an API
    // For now, return stored notifications
    return this.notifications
  }

  async getUnreadCount(): Promise<number> {
    const notifications = await this.getNotifications()
    return notifications.filter(n => !n.read).length
  }

  async markAsRead(notificationId: string): Promise<void> {
    // In production, this would call an API
    const notification = this.notifications.find(n => n.id === notificationId)
    if (notification) {
      notification.read = true
    }
  }

  async markAllAsRead(): Promise<void> {
    // In production, this would call an API
    this.notifications.forEach(n => n.read = true)
  }

  async deleteNotification(notificationId: string): Promise<void> {
    // In production, this would call an API
    this.notifications = this.notifications.filter(n => n.id !== notificationId)
  }

  // Method to add new notifications (for testing/development)
  addNotification(notification: Omit<Notification, 'id' | 'timestamp'>): void {
    this.notifications.unshift({
      ...notification,
      id: Date.now().toString(),
      timestamp: new Date()
    })
  }
}

export default NotificationService