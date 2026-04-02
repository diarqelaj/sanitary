'use client'

import { useEffect } from 'react'
import { X, Smartphone } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { useLenis } from 'lenis/react' // 1. Import the hook

interface PhoneModalProps {
  open: boolean
  onClose: () => void
  phoneNumber: string
  displayNumber: string
  isMobile: boolean
}

export function PhoneModal({
  open,
  onClose,
  phoneNumber,
  displayNumber,
  isMobile,
}: PhoneModalProps) {
  const { t } = useLanguage()
  const lenis = useLenis() // 2. Initialize the Lenis instance

  // 3. Control Lenis directly instead of touching body styles
  useEffect(() => {
    if (!lenis) return

    if (open) {
      lenis.stop()
    } else {
      lenis.start()
    }

    // Cleanup: ensure scrolling is resumed if component unmounts
    return () => {
      lenis.start()
    }
  }, [open, lenis])

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [onClose])

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />

      <div
        className="relative w-full max-w-sm bg-white dark:bg-zinc-900 rounded-3xl shadow-2xl p-8 animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="w-14 h-14 rounded-2xl bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center mb-5 mx-auto">
          <Smartphone className="w-7 h-7 text-blue-700 dark:text-blue-400" />
        </div>

        <h2 className="font-display text-2xl font-semibold text-zinc-900 dark:text-stone-100 text-center mb-2">
          {t.phone_modal.title}
        </h2>

        <p className="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-6 leading-relaxed">
          {isMobile
            ? t.phone_modal.hint_mobile
            : t.phone_modal.hint_desktop}
        </p>

        <a
          href={`tel:${phoneNumber}`}
          className="flex items-center justify-center gap-3 w-full bg-blue-700 hover:bg-blue-800 dark:bg-blue-600 dark:hover:bg-blue-500 text-white py-4 px-6 rounded-2xl font-semibold text-lg transition-colors mb-3"
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.44 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
          </svg>
          {displayNumber}
        </a>

        <button
          onClick={onClose}
          className="w-full py-2.5 text-sm text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 transition-colors"
        >
          {t.phone_modal.close}
        </button>
      </div>
    </div>
  )
}