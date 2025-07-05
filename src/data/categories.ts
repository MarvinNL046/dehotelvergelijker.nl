import stayCategoryCoverImage from '@/images/hero-right-2.png'
import carCategoryCoverImage from '@/images/hero-right-car.png'
import experienceCategoryCoverImage from '@/images/hero-right-experience.png'
import filghtCategoryCoverImage from '@/images/hero-right-flight.png'
import realEstateCategoryCoverImage from '@/images/hero-right-real-estate.png'

// stay categories --------
export async function getStayCategories() {
  return [
    {
      id: 'stay-cat://1',
      name: 'Amsterdam',
      region: 'Nederland',
      handle: 'amsterdam',
      href: '/stay-categories/amsterdam',
      count: 5000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Vergelijk honderden hotels in Amsterdam en vind de beste deal',
    },
    {
      id: 'stay-cat://2',
      name: 'Parijs',
      region: 'Frankrijk',
      handle: 'parijs',
      href: '/stay-categories/parijs',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Romantische hotels in de lichtstad, van budget tot luxe',
    },
    {
      id: 'stay-cat://3',
      name: 'Barcelona',
      region: 'Spanje',
      handle: 'barcelona',
      href: '/stay-categories/barcelona',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Zonnige strandhotels en stadse boutique hotels',
    },
    {
      id: 'stay-cat://4',
      name: 'Rome',
      region: 'Italië',
      handle: 'rome',
      href: '/stay-categories/rome',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Historische hotels dichtbij het Colosseum en Vaticaan',
    },
    {
      id: 'stay-cat://5',
      name: 'Londen',
      region: 'Verenigd Koninkrijk',
      handle: 'londen',
      href: '/stay-categories/londen',
      count: 5000,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Van hippe hostels tot koninklijke luxe hotels',
    },
    {
      id: 'stay-cat://6',
      name: 'Dubai',
      region: 'Verenigde Arabische Emiraten',
      handle: 'dubai',
      href: '/stay-categories/dubai',
      count: 7500,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Ultraluxe hotels met spectaculaire skyline views',
    },
    {
      id: 'stay-cat://7',
      name: 'New York',
      region: 'Verenigde Staten',
      handle: 'new-york',
      href: '/stay-categories/new-york',
      count: 8100,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Hotels in Manhattan, Brooklyn en daarbuiten',
    },
    {
      id: 'stay-cat://8',
      name: 'Bangkok',
      region: 'Thailand',
      handle: 'bangkok',
      href: '/stay-categories/bangkok',
      count: 15600,
      thumbnail: 'https://images.pexels.com/photos/5764100/pexels-photo-5764100.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Exotische hotels in de bruisende hoofdstad van Thailand',
    },
    {
      id: 'stay-cat://9',
      name: 'Turkse Rivièra',
      region: 'Turkije',
      handle: 'turkse-riviera',
      href: '/stay-categories/turkse-riviera',
      count: 1000,
      thumbnail: 'https://images.pexels.com/photos/2869499/pexels-photo-2869499.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'All-inclusive resorts aan de azuurblauwe kust',
    },
    {
      id: 'stay-cat://10',
      name: 'Bali',
      region: 'Indonesië',
      handle: 'bali',
      href: '/stay-categories/bali',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/7031413/pexels-photo-7031413.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Tropische villa\'s en resorts op het eiland van de goden',
    },
    {
      id: 'stay-cat://11',
      name: 'Marokko',
      region: 'Noord-Afrika',
      handle: 'marokko',
      href: '/stay-categories/marokko',
      count: 6000,
      thumbnail: 'https://images.pexels.com/photos/247532/pexels-photo-247532.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Authentieke riads en luxe resorts in Marrakech en Agadir',
    },
    {
      id: 'stay-cat://12',
      name: 'Griekse Eilanden',
      region: 'Griekenland',
      handle: 'griekse-eilanden',
      href: '/stay-categories/griekse-eilanden',
      count: 1000,
      thumbnail:
        'https://images.pexels.com/photos/32223288/pexels-photo-32223288/free-photo-of-ngoi-nha-da-d-a-trung-h-i-quy-n-ru-v-i-di-m-nh-n-mau-vang.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
      description: 'Witte hotels met zeezicht op Santorini, Mykonos en Kreta',
    },
  ]
}
export async function getStayCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'stay://all',
      name: 'Alle hotels',
      handle: 'all',
      href: '/stay-categories/all',
      region: 'Wereldwijd',
      count: 144000,
      description: 'Vergelijk alle hotels wereldwijd en vind de beste prijzen',
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: stayCategoryCoverImage.src,
        width: stayCategoryCoverImage.width,
        height: stayCategoryCoverImage.height,
      },
    }
  }

  // get all categories
  const categories = await getStayCategories()
  return categories.find((category) => category.handle === handle)
}

