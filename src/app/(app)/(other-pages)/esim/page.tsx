import { Badge } from '@/shared/Badge'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import { Divider } from '@/shared/divider'
import { Heading } from '@/shared/Heading'
import { WifiIcon, GlobeIcon, CheckCircleIcon, QrCodeIcon } from '@heroicons/react/24/outline'
import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import AiraloWidget from '@/components/AiraloWidget'

export const metadata: Metadata = {
  title: 'eSIM voor Reizigers - DeHotelVergelijker.nl',
  description: 'Blijf verbonden tijdens je reis met onze internationale eSIM pakketten. Geen gedoe met lokale simkaarten, direct internet in 150+ landen.',
}

const popularDestinations = [
  { name: 'Europa', countries: '39 landen', price: '€19', data: '10GB', days: '30 dagen' },
  { name: 'Verenigde Staten', countries: 'VS + Canada', price: '€29', data: '15GB', days: '30 dagen' },
  { name: 'Azië', countries: '18 landen', price: '€25', data: '8GB', days: '30 dagen' },
  { name: 'Wereldwijd', countries: '150+ landen', price: '€49', data: '5GB', days: '30 dagen' },
]

const features = [
  {
    icon: WifiIcon,
    title: 'Direct verbonden',
    description: 'Activeer je eSIM voor vertrek en land met werkend internet',
  },
  {
    icon: GlobeIcon,
    title: '200+ landen',
    description: 'Één eSIM voor meerdere landen, ideaal voor rondreis',
  },
  {
    icon: CheckCircleIcon,
    title: 'Geen verborgen kosten',
    description: 'Transparante prijzen, geen roaming kosten achteraf',
  },
]

const AIRALO_LINK = 'https://airalo.tpo.lv/Eonf0kHG'
const AIRALO_APP_LINK = 'https://airalo.tpo.lv/SmkV9cGd'

