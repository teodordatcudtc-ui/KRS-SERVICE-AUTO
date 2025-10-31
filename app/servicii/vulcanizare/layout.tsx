import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vulcanizare București | KRS',
  description: 'Reparații anvelope, montaj și echilibrare roți. Vulcanizare rapidă. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vulcanizare' },
  openGraph: {
    title: 'Vulcanizare București | KRS',
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

