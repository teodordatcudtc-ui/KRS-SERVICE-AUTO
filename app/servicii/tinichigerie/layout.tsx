import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tinichigerie Auto București - Îndreptare Caroserie | KRS SERVICE AUTO',
  description: 'Servicii complete de tinichigerie în București: îndreptare fără vopsire (PDR), reparații caroserie, înlocuire și aliniere elemente. Pregătire profesională pentru vopsire. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/tinichigerie' },
  openGraph: {
    title: 'Tinichigerie Auto București - Îndreptare Caroserie | KRS SERVICE AUTO',
    description: 'Reparații precise și durabile pentru caroserie.',
    url: 'https://krs-service-auto.ro/servicii/tinichigerie'
  }
}

export default function TinichigerieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

