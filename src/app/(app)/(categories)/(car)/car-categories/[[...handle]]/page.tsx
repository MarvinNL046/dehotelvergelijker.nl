import CarCardH from '@/components/CarCardH'
import HeroSectionWithSearchForm1 from '@/components/hero-sections/HeroSectionWithSearchForm1'
import { RentalCarSearchForm } from '@/components/HeroSearchForm/RentalCarSearchForm'
import ListingFilterTabs from '@/components/ListingFilterTabs'
import { getCarCategoryByHandle } from '@/data/categories'
import { getCarListingFilterOptions, getCarListings } from '@/data/listings'
import { Button } from '@/shared/Button'
import { Divider } from '@/shared/divider'
import Pagination from '@/shared/Pagination'
import convertNumbThousand from '@/utils/convertNumbThousand'
import { Car03Icon, MapPinpoint02Icon, MapsLocation01Icon } from '@hugeicons/core-free-icons'
import { HugeiconsIcon } from '@hugeicons/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata({ params }: { params: Promise<{ handle?: string[] }> }): Promise<Metadata> {
  const { handle } = await params
  const category = await getCarCategoryByHandle(handle?.[0])
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

  const category = await getCarCategoryByHandle(handle?.[0])
  const listings = await getCarListings()
  const filterOptions = await getCarListingFilterOptions()

  if (!category?.id) {
    return redirect('/car-categories/all')
  }

  // Get location from search params
  const location = search.location as string | undefined

  // Create dynamic heading based on category and location
  let dynamicHeading: React.ReactNode = category.name
  if (location) {
    if (category.handle === 'all') {
      dynamicHeading = (
        <>
          Alle auto&apos;s in <span className="text-primary-600">{location}</span>
        </>
      )
    } else {
      dynamicHeading = (
        <>
          {category.name} in <span className="text-primary-600">{location}</span>
        </>
      )
    }
  }

  return (
    <div className="pb-28">
      {/* Hero section */}
      <div className="container">
        <HeroSectionWithSearchForm1
          heading={dynamicHeading}
          image={category.coverImage}
          imageAlt={category.name}
          searchForm={<RentalCarSearchForm formStyle="default" />}
          description={
            <div className="flex items-center sm:text-lg">
              <HugeiconsIcon icon={MapPinpoint02Icon} size={20} color="currentColor" strokeWidth={1.5} />
              <span className="ms-2.5">
                {location ? <span className="text-primary-600 font-medium">{location}</span> : category.region}
              </span>
              <span className="mx-5"></span>
              <HugeiconsIcon icon={Car03Icon} size={20} color="currentColor" strokeWidth={1.5} />
              <span className="ms-2.5">{convertNumbThousand(category.count)} auto&apos;s</span>
            </div>
          }
        />
      </div>

      {/* Content */}
      <div className="relative container mt-14 lg:mt-24">
        {/* start heading */}
        <div className="flex flex-wrap items-end justify-between gap-x-2.5 gap-y-5">
          <h2 id="heading" className="scroll-mt-20 text-lg font-semibold sm:text-xl">
            Over {convertNumbThousand(category.count)} cars
            {category.handle !== 'all' ? ` in ${category.name}` : null}
          </h2>
          <Button color="white" className="ms-auto" href={'/car-categories-map/' + category.handle}>
            <span className="me-1">Show map</span>
            <HugeiconsIcon icon={MapsLocation01Icon} size={20} color="currentColor" strokeWidth={1.5} />
          </Button>
        </div>
        <Divider className="my-8 md:mb-12" />
        {/* end heading */}

        <ListingFilterTabs filterOptions={filterOptions} />
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-7 xl:grid-cols-2">
          {listings.map((listing) => (
            <CarCardH key={listing.id} data={listing} />
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
