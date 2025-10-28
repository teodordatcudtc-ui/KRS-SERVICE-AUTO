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
    features: ['Diagnostic computerizat', 'Verificare sistem ABS', 'Testare emisii'],
    href: '/servicii/diagnoza-auto'
  },
  {
    icon: <Icons.Tire className="w-6 h-6" />,
    title: 'Vulcanizare',
    description: 'Reparații de anvelope și camere cu materiale de calitate superioară.',
    duration: '15-30 min',
    price: 'De la 25 lei',
    features: ['Reparație cameră', 'Reparație anvelopă', 'Montaj/Demontaj'],
    href: '/servicii/vulcanizare'
  },
  {
    icon: <Icons.Settings className="w-6 h-6" />,
    title: 'Mecanică Generală',
    description: 'Reparații complete la motor, transmisie, frâne și alte componente importante.',
    duration: '1-4 ore',
    price: 'De la 100 lei',
    features: ['Reparații motor', 'Servisare frâne', 'Reparații transmisie'],
    href: '/servicii/mecanica-generala'
  },
  {
    icon: <Icons.CheckCircle className="w-6 h-6" />,
    title: 'Revizii',
    description: 'Revizii periodice și întreținere preventivă pentru siguranța ta pe drum.',
    duration: '2-3 ore',
    price: 'De la 200 lei',
    features: ['Schimb ulei', 'Filtre', 'Verificare generală'],
    href: '/servicii/revizii'
  },
  {
    icon: <Icons.Car className="w-6 h-6" />,
    title: 'Montaj Anvelope',
    description: 'Montaj și echilibrare anvelope de vară și iarnă cu echipamente profesionale.',
    duration: '30-45 min',
    price: 'De la 40 lei',
    features: ['Montaj/Demontaj', 'Echilibrare', 'Depozitare'],
    href: '/servicii/montaj-anvelope'
  }
]