const PageEsim = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Badge color="blue" className="mb-5">Powered by Airalo</Badge>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Blijf verbonden met <span className="text-primary-600">eSIM</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Geen gedoe meer met lokale simkaarten. Activeer je eSIM voor vertrek en land met werkend internet in 200+ landen wereldwijd via Airalo.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonPrimary size="large" href={AIRALO_LINK} target="_blank" rel="noopener noreferrer">
                Bestel nu je eSIM
              </ButtonPrimary>
              <ButtonSecondary size="large" href="#how-it-works">
                Hoe werkt het?
              </ButtonSecondary>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="container py-16 lg:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 dark:bg-primary-900/20">
                <feature.icon className="h-8 w-8 text-primary-600 dark:text-primary-400" />
              </div>
              <h3 className="mb-3 text-xl font-semibold">{feature.title}</h3>
              <p className="text-neutral-600 dark:text-neutral-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* Popular Destinations */}
      <div id="destinations" className="container py-16 lg:py-24">
        <Heading isCenter subheading="Kies je bestemming">
          Populaire eSIM pakketten
        </Heading>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {popularDestinations.map((destination, index) => (
            <div key={index} className="rounded-3xl border border-neutral-200 p-6 hover:shadow-lg transition-shadow dark:border-neutral-700">
              <h3 className="text-xl font-semibold">{destination.name}</h3>
              <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{destination.countries}</p>
              <div className="mt-6 mb-6">
                <p className="text-3xl font-bold text-primary-600">{destination.price}</p>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {destination.data} • {destination.days}
                </p>
              </div>
              <ButtonPrimary className="w-full" size="small" href={AIRALO_LINK} target="_blank" rel="noopener noreferrer">
                Selecteer
              </ButtonPrimary>
            </div>
          ))}
        </div>
      </div>

      <Divider />

      {/* QR Code Section */}
      <div className="container py-16 lg:py-24">
        <div className="rounded-3xl bg-gradient-to-br from-primary-50 to-primary-100 p-8 lg:p-12 dark:from-primary-900/20 dark:to-primary-800/20">
          <div className="grid gap-8 lg:grid-cols-2 items-center">
            <div>
              <h2 className="text-3xl font-semibold mb-4">Download de Airalo App</h2>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-6">
                Scan de QR code met je telefoon om de Airalo app te downloaden en direct toegang te krijgen tot 200+ eSIM pakketten wereldwijd.
              </p>
              <div className="flex flex-wrap gap-4">
                <ButtonPrimary href={AIRALO_APP_LINK} target="_blank" rel="noopener noreferrer">
                  <QrCodeIcon className="h-5 w-5 mr-2" />
                  Download App
                </ButtonPrimary>
                <ButtonSecondary href={AIRALO_LINK} target="_blank" rel="noopener noreferrer">
                  Of bestel online
                </ButtonSecondary>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative bg-white p-6 rounded-2xl shadow-xl max-w-[300px]">
                <Image
                  src="/images/esim/airalo-qr-code.png"
                  alt="Airalo QR Code"
                  width={250}
                  height={250}
                  className="w-full h-auto"
                />
                <p className="text-center mt-4 text-sm text-neutral-600">Scan voor de Airalo app</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Airalo Widget Section */}
      <div className="container py-16 lg:py-24">
        <Heading isCenter subheading="Zoek direct je bestemming">
          Vind de perfecte eSIM voor jouw reis
        </Heading>
        <div className="mt-12 mx-auto max-w-5xl">
          <div className="bg-white rounded-3xl p-6 shadow-lg dark:bg-neutral-800">
            <AiraloWidget />
          </div>
        </div>
      </div>

      <Divider />

      {/* How it Works */}
      <div id="how-it-works" className="container py-16 lg:py-24">
        <Heading isCenter subheading="Simpel en snel">
          Hoe werkt het?
        </Heading>
        <div className="mt-12 mx-auto max-w-3xl">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                1
              </div>
              <h3 className="mb-2 text-lg font-semibold">Kies je pakket</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Selecteer een eSIM pakket voor je bestemming via Airalo
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                2
              </div>
              <h3 className="mb-2 text-lg font-semibold">Ontvang QR code</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Direct per email, scan met je telefoon
              </p>
            </div>
            <div className="text-center">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary-600 text-white">
                3
              </div>
              <h3 className="mb-2 text-lg font-semibold">Activeer & reis</h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Land met werkend internet, geen gedoe
              </p>
            </div>
          </div>
        </div>
      </div>

      <Divider />

      {/* Compatibility Section */}
      <div className="container py-16 lg:py-24">
        <div className="rounded-3xl bg-neutral-50 p-8 lg:p-12 dark:bg-neutral-800">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-semibold">Is je telefoon geschikt?</h2>
            <p className="mt-4 text-neutral-600 dark:text-neutral-400">
              eSIM werkt op de meeste moderne smartphones. Check of jouw toestel eSIM ondersteunt:
            </p>
            <div className="mt-8 grid gap-4 text-left sm:grid-cols-2">
              <div>
                <h4 className="mb-3 font-semibold text-green-600 dark:text-green-400">✓ Ondersteund</h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• iPhone XS, XR en nieuwer</li>
                  <li>• Samsung Galaxy S20 en nieuwer</li>
                  <li>• Google Pixel 3 en nieuwer</li>
                  <li>• iPad Pro (2018) en nieuwer</li>
                </ul>
              </div>
              <div>
                <h4 className="mb-3 font-semibold text-red-600 dark:text-red-400">✗ Niet ondersteund</h4>
                <ul className="space-y-2 text-sm text-neutral-600 dark:text-neutral-400">
                  <li>• Toestellen gekocht in China</li>
                  <li>• Oudere modellen (voor 2018)</li>
                  <li>• Sommige provider-locked toestellen</li>
                  <li>• Prepaid toestellen (VS)</li>
                </ul>
              </div>
            </div>
            <ButtonPrimary className="mt-8" href={AIRALO_LINK} target="_blank" rel="noopener noreferrer">
              Bestel nu je eSIM
            </ButtonPrimary>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="container pb-24">
        <div className="rounded-3xl bg-primary-50 p-8 text-center lg:p-16 dark:bg-primary-900/10">
          <h2 className="text-3xl font-semibold lg:text-4xl">
            Klaar voor je volgende reis?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-neutral-600 dark:text-neutral-400">
            Bestel nu je eSIM en reis zonder zorgen. Direct geleverd, wereldwijde dekking, en geen verborgen kosten.
          </p>
          <ButtonPrimary size="large" className="mt-8" href={AIRALO_LINK} target="_blank" rel="noopener noreferrer">
            Start nu met Airalo
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default PageEsim