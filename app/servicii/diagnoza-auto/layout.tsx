import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Diagnoză Auto București | KRS SERVICE AUTO',
  description: 'Diagnosticare auto computerizată în București. Identificăm problemele motorului, ABS și sistemelor electronice. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/diagnoza-auto' },
  openGraph: {
    title: 'Diagnoză Auto București | KRS SERVICE AUTO',
    description: 'Diagnosticare auto computerizată în București. Identificăm problemele motorului și sistemelor electronice. Programează: 0769393545.',
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

