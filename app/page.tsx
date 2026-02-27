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
import { SiteFooter } from '@/components/sections/site-footer'
import { HeroCenteredWithDemo } from '@/components/sections/hero-centered-with-demo'
import { SiteHeader } from '@/components/sections/site-header'
import { withBasePath } from '@/lib/with-base-path'
import Image from 'next/image'

export default function Page() {
  return (
    <>
      <SiteHeader />

      <Main>
        <HeroCenteredWithDemo
          id="home"
          headline="Ihr Partner für Verkehr und Mobilität"
          subheadline={
            <div className="space-y-3">
              <p className="font-semibold text-mist-700 dark:text-mist-300">Schurter MOVEA GmbH</p>
              <p>
                Ich unterstütze Sie mit Beratung, Führungs- und Managementunterstützung, Verwaltungsratsmandaten und
                Mobilitätsentwicklung.
              </p>
            </div>
          }
          cta={
            <div className="flex items-center gap-4">
              <ButtonLink href="#kontakt" size="lg">
                Kontaktieren Sie mich
              </ButtonLink>
              <PlainButtonLink href="#dienstleistungen" size="lg">
                Mehr erfahren <ChevronIcon />
              </PlainButtonLink>
            </div>
          }
          demo={
            <Screenshot className="rounded-lg" wallpaper="blue" placement="bottom">
              <Image
                src="https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=3440&h=1990&fit=crop&q=80"
                alt="Modern train station with public transportation"
                width={3440}
                height={1990}
              />
            </Screenshot>
          }
        />

        <FeaturesStackedAlternatingWithDemos
          headline={
            <span id="dienstleistungen" className="scroll-mt-4 block">
              Unsere Dienstleistungen
            </span>
          }
          subheadline={
            <p>
              Die Dienstleistungen von Schurter MOVEA GmbH umfassen die Erbringung von Beratungsdienstleistungen, insbesondere
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
                    Beratung im Zusammenhang mit Verkehrsanlagen und Infrastrukturprojekten. Ich unterstütze Sie bei
                    Planung, Optimierung und Umsetzung.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Jetzt anfragen <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="blue" placement="bottom-right">
                    <Image
                      src={withBasePath('/verkehrsanlagen.jpg')}
                      alt="Verkehrsanlagen"
                      width={3264}
                      height={2448}
                      className="object-cover aspect-2/1 lg:aspect-3/2"
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
                    Jetzt anfragen <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="purple" placement="top-left">
                    <Image
                      src={withBasePath('/mobilitaetsfragen.jpg')}
                      alt="Mobilitätsfragen"
                      width={2448}
                      height={3264}
                      className="object-cover aspect-2/1 lg:aspect-3/2"
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
                    Jetzt anfragen <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="green" placement="bottom-left">
                    <Image
                      src={withBasePath('/management.jpg')}
                      alt="Führungs- und Managementunterstützung"
                      width={4032}
                      height={3024}
                      className="object-cover aspect-2/1 lg:aspect-3/2"
                    />
                  </Screenshot>
                }
              />

              <Feature
                headline="Mobilitätsentwicklung"
                subheadline={
                  <p>
                    Entwicklung und Umsetzung von Mobilitätsprojekten.
                  </p>
                }
                cta={
                  <Link href="#kontakt">
                    Jetzt anfragen <ChevronIcon />
                  </Link>
                }
                demo={
                  <Screenshot wallpaper="brown" placement="top-right">
                    <Image
                      src={withBasePath('/mobilitaetsentwicklung.jpg')}
                      alt="Mobilitätsentwicklung"
                      width={1536}
                      height={1024}
                      className="object-cover aspect-2/1 lg:aspect-3/2"
                    />
                  </Screenshot>
                }
              />
            </>
          }
        />

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2
                id="ueber-movea"
                className="scroll-mt-4 text-base font-semibold leading-7 text-mist-500 dark:text-mist-300"
              >
                Über MOVEA
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-4xl">
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
                  <div className="mt-4 w-full overflow-hidden rounded-sm outline -outline-offset-1 outline-black/5 dark:outline-white/5 sm:max-w-xs">
                    <Image
                      src={withBasePath('/werner-schurter.jpg')}
                      alt="Porträt von Werner Schurter"
                      width={832}
                      height={1216}
                      className="h-auto w-full object-cover"
                    />
                  </div>
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

        <section id="taetigkeiten" className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 className="text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">Tätigkeiten</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-4xl">
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
                    <li>SBB AG: Mitglied der Geschäftsleitung (Markt) Personenverkehr / Leiter Regionalverkehr, 2016 - 2025</li>
                    <li>SBB AG: Leiter Zürcher S-Bahn/Region Ost, 2001 - 2019 / 2023 - 2025</li>
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

                <div>
                  <h3 className="text-xl font-semibold text-mist-950 dark:text-white">Referenzen</h3>
                  <p className="mt-2">Auf Anfrage.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-4xl">
              <h2 id="kontakt" className="scroll-mt-4 text-base font-semibold leading-7 text-mist-500 dark:text-mist-300">
                Kontakt
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-balance text-gray-900 dark:text-white sm:text-4xl">
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

      <SiteFooter />
    </>
  )
}
