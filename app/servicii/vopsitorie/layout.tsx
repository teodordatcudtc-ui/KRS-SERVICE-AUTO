import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vopsitorie Auto București | KRS SERVICE AUTO',
  description: 'Vopsitorie auto în București cu cabină modernă. Potrivire culoare, polish și protecție ceramică. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vopsitorie' },
  openGraph: {
    title: 'Vopsitorie Auto București | KRS SERVICE AUTO',
    description: 'Vopsitorie auto în București: potrivire culoare, polish și protecție. Programează: 0769393545.',
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

