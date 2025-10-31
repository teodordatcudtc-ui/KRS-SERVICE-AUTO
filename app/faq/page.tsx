'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from '@/components/IconSet'

const faqs = [
  {
    id: 1,
    question: 'Cât durează o diagnoză auto completă?',
    answer: 'O diagnoză auto completă durează între 30-60 de minute, în funcție de complexitatea problemelor identificate. Folosim echipamente moderne de diagnosticare care ne permit să identificăm rapid orice defecțiune.'
  },
  {
    id: 2,
    question: 'Oferiți garanție pentru reparațiile efectuate?',
    answer: 'Da, oferim garanție pentru toate reparațiile efectuate. Garanția variază în funcție de tipul de reparație: 12 luni pentru reparații majore, 6 luni pentru reparații minore și 3 luni pentru piese de uzură.'
  },
  {
    id: 3,
    question: 'Pot programa o vizită în weekend?',
    answer: 'Sâmbătă suntem deschiși între 09:00-14:00. Duminică service-ul este închis. Pentru urgențe, puteți ne contacta prin telefon și vom încerca să vă ajutăm.'
  },
  {
    id: 4,
    question: 'Ce tipuri de anvelope puteți monta?',
    answer: 'Montăm toate tipurile de anvelope: anvelope de vară, iarnă și all-season. Oferim servicii complete de montaj, echilibrare și depozitare anvelope sezoniere. Acceptăm anvelope de la toate mărcile cunoscute.'
  },
  {
    id: 5,
    question: 'Cât costă o revizie completă?',
    answer: 'Prețul unei revizii complete depinde de tipul de vehicul și de serviciile incluse. Revizia de bază începe de la 200 lei și include schimbul uleiului, filtrelor și verificarea generală. Vă oferim un devis gratuit înainte de începerea lucrărilor.'
  },
  {
    id: 6,
    question: 'Folosiți piese originale sau aftermarket?',
    answer: 'Folosim atât piese originale cât și piese aftermarket de calitate superioară, în funcție de preferințele și bugetul dumneavoastră. Vă explicăm diferențele și vă recomandăm cea mai bună opțiune pentru situația specifică.'
  },
  {
    id: 7,
    question: 'Pot lăsa mașina la service fără programare?',
    answer: 'Da, puteți veni fără programare, dar vă recomandăm să ne contactați înainte pentru a evita așteptarea. Pentru reparații complexe, programarea este obligatorie pentru a vă putea oferi timpul necesar.'
  },
  {
    id: 8,
    question: 'Oferiți servicii de urgență?',
    answer: 'Da, oferim servicii de urgență pentru situații critice. Pentru pană de cauciuc, avarie pe drum sau alte probleme urgente, ne puteți contacta la 0769393545 și vom încerca să vă ajutăm cât mai rapid posibil.'
  },
  {
    id: 9,
    question: 'Cum pot plăti serviciile?',
    answer: 'Acceptăm plata în numerar, cu cardul sau prin transfer bancar. Pentru reparații costisitoare, oferim posibilitatea de plată în rate prin partenerii noștri de creditare.'
  },
  {
    id: 10,
    question: 'Oferiți consultanță tehnică gratuită?',
    answer: 'Da, oferim consultanță tehnică gratuită pentru toate problemele auto. Vă explicăm problema identificată, opțiunile de reparație disponibile și vă recomandăm cea mai bună soluție pentru situația dumneavoastră.'
  }
]

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<number[]>([])

  const toggleItem = (id: number) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    )
  }

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
              Întrebări Frecvente
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Răspunsuri la cele mai comune întrebări despre serviciile noastre
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={faq.id}
                initial={{ opacity: 1, y: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleItem(faq.id)}
                  className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-primary focus:ring-inset"
                  aria-expanded={openItems.includes(faq.id)}
                >
                  <h3 className="text-lg font-semibold text-navy pr-4">
                    {faq.question}
                  </h3>
                  <motion.div
                    animate={{ rotate: openItems.includes(faq.id) ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex-shrink-0"
                  >
                    <Icons.ChevronDown className="w-5 h-5 text-blue-primary" />
                  </motion.div>
                </button>
                
                <AnimatePresence>
                  {openItems.includes(faq.id) && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6">
                        <p className="text-gray-text leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Nu Ați Găsit Răspunsul?
            </h2>
            <p className="text-lg text-gray-text max-w-2xl mx-auto">
              Dacă aveți alte întrebări sau aveți nevoie de ajutor, nu ezitați să ne contactați. 
              Suntem aici să vă ajutăm!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0769393545"
                className="inline-flex items-center justify-center px-8 py-4 bg-blue-primary text-white font-medium rounded-xl hover:bg-blue-accent transition-colors"
              >
                <Icons.Phone className="w-5 h-5 mr-2" />
                0769393545
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-primary text-blue-primary font-medium rounded-xl hover:bg-blue-primary hover:text-white transition-colors"
              >
                <Icons.MessageCircle className="w-5 h-5 mr-2" />
                Trimite mesaj
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

