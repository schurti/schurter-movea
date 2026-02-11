import { Main } from '@/components/elements/main'
import { ObfuscatedEmailTextLink, ObfuscatedPhoneTextLink } from '@/components/elements/obfuscated-contact'
import NextLink from 'next/link'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
} from '@/components/sections/footer-with-links-and-social-icons'

export default function ImpressumPage() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-mist-100 dark:bg-mist-950">
        <nav>
          <div className="mx-auto flex h-21 max-w-7xl items-center px-6 lg:px-10">
            <NextLink href="/" className="inline-flex items-stretch">
              <img src="/schurter-movea-logo.svg" alt="Schurter MOVEA" className="h-12 w-auto dark:invert lg:h-14" />
            </NextLink>
          </div>
        </nav>
      </header>

      <Main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-mist-950 dark:text-white sm:text-4xl">Impressum</h1>

            <div className="mt-8 space-y-8 text-base leading-7 text-mist-700 dark:text-mist-300">
              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Kontaktadresse</h2>
                <p className="mt-2">Schurter MOVEA GmbH</p>
                <p>Mattenbachstrasse 28</p>
                <p>CH-8400 Winterthur</p>
                <p>
                  <ObfuscatedEmailTextLink />
                </p>
                <p>
                  <ObfuscatedPhoneTextLink />
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Eingetragener Firmenname</h2>
                <p className="mt-2">Schurter MOVEA GmbH</p>
                <p>Nummer: CH-020.4.090.832-0</p>
                <p>UID/MWST: CHE-446.169.462</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Vertretungsberechtigte Person</h2>
                <p className="mt-2">Werner Schurter, Geschäftsführer</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Website</h2>
                <p className="mt-2">Diese Website wird ohne kommerzielle Interessen zur Verfügung gestellt.</p>
                <p>Design und Umsetzung: in Vorbereitung</p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Haftungsausschluss</h2>
                <p className="mt-2">
                  Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit, Genauigkeit,
                  Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen. Haftungsansprüche wegen Schäden
                  materieller oder immaterieller Art, welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der
                  veröffentlichten Informationen oder durch technische Störungen entstanden sind, werden ausgeschlossen.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Haftung für Links</h2>
                <p className="mt-2">
                  Verweise und Links auf Webseiten Dritter liegen ausserhalb unseres Verantwortungsbereichs. Der Zugriff
                  und die Nutzung solcher Webseiten erfolgen auf eigene Gefahr der Nutzerinnen und Nutzer.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold text-mist-950 dark:text-white">Urheberrechte</h2>
                <p className="mt-2">
                  Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien auf dieser
                  Website gehören ausschliesslich der Schurter MOVEA GmbH oder den speziell genannten
                  Rechteinhabern. Für jede Reproduktion ist die schriftliche Zustimmung im Voraus einzuholen.
                </p>
              </div>
            </div>
          </div>
        </section>
      </Main>

      <FooterWithLinksAndSocialIcons
        id="footer"
        links={
          <>
            <FooterLink href="/">Home</FooterLink>
            <FooterLink href="/datenschutz">Datenschutz</FooterLink>
            <FooterLink href="/impressum">Impressum</FooterLink>
          </>
        }
        socialLinks={<></>}
        fineprint="Schurter MOVEA GmbH - Mattenbachstrasse 28 - CH-8400 Winterthur | Alle Rechte vorbehalten 2026"
      />
    </>
  )
}
