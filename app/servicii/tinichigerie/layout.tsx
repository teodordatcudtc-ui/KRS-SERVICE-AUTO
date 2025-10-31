import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Tinichigerie Auto București | KRS SERVICE AUTO',
  description: 'Tinichigerie în București: îndreptare caroserie, reparații și pregătire pentru vopsire. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/tinichigerie' },
  openGraph: {
    title: 'Tinichigerie Auto București | KRS SERVICE AUTO',
    description: 'Tinichigerie în București: îndreptare caroserie și reparații. Programează: 0769393545.',
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

