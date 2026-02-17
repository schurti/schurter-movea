import { ButtonLink } from '@/components/elements/button'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'
import { withBasePath } from '@/lib/with-base-path'
import type { ComponentProps } from 'react'
import Image from 'next/image'

export function SiteHeader(props: Omit<ComponentProps<'header'>, 'children'>) {
  return (
    <NavbarWithLogoActionsAndLeftAlignedLinks
      id="navbar"
      logo={
        <NavbarLogo href="/#home">
          <Image
            src={withBasePath('/schurter-movea-logo.svg')}
            alt="Schurter MOVEA"
            width={245}
            height={56}
            className="h-12 w-[210px] dark:invert lg:h-14 lg:w-[245px]"
          />
        </NavbarLogo>
      }
      links={
        <>
          <NavbarLink href="/#dienstleistungen">Dienstleistungen</NavbarLink>
          <NavbarLink href="/#ueber-movea">Über MOVEA</NavbarLink>
        </>
      }
      actions={
        <>
          <ButtonLink href="/#kontakt">Jetzt anfragen</ButtonLink>
        </>
      }
      {...props}
    />
  )
}
