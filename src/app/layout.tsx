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
    default: 'DeHotelVergelijker.nl - Vergelijk Hotels Wereldwijd & Bespaar tot 80%',
  },
  description: 'Vergelijk hotelprijzen van meer dan 1000 boekingssites zoals Booking.com, Hotels.com en Expedia. Vind de beste hoteldeals wereldwijd en bespaar tot 80% op je hotelboeking.',
  keywords: ['hotel vergelijken', 'hotel prijsvergelijking', 'goedkope hotels', 'hotel deals', 'hotel boeken', 'hotels wereldwijd', 'beste hotelprijs', 'hotel kortingen'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" className={poppins.className}>
      <head>
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LR18BBPHTN" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-LR18BBPHTN');
            `,
          }}
        />
      </head>
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
