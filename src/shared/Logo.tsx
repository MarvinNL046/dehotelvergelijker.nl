import Link from 'next/link'
import React from 'react'

interface LogoProps {
  className?: string
  variant?: 'default' | 'simple'
}

const Logo: React.FC<LogoProps> = ({ className = '', variant = 'default' }) => {
  if (variant === 'simple') {
    return (
      <Link href="/" className={`inline-flex items-center font-bold text-2xl sm:text-3xl hover:opacity-80 transition-opacity focus:ring-0 focus:outline-hidden ${className}`}>
        <span className="text-primary-600">Hotel</span>
        <span className="text-neutral-900 dark:text-white">Check</span>
      </Link>
    )
  }

  return (
    <Link href="/" className={`inline-flex items-baseline group focus:ring-0 focus:outline-hidden ${className}`}>
      <div className="flex items-baseline">
        <span className="text-xl sm:text-2xl lg:text-3xl font-bold">
          <span className="text-primary-600 group-hover:text-primary-700 transition-colors">DeHotel</span>
          <span className="text-neutral-900 dark:text-white">Vergelijker</span>
        </span>
        <span className="ml-1 text-sm sm:text-base font-medium text-primary-600 group-hover:text-primary-700 transition-colors">.nl</span>
      </div>
    </Link>
  )
}

export default Logo