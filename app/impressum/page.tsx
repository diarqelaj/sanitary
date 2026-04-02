import type { Metadata } from 'next'
import Link from 'next/link'
import {Navbar} from '@/components/Navbar'
import { Footer } from '@/components/Footer'

export const metadata: Metadata = {
  title: 'Impressum',
  description: 'Impressum und Anbieterkennzeichnung gemäß § 5 TMG.',
  robots: { index: false, follow: false },
}

export default function ImpressumPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-zinc-950 pt-32 pb-24 px-6">
        <Navbar />
      <div className="max-w-2xl pb-20 mx-auto">

        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400 hover:text-blue-700 dark:hover:text-blue-400 transition-colors mb-12"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
            <path d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Zurück zur Startseite
        </Link>

        {/* Header */}
        <div className="mb-12">
          <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
            Rechtliches
          </span>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 leading-tight">
            Impressum
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-600 dark:text-zinc-400">

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Angaben gemäß § 5 TMG
            </h2>
            <p className="leading-relaxed">
              [Vollständiger Name / Firmenname]<br />
              [Straße und Hausnummer]<br />
              [PLZ] Oberhausen<br />
              Deutschland
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Kontakt
            </h2>
            <p className="leading-relaxed">
              Telefon: [+49 208 XXXXXXX]<br />
              E-Mail: [info@sanitaer-oberhausen.de]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Umsatzsteuer-ID
            </h2>
            <p className="leading-relaxed">
              Umsatzsteuer-Identifikationsnummer gemäß § 27a Umsatzsteuergesetz:<br />
              DE [XXXXXXXXX]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Handwerksrolle
            </h2>
            <p className="leading-relaxed">
              Eingetragen in der Handwerksrolle der Handwerkskammer [Name der Kammer]<br />
              Registernummer: [XXXXXXXX]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p className="leading-relaxed">
              [Vollständiger Name]<br />
              [Straße und Hausnummer]<br />
              [PLZ] Oberhausen
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Streitschlichtung
            </h2>
            <p className="leading-relaxed">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{' '}
              <a
                href="https://ec.europa.eu/consumers/odr/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                https://ec.europa.eu/consumers/odr/
              </a>
              .<br /><br />
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
              Verbraucherschlichtungsstelle teilzunehmen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Haftung für Inhalte
            </h2>
            <p className="leading-relaxed">
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten
              nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
              Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde
              Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Haftung für Links
            </h2>
            <p className="leading-relaxed">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
              Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
              übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder
              Betreiber der Seiten verantwortlich.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              Urheberrecht
            </h2>
            <p className="leading-relaxed">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
              dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art
              der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
              Zustimmung des jeweiligen Autors bzw. Erstellers.
            </p>
          </section>

        </div>
      </div>
      < Footer />
    </main>
  )
}