import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vulcanizare București | KRS SERVICE AUTO',
  description: 'Servicii vulcanizare în București: reparare anvelope, montaj/demontaj, echilibrare roți. Reparații rapide 15-30 minute. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vulcanizare' },
  openGraph: {
    title: 'Vulcanizare București | KRS SERVICE AUTO',
    description: 'Servicii vulcanizare în București: reparare anvelope, montaj și echilibrare. Programează: 0769393545.',
    url: 'https://krs-service-auto.ro/servicii/vulcanizare'
  }
}

export default function VulcanizareLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

