import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Încărcare Freon AC București - Servicii Climatizare Auto | KRS SERVICE AUTO',
  description: 'Încărcare și verificare completă sistem climatizare auto în București: vidare instalație, încărcare agent frigorific, test etanșeitate și performanță răcire. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/incarcare-freon' },
  openGraph: {
    title: 'Încărcare Freon AC București - Servicii Climatizare Auto | KRS SERVICE AUTO',
    description: 'Servicii complete pentru aer condiționat auto.',
    url: 'https://krs-service-auto.ro/servicii/incarcare-freon'
  }
}

export default function IncarcareFreonLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

