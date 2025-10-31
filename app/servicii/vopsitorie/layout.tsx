import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vopsitorie Auto București - Vopsire în Cabină Profesională | KRS',
  description: 'Vopsitorie auto profesională în București cu cabină de vopsit modernă. Potrivire culoare computerizată, polish, corecție lac și protecție ceramică. Finisaje premium. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vopsitorie' },
  openGraph: {
    title: 'Vopsitorie Auto București - Vopsire în Cabină Profesională | KRS',
    description: 'Vopsire elemente, polish, corecție lac și protecție.',
    url: 'https://krs-service-auto.ro/servicii/vopsitorie'
  }
}

export default function VopsitorieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

