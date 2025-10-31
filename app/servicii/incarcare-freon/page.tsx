'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/Button'
import AnimatedCard from '@/components/AnimatedCard'
import { Icons } from '@/components/IconSet'

const serviceData = {
  title: 'Încărcare Freon (AC)',
  description: 'Încărcare și verificare completă a sistemului de climatizare, cu test de etanșeitate și performanță.',
  duration: '30-60 min',
  price: 'De la 200 lei',
  icon: <Icons.Settings className="w-8 h-8" />,
  features: [
    'Verificare vizuală și test etanșeitate',
    'Vidare instalație și încărcare agent frigorific',
    'Completare ulei compresor și trasare UV',
    'Măsurare presiuni și temperaturi de lucru',
    'Testare performanță răcire în habitaclu',
    'Tratare mirosuri (opțional)'
  ],
  process: [
    { step: '1', title: 'Inspecție', description: 'Verificăm vizual circuitul și eventuale pierderi' },
    { step: '2', title: 'Vidare', description: 'Vidăm instalația pentru a elimina umezeala' },
    { step: '3', title: 'Încărcare', description: 'Încărcăm cu cantitatea corectă de agent frigorific' },
    { step: '4', title: 'Testare', description: 'Verificăm presiunile și performanța de răcire' }
  ],
  benefits: [
    'Răcire rapidă și eficientă',
    'Protecția compresorului și a instalației',
    'Consum redus de combustibil',
    'Confort îmbunătățit în trafic'
  ],
  equipment: [
    'Stație automată încărcare freon',
    'Detector pierderi cu UV',
    'Manometre profesionale AC',
    'Termometru digital pentru habitaclu'
  ]
}

export default function IncarcareFreonPage() {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center lg:text-left space-y-6"
            >
              <div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 text-white/90 text-sm mb-4">
                {serviceData.icon}
                <span>Serviciu Climatizare</span>
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
                  className="text-lg px=8 py-4"
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
                  Vezi toate serviciile
                </Button>
              </div>
            </motion.div>

            {/* Right Column - Image */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-[4/3] bg-gradient-to-br from-blue-primary/20 to-blue-accent/20 flex items-center justify-center">
                  <div className="text-center">
                    <Icons.Settings className="w-24 h-24 text-blue-primary mx-auto mb-4" />
                    <p className="text-gray-600">Imagine: Stație încărcare AC</p>
                    <p className="text-sm text-gray-500 mt-2">Vidare și încărcare automatizată</p>
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
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-4">
              Ce Include Serviciul
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Intervenție completă pentru sistemul de climatizare auto
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
                <h3 className="font-semibold text-navy mb-2">{feature}</h3>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Cum Funcționează
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Pași profesioniști pentru un AC care răcește eficient
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceData.process.map((item, index) => (
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
                    {serviceData.icon}
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

      {/* Equipment Section */}
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
              Echipamentele Noastre
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Stație AC profesională și testare completă a sistemului
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
                <h3 className="font-semibold text-navy mb-2">{item}</h3>
              </AnimatedCard>
            ))}
          </div>
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
              Aer Condiționat Nu Răcește?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Programează o verificare și încărcare freon rapidă și sigură!
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


