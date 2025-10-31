import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vulcanizare București | KRS SERVICE AUTO',
  description: 'Reparații anvelope, montaj/demontaj și echilibrare roți. Servicii rapide de vulcanizare în București. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vulcanizare' },
  openGraph: {
    title: 'Vulcanizare București | KRS SERVICE AUTO',
    description: 'Servicii complete de vulcanizare și întreținere anvelope.',
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

