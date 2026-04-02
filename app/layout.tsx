import type { Metadata } from 'next'
import { Fraunces, DM_Sans } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'
import Script from 'next/script' 
import { SmoothScroll } from '@/components/SmoothScroll'

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-fraunces',
  display: 'swap',
  axes: ['SOFT', 'WONK'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'Klempner Oberhausen | Notdienst 24/7 | Sanitär & Heizung',
    template: '%s | Klempner Oberhausen',
  },
  description:
    'Ihr zuverlässiger Klempner in Oberhausen. Notdienst 24/7 verfügbar. Rohrreinigung, Heizungsinstallation, Badsanierung. Schnell, fair, professionell.',
  keywords: [
    'Klempner Oberhausen',
    'Sanitär Oberhausen',
    'Notdienst Klempner',
    'Rohrbruch Oberhausen',
    'Heizung Oberhausen',
    'Rohrreinigung Oberhausen',
    'Badsanierung Oberhausen',
    'Klempner Notdienst NRW',
    'Sanitär Essen',
    'Klempner Mülheim',
  ],
   icons: {
    icon: '/favicon.webp',
   
  },
  authors: [{ name: 'Sanitär Oberhausen' }],
  creator: 'Sanitär Oberhausen',
  openGraph: {
    title: 'Klempner Oberhausen | Notdienst 24/7',
    description:
      'Ihr zuverlässiger Klempner in Oberhausen. Notdienst rund um die Uhr. Rohrreinigung, Heizung, Badsanierung.',
    type: 'website',
    locale: 'de_DE',
    siteName: 'Sanitär Oberhausen',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Klempner Oberhausen | Notdienst 24/7',
    description: 'Ihr zuverlässiger Klempner in Oberhausen.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://sanitaer-oberhausen.de',
  },
}

// JSON-LD structured data for LocalBusiness
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Plumber',
  name: 'Sanitär Oberhausen',
  description:
    'Ihr zuverlässiger Klempner in Oberhausen. Notdienst 24/7 verfügbar.',
  url: 'https://sanitaer-oberhausen.de',
  telephone: '+4920812345678',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Oberhausen',
    addressRegion: 'Nordrhein-Westfalen',
    postalCode: '46045',
    addressCountry: 'DE',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.4695,
    longitude: 6.8625,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  priceRange: '€€',
  areaServed: ['Oberhausen', 'Essen', 'Mülheim an der Ruhr', 'Duisburg'],
  serviceType: [
    'Rohrreinigung',
    'Heizungsinstallation',
    'Badsanierung',
    'Notdienst',
    'Lecksuche',
    'Sanitärinstallation',
  ],
}


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="de"
      suppressHydrationWarning
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      <body className="font-sans bg-stone-50 dark:bg-zinc-950 text-zinc-900 dark:text-stone-100 antialiased">
        <Providers>{children}</Providers>
         <SmoothScroll />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  )
}