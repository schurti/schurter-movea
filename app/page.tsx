import { ButtonLink, PlainButtonLink } from '@/components/elements/button'
import { Link } from '@/components/elements/link'
import { Main } from '@/components/elements/main'
import {
  ObfuscatedEmailButtonLink,
  ObfuscatedEmailTextLink,
  ObfuscatedPhonePlainButtonLink,
  ObfuscatedPhoneTextLink,
} from '@/components/elements/obfuscated-contact'
import { Screenshot } from '@/components/elements/screenshot'
import { ChevronIcon } from '@/components/icons/chevron-icon'
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
  NavbarWithLinksActionsAndCenteredLogo,
} from '@/components/sections/navbar-with-links-actions-and-centered-logo'

export default function Page() {
  return (
    <>
      <NavbarWithLinksActionsAndCenteredLogo
        id="navbar"
        logo={
          <NavbarLogo href="#home">
            <img src="/schurter-movea-logo.svg" alt="Schurter MOVEA" className="h-12 w-auto dark:invert lg:h-14" />
          </NavbarLogo>
        }
        links={
          <>
            <NavbarLink href="#dienstleistungen">Dienstleistungen</NavbarLink>
            <NavbarLink href="#ueber-movea">Über MOVEA</NavbarLink>
          </>
        }
        actions={
          <>
            <ButtonLink href="#kontakt">Jetzt anfragen</ButtonLink>
          </>
        }
      />

      <Main>
        <HeroCenteredWithDemo
          id="home"
          headline="Ihr Partner für Verkehr und Mobilität"
          subheadline={
            <div className="space-y-3">
              <p className="font-semibold text-mist-700 dark:text-mist-300">Schurter MOVEA GmbH</p>
              <p>Beratung - Führungs- und Managementunterstützung - Verwaltungsratsmandat - Mobilitätsentwicklung</p>
            </div>
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

        <FeaturesStackedAlternatingWithDemos
          id="dienstleistungen"
          headline="Unsere Dienstleistungen"
          subheadline={
            <p>
              Die Dienstleistungen von MOVEA GmbH umfassen die Erbringung von Beratungsdienstleistungen, insbesondere
              im Zusammenhang mit Verkehrsanlagen, Mobilitätsfragen von Verkehrsunternehmen und Bestellern von
              öffentlichen Verkehrsleistungen, sowie Führungs- und Managementunterstützung für Verwaltungen,
              Unternehmen und Organisationen. Zusätzlich bietet die Firma die Ausübung von Verwaltungsratsmandaten an.
            </p>
          }
          features={
            <>
              <Feature
                headline="Verkehrsanlagen"
                subheadline={
                  <p>
                    Beratung im Zusammenhang mit Verkehrsanlagen und Infrastrukturprojekten. Wir unterstützen Sie bei
                    Planung, Optimierung und Umsetzung.
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
                    Unterstützung für Verkehrsunternehmen und Besteller von öffentlichen Verkehrsleistungen bei
                    strategischen Mobilitätsfragen.
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
                headline="Führungs- und Managementunterstützung"
                subheadline={
                  <p>
                    Führungs- und Managementunterstützung für Verwaltungen, Unternehmen und Organisationen im Bereich
                    öffentlicher Verkehr. Ausübung von Verwaltungsratsmandaten.
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

              <Feature
                headline="Mobilitätsentwicklung"
                subheadline={
                  <p>
                    Entwicklung und Umsetzung von Mobilitätsprojekten. KI-gestützte Analysen können dabei zur
                    Projektentwicklung eingesetzt werden.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Mehr erfahren <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="blue" placement="top-right">
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
            </>
          }
        />

        <section id="ueber-movea" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">Über MOVEA</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Schurter MOVEA GmbH
              </p>

              <div className="mt-8 grid gap-8 text-lg leading-8 text-gray-600 dark:text-gray-300 md:grid-cols-2">
                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Unternehmen</h3>
                  <p className="mt-3">
                    Rechtsform: Gesellschaft mit beschränkter Haftung (GmbH) nach Schweizerischem Recht seit Januar
                    2026.
                  </p>
                  <p className="mt-3">
                    Büroadresse: Mattenbachstrasse 28, CH-8400 Winterthur
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Geschäftsführer</h3>
                  <p className="mt-3">Werner Schurter, dipl. Ing. ETH/SIA, Verkehrsingenieur SVI</p>
                </div>
              </div>

              <div className="mt-10">
                <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Mitgliedschaften</h3>
                <ul className="mt-3 list-disc space-y-2 pl-5 text-lg leading-8 text-gray-600 dark:text-gray-300">
                  <li>SIA (Schweizerischer Ingenieur- und Architektenverein)</li>
                  <li>SVI (Schweizerische Vereinigung der Mobilitäts- und Verkehrsfachexperten)</li>
                  <li>GdI (Gesellschaft der Ingenieure des öffentlichen Verkehrs)</li>
                  <li>SKU (Schweizer Kurse für Unternehmensführung)</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="taetigkeiten" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">Tätigkeiten</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Beruflicher Werdegang und Mandate
              </p>

              <div className="mt-8 space-y-8 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Aktuell</h3>
                  <p className="mt-2">Schurter MOVEA GmbH - seit Februar 2026</p>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Frühere Tätigkeiten</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>SBB AG: Mitglied der Geschäftsleitung (Markt) Personenverkehr, 2016 - 2025</li>
                    <li>SBB AG: Leiter Regionalverkehr, 2001 - 2019 / 2023 - 2025</li>
                    <li>Verkehrsbetriebe Glattal VBG: Direktor, 1994 - 2001</li>
                    <li>Zürcher Verkehrsverbund ZVV: Verkehrsplaner, 1990 - 1994</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Verwaltungsratsmandate</h3>
                  <ul className="mt-2 list-disc space-y-2 pl-5">
                    <li>Thurbo AG, Verwaltungsratspräsident, 2016 - 2026</li>
                    <li>Auto AG Uri, Verwaltungsrat, seit 2016</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="referenzen" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">Referenzen</h2>
              <p className="mt-4 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">Auf Anfrage.</p>
            </div>
          </div>
        </section>

        <section id="kontakt" className="py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">Kontakt</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                Kontaktieren Sie mich für ein unverbindliches Gespräch über Ihr Bedürfnis
              </p>

              <div className="mt-8 space-y-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                <div>
                  <p className="font-semibold text-mist-950 dark:text-white">Adresse</p>
                  <p>Schurter MOVEA GmbH</p>
                  <p>Mattenbachstrasse 28</p>
                  <p>CH-8400 Winterthur</p>
                </div>

                <div>
                  <p className="font-semibold text-mist-950 dark:text-white">E-Mail</p>
                  <p>
                    <ObfuscatedEmailTextLink className="decoration-mist-400" />
                  </p>
                </div>

                <div>
                  <p className="font-semibold text-mist-950 dark:text-white">Mobil</p>
                  <p>
                    <ObfuscatedPhoneTextLink className="decoration-mist-400" />
                  </p>
                </div>
              </div>

              <div className="mt-10 flex items-center gap-4">
                <ObfuscatedEmailButtonLink label="E-Mail senden" size="lg" />
                <ObfuscatedPhonePlainButtonLink label="Anrufen" size="lg" className="gap-2">
                  Anrufen <ChevronIcon />
                </ObfuscatedPhonePlainButtonLink>
              </div>
            </div>
          </div>
        </section>
      </Main>

      <FooterWithLinksAndSocialIcons
        id="footer"
        links={
          <>
            <FooterLink href="#dienstleistungen">Dienstleistungen</FooterLink>
            <FooterLink href="#ueber-movea">Über MOVEA</FooterLink>
            <FooterLink href="#taetigkeiten">Tätigkeiten</FooterLink>
            <FooterLink href="#referenzen">Referenzen</FooterLink>
            <FooterLink href="#kontakt">Kontakt</FooterLink>
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
