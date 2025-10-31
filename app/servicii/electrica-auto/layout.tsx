import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electrică auto București | KRS SERVICE AUTO',
  description: 'Diagnosticare și reparații pentru sistemele electrice și electronice. Alternator, demaror, senzori, module. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/electrica-auto' },
  openGraph: {
    title: 'Electrică auto București | KRS SERVICE AUTO',
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

