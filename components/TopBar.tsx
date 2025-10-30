'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

const topBarInfo = [
  {
    icon: <MapPin className="w-4 h-4" />,
    text: "Strada Toporași 69, București 052034"
  },
  {
    icon: <Clock className="w-4 h-4" />,
    text: "Lun-Vin: 09:00-18:00 | Sâm: 09:00-14:00"
  },
  {
    icon: <Phone className="w-4 h-4" />,
    text: "0769393545"
  }
]

const TopBar = () => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    // Rotate info every 7 seconds
    const interval = setInterval(() => {
      setCurrentInfoIndex((prev) => (prev + 1) % topBarInfo.length)
    }, 7000)
    
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    // Hide TopBar when scrolling down past 50px
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // More aggressive hiding - hide at just 1px of scroll
      if (scrollY > 1) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
      
      setLastScrollTop(scrollY <= 0 ? 0 : scrollY)
    }
    
    window.addEventListener('scroll', handleScroll, { passive: true })
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const currentInfo = topBarInfo[currentInfoIndex]

  if (!isVisible) return null

  return (
    <div
      className="fixed top-0 left-0 right-0 z-[60] bg-navy text-white"
      style={{
        height: '40px',
        padding: '0 16px'
      }}
    >
      <div className="max-w-7xl mx-auto h-full flex items-center justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentInfoIndex}
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="text-blue-accent">{currentInfo.icon}</div>
            <span className="text-sm font-medium">{currentInfo.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TopBar
