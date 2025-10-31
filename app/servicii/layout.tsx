import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Servicii auto București | KRS SERVICE AUTO',
  description: 'Diagnoză, mecanică, electrică, vopsitorie, tinichigerie, vulcanizare și încărcare freon în București. Programează rapid: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii' },
  openGraph: {
    title: 'Servicii auto București | KRS SERVICE AUTO',
    description: 'Gamă completă de servicii auto în București. Programează: 0769393545.',
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

