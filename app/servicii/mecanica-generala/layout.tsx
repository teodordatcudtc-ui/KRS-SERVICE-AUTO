import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mecanică generală București | KRS SERVICE AUTO',
  description: 'Reparații complete motor, frâne, suspensie și transmisie. Servicii mecanice profesionale în București. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/mecanica-generala' },
  openGraph: {
    title: 'Mecanică generală București | KRS SERVICE AUTO',
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

