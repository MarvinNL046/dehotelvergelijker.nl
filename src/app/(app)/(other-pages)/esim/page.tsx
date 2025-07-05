import { Badge } from '@/shared/Badge'
import ButtonPrimary from '@/shared/ButtonPrimary'
import ButtonSecondary from '@/shared/ButtonSecondary'
import { Divider } from '@/shared/divider'
import { Heading } from '@/shared/Heading'
import { WifiFullIcon, Globe02Icon, CheckIcon, XIcon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import Image from 'next/image'

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
    icon: WifiFullIcon,
    title: 'Direct verbonden',
    description: 'Activeer je eSIM voor vertrek en land met werkend internet',
  },
  {
    icon: Globe02Icon,
    title: '150+ landen',
    description: 'Één eSIM voor meerdere landen, ideaal voor rondreis',
  },
  {
    icon: CheckIcon,
    title: 'Geen verborgen kosten',
    description: 'Transparante prijzen, geen roaming kosten achteraf',
  },
]

const PageEsim = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-800">
        <div className="container py-16 sm:py-20 lg:py-28">
          <div className="mx-auto max-w-2xl text-center">
            <Badge color="blue" className="mb-5">Nieuw</Badge>
            <h1 className="text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Blijf verbonden met <span className="text-primary-600">eSIM</span>
            </h1>
            <p className="mt-6 text-lg text-neutral-600 dark:text-neutral-400">
              Geen gedoe meer met lokale simkaarten. Activeer je eSIM voor vertrek en land met werkend internet in 150+ landen wereldwijd.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <ButtonPrimary size="large" href="#destinations">
                Bekijk bestemmingen
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
                <HugeiconsIcon icon={feature.icon} size={32} className="text-primary-600 dark:text-primary-400" />
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
              <ButtonPrimary className="w-full" size="small">
                Selecteer
              </ButtonPrimary>
            </div>
          ))}
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
                Selecteer een eSIM pakket voor je bestemming
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
            <ButtonPrimary className="mt-8" href="#">
              Check compatibiliteit
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
          <ButtonPrimary size="large" className="mt-8">
            Start nu
          </ButtonPrimary>
        </div>
      </div>
    </div>
  )
}

export default PageEsim