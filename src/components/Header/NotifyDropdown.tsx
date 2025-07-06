'use client'

import { useNotifications } from '@/hooks/useNotifications'
import { NotificationType } from '@/types/notification'
import { CloseButton, Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { 
  BellIcon, 
  TagIcon, 
  CurrencyEuroIcon, 
  CalendarIcon,
  InformationCircleIcon,
  CheckIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'
import { FC } from 'react'

interface Props {
  className?: string
}

const getNotificationIcon = (type: NotificationType) => {
  switch (type) {
    case 'price_alert':
      return CurrencyEuroIcon
    case 'new_deal':
      return TagIcon
    case 'booking_reminder':
      return CalendarIcon
    case 'system':
    default:
      return InformationCircleIcon
  }
}

const getNotificationColor = (type: NotificationType) => {
  switch (type) {
    case 'price_alert':
      return 'text-green-600 bg-green-100 dark:text-green-400 dark:bg-green-900/20'
    case 'new_deal':
      return 'text-primary-600 bg-primary-100 dark:text-primary-400 dark:bg-primary-900/20'
    case 'booking_reminder':
      return 'text-yellow-600 bg-yellow-100 dark:text-yellow-400 dark:bg-yellow-900/20'
    case 'system':
    default:
      return 'text-blue-600 bg-blue-100 dark:text-blue-400 dark:bg-blue-900/20'
  }
}

const formatTimeAgo = (date: Date) => {
  const now = new Date()
  const diffMs = now.getTime() - date.getTime()
  const diffMins = Math.floor(diffMs / 60000)
  const diffHours = Math.floor(diffMs / 3600000)
  const diffDays = Math.floor(diffMs / 86400000)

  if (diffMins < 1) return 'Zojuist'
  if (diffMins < 60) return `${diffMins} ${diffMins === 1 ? 'minuut' : 'minuten'} geleden`
  if (diffHours < 24) return `${diffHours} ${diffHours === 1 ? 'uur' : 'uur'} geleden`
  if (diffDays < 7) return `${diffDays} ${diffDays === 1 ? 'dag' : 'dagen'} geleden`
  
  return date.toLocaleDateString('nl-NL')
}

const NotifyDropdown: FC<Props> = ({ className = '' }) => {
  const { notifications, unreadCount, loading, markAsRead, markAllAsRead } = useNotifications()

  const handleNotificationClick = (notificationId: string) => {
    markAsRead(notificationId)
  }

  return (
    <Popover className={className}>
      <>
        <PopoverButton
          className={
            'relative -m-2.5 flex cursor-pointer items-center justify-center rounded-full p-2.5 hover:bg-neutral-100 focus-visible:outline-hidden dark:hover:bg-neutral-800'
          }
        >
          {unreadCount > 0 && (
            <span className="absolute end-2 top-2 h-2 w-2 rounded-full bg-red-500"></span>
          )}
          <BellIcon className="h-6 w-6" />
        </PopoverButton>

        <PopoverPanel
          transition
          anchor={{
            to: 'bottom end',
            gap: 16,
          }}
          className="z-40 w-[22rem] rounded-3xl shadow-lg ring-1 ring-black/5 transition duration-200 ease-in-out data-closed:translate-y-1 data-closed:opacity-0"
        >
          <div className="relative bg-white dark:bg-neutral-800">
            <div className="flex items-center justify-between p-6 pb-4">
              <h3 className="text-xl font-semibold">Meldingen</h3>
              {unreadCount > 0 && (
                <button
                  onClick={markAllAsRead}
                  className="flex items-center gap-1 text-sm text-primary-600 hover:text-primary-700 dark:text-primary-400"
                >
                  <CheckIcon className="h-4 w-4" />
                  Markeer alles als gelezen
                </button>
              )}
            </div>

            <div className="max-h-[400px] overflow-y-auto">
              {loading ? (
                <div className="p-6 text-center text-neutral-500">
                  Meldingen laden...
                </div>
              ) : notifications.length === 0 ? (
                <div className="p-6 text-center text-neutral-500">
                  Geen nieuwe meldingen
                </div>
              ) : (
                <div className="divide-y divide-neutral-200 dark:divide-neutral-700">
                  {notifications.map((notification) => {
                    const Icon = getNotificationIcon(notification.type)
                    const colorClass = getNotificationColor(notification.type)
                    
                    return (
                      <CloseButton
                        as={notification.link ? Link : 'div'}
                        key={notification.id}
                        href={notification.link || '#'}
                        onClick={() => handleNotificationClick(notification.id)}
                        className="relative flex w-full p-4 transition duration-150 ease-in-out hover:bg-gray-50 focus:outline-hidden dark:hover:bg-gray-700/50"
                      >
                        <div className={`flex h-10 w-10 items-center justify-center rounded-full ${colorClass}`}>
                          <Icon className="h-5 w-5" />
                        </div>
                        <div className="ml-3 flex-1">
                          <p className={`text-sm font-medium ${!notification.read ? 'text-gray-900 dark:text-gray-100' : 'text-gray-600 dark:text-gray-400'}`}>
                            {notification.title}
                          </p>
                          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                            {notification.message}
                          </p>
                          <p className="mt-1 text-xs text-gray-400 dark:text-gray-500">
                            {formatTimeAgo(notification.timestamp)}
                          </p>
                        </div>
                        {!notification.read && (
                          <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-blue-500"></span>
                        )}
                      </CloseButton>
                    )
                  })}
                </div>
              )}
            </div>

            {notifications.length > 0 && (
              <Link
                href="/account/notifications"
                className="block border-t border-neutral-200 p-4 text-center text-sm font-medium text-primary-600 hover:bg-gray-50 dark:border-neutral-700 dark:text-primary-400 dark:hover:bg-gray-700/50"
              >
                Bekijk alle meldingen
              </Link>
            )}
          </div>
        </PopoverPanel>
      </>
    </Popover>
  )
}

export default NotifyDropdown