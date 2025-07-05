'use client'

import { useState, useEffect } from 'react'

const AiraloWidgetSimple = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 3000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full min-h-[600px] relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-50 dark:bg-neutral-900 rounded-lg">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
            <p className="text-neutral-600 dark:text-neutral-400">Airalo widget wordt geladen...</p>
          </div>
        </div>
      )}
      
      {hasError ? (
        <div className="flex flex-col items-center justify-center min-h-[600px] text-center p-8">
          <h3 className="text-xl font-semibold mb-4">Widget kon niet geladen worden</h3>
          <p className="text-neutral-600 dark:text-neutral-400 mb-6">
            Klik hieronder om direct naar Airalo te gaan en eSIM pakketten te bekijken.
          </p>
          <a
            href="https://airalo.tpo.lv/Eonf0kHG"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-primary-600 text-white hover:bg-primary-700 transition-colors"
          >
            Ga naar Airalo →
          </a>
        </div>
      ) : (
        <iframe
          src="https://tpembd.com/content?trs=384595&shmarker=602467&locale=nl&powered_by=true&color_button=%23f2685f&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=5&plain=false&no_labels=true&promo_id=8588&campaign_id=541"
          width="100%"
          height="600"
          frameBorder="0"
          title="Airalo eSIM Search"
          className="rounded-lg border-0"
          onError={() => setHasError(true)}
          onLoad={() => setIsLoading(false)}
          style={{ display: isLoading ? 'none' : 'block' }}
        />
      )}
    </div>
  )
}

export default AiraloWidgetSimple