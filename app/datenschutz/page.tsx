import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Datenschutzerklärung',
  description: 'Informationen zum Datenschutz gemäß DSGVO.',
  robots: { index: false, follow: false },
}

export default function DatenschutzPage() {
  return (
    <main className="min-h-screen bg-stone-50 dark:bg-zinc-950 pt-32 pb-24 px-6">
      <div className="max-w-2xl mx-auto">

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
            Datenschutzerklärung
          </h1>
        </div>

        {/* Content */}
        <div className="space-y-10 text-zinc-600 dark:text-zinc-400">

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              1. Datenschutz auf einen Blick
            </h2>
            <h3 className="font-medium text-zinc-700 dark:text-zinc-300 mb-2">Allgemeine Hinweise</h3>
            <p className="leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
              personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
              Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              2. Verantwortliche Stelle
            </h2>
            <p className="leading-relaxed">
              Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br /><br />
              [Vollständiger Name / Firmenname]<br />
              [Straße und Hausnummer]<br />
              [PLZ] Oberhausen<br />
              Deutschland<br /><br />
              Telefon: [+49 208 XXXXXXX]<br />
              E-Mail: [info@sanitaer-oberhausen.de]
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              3. Datenerfassung auf dieser Website
            </h2>
            <h3 className="font-medium text-zinc-700 dark:text-zinc-300 mb-2">Cookies</h3>
            <p className="leading-relaxed mb-4">
              Diese Website verwendet keine Tracking-Cookies. Es werden ausschließlich technisch
              notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
            </p>
            <h3 className="font-medium text-zinc-700 dark:text-zinc-300 mb-2">Server-Log-Dateien</h3>
            <p className="leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch Informationen in sogenannten
              Server-Log-Dateien, die Ihr Browser automatisch übermittelt. Dies sind: Browsertyp und
              Browserversion, verwendetes Betriebssystem, Referrer URL, Hostname des zugreifenden
              Rechners, Uhrzeit der Serveranfrage und IP-Adresse. Eine Zusammenführung dieser Daten
              mit anderen Datenquellen wird nicht vorgenommen.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              4. Kontaktaufnahme
            </h2>
            <p className="leading-relaxed">
              Wenn Sie uns per Telefon, WhatsApp oder Telegram kontaktieren, werden Ihre Angaben
              zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              Diese Daten geben wir nicht ohne Ihre Einwilligung weiter. Rechtsgrundlage ist Art. 6
              Abs. 1 lit. b DSGVO (Vertragsanbahnung) bzw. Art. 6 Abs. 1 lit. f DSGVO (berechtigtes
              Interesse an der Bearbeitung Ihrer Anfrage).
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              5. WhatsApp & Telegram
            </h2>
            <p className="leading-relaxed">
              Auf dieser Website werden Links zu WhatsApp und Telegram angeboten. Wenn Sie diese
              Dienste nutzen, gelten die jeweiligen Datenschutzbestimmungen der Anbieter. Wir weisen
              darauf hin, dass WhatsApp (Meta Platforms) und Telegram Daten in Länder außerhalb der
              EU übertragen können. Bitte informieren Sie sich vor der Nutzung über die
              Datenschutzrichtlinien der jeweiligen Dienste.
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              6. Ihre Rechte
            </h2>
            <p className="leading-relaxed">
              Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
              personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der
              Datenverarbeitung sowie ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu
              sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an
              uns wenden.
            </p>
            <ul className="mt-4 space-y-1 list-none">
              {[
                'Recht auf Auskunft (Art. 15 DSGVO)',
                'Recht auf Berichtigung (Art. 16 DSGVO)',
                'Recht auf Löschung (Art. 17 DSGVO)',
                'Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)',
                'Recht auf Datenübertragbarkeit (Art. 20 DSGVO)',
                'Recht auf Widerspruch (Art. 21 DSGVO)',
              ].map((right) => (
                <li key={right} className="flex items-start gap-3 text-sm">
                  <span className="mt-1.5 w-4 h-4 rounded-full bg-blue-700 dark:bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {right}
                </li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              7. Beschwerderecht bei der Aufsichtsbehörde
            </h2>
            <p className="leading-relaxed">
              Sie haben das Recht, sich bei der zuständigen Datenschutzaufsichtsbehörde zu beschweren.
              Die zuständige Aufsichtsbehörde für Nordrhein-Westfalen ist:<br /><br />
              Landesbeauftragte für Datenschutz und Informationsfreiheit NRW<br />
              Kavalleriestraße 2–4<br />
              40213 Düsseldorf<br />
              <a
                href="https://www.ldi.nrw.de"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-700 dark:text-blue-400 hover:underline"
              >
                www.ldi.nrw.de
              </a>
            </p>
          </section>

          <section>
            <h2 className="font-semibold text-zinc-900 dark:text-stone-100 mb-3">
              8. Hosting
            </h2>
            <p className="leading-relaxed">
              Diese Website wird bei Vercel gehostet. Details entnehmen Sie
              der Datenschutzerklärung des Anbieters. Der Einsatz erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO (berechtigtes Interesse an einem zuverlässigen Betrieb dieser
              Website).
            </p>
          </section>

          <p className="text-xs text-zinc-400 dark:text-zinc-600 pt-6 border-t border-zinc-200 dark:border-zinc-800">
            Stand: [Monat Jahr]
          </p>

        </div>
      </div>
    </main>
  )
}