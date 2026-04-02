'use client'

import { useLanguage } from '@/context/LanguageContext'
import {
  AlertCircle,
  Wrench,
  Flame,
  Bath,
  SearchCheck,
  Droplets,
} from 'lucide-react'

const serviceIcons = [AlertCircle, Wrench, Flame, Bath, SearchCheck, Droplets]

// Service card accent classes cycling through a few colours
const accentClasses = [
  'text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20',
  'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20',
  'text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20',
  'text-teal-600 dark:text-teal-400 bg-teal-50 dark:bg-teal-900/20',
  'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20',
  'text-cyan-600 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-900/20',
]

export function Services() {
  const { t } = useLanguage()

  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="max-w-xl mb-16">
          <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
            {t.nav.services}
          </span>
          <h2 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 mb-4 leading-tight">
            {t.services.title}
          </h2>
          <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {t.services.items.map((service, i) => {
            const Icon = serviceIcons[i]
            const accent = accentClasses[i]
            const isEmergency = i === 0

            return (
              <div
                key={i}
                className={`group relative rounded-2xl p-7 border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  isEmergency
                    ? 'bg-red-600/70 dark:bg-red-600/70 border-red-600/70 dark:border-red-600/70 text-white shadow-lg shadow-red-500/20'
                    : 'bg-white dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 hover:shadow-zinc-200/50 dark:hover:shadow-zinc-900/50'
                }`}
              >
                {/* Icon */}
                <div
                  className={`w-11 h-11 rounded-xl flex items-center justify-center mb-5 ${
                    isEmergency
                      ? 'bg-white/20 text-white'
                      : accent
                  }`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                <h3
                  className={`font-semibold text-lg mb-2 ${
                    isEmergency
                      ? 'text-white'
                      : 'text-zinc-900 dark:text-stone-100'
                  }`}
                >
                  {service.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    isEmergency
                      ? 'text-red-100'
                      : 'text-zinc-500 dark:text-zinc-400'
                  }`}
                >
                  {service.description}
                </p>

                {isEmergency && (
                  <div className="mt-5 flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75" />
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-white" />
                    </span>
                    <span className="text-xs font-medium text-red-100 tracking-wide">
                      NOTDIENST AKTIV
                    </span>
                  </div>
                )}
              </div>
            )
          })}
        </div>

        {/* Stats */}
        <div className="border-t border-zinc-200 dark:border-zinc-800 pt-16">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {t.stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-zinc-500 dark:text-zinc-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
