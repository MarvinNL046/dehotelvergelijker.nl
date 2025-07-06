import { getStayCategories } from '@/data/categories'
import { getNavigation } from '@/data/navigation'
import { Button } from '@/shared/Button'
import Logo from '@/shared/Logo'
import clsx from 'clsx'
import { FC } from 'react'
import AvatarDropdown from './AvatarDropdown'
import HamburgerBtnMenu from './HamburgerBtnMenu'
import Navigation from './Navigation/Navigation'
import NotifyDropdown from './NotifyDropdown'
interface HeaderProps {
  hasBorderBottom?: boolean
  className?: string
}

const Header: FC<HeaderProps> = async ({ hasBorderBottom = true, className }) => {
  const navigationMenu = await getNavigation()
  const featuredCategory = (await getStayCategories())[7]

  return (
    <div className={clsx('relative', className)}>
      <div className="container">
        <div
          className={clsx(
            'flex h-20 items-center justify-between gap-x-2.5 border-neutral-200 dark:border-neutral-700',
            hasBorderBottom && 'border-b',
            !hasBorderBottom && 'has-[.header-popover-full-panel]:border-b'
          )}
        >
          <div className="flex items-center">
            <Logo />
            <div className="hidden lg:block ml-8 mr-8 h-8 w-px bg-neutral-300 dark:bg-neutral-600" />
          </div>

          <div className="hidden lg:flex flex-1 items-center justify-center">
            <Navigation menu={navigationMenu} featuredCategory={featuredCategory} />
          </div>

          <div className="flex items-center gap-x-2.5 sm:gap-x-6">
            <div className="block lg:hidden">
              <HamburgerBtnMenu />
            </div>
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
