'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/Button'
import { Icons } from '@/components/IconSet'

interface FormData {
  name: string
  phone: string
  email: string
  service: string
  preferredDate: string
  preferredTime: string
  message: string
}

interface FormErrors {
  [key: string]: string
}

const services = [
  'Diagnoză Auto',
  'Vulcanizare',
  'Mecanică Generală',
  'Revizii și Întreținere',
  'Montaj Anvelope',
  'ITP și Inspecții',
  'Altele'
]

const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
]

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    service: '',
    preferredDate: '',
    preferredTime: '',
    message: ''
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Numele este obligatoriu'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Telefonul este obligatoriu'
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = 'Format telefon invalid'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email-ul este obligatoriu'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Format email invalid'
    }

    if (!formData.service) {
      newErrors.service = 'Selectați un serviciu'
    }

    if (!formData.preferredDate) {
      newErrors.preferredDate = 'Data este obligatorie'
    }

    if (!formData.preferredTime) {
      newErrors.preferredTime = 'Ora este obligatorie'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)

    try {
      // Simulare trimitere formular (în realitate aici ar fi un API call)
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      setIsSubmitted(true)
      setFormData({
        name: '',
        phone: '',
        email: '',
        service: '',
        preferredDate: '',
        preferredTime: '',
        message: ''
      })
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }))
    }
  }

  const getMinDate = () => {
    const today = new Date()
    return today.toISOString().split('T')[0]
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md mx-auto text-center bg-white rounded-xl shadow-lg p-8"
        >
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icons.CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-heading font-bold text-navy mb-4">
            Programare Confirmată!
          </h2>
          <p className="text-gray-text mb-6">
            Mulțumim pentru programare! Vă vom contacta în curând pentru confirmarea finală.
          </p>
          <Button onClick={() => setIsSubmitted(false)}>
            Programează din nou
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-24">
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
              Contact & Programări
            </h1>
            <p className="text-xl text-blue-accent max-w-3xl mx-auto">
              Programează o vizită la service-ul nostru sau contactează-ne pentru orice întrebare
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-3xl font-heading font-bold text-navy mb-6">
                  Informații de Contact
                </h2>
                <p className="text-gray-text leading-relaxed mb-8">
                  Suntem aici să te ajutăm cu orice problemă auto. Contactează-ne prin telefon, 
                  email sau completează formularul pentru o programare rapidă.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                    <Icons.Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Telefon</h3>
                    <a 
                      href="tel:0769393545" 
                      className="text-blue-primary hover:text-blue-accent transition-colors text-lg font-medium"
                    >
                      0769393545
                    </a>
                    <p className="text-sm text-gray-600 mt-1">
                      Luni-Vineri: 09:00-18:00, Sâmbătă: 09:00-14:00
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                    <Icons.MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Adresă</h3>
                    <p className="text-gray-text">
                      Strada Toporași 69<br />
                      București 052034
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary flex-shrink-0">
                    <Icons.Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-navy mb-1">Email</h3>
                    <a 
                      href="mailto:contact@krs-service-auto.ro" 
                      className="text-blue-primary hover:text-blue-accent transition-colors"
                    >
                      contact@krs-service-auto.ro
                    </a>
                  </div>
                </div>
              </div>

              {/* Google Maps */}
              <div className="mt-8">
                <h3 className="font-semibold text-navy mb-4">Locația Noastră</h3>
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
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl shadow-lg p-8"
            >
              <h2 className="text-2xl font-heading font-bold text-navy mb-6">
                Programează o Vizită
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nume complet *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                        errors.name ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Introduceți numele complet"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="0769393545"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    placeholder="exemplu@email.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Serviciu dorit *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Selectați un serviciu</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-1 text-sm text-red-600">{errors.service}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Data preferată *
                    </label>
                    <input
                      type="date"
                      id="preferredDate"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      min={getMinDate()}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                        errors.preferredDate ? 'border-red-500' : 'border-gray-300'
                      }`}
                    />
                    {errors.preferredDate && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredDate}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Ora preferată *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={formData.preferredTime}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent ${
                        errors.preferredTime ? 'border-red-500' : 'border-gray-300'
                      }`}
                    >
                      <option value="">Selectați ora</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                    {errors.preferredTime && (
                      <p className="mt-1 text-sm text-red-600">{errors.preferredTime}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mesaj (opțional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-primary focus:border-transparent"
                    placeholder="Descrieți problema sau cerințele speciale..."
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full"
                  size="lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Se trimite...
                    </>
                  ) : (
                    <>
                      <Icons.Calendar className="w-5 h-5 mr-2" />
                      Programează Vizita
                    </>
                  )}
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
