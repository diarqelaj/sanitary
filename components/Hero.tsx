'use client'

import { useState } from 'react'
import { PhoneModal } from './PhoneModal'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'

const PHONE_NUMBER = '+4920812345678'
const PHONE_DISPLAY = '+49 208 123 456 78'
const WHATSAPP_NUMBER = '4920812345678'

export function Hero() {
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

  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(t.whatsapp_message)}`

  const ctaButtons = [
    {
      label: t.hero.cta_whatsapp,
      href: whatsappHref,
      external: true,
      onClick: undefined as undefined | (() => void),
      className:
        'group inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#22c35e] text-white px-7 py-4 rounded-full font-medium text-base transition-all duration-200 shadow-lg shadow-green-500/20 hover:shadow-green-500/30 hover:-translate-y-0.5',
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
    },
    {
      label: t.hero.cta_call,
      href: undefined as undefined | string,
      external: false,
      onClick: handlePhoneClick,
      className:
        'inline-flex items-center gap-3 bg-blue-700 cursor-pointer hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white px-7 py-4 rounded-full font-medium text-base transition-all duration-200 shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 hover:-translate-y-0.5',
      icon: (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-5 h-5 flex-shrink-0"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
        </svg>
      ),
    },
  ]

  return (
    <>
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
        {/* Subtle background pattern */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />

        <div className="max-w-6xl mx-auto px-6 pt-28 pb-24 w-full">
          <div className="max-w-3xl">
            {/* Emergency badge */}
            <div className="inline-flex items-center gap-2 mb-8">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-600" />
              </span>
              <span className="text-sm font-medium text-red-600 dark:text-red-400 tracking-wide">
                {t.hero.badge}
              </span>
            </div>

            {/* Main headline */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl font-semibold leading-[1.05] tracking-tight text-zinc-900 dark:text-stone-100 mb-6">
              {t.hero.headline1}
              <br />
              <span className="text-blue-700 dark:text-blue-400">{t.hero.headline2}</span>
            </h1>

            {/* Subline */}
            <p className="text-xl sm:text-2xl text-zinc-500 dark:text-zinc-400 leading-relaxed max-w-xl mb-12 font-light">
              {t.hero.subline}
            </p>

            {/* CTAs — mirrors ContactSection's a/button conditional pattern */}
            <div className="flex flex-wrap gap-4">
              {ctaButtons.map((btn, i) =>
                btn.href ? (
                  <a
                    key={i}
                    href={btn.href}
                    target={btn.external ? '_blank' : undefined}
                    rel={btn.external ? 'noopener noreferrer' : undefined}
                    className={btn.className}
                  >
                    {btn.icon}
                    {btn.label}
                  </a>
                ) : (
                  <button key={i} onClick={btn.onClick} className={btn.className}>
                    {btn.icon}
                    {btn.label}
                  </button>
                )
              )}
            </div>

            {/* Trust signal */}
            <div className="mt-16 flex items-center gap-4 text-sm text-zinc-400 dark:text-zinc-500">
              <div className="flex -space-x-2">
                {['bg-blue-200', 'bg-green-200', 'bg-amber-200', 'bg-rose-200'].map((c, i) => (
                  <div
                    key={i}
                    className={`w-8 h-8 rounded-full ${c} border-2 border-stone-50 dark:border-zinc-950 flex items-center justify-center`}
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-zinc-500">
                      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                    </svg>
                  </div>
                ))}
              </div>
              <span>500+ zufriedene Kunden in Oberhausen & Umgebung</span>
            </div>
          </div>
        </div>

        <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-stone-50 dark:from-zinc-950 to-transparent z-10 w-32" />
          <div className="w-full h-full relative">
            <Image
              src="/plumbing.jpg"
              alt="Klempner Oberhausen"
              fill
              className="object-cover"
              style={{ objectPosition: '60% center' }}
              sizes="45vw"                       
              priority
              quality={100}
            />
          </div>
        </div>
      </section>

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