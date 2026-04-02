'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { useTheme } from 'next-themes'
import { Sun, Moon, Menu, X, ChevronDown } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'
import { languages, Language } from '@/lib/translations'
import Image from 'next/image'

export function Navbar() {
  const { t, language, setLanguage } = useLanguage()
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [langOpen, setLangOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true)
  const handleScroll = () => setScrolled(window.scrollY > 20)
  window.addEventListener('scroll', handleScroll)
  return () => window.removeEventListener('scroll', handleScroll)
}, [])

  const currentLang = languages.find((l) => l.code === language)

  const navLinks = [
    { label: t.nav.home, href: '/' },
    { label: t.nav.services, href: '/#services' },
    { label: t.nav.blog, href: '/blog' },
    { label: t.nav.contact, href: '/#contact' },
  ]

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-stone-50/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200/60 dark:border-zinc-800/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          
          <span className="font-display text-lg font-semibold tracking-tight">
              <Image
                src="/favicon.webp"
                alt="Logo"
                height={32}
                width={32}
                style={{ width: 'auto' }}  // add this
              />
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-stone-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Controls */}
        <div className="flex items-center gap-2">
          {/* Language selector */}
          <div className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm cursor-pointer font-medium text-zinc-600 dark:text-black-300 hover:bg-zinc-100 dark:hover:bg-zinc-300 transition-colors"
              aria-label="Select language"
            >
              <span>{currentLang?.flag}</span>
              <span className="hidden sm:inline uppercase text-xs tracking-wide">
                {language}
              </span>
              <ChevronDown className="w-3 h-3" />
            </button>

            {langOpen && (
              <div className="absolute right-0  cursor-pointer top-full mt-2 w-44 bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 rounded-xl shadow-lg overflow-hidden z-50">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => {
                      setLanguage(lang.code as Language)
                      setLangOpen(false)
                    }}
                    className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors ${
                      language === lang.code
                        ? 'text-blue-700 dark:text-blue-400 font-medium bg-blue-50/50 dark:bg-blue-900/10'
                        : 'text-zinc-700 dark:text-zinc-300'
                    }`}
                  >
                    <span>{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Theme toggle */}
          {mounted && (
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-full cursor-pointer text-zinc-600 dark:text-black-400 hover:bg-zinc-100 dark:hover:bg-zinc-300 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-4 h-4" />
              ) : (
                <Moon className="w-4 h-4" />
              )}
            </button>
          )}

          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-full text-zinc-600 dark:text-zinc-400 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-stone-50/98 dark:bg-zinc-950/98 backdrop-blur-md">
          <div className="max-w-6xl mx-auto px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="px-3 py-2.5 rounded-lg text-sm font-medium text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Backdrop for language dropdown */}
      {langOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setLangOpen(false)}
        />
      )}
    </header>
  )
}
