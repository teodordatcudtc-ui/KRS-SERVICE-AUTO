'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
  id: number
  name: string
  service: string
  rating: number
  text: string
  avatar?: string
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Mihai Popescu',
    service: 'Diagnoză și reparație',
    rating: 5,
    text: 'Serviciu excelent! Am venit cu o problemă la motor și în 2 ore era gata. Prețuri corecte și personal foarte profesionist. Recomand cu încredere!'
  },
  {
    id: 2,
    name: 'Ana Ionescu',
    service: 'Montaj anvelope',
    rating: 5,
    text: 'Am montat anvelopele de iarnă la KRS Service. Foarte rapid, curat și organizat. Voi reveni sigur la următoarea schimbare de anvelope.'
  },
  {
    id: 3,
    name: 'Alexandru Dumitrescu',
    service: 'Revizie completă',
    rating: 5,
    text: 'Cea mai bună experiență la un service auto! Totul transparent, explicat pas cu pas. Mașina funcționează perfect după revizie.'
  },
  {
    id: 4,
    name: 'Elena Marinescu',
    service: 'Vulcanizare',
    rating: 5,
    text: 'Am avut o pană și am fost foarte panicată. Echipa de la KRS m-a liniștit și a rezolvat totul rapid. Mulțumesc mult!'
  }
]

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isFirstRender, setIsFirstRender] = useState(true)

  useEffect(() => {
    // Mark as not first render immediately after mount
    setIsFirstRender(false)
    
    // Start interval immediately after component mounts (only on client)
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => {
          const nextIndex = prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
          return nextIndex
        })
      }, 10000) // 10 secunde

      return () => clearInterval(interval)
    }
  }, [testimonials.length])

  return (
    <div className="relative max-w-4xl mx-auto">
      {/* Testimonial Content */}
      <div className="relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={isFirstRender ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <div className="mb-6">
              <div className="flex justify-center space-x-1 mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 italic leading-relaxed mb-6">
                &ldquo;{testimonials[currentIndex].text}&rdquo;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-blue-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-blue-primary font-semibold text-lg">
                    {testimonials[currentIndex].name.charAt(0)}
                  </span>
                </div>
                <div className="text-left">
                  <p className="font-semibold text-navy">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].service}</p>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center space-x-2 mt-6">
        {testimonials.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex 
                ? 'bg-blue-primary scale-125' 
                : 'bg-gray-300'
            }`}
            aria-label={`Testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

export default TestimonialCarousel
