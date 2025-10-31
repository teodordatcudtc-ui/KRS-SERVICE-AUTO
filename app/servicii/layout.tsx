import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii Auto București | KRS SERVICE AUTO',
  description: 'Servicii auto complete în București: diagnoză, mecanică, electrică, vopsitorie și vulcanizare. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii' },
  openGraph: {
    title: 'Servicii Auto București | KRS SERVICE AUTO',
    description: 'Servicii auto complete în București: diagnoză, mecanică, electrică și vopsitorie. Programează: 0769393545.',
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

