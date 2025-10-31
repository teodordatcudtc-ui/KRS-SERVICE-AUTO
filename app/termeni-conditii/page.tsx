'use client'

import { motion } from 'framer-motion'
import { Icons } from '@/components/IconSet'

export default function TermeniConditiiPage() {
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
              Termeni și Condiții
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Condițiile generale de prestare servicii la KRS SERVICE AUTO
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="prose prose-lg max-w-none"
          >
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Informații Generale
                </h2>
                <p className="text-gray-text leading-relaxed">
                  <strong>KRS SERVICE AUTO</strong> este o societate comercială care oferă servicii 
                  de reparații și întreținere auto. Prin utilizarea serviciilor noastre, 
                  acceptați în mod expres termenii și condițiile prezentate mai jos.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Serviciile Oferite
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Oferim următoarele servicii:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Diagnoză auto computerizată</li>
                  <li>Reparații mecanice generale</li>
                  <li>Vulcanizare și montaj anvelope</li>
                  <li>Revizii și întreținere preventivă</li>
                  <li>Pregătire pentru ITP</li>
                  <li>Servicii de urgență</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Programarea Serviciilor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Programarea se poate face prin telefon (0769393545) sau prin formularul 
                  online de pe site. Ne rezervăm dreptul de a modifica programarea în cazul 
                  unor situații excepționale sau de urgență. Vă vom anunța cu cel puțin 
                  24 de ore înainte despre orice modificare.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Prețuri și Plată
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Prețurile serviciilor sunt afișate la cerere sau pot fi consultate pe site. 
                  Prețurile includ TVA și sunt valabile la data estimării. Acceptăm următoarele 
                  modalități de plată:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Numerar</li>
                  <li>Card bancar</li>
                  <li>Transfer bancar</li>
                  <li>Creditare în rate (prin parteneri)</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Garanția Serviciilor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Oferim garanție pentru toate reparațiile efectuate: 12 luni pentru reparații 
                  majore, 6 luni pentru reparații minore și 3 luni pentru piese de uzură. 
                  Garanția nu acoperă deteriorările cauzate de utilizare necorespunzătoare 
                  sau de accidente.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Responsabilitatea Clienților
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Clienții au următoarele responsabilități:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Să furnizeze informații corecte despre vehicul și problemele identificate</li>
                  <li>Să respecte programarea stabilită</li>
                  <li>Să achite serviciile conform termenelor convenite</li>
                  <li>Să preia vehiculul în termenul stabilit</li>
                  <li>Să respecte instrucțiunile de utilizare după reparații</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Limitarea Răspunderii
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Răspunderea noastră se limitează la valoarea serviciilor prestate. Nu ne 
                  asumăm răspunderea pentru daune indirecte, pierderi de profit sau daune 
                  cauzate de utilizarea necorespunzătoare a vehiculului după reparații.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Rezilierea Contractului
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Orice parte poate rezilia contractul cu notificare de 24 de ore. În cazul 
                  rezilierii din partea clientului, acesta va plăti serviciile deja efectuate 
                  și 50% din valoarea serviciilor programate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Rezolvarea Litigiilor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Orice litigiu va fi rezolvat prin negociere amiabilă. În cazul în care 
                  negocierea nu duce la o soluție, litigiile vor fi soluționate de instanțele 
                  competente din București, conform legislației române.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Modificări ale Termenilor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Ne rezervăm dreptul de a modifica acești termeni și condiții în orice moment. 
                  Modificările vor fi comunicate prin afișare pe site sau prin email. 
                  Continuarea utilizării serviciilor după modificări constituie acceptarea 
                  noilor termeni.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Contact
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Pentru orice întrebări legate de acești termeni și condiții, ne puteți 
                  contacta la:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-text">
                    <strong>KRS SERVICE AUTO</strong><br />
                    <strong>Adresă:</strong> Strada Toporași 69, București 052034<br />
                    <strong>Telefon:</strong> 0769393545<br />
                    <strong>Email:</strong> contact@krs-service-auto.ro
                  </p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-blue-50 rounded-xl">
                <p className="text-sm text-gray-600">
                  <strong>Ultima actualizare:</strong> {new Date().toLocaleDateString('ro-RO')}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

