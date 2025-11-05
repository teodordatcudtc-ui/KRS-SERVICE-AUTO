'use client'

import { motion } from 'framer-motion'
import { Icons } from '@/components/IconSet'

export default function PoliticaGDPRPage() {
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
              Politica de Confidențialitate GDPR
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Informații despre prelucrarea datelor personale la KRS SERVICE AUTO
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
                  Identitatea Operatorului
                </h2>
                <p className="text-gray-text leading-relaxed">
                  <strong>KRS SERVICE AUTO</strong><br />
                  Adresă: Strada Toporași 69, București 052034<br />
                  Telefon: 0769393545<br />
                  Email: serviceautotoporasi69@gmail.com
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Datele Personale pe Care Le Prelucrăm
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Prelucrăm următoarele categorii de date personale:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Date de identificare: nume, prenume</li>
                  <li>Date de contact: număr de telefon, adresă de email</li>
                  <li>Date despre vehicul: marca, model, număr de înmatriculare</li>
                  <li>Date despre serviciile solicitate și istoricul reparațiilor</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Scopurile Prelucrării
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Prelucrăm datele personale în următoarele scopuri:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Prestarea serviciilor de service auto</li>
                  <li>Programarea și gestionarea vizitelor la service</li>
                  <li>Comunicarea cu clienții pentru servicii</li>
                  <li>Întocmirea facturilor și documentației contabile</li>
                  <li>Îndeplinirea obligațiilor legale</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Baza Legală a Prelucrării
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Prelucrăm datele personale pe baza executării contractului de prestare servicii 
                  și a îndeplinirii obligațiilor legale în domeniul contabilității și fiscalității.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Durata Păstrării Datelor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Păstrăm datele personale pentru perioada necesară îndeplinirii scopurilor 
                  menționate mai sus, respectând termenele legale de arhivare (10 ani pentru 
                  documentația contabilă).
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Drepturile Dumneavoastră
                </h2>
                <p className="text-gray-text leading-relaxed mb-4">
                  Conform GDPR, aveți următoarele drepturi:
                </p>
                <ul className="list-disc list-inside text-gray-text space-y-2">
                  <li>Dreptul la informare despre prelucrarea datelor</li>
                  <li>Dreptul de acces la datele personale</li>
                  <li>Dreptul la rectificarea datelor inexacte</li>
                  <li>Dreptul la ștergerea datelor (în anumite condiții)</li>
                  <li>Dreptul la restricționarea prelucrării</li>
                  <li>Dreptul la portabilitatea datelor</li>
                  <li>Dreptul la opoziție</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Securitatea Datelor
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Implementăm măsuri tehnice și organizatorice adecvate pentru a proteja 
                  datele personale împotriva accesului neautorizat, modificării, divulgării 
                  sau distrugerii neautorizate.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Contact pentru GDPR
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Pentru orice întrebări legate de prelucrarea datelor personale sau pentru 
                  exercitarea drepturilor dumneavoastră, ne puteți contacta la:
                </p>
                <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                  <p className="text-gray-text">
                    <strong>Email:</strong> serviceautotoporasi69@gmail.com<br />
                    <strong>Telefon:</strong> 0769393545<br />
                    <strong>Adresă:</strong> Strada Toporași 69, București 052034
                  </p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-heading font-bold text-navy mb-4">
                  Modificări ale Politicii
                </h2>
                <p className="text-gray-text leading-relaxed">
                  Această politică poate fi actualizată periodic. Vă vom informa despre 
                  orice modificări semnificative prin intermediul site-ului nostru web 
                  sau prin email.
                </p>
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

