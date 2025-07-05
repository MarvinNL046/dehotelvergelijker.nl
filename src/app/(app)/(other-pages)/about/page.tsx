import type { Metadata } from 'next'
import HeadingWithSub from '@/shared/Heading'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import { DocumentTextIcon, ShieldCheckIcon, CurrencyEuroIcon, UsersIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Over Ons - DeHotelVergelijker.nl',
  description: 'Leer meer over DeHotelVergelijker.nl - jouw betrouwbare partner voor het vinden van de beste hoteldeals in Nederland.',
}

export default function PageAbout() {
  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      
      <div className="container relative mb-24 lg:mb-28">
        {/* Hero Section */}
        <div className="mx-auto max-w-4xl py-16 sm:py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-neutral-900 sm:text-5xl dark:text-neutral-100">
              Over DeHotelVergelijker.nl
            </h1>
            <p className="mt-6 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
              Jouw betrouwbare partner voor het vinden van de beste hoteldeals in Nederland en daarbuiten.
            </p>
          </div>
        </div>

        {/* Founder Section */}
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Marvin - Founder"
                className="rounded-2xl shadow-xl"
              />
            </div>
            
            <div>
              <HeadingWithSub subheading="De persoon achter het platform">
                Hallo, ik ben Marvin
              </HeadingWithSub>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Als 36-jarige vader uit Limburg en passionate web developer, begrijp ik hoe belangrijk het is 
                om snel de juiste informatie te vinden - of het nu gaat om kinderopvang of de perfecte hoteldeal 
                voor je gezinsvakantie.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Met DeHotelVergelijker.nl combineer ik mijn technische expertise met mijn passie voor het 
                bouwen van websites die écht waarde toevoegen. Als reizende vader weet ik hoe overweldigend 
                het kan zijn om door eindeloze hotelprijzen te scrollen. Daarom heb ik dit platform gecreëerd: 
                om jou tijd en geld te besparen.
              </p>
              <p className="mt-4 text-neutral-600 dark:text-neutral-400">
                Net als mijn andere online directories, draait DeHotelVergelijker.nl om één ding: mensen 
                helpen belangrijke diensten in hun omgeving te vinden, tegen de beste prijs.
              </p>
            </div>
          </div>
        </div>

        {/* Mission Section */}
        <div className="mx-auto mt-24 max-w-4xl text-center">
          <HeadingWithSub isCenter subheading="Onze Missie">
            Transparantie in hotelprijzen
          </HeadingWithSub>
          <p className="mt-4 text-neutral-600 dark:text-neutral-400">
            Bij DeHotelVergelijker.nl geloven we dat iedereen recht heeft op een geweldige hotelervaring 
            zonder te veel te betalen. Door real-time prijzen van tientallen boekingssites te vergelijken, 
            maken we het hotelzoekproces transparanter, eenvoudiger en voordeliger voor Nederlandse reizigers.
          </p>
        </div>

        {/* Values Section */}
        <div className="mx-auto mt-24 max-w-6xl">
          <HeadingWithSub isCenter subheading="Waarom kiezen voor ons?">
            Onze voordelen
          </HeadingWithSub>
          
          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                <CurrencyEuroIcon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Beste Prijsgarantie</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                We vergelijken prijzen van alle grote boekingssites
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                <ShieldCheckIcon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">100% Betrouwbaar</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Veilig boeken bij gerenommeerde partners
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                <UsersIcon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Persoonlijke Touch</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Gebouwd door een Nederlander, voor Nederlanders
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-primary-500/10">
                <DocumentTextIcon className="h-6 w-6 text-primary-500" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Geen Verborgen Kosten</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                Transparante prijzen, altijd inclusief belastingen
              </p>
            </div>
          </div>
        </div>

        {/* How it Works */}
        <div className="mx-auto mt-24 max-w-4xl">
          <HeadingWithSub isCenter subheading="Simpel proces">
            Hoe werkt het?
          </HeadingWithSub>
          
          <div className="mt-12 space-y-8">
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                1
              </div>
              <div>
                <h3 className="font-semibold">Zoek je ideale hotel</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  Voer je bestemming, data en aantal gasten in
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                2
              </div>
              <div>
                <h3 className="font-semibold">Vergelijk prijzen</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  Wij tonen real-time prijzen van alle grote boekingssites
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-500 text-white">
                3
              </div>
              <div>
                <h3 className="font-semibold">Boek bij de goedkoopste</h3>
                <p className="mt-1 text-neutral-600 dark:text-neutral-400">
                  Klik door naar de aanbieder en boek direct tegen de beste prijs
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="mx-auto mt-24 max-w-2xl text-center">
          <div className="rounded-2xl bg-neutral-100 px-8 py-10 dark:bg-neutral-800">
            <h3 className="text-2xl font-bold">Vragen of suggesties?</h3>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400">
              Als kleine ondernemer sta ik altijd open voor feedback om het platform te verbeteren.
            </p>
            <a 
              href="/contact" 
              className="mt-6 inline-flex items-center justify-center rounded-full bg-primary-500 px-6 py-3 text-white hover:bg-primary-600"
            >
              Neem contact op
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}