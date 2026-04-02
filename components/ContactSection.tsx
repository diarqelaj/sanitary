'use client'

import { useState, useEffect } from 'react'
import { Clock, MapPin, PhoneCall } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { PhoneModal } from './PhoneModal'

const PHONE_NUMBER = '+4920812345678'
const PHONE_DISPLAY = '+49 208 123 456 78'
const WHATSAPP_NUMBER = '4920812345678'
const TELEGRAM_USERNAME = 'sanitaer_oberhausen'

export function ContactSection() {
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
  const telegramHref = `https://t.me/${TELEGRAM_USERNAME}`

  const contactChannels = [
    {
      title: t.contact.whatsapp.title,
      description: t.contact.whatsapp.description,
      cta: t.contact.whatsapp.cta,
      href: whatsappHref,
      external: true,
      onClick: undefined as undefined | (() => void),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      ),
      color: 'bg-[#25D366] hover:bg-[#22c35e] text-white shadow-green-400/20',
      cardAccent: 'border-green-200 dark:border-green-800/40',
      iconBg: 'bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
    {
      title: t.contact.telegram.title,
      description: t.contact.telegram.description,
      cta: t.contact.telegram.cta,
      href: telegramHref,
      external: true,
      onClick: undefined as undefined | (() => void),
      icon: (
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
        </svg>
      ),
      color: 'bg-[#2AABEE] hover:bg-[#25a0dc] text-white shadow-blue-400/20',
      cardAccent: 'border-sky-200 dark:border-sky-800/40',
      iconBg: 'bg-sky-50 dark:bg-sky-900/20 text-sky-600 dark:text-sky-400',
    },
    {
      title: t.contact.phone.title,
      description: t.contact.phone.description,
      cta: t.contact.phone.cta,
      href: undefined as undefined | string,
      external: false,
      onClick: handlePhoneClick,
      icon: <PhoneCall className="w-6 h-6" />,
      color: 'bg-zinc-900 hover:bg-zinc-800 dark:bg-stone-100 dark:hover:bg-stone-200 dark:text-zinc-900 text-white shadow-zinc-900/20',
      cardAccent: 'border-zinc-200 dark:border-zinc-700',
      iconBg: 'bg-zinc-50 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400',
    },
  ]

  return (
    <>
      <section
        id="contact"
        className="py-28 px-6 bg-zinc-50 dark:bg-zinc-900/50"
      >
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-xl mb-16">
            <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
              {t.nav.contact}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 mb-4 leading-tight">
              {t.contact.title}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
              {t.contact.subtitle}
            </p>
          </div>

          {/* Contact cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {contactChannels.map((channel, i) => (
              <div
                key={i}
                className={`bg-white dark:bg-zinc-900 rounded-2xl border p-7 flex flex-col ${channel.cardAccent}`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 ${channel.iconBg}`}
                >
                  {channel.icon}
                </div>
                <h3 className="font-semibold text-lg text-zinc-900 dark:text-stone-100 mb-1.5">
                  {channel.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-6 flex-1">
                  {channel.description}
                </p>

                {channel.href ? (
                  <a
                    href={channel.href}
                    target={channel.external ? '_blank' : undefined}
                    rel={channel.external ? 'noopener noreferrer' : undefined}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-lg ${channel.color}`}
                  >
                    {channel.cta}
                  </a>
                ) : (
                  <button
                    onClick={channel.onClick}
                    className={`inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-medium transition-all duration-200 shadow-lg ${channel.color}`}
                  >
                    {channel.cta}
                  </button>
                )}
              </div>
            ))}
          </div>

          {/* Info row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-10 border-t border-zinc-200 dark:border-zinc-800">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">
                  {t.contact.hours_label}
                </p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.contact.hours_value}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="relative flex h-2.5 w-2.5 mt-1 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500" />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">
                  {t.contact.emergency_label}
                </p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.contact.emergency_value}
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-zinc-400 mt-0.5 flex-shrink-0" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-0.5">
                  {t.contact.area_label}
                </p>
                <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                  {t.contact.area_value}
                </p>
              </div>
            </div>
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
