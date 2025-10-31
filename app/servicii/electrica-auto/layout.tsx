import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electrică auto București | KRS',
  description: 'Reparații electrice și electronice: alternator, demaror, senzori. Diagnosticare profesională. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/electrica-auto' },
  openGraph: {
    title: 'Electrică auto București | KRS',
    description: 'Diagnoză și intervenții electrice profesionale.',
    url: 'https://krs-service-auto.ro/servicii/electrica-auto'
  }
}

export default function ElectricaAutoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

