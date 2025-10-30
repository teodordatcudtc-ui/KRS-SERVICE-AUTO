'use client'

import { usePathname } from 'next/navigation'
import { useMemo } from 'react'

const baseUrl = 'https://krs-service-auto.ro'

export default function BreadcrumbJsonLd() {
  const pathname = usePathname()

  const items = useMemo(() => {
    const segments = (pathname || '/').split('/').filter(Boolean)
    const crumbs = [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Acasă',
        item: baseUrl + '/',
      },
    ] as any[]

    let currentPath = ''
    segments.forEach((seg, index) => {
      currentPath += `/${seg}`
      const name = decodeURIComponent(seg)
        .replace(/-/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
      crumbs.push({
        '@type': 'ListItem',
        position: index + 2,
        name,
        item: baseUrl + currentPath,
      })
    })
    return crumbs
  }, [pathname])

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items,
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}


