import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Electrică Auto București | KRS SERVICE AUTO',
  description: 'Reparații electrică auto în București: alternator, demaror, senzori și module electronice. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/electrica-auto' },
  openGraph: {
    title: 'Electrică Auto București | KRS SERVICE AUTO',
    description: 'Reparații electrică auto în București: alternator, demaror și senzori. Programează: 0769393545.',
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


