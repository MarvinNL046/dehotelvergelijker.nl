'use client'

import { useEffect } from 'react'

const AiraloWidget = () => {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://tpembd.com/content?trs=384595&shmarker=602467&locale=en&powered_by=true&color_button=%23f2685f&color_focused=%23f2685f&secondary=%23FFFFFF&dark=%2311100f&light=%23FFFFFF&special=%23C4C4C4&border_radius=5&plain=false&no_labels=true&promo_id=8588&campaign_id=541'
    script.charset = 'utf-8'
    script.async = true
    
    const container = document.getElementById('airalo-widget-container')
    if (container) {
      container.appendChild(script)
    }
    
    return () => {
      if (container && script.parentNode) {
        container.removeChild(script)
      }
    }
  }, [])
  
  return <div id="airalo-widget-container" className="min-h-[400px]" />
}

export default AiraloWidget