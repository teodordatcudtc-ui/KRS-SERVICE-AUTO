'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import AnimatedCard from '@/components/AnimatedCard'
import { Icons } from '@/components/IconSet'

export default function ReviziePage() {
  const serviceData = {
    title: 'Revizie',
    description: 'Revizie completă și întreținere preventivă pentru vehiculul tău. Asigurăm funcționarea optimă și durabilitatea tuturor sistemelor prin verificări periodice profesionale.',
    duration: '1-2 ore',
    price: 'De la 100 lei',
    features: [
      'Schimb ulei motor și filtru ulei',
      'Verificare și înlocuire filtru aer',
      'Verificare filtru habitaclu',
      'Control nivele lichide (răcire, frână)',
      'Verificare sistem frânare',
      'Inspecție generală vehicul'
    ],
    process: [
      {
        step: '1',
        title: 'Verificare Inițială',
        description: 'Efectuăm o verificare completă a stării generale a vehiculului'
      },
      {
        step: '2',
        title: 'Schimb Ulei și Filtre',
        description: 'Înlocuim uleiul motor și filtrele conform specificațiilor'
      },
      {
        step: '3',
        title: 'Control Sisteme',
        description: 'Verificăm și completăm nivelele de lichide și sistemele principale'
      },
      {
        step: '4',
        title: 'Raport Final',
        description: 'Îți prezentăm un raport detaliat cu starea vehiculului și recomandările noastre'
      }
    ],
    benefits: [
      'Prevenirea defecțiunilor majore',
      'Prelungirea duratei de viață a motorului',
      'Performanță optimă și consum redus',
      'Siguranță sporită pe drum'
    ],
    equipment: [
      'Echipamente moderne de întreținere',
      'Uleiuri și filtre de calitate superioară',
      'Instrumente profesionale de verificare',
      'Accesorii originale și compatibile'
    ]
  }

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-4">
                <Icons.Settings className="w-8 h-8" />
                <span>Serviciu Întreținere</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                {serviceData.title}
              </h1>
              
              <p className="text-base sm:text-xl text-blue-accent leading-relaxed">
                {serviceData.description}
              </p>

              <div className="flex flex-wrap gap-4 text-white/90">
                <div className="flex items-center space-x-2">
                  <Icons.Clock className="w-5 h-5" />
                  <span>{serviceData.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icons.CheckCircle className="w-5 h-5" />
                  <span>{serviceData.price}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button 
                  href="tel:0769393545" 
                  size="lg"
                  className="text-lg px-8 py-4"
                >
                  <Icons.Phone className="w-5 h-5 mr-2" />
                  Programează acum
                </Button>
                <Button 
                  href="/servicii" 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy"
                >
                  Toate serviciile
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-primary/20 to-blue-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.Settings className="w-24 h-24 text-blue-primary mx-auto mb-4" />
                    <p className="text-gray-600">Revizie auto profesională</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Ce Include Revizia
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Servicii complete de întreținere preventivă pentru vehiculul tău
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {serviceData.features.map((feature, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary mx-auto mb-4">
                  <Icons.CheckCircle className="w-6 h-6" />
                </div>
                <p className="font-semibold text-navy mb-2">{feature}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Cum Funcționează
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Procesul nostru de revizie pas cu pas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-primary/10 rounded-full flex items-center justify-center text-blue-primary mx-auto mb-4 group-hover:bg-blue-primary group-hover:text-white transition-all duration-300">
                    <Icons.Settings className="w-8 h-8" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <p className="text-xl font-heading font-semibold text-navy mb-3">
                  {item.title}
                </p>
                <p className="text-gray-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                  Beneficiile Reviziei Periodice
                </h2>
                <p className="text-lg text-gray-text leading-relaxed">
                  O revizie regulată îți oferă multiple avantaje pentru vehiculul tău și siguranța ta pe drum.
                </p>
              </div>

              <div className="space-y-4">
                {serviceData.benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, y: 0 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                      <Icons.CheckCircle className="w-6 h-6" />
                    </div>
                    <div>
                      <p className="font-semibold text-navy mb-1">{benefit}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.CheckCircle className="w-24 h-24 text-green-600 mx-auto mb-4" />
                    <p className="text-gray-600">Beneficii pentru durabilitate</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Materiale și Echipamente
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Folosim doar materiale și echipamente de cea mai înaltă calitate pentru revizie
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {serviceData.equipment.map((item, index) => (
              <AnimatedCard
                key={index}
                delay={index * 0.1}
                className="text-center"
              >
                <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary mx-auto mb-4">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <p className="font-semibold text-navy mb-2">{item}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ai Nevoie de O Revizie?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Contactează-ne acum pentru o revizie completă și întreținere preventivă!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="tel:0769393545" 
                size="lg"
                className="bg-blue-primary text-white hover:bg-blue-accent"
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
                Programează revizie
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

