import { Main } from '@/components/elements/main'
import { ObfuscatedEmailTextLink, ObfuscatedPhoneTextLink } from '@/components/elements/obfuscated-contact'
import Image from 'next/image'
import NextLink from 'next/link'
import {
  FooterLink,
  FooterWithLinksAndSocialIcons,
} from '@/components/sections/footer-with-links-and-social-icons'
import { withBasePath } from '@/lib/with-base-path'

export default function DatenschutzPage() {
  return (
    <>
      <header className="sticky top-0 z-10 bg-mist-100 dark:bg-mist-950">
        <nav>
          <div className="mx-auto flex h-21 max-w-7xl items-center px-6 lg:px-10">
            <NextLink href="/" className="inline-flex items-stretch">
              <Image
                src={withBasePath('/schurter-movea-logo.svg')}
                alt="Schurter MOVEA"
                width={280}
                height={64}
                className="h-12 w-auto dark:invert lg:h-14"
              />
            </NextLink>
          </div>
        </nav>
      </header>

      <Main>
        <section className="py-16 sm:py-24">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-mist-950 dark:text-white sm:text-4xl">
              Datenschutzerklärung
            </h1>
            <p className="mt-4 text-mist-600 dark:text-mist-400">Schurter MOVEA GmbH | Version vom 02.2026</p>

            <div className="mt-8 space-y-6 text-base leading-7 text-mist-700 dark:text-mist-300">
              <p>
                In dieser Datenschutzerklärung erläutern wir, die Schurter MOVEA GmbH, wie wir Personendaten erheben
                und bearbeiten. Sie ist keine abschliessende Beschreibung; allenfalls regeln andere
                Datenschutzerklärungen oder allgemeine Geschäftsbedingungen, Teilnahmebedingungen und ähnliche
                Dokumente von Auftraggebern spezifische Sachverhalte. Unter Personendaten werden alle Angaben
                verstanden, die sich auf eine bestimmte oder über die Daten bestimmbare Person beziehen.
              </p>
              <p>
                Es ist keine Einwilligung seitens der Kundschaft, ihrer Mitarbeitenden oder anderen betroffenen
                Personen in die Datenschutzerklärung notwendig. Es handelt sich bei der Datenschutzerklärung lediglich
                um die Information über Art, Umfang und Zweck der Nutzung von Personendaten durch Schurter MOVEA GmbH.
              </p>
              <p>
                Wenn Sie uns Personendaten anderer Personen (z.B. Familienmitglieder, Daten von Arbeitskollegen,
                Auftraggebern oder Lieferanten) zur Verfügung stellen, stellen Sie bitte sicher, dass diese Personen
                die vorliegende Datenschutzerklärung kennen und teilen Sie uns deren Personendaten nur mit, wenn Sie
                dies dürfen und wenn diese Personendaten korrekt sind.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">1. Verantwortlicher</h2>
              <p>
                Verantwortlich für die Datenbearbeitungen, die wir hier beschreiben, ist Schurter MOVEA GmbH,
                Mattenbachstrasse 28, 8400 Winterthur, Schweiz, soweit im Einzelfall nichts anderes angegeben ist.
                Wenn Sie datenschutzrechtliche Anliegen haben, können Sie uns diese an folgende Kontaktadressen
                mitteilen: Werner Schurter, <ObfuscatedEmailTextLink className="align-baseline" />{' '}
                oder unter der Telefonnummer{' '}
                <ObfuscatedPhoneTextLink className="align-baseline" />
                .
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                2. Erhebung und Bearbeitung von Personendaten
              </h2>
              <p>
                Wir bearbeiten Personendaten, die wir im Rahmen unserer Geschäftsbeziehung mit unseren Kunden und
                anderen Geschäftspartnern von diesen und weiteren daran beteiligten Personen erhalten sowie die wir
                beim Betrieb unserer Websites und weiteren Anwendungen von deren Nutzern erheben.
              </p>
              <p>
                Soweit dies erlaubt ist, entnehmen wir auch öffentlich zugänglichen Quellen gewisse Daten oder erhalten
                solche von anderen Unternehmen innerhalb von Aufträgen, von Behörden, Auftraggebern und sonstigen
                Dritten. Nebst den Daten von Ihnen, die Sie uns direkt geben, umfassen die Kategorien von
                Personendaten, die wir von Dritten über Sie erhalten, insbesondere Angaben aus öffentlichen Registern,
                aus behördlichen und gerichtlichen Verfahren, im Zusammenhang mit beruflichen Funktionen, in
                Korrespondenz und Besprechungen mit Dritten, über Bonität, aus Medien und Internet sowie im
                Zusammenhang mit der Benutzung der Website (z.B. IP-Adresse, Geräteinformationen, Cookies, Datum und
                Zeit des Besuchs, abgerufene Inhalte, Standortangaben).
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                3. Zwecke der Datenbearbeitung und Rechtsgrundlagen
              </h2>
              <p>
                Wir verwenden die von uns erhobenen Personendaten in erster Linie, um unsere Verträge mit unseren
                Kunden und Geschäftspartnern abzuschliessen und abzuwickeln, insbesondere im Rahmen der
                Dienstleistungserbringung im Beratungs- und Verkehrswesen und beim Einkauf von Produkten und
                Dienstleistungen von Lieferanten und Subunternehmern, sowie um unseren gesetzlichen Pflichten im In-
                und Ausland nachzukommen.
              </p>
              <p>
                Darüber hinaus bearbeiten wir Personendaten, soweit erlaubt und es uns als angezeigt erscheint, auch
                für weitere Zwecke mit berechtigtem Interesse: Kommunikation mit Dritten, Angebot und Weiterentwicklung
                unserer Dienstleistungen und Websites, Prüfung und Optimierung von Verfahren zur Bedarfsanalyse,
                Werbung und Marketing, Markt- und Meinungsforschung, Rechtsdurchsetzung und Verteidigung,
                Verhinderung/Aufklärung von Straftaten, Gewährleistung des Betriebs und der IT-Sicherheit sowie
                gesellschaftsrechtliche Transaktionen.
              </p>
              <p>
                Soweit Sie uns eine Einwilligung zur Bearbeitung Ihrer Personendaten für bestimmte Zwecke erteilt
                haben, bearbeiten wir diese Daten gestützt auf die Einwilligung, soweit wir keine andere Rechtsgrundlage
                haben und wir eine solche benötigen. Eine erteilte Einwilligung kann jederzeit widerrufen werden,
                was jedoch keine Auswirkung auf bereits erfolgte Datenbearbeitungen hat.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                4. Cookies / Tracking und andere Technologien
              </h2>
              <p>
                Wenn Sie auf unsere Website zugreifen, werden automatisch technische Informationen erfasst. Diese
                Informationen werden im Server-Logfile erfasst und beinhalten insbesondere IP-Adresse, HTTP-Statuscode,
                Betriebssystem, Browser, Sprache des Browsers, aufgerufene Inhalte, verweisende Website, Datum und
                Zeit inklusive Zeitzone des Aufrufes und Aufenthaltsdauer. Diese Daten dienen der Datensicherheit und
                um unsere Website dauerhaft nutzerfreundlich und zuverlässig bereitstellen zu können.
              </p>
              <p>
                Cookies werden von Ihrem Browser gespeichert und können dazu dienen, eine bereits aufgerufene Website
                wieder zu erkennen. Ohne Cookies kann eine Website unter Umständen nicht vollständig angezeigt werden.
                Einstellungen zu Cookies können Sie in Ihrem Browser anpassen.
              </p>
              <p>
                Sollten wir künftig soziale Netzwerke oder Plug-ins einsetzen, ist dies ersichtlich. Bei Nutzung solcher
                Links oder Funktionen werden Personendaten an die jeweiligen Plattformen übertragen. Die Bearbeitung
                dort liegt in der Verantwortung des jeweiligen Betreibers.
              </p>
              <p>
                Wenn uns Daten via E-Mail oder sonstigen Medien freiwillig übermittelt werden, gehen wir davon aus,
                dass Sie damit einverstanden sind. Sollten Personen auf unseren Fotos zu sehen sein, die mit einer
                Veröffentlichung nicht einverstanden sind, können sie sich bei uns melden.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                5. Datenweitergabe und Datenübermittlung ins Ausland
              </h2>
              <p>
                Wir geben Personendaten im Rahmen unserer geschäftlichen Aktivitäten und der Zwecke gemäss Ziffer 3,
                soweit erlaubt, auch Dritten bekannt, insbesondere Dienstleistern, Händlern, Lieferanten,
                Subunternehmern, Geschäftspartnern, Kunden, Behörden und Gerichten. Diese Empfänger sind mehrheitlich
                im Inland, können aber weltweit sein, insbesondere auch in Europa und den USA.
              </p>
              <p>
                Befindet sich ein Empfänger in einem Land ohne angemessenen gesetzlichen Datenschutz, verpflichten wir
                ihn vertraglich zur Einhaltung des anwendbaren Datenschutzes, soweit keine gesetzliche Ausnahme greift.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                6. Dauer der Aufbewahrung von Personendaten
              </h2>
              <p>
                Wir verarbeiten und speichern Personendaten so lange, wie es für die Erfüllung unserer vertraglichen
                und gesetzlichen Pflichten oder sonst die mit der Bearbeitung verfolgten Zwecke erforderlich ist.
                Sobald Personendaten hierfür nicht mehr erforderlich sind, werden sie grundsätzlich und soweit möglich
                gelöscht oder anonymisiert.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">7. Datensicherheit</h2>
              <p>
                Wir treffen angemessene technische und organisatorische Sicherheitsvorkehrungen zum Schutz Ihrer
                Personendaten vor unberechtigtem Zugriff und Missbrauch.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                8. Pflicht zur Bereitstellung von Personendaten
              </h2>
              <p>
                Im Rahmen unserer Geschäftsbeziehung müssen Sie diejenigen Personendaten bereitstellen, die für die
                Aufnahme und Durchführung einer Geschäftsbeziehung und der Erfüllung der damit verbundenen vertraglichen
                Pflichten erforderlich sind. Ohne diese Daten sind wir in der Regel nicht in der Lage, einen Vertrag zu
                schliessen oder abzuwickeln.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                9. Profiling und automatisierte Entscheidfindung
              </h2>
              <p>
                Zur Begründung und Durchführung der Geschäftsbeziehung nutzen wir grundsätzlich kein Profiling und keine
                vollautomatisierte Entscheidungsfindung aus Personendaten. Sollten wir solche Verfahren in Einzelfällen
                einsetzen, informieren wir Sie entsprechend den gesetzlichen Vorgaben.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                10. Anwendbarkeit des Datenschutzrechts
              </h2>
              <p>
                Diese Datenschutzerklärung ist auf die Anforderungen des Schweizer Datenschutzgesetzes (DSG), des
                revidierten Schweizer Datenschutzgesetzes (revDSG) sowie der EU-Datenschutz-Grundverordnung (DSGVO)
                ausgelegt. Ob und inwieweit diese Gesetze anwendbar sind, hängt vom Einzelfall ab.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">
                11. Rechte der betroffenen Person
              </h2>
              <p>
                Sie haben im Rahmen des auf Sie anwendbaren Datenschutzrechts und soweit darin vorgesehen das Recht auf
                Auskunft, Berichtigung, Löschung, Einschränkung der Datenbearbeitung, Widerspruch sowie auf Herausgabe
                gewisser Personendaten zwecks Übertragung an eine andere Stelle. Zur Geltendmachung Ihrer Rechte können
                Sie uns unter der in Ziffer 1 angegebenen Adresse kontaktieren.
              </p>
              <p>
                Jede betroffene Person hat überdies das Recht, ihre Ansprüche gerichtlich durchzusetzen oder bei der
                zuständigen Datenschutzbehörde eine Beschwerde einzureichen. Zuständige Behörde in der Schweiz ist der
                Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte.
              </p>

              <h2 className="text-xl font-semibold text-mist-950 dark:text-white">12. Änderungen</h2>
              <p>
                Wir können diese Datenschutzerklärung jederzeit ohne Vorankündigung anpassen. Es gilt die jeweils
                aktuelle, auf unserer Website publizierte Fassung.
              </p>
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
