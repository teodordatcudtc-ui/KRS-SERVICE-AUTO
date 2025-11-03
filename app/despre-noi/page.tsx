'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/Button'
import { Icons } from '@/components/IconSet'

const values = [
  {
    icon: <Icons.Shield className="w-8 h-8" />,
    title: 'Calitate Garantată',
    description: 'Folosim doar piese și materiale de calitate superioară, cu garanție pentru toate reparațiile efectuate.'
  },
  {
    icon: <Icons.Clock className="w-8 h-8" />,
    title: 'Rapiditate',
    description: 'Reparații rapide și eficiente, respectând termenele convenite și minimizând timpul de nefuncționare.'
  },
  {
    icon: <Icons.Award className="w-8 h-8" />,
    title: 'Profesionalism',
    description: 'Echipa noastră de mecanici calificați oferă servicii profesionale cu atenție la detalii și transparență.'
  },
  {
    icon: <Icons.Users className="w-8 h-8" />,
    title: 'Încredere',
    description: 'Clienții noștri sunt prioritatea noastră. Construim relații de încredere pe termen lung prin servicii de calitate.'
  }
]

export default function DespreNoiPage() {

  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white">
              Despre Noi
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Peste 5+ ani de experiență în service auto, dedicare și pasiune pentru calitate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  KRS SERVICE AUTO a fost înființat în 2020 cu o viziune simplă: să oferim 
                  servicii auto de calitate superioară în București, cu focus pe profesionalism, 
                  transparență și satisfacția clienților.
                </p>
                <p>
                  De-a lungul anilor, am dezvoltat o echipă de mecanici calificați și am investit 
                  în cele mai moderne echipamente de diagnosticare și reparații. Astăzi, suntem 
                  mândri să servim peste 1000 de clienți mulțumiți.
                </p>
                <p>
                  Credem că fiecare mașină merită atenția și îngrijirea necesară pentru a funcționa 
                  în siguranță și eficient. De aceea, oferim servicii complete, de la diagnoză 
                  și reparații la întreținere preventivă și montaj anvelope.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, x: 0 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <div className="relative w-full aspect-[4/3]">
                  <Image
                    src="/images/about/workshop-main.jpg"
                    alt="Atelierul nostru principal"
                    fill
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent pointer-events-none" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-primary">5+</div>
                  <div className="text-sm text-gray-600">Ani experiență</div>
                </div>
              </div>
              
              <div className="absolute -top-6 -right-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-primary">1000+</div>
                  <div className="text-sm text-gray-600">Clienți mulțumiți</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Valorile Noastre
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Principiile care ne ghidează în fiecare zi și în fiecare reparație
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary mx-auto mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-text leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      Serviciile Noastre
          {/* Why Choose Us Section */}
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
              De Ce Să Ne Alegi
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Avantajele care fac diferența în serviciile noastre de service auto
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center text-green-600 flex-shrink-0">
                  <Icons.CheckCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Garanție pentru Toate Lucrările
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Oferim garanție pentru toate reparațiile efectuate, asigurându-te că lucrarea este de calitate și durabilă.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 flex-shrink-0">
                  <Icons.Settings className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Echipamente Moderne
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Folosim cele mai noi tehnologii de diagnosticare și reparații pentru rezultate precise și eficiente.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 flex-shrink-0">
                  <Icons.Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Transparență Totală
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Îți explicăm în detaliu ce trebuie reparat și de ce, cu devize clare înainte de orice intervenție.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center text-orange-600 flex-shrink-0">
                  <Icons.Clock className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Programare Rapidă
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Te programăm rapid și respectăm termenele convenite, minimizând timpul de nefuncționare a vehiculului.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center text-red-600 flex-shrink-0">
                  <Icons.Wrench className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Piese de Calitate
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Folosim doar piese originale sau echivalente de calitate superioară, cu certificare și garanție.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="card p-6"
            >
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-yellow-100 rounded-xl flex items-center justify-center text-yellow-600 flex-shrink-0">
                  <Icons.Star className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                    Prețuri Corecte
                  </h3>
                  <p className="text-gray-text leading-relaxed">
                    Oferim prețuri competitive și transparente, fără surprize, cu devize detaliate înainte de lucrare.
                  </p>
                </div>
              </div>
            </motion.div>
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
              Vrei să Ne Cunoaștem Mai Bine?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Contactează-ne pentru o programare și descoperă de ce clienții noștri ne aleg!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:0769393545" 
                className="inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 bg-white hover:bg-gray-100 px-8 py-4 text-lg shadow-lg hover:shadow-xl"
                style={{ color: '#1e40af' }}
              >
                <Icons.Phone className="w-5 h-5 mr-2" style={{ color: '#1e40af' }} />
                <span style={{ color: '#1e40af' }}>0769393545</span>
              </a>
              <Button 
                href="/contact" 
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white hover:text-navy"
              >
                Programează o vizită
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

