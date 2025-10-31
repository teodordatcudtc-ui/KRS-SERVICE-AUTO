import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vopsitorie auto București | KRS',
  description: 'Vopsitorie profesională în cabină, potrivire culoare computerizată. Finisaje premium. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vopsitorie' },
  openGraph: {
    title: 'Vopsitorie auto București | KRS',
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

