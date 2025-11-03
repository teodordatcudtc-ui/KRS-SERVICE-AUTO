import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Revizie Auto București | KRS SERVICE AUTO',
  description: 'Revizie completă și întreținere preventivă auto în București. Schimb ulei, filtre și verificare completă. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/revizie' },
  openGraph: {
    title: 'Revizie Auto București | KRS SERVICE AUTO',
    description: 'Revizie completă și întreținere preventivă auto în București. Programează: 0769393545.',
    url: 'https://krs-service-auto.ro/servicii/revizie'
  }
}

export default function RevizieLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

