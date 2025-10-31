import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii auto București | KRS',
  description: 'Reparații auto complete în București: diagnoză, mecanică, electrică, vopsitorie, vulcanizare. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii' },
  openGraph: {
    title: 'Servicii auto București | KRS',
    description: 'Reparații auto complete în București. Programează: 0769393545.',
    url: 'https://krs-service-auto.ro/servicii'
  }
}

export default function ServiciiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

