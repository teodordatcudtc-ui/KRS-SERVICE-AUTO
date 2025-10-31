import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tinichigerie auto București | KRS',
  description: 'Îndreptare caroserie, înlocuire elemente, pregătire pentru vopsire. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/tinichigerie' },
  openGraph: {
    title: 'Tinichigerie auto București | KRS',
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

