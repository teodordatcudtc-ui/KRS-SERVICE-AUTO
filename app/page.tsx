'use client'

import { useState, useRef, useEffect } from 'react'
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

// Component for images with fallback
const ImageWithFallback = ({ src, fallback, alt }: { src: string; fallback: string; alt: string }) => {
  const [imgSrc, setImgSrc] = useState(src)

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill
      className="object-cover"
      unoptimized
      onError={() => {
        if (imgSrc !== fallback) {
          setImgSrc(fallback)
        }
      }}
    />
  )
}

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
    price: 'De la 50 lei',
    features: ['Reparație cameră', 'Reparație anvelopă', 'Montaj/Demontaj'],
    href: '/servicii/vulcanizare'
  },
  {
    icon: <Icons.Settings className="w-6 h-6" />,
    title: 'Mecanică Generală',
    description: 'Reparații complete la motor, transmisie, frâne și alte componente importante.',
    duration: '1-4 ore',
    price: '150 lei/oră',
    features: ['Reparații motor', 'Servisare frâne', 'Reparații transmisie'],
    href: '/servicii/mecanica-generala'
  },
]

const HomePage = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchEndX = useRef<number | null>(null)

  const stats = [
    { number: '5+', label: 'Ani Experiență' },
    { number: '1000+', label: 'Clienți Mulțumiți' },
    { number: '5000+', label: 'Reparații' },
    { number: '24/7', label: 'Suport' }
  ]

  const minSwipeDistance = 50

  // Auto-play pentru carusel
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % stats.length)
    }, 3000) // Schimbă la fiecare 3 secunde

    return () => clearInterval(interval)
  }, [stats.length])

  const onTouchStart = (e: React.TouchEvent) => {
    touchEndX.current = null
    touchStartX.current = e.targetTouches[0].clientX
  }

  const onTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX
  }

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return
    
    const distance = touchStartX.current - touchEndX.current
    const isLeftSwipe = distance > minSwipeDistance
    const isRightSwipe = distance < -minSwipeDistance

    if (isLeftSwipe && currentIndex < stats.length - 1) {
      setCurrentIndex(currentIndex + 1)
    }
    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden py-6 pt-28 sm:pt-36 sm:gradient-hero">
        {/* Mobile Background Image - doar pe telefon */}
        <div className="sm:hidden absolute inset-0 z-0">
          <Image
            src="/images/hero/hero-main.jpg"
            alt="Atelierul nostru modern - KRS SERVICE AUTO"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black/85" />
        </div>
        
        {/* Desktop Animated Background */}
        <div className="hidden sm:block">
          <AnimatedBackground />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Left Column - Text Content */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="text-center lg:text-left space-y-8 relative z-20"
            >
              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.1 }}
                className="hidden sm:inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm"
              >
                <Icons.Award className="w-4 h-4 text-yellow-400" />
                <span>5+ ani experiență • 1000+ clienți mulțumiți</span>
              </motion.div>

              {/* Mobile - Enhanced Title Section */}
              <div className="sm:hidden space-y-4">
                <motion.div
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-primary/20 to-blue-accent/20 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 mb-3"
                >
                  <Icons.Award className="w-4 h-4 text-yellow-400" />
                  <span className="text-white/90 text-xs font-medium">Service Certificat</span>
                </motion.div>
                
                <motion.h1
                  initial={{ opacity: 1, y: 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-4xl font-heading font-bold text-white leading-tight"
                >
                  Service auto profesionist<br />în București
                </motion.h1>
                
                <motion.div
                  initial={{ opacity: 1 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="flex flex-wrap items-center justify-center gap-3"
                >
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                    <Icons.Clock className="w-4 h-4 text-green-400" />
                    <span className="text-white font-medium text-sm">Reparații rapide</span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-lg px-3 py-2 border border-white/20">
                    <Icons.Shield className="w-4 h-4 text-blue-accent" />
                    <span className="text-white font-medium text-sm">Calitate garantată</span>
                  </div>
                </motion.div>
              </div>

              {/* Desktop Title */}
              <motion.h1
                initial={{ opacity: 1, y: 0 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="hidden sm:block text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight"
              >
                Service auto profesionist în București
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.4 }}
                className="hidden sm:block text-xl md:text-2xl text-blue-accent font-medium"
              >
                Reparații rapide și durabile, realizate de specialiști certificați cu garanție.
              </motion.p>


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
                  href="/servicii" 
                  variant="outline" 
                  size="lg"
                  className="text-lg px-8 py-4 !border-2 !border-white !text-white hover:!bg-white hover:!text-navy focus:!bg-white focus:!text-navy focus-visible:!bg-white focus-visible:!text-navy active:!bg-white active:!text-navy visited:!border-white visited:!text-white"
                >
                  Vezi servicii
                </Button>
              </div>

              {/* Mobile Stats Carousel - sub butoane */}
              <div className="sm:hidden mt-6">
                <div 
                  className="overflow-hidden relative"
                  onTouchStart={onTouchStart}
                  onTouchMove={onTouchMove}
                  onTouchEnd={onTouchEnd}
                >
                  <motion.div
                    className="flex"
                    animate={{
                      x: `-${currentIndex * 100}%`
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30
                    }}
                  >
                    {stats.map((stat, index) => (
                      <div
                        key={index}
                        className="bg-white/20 backdrop-blur-md rounded-xl p-3 text-center border border-white/30 flex-shrink-0 w-full shadow-lg"
                      >
                        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-xs text-white/90 font-medium">{stat.label}</div>
                      </div>
                    ))}
                  </motion.div>

                  {/* Carousel Indicators */}
                  <div className="flex justify-center space-x-2 mt-4">
                    {stats.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`h-2 rounded-full transition-all ${
                          index === currentIndex 
                            ? 'w-6 bg-white' 
                            : 'w-2 bg-white/40'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Right Column - Hero Image - ascuns pe mobile */}
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="hidden sm:block relative lg:max-w-2xl z-20"
            >
              {/* Hero Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <div className="aspect-[4/3] lg:aspect-[16/9] relative">
                    <Image
                      src="/images/hero/hero-main.jpg"
                      alt="Atelierul nostru modern - KRS SERVICE AUTO"
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
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
              </div>

              {/* Stats Cards - Desktop Grid */}
              <div className="hidden sm:grid grid-cols-2 gap-4 mt-8">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 1, y: 0 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 1.5 + index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center border border-white/20"
                  >
                    <div className="text-2xl font-bold text-white">{stat.number}</div>
                    <div className="text-sm text-white/80">{stat.label}</div>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
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
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <Button href="/servicii" size="lg">
              Explorează serviciile
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
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] relative">
                  <Image
                    src="/images/about/workshop-main.jpg"
                    alt="Atelierul nostru - KRS SERVICE AUTO"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
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
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              De ce clienții ne aleg
            </h2>
            <p className="text-lg text-gray-text leading-relaxed">
              Cu peste 5+ ani de experiență în domeniul auto, suntem lideri în 
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
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start space-x-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
              >
                <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <p className="font-semibold text-navy mb-1">{item.title}</p>
                  <p className="text-gray-text text-sm">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

              <div className="pt-4">
                <Button href="/despre-noi" size="lg">
                  Despre serviciile noastre
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
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              De ce clienții ne aleg
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Peste 5+ ani de experiență și mii de reparații reușite
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
                <p className="text-xl font-heading font-semibold text-navy mb-2">
                  {stat.label}
                </p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
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
                initial={{ opacity: 1, y: 0 }}
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

      {/* Gallery Preview Section */}
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
                image: '/images/about/workshop-2.jpg',
                fallback: '/images/about/workshop-main.jpg',
                alt: 'Echipamente moderne de diagnosticare'
              },
              {
                title: 'Zona de Reparații',
                description: 'Atelier spațios și organizat',
                image: '/images/about/workshop-1.jpg',
                fallback: '/images/about/workshop-main.jpg',
                alt: 'Atelierul nostru - zona de reparații'
              },
              {
                title: 'Zona de Vulcanizare',
                description: 'Echipamente profesionale pentru anvelope',
                image: '/images/about/workshop-3.jpg',
                fallback: '/images/about/workshop-main.jpg',
                alt: 'Zona de vulcanizare și montaj anvelope'
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 1, scale: 1 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <div className="aspect-[4/3] relative bg-gray-200">
                    <ImageWithFallback
                      src={item.image}
                      fallback={item.fallback}
                      alt={item.alt}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-semibold text-lg mb-1">{item.title}</p>
                    <p className="text-sm text-white/90">{item.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button href="/despre-noi" variant="outline" size="lg">
              Explorează galeria
              <Icons.ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
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
            initial={{ opacity: 1, y: 0 }}
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
                Rezervă serviciu
              </Button>
            </div>
            {/* Social Share */}
            <div className="flex items-center justify-center gap-4 pt-2">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fkrs-service-auto.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline hover:text-white"
              >
                Distribuie pe Facebook
              </a>
              <a
                href="https://api.whatsapp.com/send?text=Recomand%20KRS%20SERVICE%20AUTO%20https%3A%2F%2Fkrs-service-auto.ro"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline hover:text-white"
              >
                Trimite pe WhatsApp
              </a>
              <a
                href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fkrs-service-auto.ro&text=Service%20auto%20Bucuresti%20recomandat"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/90 underline hover:text-white"
              >
                Share pe X
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage

