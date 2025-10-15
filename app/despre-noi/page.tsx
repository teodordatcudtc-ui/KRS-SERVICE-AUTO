'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Button from '@/components/Button'
import Modal from '@/components/Modal'
import { Icons } from '@/components/IconSet'

const teamMembers = [
  {
    name: 'Cristian Popescu',
    role: 'Manager & Mecanic Șef',
    experience: '15 ani experiență',
    description: 'Specialist în reparații motor și transmisie, cu certificări internaționale.',
    image: '/team/cristian.jpg'
  },
  {
    name: 'Alexandru Ionescu',
    role: 'Mecanic Senior',
    experience: '12 ani experiență',
    description: 'Expert în sistemul de frânare și suspensie, cu atenție la detalii.',
    image: '/team/alexandru.jpg'
  },
  {
    name: 'Mihai Dumitrescu',
    role: 'Specialist Anvelope',
    experience: '8 ani experiență',
    description: 'Specialist în vulcanizare și montaj anvelope, cu echipamente moderne.',
    image: '/team/mihai.jpg'
  }
]

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

const galleryImages = [
  { src: '/gallery/workshop-1.jpg', alt: 'Atelierul nostru - zona de reparații' },
  { src: '/gallery/workshop-2.jpg', alt: 'Echipamente moderne de diagnosticare' },
  { src: '/gallery/workshop-3.jpg', alt: 'Zona de vulcanizare și montaj anvelope' },
  { src: '/gallery/team-work.jpg', alt: 'Echipa noastră la lucru' },
  { src: '/gallery/before-after-1.jpg', alt: 'Reparație înainte și după' },
  { src: '/gallery/before-after-2.jpg', alt: 'Reparație motor înainte și după' }
]

export default function DespreNoiPage() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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
              Despre Noi
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Peste 20 de ani de experiență în service auto, dedicare și pasiune pentru calitate
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy mb-6">
                Povestea Noastră
              </h2>
              <div className="space-y-4 text-gray-text leading-relaxed">
                <p>
                  KRS SERVICE AUTO a fost înființat în 2003 cu o viziune simplă: să oferim 
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
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/about/workshop-main.jpg"
                  alt="Atelierul nostru principal"
                  width={600}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy/20 to-transparent" />
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-primary">20+</div>
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
            initial={{ opacity: 0, y: 30 }}
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
                initial={{ opacity: 0, y: 30 }}
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

      {/* Team Section */}
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
              Echipa Noastră
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Mecanici calificați și experimentați, dedicați să-ți ofere cel mai bun serviciu
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card text-center group hover:shadow-2xl"
              >
                <div className="relative mb-6">
                  <div className="w-32 h-32 mx-auto rounded-full bg-gray-200 flex items-center justify-center overflow-hidden">
                    <Image
                      src={member.image}
                      alt={member.name}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h3 className="text-xl font-heading font-semibold text-navy mb-2">
                  {member.name}
                </h3>
                <p className="text-blue-primary font-medium mb-2">
                  {member.role}
                </p>
                <p className="text-sm text-gray-600 mb-4">
                  {member.experience}
                </p>
                <p className="text-gray-text text-sm leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
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
              Galerie Foto
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              O privire în atelierul nostru și în munca noastră de zi cu zi
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative group cursor-pointer"
                onClick={() => setSelectedImage(image.src)}
              >
                <div className="relative rounded-xl overflow-hidden shadow-lg group-hover:shadow-2xl transition-shadow duration-300">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={400}
                    height={300}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icons.Search className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
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
              Vrei să Ne Cunoaștem Mai Bine?
            </h2>
            <p className="text-xl text-blue-accent max-w-2xl mx-auto">
              Contactează-ne pentru o programare și descoperă de ce clienții noștri ne aleg!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="tel:0769393545" 
                size="lg"
                className="bg-white text-navy hover:bg-gray-100"
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
                Programează o vizită
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Modal */}
      <Modal
        isOpen={!!selectedImage}
        onClose={() => setSelectedImage(null)}
        size="xl"
      >
        {selectedImage && (
          <div className="relative">
            <Image
              src={selectedImage}
              alt="Galerie"
              width={800}
              height={600}
              className="w-full h-auto rounded-lg"
            />
          </div>
        )}
      </Modal>
    </div>
  )
}
