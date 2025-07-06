import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import CarCardH from '@/components/CarCardH'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionClientSay from '@/components/SectionClientSay'
import SectionDowloadApp from '@/components/SectionDowloadApp'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionVideos from '@/components/SectionVideos'
import { getCarCategories } from '@/data/categories'
import { getCarListings } from '@/data/listings'
import heroImage from '@/images/hero-right-car.png'
import ourFeatureImage from '@/images/our-features-2.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Autoverhuur - DeHotelVergelijker.nl',
  description: 'Vind de beste autoverhuur deals wereldwijd. Vergelijk prijzen van alle grote autoverhuurbedrijven.',
}

async function PageHome() {
  const categories = await getCarCategories()
  const carListings = await getCarListings()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
          heading={
            <>
              Vind jouw perfecte <span className="text-primary-600">huurauto</span>
            </>
          }
          image={heroImage}
          imageAlt="hero"
          searchForm={<HeroSearchForm initTab="Cars" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">
                Vergelijk autoverhuur van alle grote aanbieders en vind de <span className="text-primary-600 font-medium">beste deal</span> voor jouw reis.
              </p>
              <ButtonPrimary href={'/car-categories/all'} className="sm:text-base/normal">
                Start je zoekopdracht
              </ButtonPrimary>
            </>
          }
        />

        <div>
          <HeadingWithSub subheading="Ontdek de beste huurauto's voor elke reis">
            Populaire autotypes
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categoryCardType="card4"
            categories={categories}
          />
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading={'Vind fantastische auto deals op populaire bestemmingen'}>
            De beste <span className="text-primary-600">autoverhuur aanbiedingen</span>
          </HeadingWithSub>
          <div className="grid grid-cols-1 gap-x-6 gap-y-7 xl:grid-cols-2">
            {carListings.map((listing) => (
              <CarCardH key={listing.id} data={listing} />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <ButtonPrimary href={'/car-categories/all'} className="sm:text-base/normal">
              Bekijk alle huurauto's
            </ButtonPrimary>
          </div>
        </div>

        <SectionOurFeatures type="type2" rightImg={ourFeatureImage} />

        <div>
          <HeadingWithSub subheading="Van compact tot luxe, vind de auto die bij je past">
            Ontdek verschillende auto categorieën
          </HeadingWithSub>
          <SectionSliderNewCategories categories={categories} categoryCardType="card5" />
        </div>

        <SectionDowloadApp />

        <SectionVideos />
        <div className="relative py-16">
          <SectionClientSay />
        </div>
      </div>
    </main>
  )
}

export default PageHome
