'use client'

import Image from 'next/image'
import { ShieldCheck, Clock4, ThumbsUp, Wrench } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const pillarIcons = [Clock4, ShieldCheck, Wrench, ThumbsUp]

const pillarColors = [
  'text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/20',
  'text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20',
  'text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20',
  'text-violet-600 dark:text-violet-400 bg-violet-50 dark:bg-violet-900/20',
]

export function WhyUs() {
  const { t } = useLanguage()
  const w = t.whyUs

  return (
    <section className="py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">

        {/* ── Top: heading + intro text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          {/* Text side */}
          <div>
            <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
              {w.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 leading-tight mb-6">
              {w.heading1}{' '}
              <span className="text-blue-700 dark:text-blue-400">{w.headingHighlight}</span>
              <br />{w.heading2}
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
              {w.para1}
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              {w.para2}
            </p>

            {/* Trust badge row */}
            <div className="flex flex-wrap gap-3">
              {w.badges.map((badge) => (
                <span
                  key={badge}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-zinc-600 dark:text-zinc-400 bg-zinc-100 dark:bg-zinc-800 px-3 py-1.5 rounded-full border border-zinc-200 dark:border-zinc-700"
                >
                  <ShieldCheck className="w-3 h-3 text-blue-700 dark:text-blue-400" />
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Image side — tall portrait */}
          <div className="relative">
            {/* Main image */}
            <div className="relative h-[480px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-2xl shadow-zinc-300/30 dark:shadow-black/40">
              <Image
                src="/technician-checking-heating-system-boiler-room.jpg"
                alt="Sanitär Fachmann bei der Arbeit"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {/* Subtle overlay for contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            </div>

            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl px-6 py-4">
              <p className="font-display text-3xl font-semibold text-zinc-900 dark:text-stone-100">
                {w.statValue}<span className="text-blue-700 dark:text-blue-400">%</span>
              </p>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-0.5">
                {w.statLabel}
              </p>
            </div>

            {/* Floating years card */}
            <div className="absolute -top-4 -right-4 bg-blue-700 dark:bg-blue-600 rounded-2xl shadow-xl px-5 py-3">
              <p className="font-display text-2xl font-semibold text-white">
                {w.yearsValue}
              </p>
              <p className="text-xs text-blue-100 mt-0.5">{w.yearsLabel}</p>
            </div>
          </div>
        </div>

        {/* ── Four pillars ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {w.pillars.map((p, i) => {
            const Icon = pillarIcons[i]
            return (
              <div
                key={i}
                className="bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 p-6 hover:-translate-y-1 hover:shadow-lg transition-all duration-300"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-4 ${pillarColors[i]}`}>
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="font-semibold text-base text-zinc-900 dark:text-stone-100 mb-2">
                  {p.title}
                </h3>
                <p className="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {p.body}
                </p>
              </div>
            )
          })}
        </div>

        {/* ── Bottom: second image + detailed text ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[400px] rounded-3xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 shadow-2xl shadow-zinc-300/30 dark:shadow-black/40">
              <Image
                src="/plumbing-first-visit.jpg"
                alt="Rohrinstallation Oberhausen"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Floating response card */}
            <div className="absolute -bottom-5 -right-5 bg-white dark:bg-zinc-900 rounded-2xl border border-zinc-200 dark:border-zinc-800 shadow-xl px-6 py-4 flex items-center gap-3">
              <span className="relative flex h-3 w-3 flex-shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500" />
              </span>
              <div>
                <p className="text-sm font-semibold text-zinc-900 dark:text-stone-100">
                  {w.approach.badgeActive}
                </p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">
                  {w.approach.badgeTime}
                </p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-semibold tracking-widest text-blue-700 dark:text-blue-400 uppercase mb-3 block">
              {w.approach.eyebrow}
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-semibold text-zinc-900 dark:text-stone-100 leading-tight mb-6">
              {w.approach.heading1}
              <br />
              <span className="text-blue-700 dark:text-blue-400">{w.approach.headingHighlight}</span>
            </h2>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-5">
              {w.approach.para1}
            </p>
            <p className="text-lg text-zinc-500 dark:text-zinc-400 leading-relaxed mb-8">
              {w.approach.para2}
            </p>

            {/* Checklist */}
            <ul className="space-y-3">
              {w.approach.checklist.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                  <span className="mt-1.5 w-4 h-4 rounded-full bg-blue-700 dark:bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="w-2.5 h-2.5">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}