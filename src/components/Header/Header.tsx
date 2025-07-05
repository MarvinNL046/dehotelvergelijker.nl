import { getStayCategories } from '@/data/categories'
import { getCurrencies, getLanguages, getNavigation } from '@/data/navigation'
import { Button } from '@/shared/Button'
import Logo from '@/shared/Logo'
import clsx from 'clsx'
import { FC } from 'react'
import AvatarDropdown from './AvatarDropdown'
import CurrLangDropdown from './CurrLangDropdown'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import NotifyDropdown from './NotifyDropdown'
interface HeaderProps {
  hasBorderBottom?: boolean
  className?: string
}

const Header: FC<HeaderProps> = async ({ hasBorderBottom = true, className }) => {
  const navigationMenu = await getNavigation()
  const currencies = await getCurrencies()
  const languages = await getLanguages()
  const featuredCategory = (await getStayCategories())[7]

  return (
    <div className={clsx('relative', className)}>
      <div className="container">
        <div
          className={clsx(
            'flex h-20 justify-between gap-x-2.5 border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
          <div className="flex items-center justify-center gap-x-3 sm:gap-x-8">
            <Logo />
          </div>

          <div className="hidden lg:flex items-center justify-center">
            <Navigation menu={navigationMenu} featuredCategory={featuredCategory} />
          </div>

          <div className="flex flex-1 items-center justify-end gap-x-2.5 sm:gap-x-6">
            <div className="block lg:hidden">
              <HamburgerBtnMenu />
            </div>
            <CurrLangDropdown currencies={currencies} languages={languages} className="hidden md:block" />
            <Button className="-mx-1 py-1.75!" color="light" href={'/add-listing/1'}>
              Plaats je hotel
            </Button>
            <NotifyDropdown />
            <AvatarDropdown />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
