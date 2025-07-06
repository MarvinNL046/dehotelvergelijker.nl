import BackgroundSection from '@/components/BackgroundSection'
import BgGlassmorphism from '@/components/BgGlassmorphism'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import HeroSearchForm from '@/components/HeroSearchForm/HeroSearchForm'
import SectionBecomeAnAuthor from '@/components/SectionBecomeAnAuthor'
import SectionClientSay from '@/components/SectionClientSay'
import SectionGridAuthorBox from '@/components/SectionGridAuthorBox'
import SectionGridCategoryBox from '@/components/SectionGridCategoryBox'
import SectionGridFeaturePlaces from '@/components/SectionGridFeaturePlaces'
import SectionHowItWork from '@/components/SectionHowItWork'
import SectionOurFeatures from '@/components/SectionOurFeatures'
import SectionSliderNewCategories from '@/components/SectionSliderNewCategories'
import SectionSubscribe2 from '@/components/SectionSubscribe2'
import SectionVideos from '@/components/SectionVideos'
import { getAuthors } from '@/data/authors'
import { getStayCategories } from '@/data/categories'
import { getStayListings } from '@/data/listings'
import heroImage from '@/images/hero-right.png'
import ButtonPrimary from '@/shared/ButtonPrimary'
import { Divider } from '@/shared/divider'
import HeadingWithSub from '@/shared/Heading'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'DeHotelVergelijker.nl - Vergelijk Hotels Wereldwijd & Bespaar tot 80%',
  description: 'Vergelijk hotelprijzen van meer dan 1000 boekingssites waaronder Booking.com, Hotels.com, Expedia en meer. Vind de beste hoteldeals voor jouw reis en bespaar tot 80% op je hotelboeking.',
}

async function Page() {
  const categories = await getStayCategories()
  const stayListings = await getStayListings()
  const authors = await getAuthors()

  return (
    <main className="relative overflow-hidden">
      <BgGlassmorphism />
      <div className="relative container mb-24 flex flex-col gap-y-24 lg:mb-28 lg:gap-y-32">
        <HeroSectionWithSearchForm1
          heading={
            <>
              Vergelijk hotels wereldwijd, bespaar tot <span className="text-primary-600">80%</span>
            </>
          }
          image={heroImage}
          imageAlt="hero"
          searchForm={<HeroSearchForm initTab="Stays" />}
          description={
            <>
              <p className="max-w-xl text-base text-neutral-500 sm:text-xl dark:text-neutral-400">
                DeHotelVergelijker.nl doorzoekt meer dan <span className="text-primary-600 font-medium">1000 boekingssites</span> om de beste hotelprijzen voor jou te vinden. Van luxe resorts tot budgethotels.
              </p>
              <ButtonPrimary href={'/stay-categories/all'} className="sm:text-base/normal">
                Vergelijk hotelprijzen
              </ButtonPrimary>
            </>
          }
        />

        <div>
          <HeadingWithSub subheading="Vergelijk hotelprijzen in populaire bestemmingen wereldwijd">
            <span className="text-primary-600">Trending bestemmingen</span> 2025
          </HeadingWithSub>
          <SectionSliderNewCategories categoryCardType="card3" categories={categories.slice(0, 7)} />
        </div>

        <SectionOurFeatures className="py-14" />
        <SectionGridFeaturePlaces 
          stayListings={stayListings} 
          cardType="card2" 
          heading="Uitgelichte accommodaties"
          subHeading="Ontdek je perfecte verblijf"
        />
        <Divider />
        <SectionHowItWork />
        <div className="relative py-20">
          <BackgroundSection />
          <HeadingWithSub isCenter subheading="Waarom kiezen voor DeHotelVergelijker.nl?">
            Jouw voordelen
          </HeadingWithSub>
          <SectionGridAuthorBox authors={authors} />
        </div>
        <SectionSubscribe2 />
        <Divider />

        <div>
          <HeadingWithSub isCenter subheading={'Populaire hotelbestemmingen voor Nederlanders'}>
            Favoriete vakantielanden
          </HeadingWithSub>
          <SectionGridCategoryBox categories={categories.slice(0, 8)} />
        </div>

        <div className="relative py-16">
          <BackgroundSection />
          <SectionBecomeAnAuthor />
        </div>

        <div>
          <HeadingWithSub subheading="Ontdek onze handgepickte hoteldeals">
            <span className="text-primary-600">Exclusieve aanbiedingen</span>
          </HeadingWithSub>
          <SectionSliderNewCategories
            itemClassName="w-[17rem] lg:w-1/3 xl:w-1/4"
            categories={categories.slice(7, 16)}
            categoryCardType="card5"
          />
        </div>
        <SectionVideos />
        <div className="relative py-16">
          <SectionClientSay />
        </div>
      </div>
    </main>
  )
}

export default Page
