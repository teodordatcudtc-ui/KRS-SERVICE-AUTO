'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import { Icons } from '@/components/IconSet'

const allServices = [
  {
    icon: <Icons.Wrench className="w-6 h-6" />,
    title: 'Diagnoză Auto',
    description: 'Diagnosticare completă cu echipamente moderne pentru identificarea precisă a problemelor. Folosim cele mai noi tehnologii pentru a detecta orice defecțiune înainte ca aceasta să devină o problemă majoră.',
    duration: '30-60 min',
    price: 'De la 50 lei',
    features: [
      'Diagnostic computerizat complet',
      'Verificare sistem ABS și ESP',
      'Testare emisii poluante',
      'Verificare sistem de climatizare',
      'Diagnosticare erori motor',
      'Raport detaliat cu recomandări'
    ],
    category: 'diagnostice'
  },
  {
    icon: <Icons.Tire className="w-6 h-6" />,
    title: 'Vulcanizare',
    description: 'Reparații de anvelope și camere cu materiale de calitate superioară. Serviciul nostru de vulcanizare garantează siguranța ta pe drum prin reparații durabile și profesionale.',
    duration: '15-30 min',
    price: 'De la 25 lei',
    features: [
      'Reparație cameră de aer',
      'Reparație anvelopă (până la 6mm)',
      'Montaj/Demontaj anvelope',
      'Verificare presiune aer',
      'Echilibrare roți',
      'Depozitare anvelope sezoniere'
    ],
    category: 'anvelope'
  },
  {
    icon: <Icons.Settings className="w-6 h-6" />,
    title: 'Mecanică Generală',
    description: 'Reparații complete la motor, transmisie, frâne și alte componente importante. Echipa noastră de mecanici calificați rezolvă orice problemă mecanică cu profesionalism și atenție la detalii.',
    duration: '1-4 ore',
    price: 'De la 100 lei',
    features: [
      'Reparații motor și transmisie',
      'Servisare sistem de frânare',
      'Reparații suspensie',
      'Schimbare distribuție',
      'Reparații sistem de răcire',
      'Verificare și reglaje generale'
    ],
    category: 'mecanica'
  },
  {
    icon: <Icons.CheckCircle className="w-6 h-6" />,
    title: 'Revizii și Întreținere',
    description: 'Revizii periodice și întreținere preventivă pentru siguranța ta pe drum. Respectăm programul de întreținere recomandat de producător pentru a menține vehiculul în stare optimă.',
    duration: '2-3 ore',
    price: 'De la 200 lei',
    features: [
      'Schimb ulei motor și filtru',
      'Schimb filtru aer și combustibil',
      'Verificare sistem de frânare',
      'Verificare suspensie și direcție',
      'Testare baterie și alternator',
      'Verificare iluminat și semnalizare'
    ],
    category: 'intretinere'
  },
  {
    icon: <Icons.Car className="w-6 h-6" />,
    title: 'Montaj Anvelope',
    description: 'Montaj și echilibrare anvelope de vară și iarnă cu echipamente profesionale. Oferim servicii complete de montaj, echilibrare și depozitare anvelope.',
    duration: '30-45 min',
    price: 'De la 40 lei',
    features: [
      'Montaj/Demontaj anvelope',
      'Echilibrare roți profesionale',
      'Depozitare anvelope sezoniere',
      'Verificare uzură anvelope',
      'Reglare geometrie roți',
      'Servicii de urgență 24/7'
    ],
    category: 'anvelope'
  },
  {
    icon: <Icons.Shield className="w-6 h-6" />,
    title: 'ITP și Inspecții',
    description: 'Pregătire pentru ITP și inspecții tehnice periodice. Te ajutăm să treci cu succes inspecția tehnică prin verificări complete și reparații necesare.',
    duration: '1-2 ore',
    price: 'De la 150 lei',
    features: [
      'Pregătire completă pentru ITP',
      'Verificare toate sistemele',
      'Reparații pentru trecerea ITP',
      'Consultanță tehnică',
      'Documentație necesară',
      'Suport pentru re-inspecție'
    ],
    category: 'itp'
  }
]

const categories = [
  { id: 'all', name: 'Toate serviciile' },
  { id: 'diagnostice', name: 'Diagnostice' },
  { id: 'anvelope', name: 'Anvelope' },
  { id: 'mecanica', name: 'Mecanică' },
  { id: 'intretinere', name: 'Întreținere' },
  { id: 'itp', name: 'ITP' }
]

export default function ServiciiPage() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchTerm, setSearchTerm] = useState('')

  const filteredServices = allServices.filter(service => {
    const matchesCategory = selectedCategory === 'all' || service.category === selectedCategory
    const matchesSearch = service.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         service.description.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Serviciile Noastre
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Oferim o gamă completă de servicii auto profesionale pentru toate nevoile tale
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="w-full lg:w-1/3">
              <div className="relative">
                <Icons.Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Caută servicii..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                />
              </div>
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-blue-primary text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service, index) => (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="h-full"
                >
                  <ServiceCard {...service} className="h-full flex flex-col" />
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Icons.Search className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Nu am găsit servicii
              </h3>
              <p className="text-gray-500">
                Încearcă să modifici criteriile de căutare
              </p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-navy">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ai Nevoie de Unul Din Aceste Servicii?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Contactează-ne pentru o programare rapidă și un serviciu de calitate!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="tel:0769393545" 
                size="lg"
                className="bg-blue-primary hover:bg-blue-accent"
              >
                <Icons.Phone className="w-5 h-5 mr-2" />
                0769393545
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Programează online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
