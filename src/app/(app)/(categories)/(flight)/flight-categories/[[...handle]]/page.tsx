import FlightCard from '@/components/FlightCard'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import { FlightSearchForm } from '@/components/HeroSearchForm/FlightSearchForm'
import ListingFilterTabs from '@/components/ListingFilterTabs'
import { getFlightCategoryByHandle } from '@/data/categories'
import { getFlightFilterOptions, getFlightListings } from '@/data/listings'
import { Divider } from '@/shared/divider'
import Pagination from '@/shared/Pagination'
import convertNumbThousand from '@/utils/convertNumbThousand'
import { AirplaneTakeOff01Icon, MapPinpoint02Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ handle?: string[] }> }): Promise<Metadata> {
  const { handle } = await params
  const category = await getFlightCategoryByHandle(handle?.[0])
  if (!category) {
    return {
      title: 'Collection not found',
      description: 'The collection you are looking for does not exist.',
    }
  }
  const { name, description } = category
  return { title: name, description }
}

const Page = async ({ 
  params,
  searchParams 
}: { 
  params: Promise<{ handle?: string[] }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) => {
  const { handle } = await params
  const search = await searchParams

  const category = await getFlightCategoryByHandle(handle?.[0])
  const listings = await getFlightListings()
  const filterOptions = await getFlightFilterOptions()

  if (!category?.id) {
    return redirect('/flight-categories/all')
  }

  // Get locations from search params
  const fromLocation = search.fromLocation as string | undefined
  const toLocation = search.toLocation as string | undefined

  // Create dynamic heading based on category and locations
  let dynamicHeading: React.ReactNode = category.name
  if (fromLocation && toLocation) {
    dynamicHeading = (
      <>
        Vluchten van <span className="text-primary-600">{fromLocation}</span> naar <span className="text-primary-600">{toLocation}</span>
      </>
    )
  } else if (fromLocation) {
    dynamicHeading = (
      <>
        Vluchten vanaf <span className="text-primary-600">{fromLocation}</span>
      </>
    )
  } else if (toLocation) {
    dynamicHeading = (
      <>
        Vluchten naar <span className="text-primary-600">{toLocation}</span>
      </>
    )
  }

  return (
    <div className="pb-28">
      {/* Hero section */}
      <div className="container">
        <HeroSectionWithSearchForm1
          heading={dynamicHeading}
          image={category.coverImage}
          imageAlt={category.name}
          searchForm={<FlightSearchForm formStyle="default" />}
          description={
            <div className="flex items-center sm:text-lg">
              <HugeiconsIcon icon={MapPinpoint02Icon} size={20} color="currentColor" strokeWidth={1.5} />
              <span className="ms-2.5">
                {fromLocation || toLocation ? (
                  <>
                    {fromLocation && <span className="text-primary-600 font-medium">{fromLocation}</span>}
                    {fromLocation && toLocation && ' → '}
                    {toLocation && <span className="text-primary-600 font-medium">{toLocation}</span>}
                  </>
                ) : category.region}
              </span>
              <span className="mx-5"></span>
              <HugeiconsIcon icon={AirplaneTakeOff01Icon} size={20} color="currentColor" strokeWidth={1.5} />
              <span className="ms-2.5">{convertNumbThousand(category.count)} vluchten</span>
            </div>
          }
        />
      </div>

      {/* Content */}
      <div className="relative container mt-14 lg:mt-24">
        {/* start heading */}
        <h2 id="heading" className="scroll-mt-20 text-lg font-semibold sm:text-xl">
          Meer dan {convertNumbThousand(category.count)} vluchten
          {fromLocation || toLocation ? (
            <>
              {' '}
              {fromLocation && toLocation ? (
                <>
                  van <span className="text-primary-600">{fromLocation}</span> naar <span className="text-primary-600">{toLocation}</span>
                </>
              ) : fromLocation ? (
                <>
                  vanaf <span className="text-primary-600">{fromLocation}</span>
                </>
              ) : (
                <>
                  naar <span className="text-primary-600">{toLocation}</span>
                </>
              )}
            </>
          ) : (category.handle !== 'all' ? ` in ${category.name}` : null)}
        </h2>

        <Divider className="my-8 md:mb-12" />
        {/* end heading */}

        <ListingFilterTabs filterOptions={filterOptions} />
        <div className="mt-8 grid grid-cols-1 gap-y-8">
          {listings.map((listing) => (
            <FlightCard key={listing.id} data={listing} />
          ))}
        </div>
        <div className="mt-16 flex items-center justify-center">
          <Pagination />
        </div>
      </div>
    </div>
  )
}

export default Page
