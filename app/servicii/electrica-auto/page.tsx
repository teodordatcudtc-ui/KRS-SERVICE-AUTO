'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/components/Button'
import AnimatedCard from '@/components/AnimatedCard'
import { Icons } from '@/components/IconSet'

export default function ElectricaAutoPage() {
  const serviceData = {
    title: 'Electrică Auto',
    description: 'Diagnosticare și reparații pentru sistemele electrice și electronice ale vehiculului.',
    duration: '1-3 ore',
    price: 'De la 150 lei',
    features: [
      'Diagnosticare erori electrice',
      'Reparații alternator și demaror',
      'Remediere probleme iluminare',
      'Verificare și înlocuire senzori',
      'Reparații instalație electrică',
      'Diagnoză module electronice'
    ],
    process: [
      { step: '1', title: 'Diagnoză', description: 'Scanare și verificare circuitelor electrice' },
      { step: '2', title: 'Identificare', description: 'Localizăm componenta sau circuitul defect' },
      { step: '3', title: 'Reparație', description: 'Intervenim cu înlocuire/reparare componente' },
      { step: '4', title: 'Testare', description: 'Verificăm funcționarea corectă post-reparație' }
    ],
    benefits: [
      'Sisteme electrice fiabile',
      'Pornire sigură și încărcare corectă',
      'Iluminare și siguranță optimă',
      'Reducerea erorilor electronice'
    ],
    equipment: [
      'Scanner OBD-II avansat',
      'Multimetru și osciloscop',
      'Testere senzori și module',
      'Stand test alternator/demaror'
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
                <span>Serviciu Electric</span>
              </div>

              <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                {serviceData.title}
              </h1>
              
              <p className="text-xl text-blue-accent leading-relaxed">
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
                  Înapoi la servicii
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
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/services/electrica-auto.jpg"
                    alt="Diagnoză electrică - KRS SERVICE AUTO"
                    fill
                    className="object-cover"
                    unoptimized
                  />
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
              Ce Include Serviciul
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Intervenții complete pentru sistemele electrice și electronice
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
              Procesul nostru de diagnoză și reparație electrică
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

      {/* Equipment Section */}
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
              Echipamentele Noastre
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Echipamente de diagnoză avansată pentru rezultate precise
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
              Probleme la Electrică?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Diagnoză rapidă și reparație profesională
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
                Rezervă serviciu
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}



