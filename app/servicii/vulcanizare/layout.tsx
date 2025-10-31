import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Vulcanizare București - Reparații Anvelope și Montaj | KRS SERVICE AUTO',
  description: 'Servicii complete de vulcanizare în București: reparare anvelope, montaj/demontaj, echilibrare roți și depozitare sezonieră. Reparații rapide în 15-30 minute. Programează: 0769393545.',
  alternates: { canonical: 'https://krs-service-auto.ro/servicii/vulcanizare' },
  openGraph: {
    title: 'Vulcanizare București - Reparații Anvelope și Montaj | KRS SERVICE AUTO',
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

