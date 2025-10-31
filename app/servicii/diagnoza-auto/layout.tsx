import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnoză auto București | KRS',
  description: 'Diagnosticare computerizată cu echipamente moderne. Identificare precisă probleme auto. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/diagnoza-auto' },
  openGraph: {
    title: 'Diagnoză auto București | KRS',
    description: 'Diagnosticare completă cu echipamente moderne în București.',
    url: 'https://krs-service-auto.ro/servicii/diagnoza-auto'
  }
}

export default function DiagnozaAutoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

