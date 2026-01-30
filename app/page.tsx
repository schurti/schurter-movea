import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import { ObfuscatedEmailLink } from '@/components/elements/obfuscated-email-link'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
import { CallToActionSimple } from '@/components/sections/call-to-action-simple'
import {
  Feature,
  FeaturesStackedAlternatingWithDemos,
} from '@/components/sections/features-stacked-alternating-with-demos'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
} from '@/components/sections/footer-with-links-and-social-icons'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import {
  NavbarLink,
  NavbarLogo,
  NavbarWithLogoActionsAndLeftAlignedLinks,
} from '@/components/sections/navbar-with-logo-actions-and-left-aligned-links'

export default function Page() {
  return (
    <>
      <NavbarWithLogoActionsAndLeftAlignedLinks
        id="navbar"
        logo={
          <NavbarLogo href="#">
            <span className="text-2xl font-bold text-mist-950 dark:text-white">
              Schurter MOVEA
            </span>
          </NavbarLogo>
        }
        links={
          <>
            <NavbarLink href="#dienstleistungen">Dienstleistungen</NavbarLink>
            <NavbarLink href="#ueber-uns">Über uns</NavbarLink>
            <NavbarLink href="#kontakt">Kontakt</NavbarLink>
          </>
        }
        actions={
          <>
            <ButtonLink href="#kontakt">Jetzt anfragen</ButtonLink>
          </>
        }
      />

      <Main>
        {/* Hero */}
        <HeroCenteredWithDemo
          id="hero"
          headline="Ihr Partner für Verkehr und Mobilität"
          subheadline={
            <p>
              Schurter MOVEA GmbH bietet Beratungsdienstleistungen im Bereich Verkehrsanlagen, 
              Mobilitätsfragen und Führungsunterstützung für Verwaltungen, Unternehmen und Organisationen.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#kontakt" size="lg">
                Kontaktieren Sie uns
              </ButtonLink>
              <PlainButtonLink href="#dienstleistungen" size="lg">
                Mehr erfahren <ChevronIcon />
              </PlainButtonLink>
            </div>
          }
          demo={
            <Screenshot className="rounded-lg" wallpaper="blue" placement="bottom">
              <img
                className="dark:hidden"
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=3440&h=1990&fit=crop&q=80"
                alt="Modern train station with public transportation"
                width={3440}
                height={1990}
              />
              <img
                className="not-dark:hidden"
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=3440&h=1990&fit=crop&q=80"
                alt="Modern train station with public transportation"
                width={3440}
                height={1990}
              />
            </Screenshot>
          }
        />

        {/* Features */}
        <FeaturesStackedAlternatingWithDemos
          id="dienstleistungen"
          headline="Unsere Dienstleistungen"
          subheadline={
            <p>
              Wir bieten umfassende Beratungsdienstleistungen für Verkehr, Mobilität und Management.
            </p>
          }
          features={
            <>
              <Feature
                headline="Verkehrsanlagen"
                subheadline={
                  <p>
                    Beratung im Zusammenhang mit Verkehrsanlagen und Infrastrukturprojekten. 
                    Wir unterstützen Sie bei Planung, Optimierung und Umsetzung.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <img
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1500&h=1240&fit=crop&q=80"
                      alt="Highway infrastructure and transportation network"
                      className="bg-white/75 dark:hidden"
                      width={1500}
                      height={1240}
                    />
                    <img
                      width={1500}
                      height={1240}
                      src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=1500&h=1240&fit=crop&q=80"
                      alt="Highway infrastructure and transportation network"
                      className="bg-black/75 not-dark:hidden"
                    />
                  </Screenshot>
                }
              />
              <Feature
                headline="Mobilitätsfragen"
                subheadline={
                  <p>
                    Unterstützung für Verkehrsunternehmen und Besteller von öffentlichen Verkehrsleistungen 
                    bei strategischen Mobilitätsfragen und Verkehrsplanung.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <img
                      src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1500&h=1240&fit=crop&q=80"
                      alt="Urban public transit and city mobility"
                      className="bg-white/75 dark:hidden"
                      width={1500}
                      height={1240}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?w=1500&h=1240&fit=crop&q=80"
                      width={1500}
                      height={1240}
                      alt="Urban public transit and city mobility"
                      className="bg-black/75 not-dark:hidden"
                    />
                  </Screenshot>
                }
              />
              <Feature
                headline="Führungsunterstützung"
                subheadline={
                  <p>
                    Führungs- und Managementunterstützung für Verwaltungen, Unternehmen und Organisationen. 
                    Ausübung von Verwaltungsratsmandaten.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="brown" placement="bottom-left">
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1500&h=1240&fit=crop&q=80"
                      alt="Business consulting and management"
                      className="bg-white/75 dark:hidden"
                      width={1500}
                      height={1240}
                    />
                    <img
                      src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1500&h=1240&fit=crop&q=80"
                      alt="Business consulting and management"
                      width={1500}
                      height={1240}
                      className="bg-black/75 not-dark:hidden"
                    />
                  </Screenshot>
                }
              />
            </>
          }
        />

        {/* About */}
        <section id="ueber-uns" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">
                Über uns
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Schurter MOVEA GmbH
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Die Gesellschaft bezweckt die Erbringung von Beratungsdienstleistungen, insbesondere im Zusammenhang 
                mit Verkehrsanlagen, Mobilitätsfragen von Verkehrsunternehmen und Bestellern von öffentlichen 
                Verkehrsleistungen, sowie Führungs- und Managementunterstützung für Verwaltungen, Unternehmen und 
                Organisationen.
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                Zusätzlich bietet die Firma die Ausübung von Verwaltungsratsmandaten an. Die Gesellschaft kann 
                Zweigniederlassungen und Tochtergesellschaften im In- und Ausland errichten und sich an anderen 
                Unternehmen im In- und Ausland beteiligen sowie alle Geschäfte tätigen, die direkt oder indirekt 
                mit ihrem Zweck in Zusammenhang stehen.
              </p>
            </div>
          </div>
        </section>

        {/* Call To Action */}
        <CallToActionSimple
          id="kontakt"
          headline="Bereit für eine Zusammenarbeit?"
          subheadline={
            <p>
              Kontaktieren Sie uns für ein unverbindliches Gespräch über Ihre Verkehrs- und Mobilitätsprojekte.
            </p>
          }
          cta={
            <div className="flex items-center gap-4">
              <ObfuscatedEmailLink label="Kontakt aufnehmen" size="lg" />

              <PlainButtonLink href="tel:+41" size="lg">
                Anrufen <ChevronIcon />
              </PlainButtonLink>
            </div>
          }
        />
      </Main>

      <FooterWithLinksAndSocialIcons
        id="footer"
        links={
          <>
            <FooterLink href="#ueber-uns">Über uns</FooterLink>
            <FooterLink href="#dienstleistungen">Dienstleistungen</FooterLink>
            <FooterLink href="#kontakt">Kontakt</FooterLink>
            <FooterLink href="#">Impressum</FooterLink>
            <FooterLink href="#">Datenschutz</FooterLink>
          </>
        }
        socialLinks={<></>}
        fineprint={`© ${new Date().getFullYear()} Schurter MOVEA GmbH`}
      />
    </>
  )
}
