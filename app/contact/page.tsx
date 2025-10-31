'use client'

import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { Icons } from '@/components/IconSet'

export default function ContactPage() {
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
              Contact & Programări
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Sună-ne pentru programare sau orice întrebare despre serviciile noastre
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12 text-center space-y-8"
          >
            <div>
              <h2 className="text-3xl font-heading font-bold text-navy mb-4">
                Sună-ne pentru Programare
              </h2>
              <p className="text-gray-text leading-relaxed text-lg">
                Programează-te telefonic pentru serviciile noastre de reparații auto. 
                Suntem disponibili pentru apeluri în programul nostru de lucru.
              </p>
            </div>

            <div className="flex flex-col items-center space-y-6">
              <div className="w-20 h-20 bg-blue-primary/10 rounded-full flex items-center justify-center text-blue-primary">
                <Icons.Phone className="w-10 h-10" />
              </div>
              
              <div>
                <a 
                  href="tel:0769393545" 
                  className="text-4xl md:text-5xl font-bold text-blue-primary hover:text-blue-accent transition-colors block mb-2"
                >
                  0769393545
                </a>
                <p className="text-gray-600 text-lg">
                  Luni-Vineri: 09:00-18:00
                </p>
                <p className="text-gray-600 text-lg">
                  Sâmbătă: 09:00-14:00
                </p>
              </div>

              <Button 
                href="tel:0769393545" 
                size="lg"
                className="mt-4 text-lg px-8 py-4"
              >
                <Icons.Phone className="w-5 h-5 mr-2" />
                Sună acum
              </Button>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <div className="flex items-start justify-center space-x-4 mb-6">
                <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                  <Icons.MapPin className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <h3 className="font-semibold text-navy mb-1">Adresă</h3>
                  <p className="text-gray-text">
                    Strada Toporași 69<br />
                    București 052034
                  </p>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-6">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2850.932316483413!2d26.08001009678955!3d44.3935111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b1ff2d60e49a8f%3A0xb31f2921d344c4b3!2sKRS%20SERVICE%20AUTO!5e0!3m2!1sen!2sro!4v1760513136545!5m2!1sen!2sro" 
                    width="100%" 
                    height="300" 
                    style={{ border: 0 }} 
                    allowFullScreen 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

