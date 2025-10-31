import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Încărcare freon AC București | KRS SERVICE AUTO',
  description: 'Încărcare și verificare sistem climatizare auto: vidare, agent frigorific, test etanșeitate și performanță. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/incarcare-freon' },
  openGraph: {
    title: 'Încărcare freon AC București | KRS SERVICE AUTO',
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

