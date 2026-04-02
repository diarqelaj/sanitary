'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useLanguage } from '@/context/LanguageContext'
import { PhoneModal } from './PhoneModal'

const PHONE_NUMBER = '+4920812345678'
const PHONE_DISPLAY = '+49 208 123 456 78'

export function Footer() {
  const { t } = useLanguage()
  const [phoneModalOpen, setPhoneModalOpen] = useState(false)
const [isMobile] = useState(() => 
  typeof window !== 'undefined' && /Android|iPhone|iPad|iPod/i.test(navigator.userAgent)
)

  const handlePhoneClick = () => {
    if (isMobile) {
      window.location.href = `tel:${PHONE_NUMBER}`
    } else {
      setPhoneModalOpen(true)
    }
  }

  return (
    <>
      <footer className="border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <Link href="/" className="flex items-center gap-2 mb-4">
                <span className="w-8 h-8 rounded-full bg-blue-700 dark:bg-blue-500 flex items-center justify-center">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-4 h-4"
                  >
                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                  </svg>
                </span>
                <span className="font-display text-lg font-semibold tracking-tight">
                  Sanitär<span className="text-blue-700 dark:text-blue-400">OB</span>
                </span>
              </Link>
              <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xs">
                {t.footer.tagline}
              </p>
            </div>

            {/* Nav links */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                Navigation
              </h3>
              <ul className="space-y-2">
                {[
                  { label: t.nav.home, href: '/' },
                  { label: t.nav.services, href: '/#services' },
                  { label: t.nav.blog, href: '/blog' },
                  { label: t.nav.contact, href: '/#contact' },
                ].map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-stone-100 transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Emergency CTA */}
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-zinc-400 mb-4">
                {t.contact.emergency_label}
              </h3>
              <button
                onClick={handlePhoneClick}
                className="inline-flex items-center gap-2 text-sm font-semibold text-red-600 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 transition-colors"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500" />
                </span>
                {t.footer.emergency_cta}
              </button>
              <p className="text-xs text-zinc-400 mt-2">{t.contact.emergency_value}</p>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-zinc-200 dark:border-zinc-800">
            <p className="text-xs text-zinc-400">
              © {new Date().getFullYear()} Sanitär Oberhausen. {t.footer.rights}
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/impressum"
                className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                {t.footer.links.imprint}
              </Link>
              <Link
                href="/datenschutz"
                className="text-xs text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300 transition-colors"
              >
                {t.footer.links.privacy}
              </Link>
            </div>
          </div>
        </div>
      </footer>

      <PhoneModal
        open={phoneModalOpen}
        onClose={() => setPhoneModalOpen(false)}
        phoneNumber={PHONE_NUMBER}
        displayNumber={PHONE_DISPLAY}
        isMobile={isMobile}
      />
    </>
  )
}
