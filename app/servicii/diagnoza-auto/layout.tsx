import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnoză Auto București - Diagnosticare Computerizată | KRS SERVICE AUTO',
  description: 'Diagnosticare auto computerizată completă în București cu echipamente moderne Bosch. Identificăm precis problemele motorului, ABS, ESP și sistemelor electronice. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/diagnoza-auto' },
  openGraph: {
    title: 'Diagnoză Auto București - Diagnosticare Computerizată | KRS SERVICE AUTO',
    description: 'Diagnosticare auto computerizată completă în București cu echipamente moderne. Identificăm precis problemele motorului și sistemelor electronice.',
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

