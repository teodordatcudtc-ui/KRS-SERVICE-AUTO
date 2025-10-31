import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii Auto București - Diagnoză, Mecanică, Electrică | KRS',
  description: 'Gamă completă de servicii auto în București: diagnoză computerizată, mecanică generală, electrică, vopsitorie, tinichigerie, vulcanizare și încărcare freon. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii' },
  openGraph: {
    title: 'Servicii Auto București - Diagnoză, Mecanică, Electrică | KRS',
    description: 'Gamă completă de servicii auto în București: diagnoză, mecanică, electrică, vopsitorie, vulcanizare. Programează: 0769393545.',
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

