import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import FloatingAppointmentButton from '@/components/FloatingAppointmentButton'
import BreadcrumbJsonLd from '@/components/BreadcrumbJsonLd'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

export const metadata: Metadata = {
  title: 'Service auto București | KRS SERVICE AUTO',
  description: 'Service auto profesionist în București (Str. Toporași 69). Diagnoză computerizată, mecanică, vulcanizare, vopsitorie, tinichigerie și electrică. Programează la 0769393545.',
  keywords: 'service auto bucuresti, reparații auto, vulcanizare, montaj anvelope, diagnoză auto, KRS SERVICE AUTO',
  authors: [{ name: 'KRS SERVICE AUTO' }],
  creator: 'KRS SERVICE AUTO',
  publisher: 'KRS SERVICE AUTO',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://krs-service-auto.ro'),
  alternates: {
    canonical: 'https://krs-service-auto.ro/',
  },
  openGraph: {
    title: 'Service auto București | KRS SERVICE AUTO',
    description: 'Service auto profesionist în București. Diagnoză, mecanică, vulcanizare, vopsitorie, tinichigerie și electrică. Programează: 0769393545.',
    url: 'https://krs-service-auto.ro',
    siteName: 'KRS SERVICE AUTO',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'KRS SERVICE AUTO - Service Auto București',
      },
    ],
    locale: 'ro_RO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service auto București | KRS SERVICE AUTO',
    description: 'Service auto profesionist în București. Diagnoză, mecanică, vulcanizare, vopsitorie, tinichigerie și electrică.',
    images: ['/og-image.jpg'],
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
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ro" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#1461D9" />
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://krs-service-auto.ro/",
              "name": "KRS SERVICE AUTO",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://krs-service-auto.ro/servicii?search={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "KRS SERVICE AUTO",
              "description": "Service auto profesionist în București. Oferim servicii complete de reparații, diagnoză, vulcanizare și montaj anvelope.",
              "url": "https://krs-service-auto.ro",
              "telephone": "0769393545",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Strada Toporași 69",
                "addressLocality": "București",
                "postalCode": "052034",
                "addressCountry": "RO"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "44.3935111",
                "longitude": "26.08001009678955"
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  "opens": "09:00",
                  "closes": "18:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Saturday",
                  "opens": "09:00",
                  "closes": "14:00"
                }
              ],
              "priceRange": "$$",
              "serviceArea": {
                "@type": "GeoCircle",
                "geoMidpoint": {
                  "@type": "GeoCoordinates",
                  "latitude": "44.3935111",
                  "longitude": "26.08001009678955"
                },
                "geoRadius": "50000"
              },
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Servicii Auto",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Diagnoză Auto"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Vulcanizare"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Mecanică Generală"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Revizii"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Montaj Anvelope"
                    }
                  }
                ]
              }
            })
          }}
        />
      </head>
      <body className="min-h-screen bg-gray-50">
        <BreadcrumbJsonLd />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <FloatingAppointmentButton />
      </body>
    </html>
  )
}
