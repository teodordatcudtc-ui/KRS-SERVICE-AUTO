import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mecanică Generală București | KRS SERVICE AUTO',
  description: 'Reparații mecanică generală în București: motor, frâne, suspensie și transmisie. Mecanici calificați. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/mecanica-generala' },
  openGraph: {
    title: 'Mecanică Generală București | KRS SERVICE AUTO',
    description: 'Reparații mecanică generală în București: motor, frâne și transmisie. Programează: 0769393545.',
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


