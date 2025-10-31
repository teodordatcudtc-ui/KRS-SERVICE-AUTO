'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MapPin, Clock, Phone } from 'lucide-react'

const topBarInfo = [
  {
    iconType: 'MapPin',
    text: "Strada Toporași 69, București"
  },
  {
    iconType: 'Clock',
    text: "Lun-Vin: 09:00-18:00 | Sâm: 09:00-14:00"
  },
  {
    iconType: 'Phone',
    text: "0769393545"
  }
]

const TopBar = () => {
  const [currentInfoIndex, setCurrentInfoIndex] = useState(0)
  const [isVisible] = useState(true)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // Set mounted immediately
    setMounted(true)
    
    // Start interval immediately after component mounts (only on client)
    if (typeof window !== 'undefined') {
      const interval = setInterval(() => {
        setCurrentInfoIndex((prev) => {
          const nextIndex = (prev + 1) % topBarInfo.length
          return nextIndex
        })
      }, 7000)
      
      return () => clearInterval(interval)
    }
  }, [])

  const currentInfo = topBarInfo[currentInfoIndex]

  const renderIcon = () => {
    switch (currentInfo.iconType) {
      case 'MapPin':
        return <MapPin className="w-4 h-4" />
      case 'Clock':
        return <Clock className="w-4 h-4" />
      case 'Phone':
        return <Phone className="w-4 h-4" />
      default:
        return null
    }
  }

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
            initial={mounted ? { opacity: 0, y: -5 } : { opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="text-blue-accent">{renderIcon()}</div>
            <span className="text-sm font-medium text-white">{currentInfo.text}</span>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default TopBar
