import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electrică Auto București - Reparații Electrice și Electronice | KRS',
  description: 'Servicii complete de electrică auto în București: reparare alternator, demaror, senzori, module electronice și instalație electrică. Diagnosticare profesională cu echipamente moderne. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/electrica-auto' },
  openGraph: {
    title: 'Electrică Auto București - Reparații Electrice și Electronice | KRS',
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

