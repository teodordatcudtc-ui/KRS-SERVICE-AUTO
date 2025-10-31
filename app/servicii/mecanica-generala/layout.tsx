import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mecanică Generală București - Reparații Motor și Transmisie | KRS',
  description: 'Servicii complete de mecanică generală în București: reparații motor, frâne, suspensie, transmisie și sistem de răcire. Mecanici calificați și piese originale. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/mecanica-generala' },
  openGraph: {
    title: 'Mecanică Generală București - Reparații Motor și Transmisie | KRS',
    description: 'Reparații mecanice profesionale pentru toate mărcile.',
    url: 'https://krs-service-auto.ro/servicii/mecanica-generala'
  }
}

export default function MecanicaGeneralaLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

