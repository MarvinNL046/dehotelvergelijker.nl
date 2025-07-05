import '@/styles/tailwind.css'
import { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import 'rc-slider/assets/index.css'
import ThemeProvider from './theme-provider'

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: {
    template: '%s - DeHotelVergelijker.nl',
    default: 'DeHotelVergelijker.nl - Vergelijk hotels in Nederland en vind de beste deals',
  },
  description: 'Vergelijk hotelprijzen van honderden websites tegelijk. Vind de beste hoteldeals in Nederland met DeHotelVergelijker.nl',
  keywords: ['hotel vergelijken', 'hotels Nederland', 'goedkope hotels', 'hotel deals', 'hotel boeken', 'hotel prijsvergelijking'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.className}>
      <body className="bg-white text-neutral-900 dark:bg-neutral-900 dark:text-neutral-100">
        <ThemeProvider>
          <div>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