// experience categories --------
export async function getExperienceCategories() {
  return [
    {
      id: 'experience://5',
      name: 'Tokyo, Japan',
      handle: 'tokyo',
      region: 'Japan',
      href: '/experience-categories/tokyo',
      description: 'lorem ipsum dolor sit amet',
      count: 500,
      thumbnail: 'https://images.pexels.com/photos/547116/pexels-photo-547116.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://6',
      name: 'Denmark',
      handle: 'denmark',
      region: 'Europe',
      href: '/experience-categories/denmark',
      description: 'lorem ipsum dolor sit amet',
      count: 750,
      thumbnail: 'https://images.pexels.com/photos/7243314/pexels-photo-7243314.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://8',
      name: 'Baceno, Italy',
      handle: 'baceno-italy',
      region: 'Italy',
      href: '/experience-categories/baceno-italy',
      description: 'Baceno, a small town in the Piedmont region of Italy.',
      count: 8100,
      thumbnail: 'https://images.pexels.com/photos/12256847/pexels-photo-12256847.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://1',
      name: 'New York, USA',
      region: 'United States',
      handle: 'new-york',
      href: '/experience-categories/new-york',
      description: 'lorem ipsum dolor sit amet',
      count: 1000,
      thumbnail: 'https://images.pexels.com/photos/4587344/pexels-photo-4587344.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://2',
      name: 'Singapore',
      region: 'South East Asia',
      handle: 'south-east-asia',
      href: '/experience-categories/south-east-asia',
      description: 'lorem ipsum dolor sit amet',
      count: 2500,
      thumbnail:
        'https://images.pexels.com/photos/24702952/pexels-photo-24702952/free-photo-of-nui-dan-ba-ng-i-du-l-ch.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://3',
      name: 'Paris, France',
      region: 'France',
      handle: 'paris',
      href: '/experience-categories/paris',
      description: 'lorem ipsum dolor sit amet',
      count: 2000,
      thumbnail: 'https://images.pexels.com/photos/12256878/pexels-photo-12256878.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://4',
      name: 'London, UK',
      handle: 'london',
      region: 'United Kingdom',
      href: '/experience-categories/london',
      description: 'lorem ipsum dolor sit amet',
      count: 1500,
      thumbnail: 'https://images.pexels.com/photos/5036873/pexels-photo-5036873.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
    {
      id: 'experience://7',
      name: 'Roma, Italy',
      handle: 'roma-italy',
      region: 'Italy',
      href: '/experience-categories/roma-italy',
      description: 'Italy, a European country with a long Mediterranean.',
      count: 8100,
      thumbnail: 'https://images.pexels.com/photos/12256858/pexels-photo-12256858.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    },
  ]
}
export async function getExperienceCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'experience://all',
      name: 'Explore experiences',
      handle: 'all',
      region: 'Worldwide',
      href: '/experience-categories/all',
      description: 'lorem ipsum dolor sit amet',
      count: 3000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: experienceCategoryCoverImage.src,
        width: experienceCategoryCoverImage.width,
        height: experienceCategoryCoverImage.height,
      },
    }
  }

  const categories = await getExperienceCategories()
  return categories.find((category) => category.handle === handle)
}

