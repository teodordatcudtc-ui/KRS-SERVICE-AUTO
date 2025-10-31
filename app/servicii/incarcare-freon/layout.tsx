import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Încărcare Freon AC București | KRS SERVICE AUTO',
  description: 'Încărcare și verificare climatizare auto în București: vidare, agent frigorific și test etanșeitate. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/incarcare-freon' },
  openGraph: {
    title: 'Încărcare Freon AC București | KRS SERVICE AUTO',
    description: 'Încărcare și verificare climatizare auto în București. Programează: 0769393545.',
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