const HomePage = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center justify-center gradient-hero overflow-hidden py-8 pt-20 sm:pt-24">
        {/* Animated Background */}
        <AnimatedBackground />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left space-y-8"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden sm:inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm"
              >
                <Icons.Award className="w-4 h-4 text-yellow-400" />
                <span>20+ ani experiență • 1000+ clienți mulțumiți</span>
              </motion.div>

              <AnimatedText 
                type="typing" 
                className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
                stagger={0.1}
              >
                KRS SERVICE AUTO
              </AnimatedText>
              
              {/* Mobile-only subtitle */}
              <AnimatedText 
                type="fade" 
                delay={0.3}
                className="sm:hidden text-lg text-white font-medium"
              >
                Reparații rapide • Calitate garantată
              </AnimatedText>
              
              <AnimatedText 
                type="slide" 
                delay={0.5}
                className="hidden sm:block text-xl md:text-2xl text-blue-accent font-medium"
              >
                Reparații rapide. Calitate garantată.
              </AnimatedText>
              
              <AnimatedText 
                type="fade" 
                delay={0.8}
                className="hidden sm:block text-lg text-white/90 leading-relaxed"
              >
                Service auto profesionist în București. Oferim servicii complete de reparații, 
                diagnoză, vulcanizare și montaj anvelope cu echipamente moderne și personal calificat.
              </AnimatedText>

              {/* Features List */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.1 }}
                className="hidden sm:block space-y-3"
              >
                {[
                  'Diagnoză computerizată modernă',
                  'Reparații cu garanție completă',
                  'Piese originale și aftermarket',
                  'Programare online rapidă'
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 text-white/90">
                    <Icons.CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </motion.div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
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

            {/* Right Column - Hero Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Hero Image */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.02, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-primary/20 to-blue-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <Icons.Car className="w-24 h-24 text-blue-primary mx-auto mb-4" />
                      <p className="text-gray-600">Imagine: Atelierul nostru modern</p>
                      <p className="text-sm text-gray-500 mt-2">Echipamente profesionale și personal calificat</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Icons.Award className="w-5 h-5 text-yellow-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">Certificat ISO</div>
                      <div className="text-white/80 text-xs">Calitate garantată</div>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                  <div className="flex items-center space-x-2">
                    <Icons.Clock className="w-5 h-5 text-green-400" />
                    <div>
                      <div className="text-white font-semibold text-sm">Reparații Rapide</div>
                      <div className="text-white/80 text-xs">În aceeași zi</div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Stats Cards - Desktop Grid / Mobile Carousel */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mt-8">
                {[
                  { number: '20+', label: 'Ani Experiență' },
                  { number: '1000+', label: 'Clienți Mulțumiți' },
                  { number: '5000+', label: 'Reparații' },
                  { number: '24/7', label: 'Suport' }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

              {/* Mobile Carousel */}
              <div className="sm:hidden mt-8 overflow-hidden">
                <motion.div
                  className="flex space-x-4"
                  animate={{ x: [0, -100, -200, -300, 0] }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity, 
                    ease: "linear",
                    delay: 2
                  }}
                >
                  {[
                    { number: '20+', label: 'Ani Experiență' },
                    { number: '1000+', label: 'Clienți Mulțumiți' },
                    { number: '5000+', label: 'Reparații' },
                    { number: '24/7', label: 'Suport' }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20 flex-shrink-0 w-32"
                    >
                      <div className="text-xl font-bold text-white">{stat.number}</div>
                      <div className="text-xs text-white/80">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
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
            {services.slice(0, 3).map((service, index) => (
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
          
          {/* Ultimele 2 servicii centrate */}
          <div className="flex justify-center mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl">
              {services.slice(3).map((service, index) => (
                <AnimatedCard
                  key={service.title}
                  delay={(index + 3) * 0.1}
                  hoverScale={1.02}
                  glowEffect={true}
                  className="h-full"
                >
                  <ServiceCard {...service} className="h-full flex flex-col" />
                </AnimatedCard>
              ))}
            </div>
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

      {/* Why Choose Us Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-primary/20 to-blue-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.Car className="w-24 h-24 text-blue-primary mx-auto mb-4" />
                    <p className="text-gray-600">Imagine: Atelierul nostru modern</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-4">
                <div className="flex items-center space-x-2">
                  <Icons.Award className="w-6 h-6 text-yellow-500" />
                  <div>
                    <div className="font-semibold text-navy">Certificat ISO</div>
                    <div className="text-sm text-gray-600">Calitate garantată</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
                  De Ce Să Ne Alegi?
                </h2>
                <p className="text-lg text-gray-text leading-relaxed">
                  Cu peste 20 de ani de experiență în domeniul auto, suntem lideri în 
                  serviciile de reparații și întreținere vehicule în București.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  {
                    icon: <Icons.Shield className="w-6 h-6" />,
                    title: 'Garanție Completă',
                    description: 'Toate reparațiile beneficiază de garanție extinsă'
                  },
                  {
                    icon: <Icons.Clock className="w-6 h-6" />,
                    title: 'Reparații Rapide',
                    description: 'Echipamente moderne pentru diagnosticare și reparații eficiente'
                  },
                  {
                    icon: <Icons.Award className="w-6 h-6" />,
                    title: 'Personal Calificat',
                    description: 'Mecanici certificați cu experiență internațională'
                  },
                  {
                    icon: <Icons.Users className="w-6 h-6" />,
                    title: 'Servicii Personalizate',
                    description: 'Fiecare client primește atenție individualizată'
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                  >
                    <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy mb-1">{item.title}</h3>
                      <p className="text-gray-text text-sm">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <Button href="/despre-noi" size="lg">
                  Află mai multe despre noi
                  <Icons.ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
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
                hoverScale={1.0}
                glowEffect={false}
                className="text-center group card"
              >
                <div className="w-20 h-20 bg-blue-primary/10 rounded-full flex items-center justify-center text-blue-primary mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-4xl font-bold text-navy mb-2">
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

      {/* Process Section */}
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
              Cum Funcționează Procesul Nostru
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Un proces simplu și transparent pentru servicii auto de calitate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Programare',
                description: 'Contactezi-ne prin telefon sau formular online pentru o programare rapidă',
                icon: <Icons.Calendar className="w-8 h-8" />
              },
              {
                step: '02',
                title: 'Diagnoză',
                description: 'Efectuăm o diagnosticare completă cu echipamente moderne',
                icon: <Icons.Wrench className="w-8 h-8" />
              },
              {
                step: '03',
                title: 'Reparație',
                description: 'Executăm reparațiile necesare cu piese de calitate și garanție',
                icon: <Icons.Settings className="w-8 h-8" />
              },
              {
                step: '04',
                title: 'Livrare',
                description: 'Îți predăm vehiculul reparat și îți explicăm ce am făcut',
                icon: <Icons.CheckCircle className="w-8 h-8" />
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-blue-primary/10 rounded-full flex items-center justify-center text-blue-primary mx-auto mb-4 group-hover:bg-blue-primary group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview Section */}
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
              Atelierul Nostru
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Echipamente moderne și un mediu profesional pentru servicii de calitate
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Zona de Diagnosticare',
                description: 'Echipamente computerizate moderne',
                placeholder: 'Imagine: Echipamente de diagnosticare'
              },
              {
                title: 'Zona de Reparații',
                description: 'Atelier spațios și organizat',
                placeholder: 'Imagine: Atelierul de reparații'
              },
              {
                title: 'Zona de Vulcanizare',
                description: 'Echipamente profesionale pentru anvelope',
                placeholder: 'Imagine: Zona de vulcanizare'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/3] bg-gradient-to-br from-blue-primary/20 to-blue-accent/20 flex items-center justify-center">
                    <div className="text-center">
                      <Icons.Car className="w-16 h-16 text-blue-primary mx-auto mb-3" />
                      <p className="text-gray-600 text-sm">{item.placeholder}</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/despre-noi" variant="outline" size="lg">
              Vezi galeria completă
              <Icons.ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
