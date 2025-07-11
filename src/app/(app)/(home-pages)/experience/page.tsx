import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import ExperiencesCard from '@/components/ExperiencesCard'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionClientSay from '@/components/SectionClientSay'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import { getAuthors } from '@/data/authors'
import { getExperienceCategories } from '@/data/categories'
import { getExperienceListings } from '@/data/listings'
import heroImage from '@/images/hero-right-experience.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { ArrowRight02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Activiteiten - DeHotelVergelijker.nl',
  description: 'Ontdek de beste activiteiten, tours en ervaringen wereldwijd. Boek unieke belevingen tegen de beste prijzen.',
}

async function Home() {
  const categories = await getExperienceCategories()
  const experienceListings = await getExperienceListings()
  const authors = await getAuthors()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
          heading={
            <>
              Ontdek <span className="text-primary-600">onvergetelijke avonturen</span>
            </>
          }
          image={heroImage}
          imageAlt="hero"
          searchForm={<HeroSearchForm initTab="Experiences" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">
                Boek <span className="text-primary-600 font-medium">unieke activiteiten</span> en tours voor een onvergetelijke reis vol bijzondere ervaringen.
              </p>
              <ButtonPrimary href={'/experience-categories/all'} className="sm:text-base/normal">
                Start je zoekopdracht
              </ButtonPrimary>
            </>
          }
        />

        <div>
          <HeadingWithSub subheading="Van stadstours tot natuuravonturen">
            Ga op avontuur met onze activiteiten
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={categories}
            categoryCardType="card5"
          />
        </div>

        <div className="relative py-20">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Vind de perfecte ervaring voor jouw reis">
            <span className="text-primary-600">Populaire activiteiten</span>
          </HeadingWithSub>
          <div className="mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 md:gap-x-8 md:gap-y-12 lg:mt-10 lg:grid-cols-3 xl:grid-cols-4">
            {experienceListings.map((listing) => (
              <ExperiencesCard key={listing.id} data={listing} />
            ))}
          </div>
          <div className="mt-16 flex justify-center">
            <ButtonPrimary href="/experience-categories/all">
              <span>Bekijk alle activiteiten</span>
              <HugeiconsIcon
                icon={ArrowRight02Icon}
                size={20}
                color="currentColor"
                strokeWidth={1.5}
                className="rtl:rotate-180"
              />
            </ButtonPrimary>
          </div>
        </div>

        <SectionHowItWork />

        <div className="relative py-20">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Ontmoet onze beste gidsen en hosts">
            Word een gids
          </HeadingWithSub>
          <SectionGridAuthorBox authors={authors} />
        </div>

        <div>
          <HeadingWithSub isCenter subheading={'Ontdek activiteiten dicht bij huis'}>
            Verken de omgeving
          </HeadingWithSub>
          <SectionGridCategoryBox categories={categories} />
        </div>

        <SectionSubscribe2 />
        <Divider />

        <div className="relative py-10">
          <SectionClientSay />
        </div>
      </div>
    </main>
  )
}

export default Home
