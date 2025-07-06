'use client'

import { useEffect, useState } from 'react'
import { Notification } from '@/types/notification'
import NotificationService from '@/services/notification-service'

export function useNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>([])
  const [unreadCount, setUnreadCount] = useState(0)
  const [loading, setLoading] = useState(true)

  const notificationService = NotificationService.getInstance()

  const fetchNotifications = async () => {
    try {
      const data = await notificationService.getNotifications()
      // Ensure dates are proper Date objects
      const notificationsWithDates = data.map(n => ({
        ...n,
        timestamp: n.timestamp instanceof Date ? n.timestamp : new Date(n.timestamp)
      }))
      setNotifications(notificationsWithDates)
      const count = await notificationService.getUnreadCount()
      setUnreadCount(count)
    } catch (error) {
      console.error('Error fetching notifications:', error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchNotifications()

    // In production, you might want to set up WebSocket or polling here
    const interval = setInterval(fetchNotifications, 60000) // Check every minute

    return () => clearInterval(interval)
  }, [])

  const markAsRead = async (notificationId: string) => {
    await notificationService.markAsRead(notificationId)
    await fetchNotifications()
  }

  const markAllAsRead = async () => {
    await notificationService.markAllAsRead()
    await fetchNotifications()
  }

  const deleteNotification = async (notificationId: string) => {
    await notificationService.deleteNotification(notificationId)
    await fetchNotifications()
  }

  return {
    notifications,
    unreadCount,
    loading,
    markAsRead,
    markAllAsRead,
    deleteNotification,
    refetch: fetchNotifications
  }
}