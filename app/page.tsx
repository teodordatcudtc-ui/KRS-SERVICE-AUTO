'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '@/components/Button'
import ServiceCard from '@/components/ServiceCard'
import TestimonialCarousel from '@/components/TestimonialCarousel'
import AnimatedBackground from '@/components/AnimatedBackground'
import AnimatedCard from '@/components/AnimatedCard'
import AnimatedText from '@/components/AnimatedText'
import { Icons } from '@/components/IconSet'

const services = [
  {
    icon: <Icons.Wrench className="w-6 h-6" />,
    title: 'Diagnoză Auto',
    description: 'Diagnosticare completă cu echipamente moderne pentru identificarea precisă a problemelor.',
    duration: '30-60 min',
    price: 'De la 50 lei',
    features: ['Diagnostic computerizat', 'Verificare sistem ABS', 'Testare emisii']
  },
  {
    icon: <Icons.Tire className="w-6 h-6" />,
    title: 'Vulcanizare',
    description: 'Reparații de anvelope și camere cu materiale de calitate superioară.',
    duration: '15-30 min',
    price: 'De la 25 lei',
    features: ['Reparație cameră', 'Reparație anvelopă', 'Montaj/Demontaj']
  },
  {
    icon: <Icons.Settings className="w-6 h-6" />,
    title: 'Mecanică Generală',
    description: 'Reparații complete la motor, transmisie, frâne și alte componente importante.',
    duration: '1-4 ore',
    price: 'De la 100 lei',
    features: ['Reparații motor', 'Servisare frâne', 'Reparații transmisie']
  },
  {
    icon: <Icons.CheckCircle className="w-6 h-6" />,
    title: 'Revizii',
    description: 'Revizii periodice și întreținere preventivă pentru siguranța ta pe drum.',
    duration: '2-3 ore',
    price: 'De la 200 lei',
    features: ['Schimb ulei', 'Filtre', 'Verificare generală']
  },
  {
    icon: <Icons.Car className="w-6 h-6" />,
    title: 'Montaj Anvelope',
    description: 'Montaj și echilibrare anvelope de vară și iarnă cu echipamente profesionale.',
    duration: '30-45 min',
    price: 'De la 40 lei',
    features: ['Montaj/Demontaj', 'Echilibrare', 'Depozitare']
  }
]

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Car Icon Animation */}
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex justify-center mb-8"
            >
              <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Icons.Car className="w-12 h-12 text-white" />
              </div>
            </motion.div>

            <AnimatedText 
              type="typing" 
              className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white leading-tight"
              stagger={0.1}
            >
              KRS SERVICE AUTO
            </AnimatedText>
            
            <AnimatedText 
              type="slide" 
              delay={0.5}
              className="text-xl md:text-2xl text-blue-accent font-medium max-w-3xl mx-auto mt-6"
            >
              Reparații rapide. Calitate garantată.
            </AnimatedText>
            
            <AnimatedText 
              type="fade" 
              delay={0.8}
              className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed mt-4"
            >
              Service auto profesionist în București. Oferim servicii complete de reparații, 
              diagnoză, vulcanizare și montaj anvelope cu echipamente moderne și personal calificat.
            </AnimatedText>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button 
                href="tel:0769393545" 
                size="lg"
                className="text-lg px-8 py-4"
              >
                <Icons.Phone className="w-5 h-5 mr-2" />
                Sună acum: 0769393545
              </Button>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-navy"
              >
                Programează o vizită
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </div>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Serviciile Noastre
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Oferim o gamă completă de servicii auto pentru a-ți menține vehiculul în stare perfectă
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedCard
                key={service.title}
                delay={index * 0.1}
                hoverScale={1.02}
                glowEffect={true}
                className="h-full"
              >
                <ServiceCard {...service} className="h-full flex flex-col" />
              </AnimatedCard>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button href="/servicii" size="lg">
              Vezi toate serviciile
              <Icons.ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              De Ce Să Ne Alegi?
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Peste 20 de ani de experiență și mii de reparații reușite
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                number: '20+',
                label: 'Ani Experiență',
                description: 'Peste două decenii de cunoștințe în domeniul auto',
                icon: <Icons.Award className="w-8 h-8" />
              },
              {
                number: '1000+',
                label: 'Clienți Mulțumiți',
                description: 'Mii de clienți care ne-au ales și ne recomandă',
                icon: <Icons.Users className="w-8 h-8" />
              },
              {
                number: '5000+',
                label: 'Reparații Efectuate',
                description: 'Mii de reparații reușite cu calitate garantată',
                icon: <Icons.Wrench className="w-8 h-8" />
              },
              {
                number: '24/7',
                label: 'Suport Urgență',
                description: 'Disponibili pentru situații de urgență',
                icon: <Icons.Clock className="w-8 h-8" />
              }
            ].map((stat, index) => (
              <AnimatedCard
                key={stat.label}
                delay={index * 0.1}
                hoverScale={1.05}
                glowEffect={true}
                className="text-center group card"
              >
                <div className="w-20 h-20 bg-blue-primary/10 rounded-full flex items-center justify-center text-blue-primary mx-auto mb-4 group-hover:bg-blue-primary group-hover:text-white transition-all duration-300">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-navy mb-2 group-hover:text-blue-primary transition-colors duration-300">
                  {stat.number}
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                  {stat.label}
                </h3>
                <p className="text-gray-text text-sm leading-relaxed">
                  {stat.description}
                </p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Ce Spun Clienții Noștri
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Peste 1000 de clienți mulțumiți ne-au ales pentru serviciile noastre de calitate
            </p>
          </motion.div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white">
              Ai Nevoie de Reparații Auto?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Contactează-ne acum pentru o programare rapidă și un serviciu de calitate!
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
                Programează online
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