// Real-Estate categories --------
export async function getRealEstateCategories() {
  return [
    {
      id: 'real-estate://1',
      name: 'New York, USA',
      handle: 'new-york',
      href: '/real-estate-categories/new-york',
      count: 144000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'real-estate://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/real-estate-categories/singapore',
      count: 188288,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
    {
      id: 'real-estate://3',
      name: 'Paris, France',
      handle: 'paris',
      href: '/real-estate-categories/paris',
      count: 218288,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'France',
    },
    {
      id: 'real-estate://4',
      name: 'London, UK',
      handle: 'london',
      href: '/real-estate-categories/london',
      count: 116288,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United Kingdom',
    },
    {
      id: 'real-estate://5',
      name: 'Tokyo, Japan',
      handle: 'tokyo',
      href: '/real-estate-categories/tokyo',
      count: 232288,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Japan',
    },
    {
      id: 'real-estate://6',
      name: 'Maldives',
      handle: 'maldives',
      href: '/real-estate-categories/maldives',
      count: 77566,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Indian Ocean',
    },
  ]
}
export async function getRealEstateCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'real-estate://all',
      name: 'Real-estates',
      handle: 'all',
      href: '/real-estate-categories/all',
      count: 20000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: realEstateCategoryCoverImage.src,
        width: realEstateCategoryCoverImage.width,
        height: realEstateCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all real estates around the world',
    }
  }
  const categories = await getRealEstateCategories()
  return categories.find((category) => category.handle === handle)
}

// car categories --------
export async function getCarCategories() {
  return [
    {
      id: 'car://4',
      name: 'London, UK',
      handle: 'london',
      href: '/car-categories/london',
      count: 1000,
      thumbnail: 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United Kingdom',
    },
    {
      id: 'car://5',
      name: 'Tokyo, Japan',
      handle: 'tokyo',
      href: '/car-categories/tokyo',
      count: 5000,
      thumbnail: 'https://images.pexels.com/photos/4151484/pexels-photo-4151484.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'Lorem ipsum dolor sit amet, ',
      region: 'Japan',
    },
    {
      id: 'car://6',
      name: 'Maldives',
      handle: 'maldives',
      href: '/car-categories/maldives',
      count: 750,
      thumbnail: 'https://images.pexels.com/photos/3250613/pexels-photo-3250613.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'The Maldives, officially the Republic of Maldives',
      region: 'Indian Ocean',
    },
    {
      id: 'car://1',
      name: 'New York, USA',
      handle: 'new-york',
      href: '/car-categories/new-york',
      count: 1500,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'car://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/car-categories/singapore',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
    {
      id: 'car://3',
      name: 'Paris, France',
      handle: 'paris',
      href: '/car-categories/paris',
      count: 3000,
      thumbnail: 'https://images.pexels.com/photos/739407/pexels-photo-739407.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'France',
    },
  ]
}
export async function getCarCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'car://all',
      name: 'Car rentals',
      handle: 'all',
      href: '/car-categories/all',
      count: 3000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: carCategoryCoverImage.src,
        width: carCategoryCoverImage.width,
        height: carCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all cars around the world',
    }
  }

  const categories = await getCarCategories()
  return categories.find((category) => category.handle === handle)
}

// Flight categories --------
export async function getFlightCategories() {
  return [
    {
      id: 'flight://1',
      name: 'New York',
      handle: 'new-york',
      href: '/flight-categories/new-york',
      count: 1500,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'United States',
    },
    {
      id: 'flight://2',
      name: 'Singapore',
      handle: 'singapore',
      href: '/flight-categories/singapore',
      count: 2500,
      thumbnail: 'https://images.pexels.com/photos/7740160/pexels-photo-7740160.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      description: 'lorem ipsum dolor sit amet',
      region: 'Singapore',
    },
  ]
}
export async function getFlightCategoryByHandle(handle?: string) {
  // lower case handle
  handle = handle?.toLowerCase()

  if (!handle || handle === 'all') {
    return {
      id: 'flight://all',
      name: 'Book Flights',
      handle: 'all',
      href: '/flight-categories/all',
      count: 3000,
      thumbnail:
        'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg',
      coverImage: {
        src: filghtCategoryCoverImage.src,
        width: filghtCategoryCoverImage.width,
        height: filghtCategoryCoverImage.height,
      },
      region: 'Worldwide',
      description: 'Explore all flights around the world',
    }
  }

  const categories = await getFlightCategories()
  return categories.find((category) => category.handle === handle)
}

// types
export type TStayCategory = Awaited<ReturnType<typeof getStayCategories>>[number]
export type TExperienceCategory = Awaited<ReturnType<typeof getExperienceCategories>>[number]
export type TCarCategory = Awaited<ReturnType<typeof getCarCategories>>[number]
export type TRealEstateCategory = Awaited<ReturnType<typeof getRealEstateCategories>>[number]
export type TFlightCategory = Awaited<ReturnType<typeof getFlightCategories>>[number]
export type TCategory = TStayCategory | TExperienceCategory | TCarCategory | TRealEstateCategory | TFlightCategory
