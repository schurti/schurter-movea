import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
} from '@/components/sections/footer-with-links-and-social-icons'
import type { ComponentProps } from 'react'

export function SiteFooter(props: Omit<ComponentProps<'footer'>, 'children'>) {
  return (
    <FooterWithLinksAndSocialIcons
      id="footer"
      links={
        <>
          <FooterLink href="/datenschutz">Datenschutz</FooterLink>
          <FooterLink href="/impressum">Impressum</FooterLink>
        </>
      }
      socialLinks={<></>}
      fineprint={
        <>
          Schurter MOVEA GmbH · Mattenbachstrasse 28 · CH-8400 Winterthur
          <br />
          Alle Rechte vorbehalten 2026
        </>
      }
      {...props}
    />
  )
}
