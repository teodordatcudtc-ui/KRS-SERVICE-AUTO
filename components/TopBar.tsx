'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Icons } from './IconSet'

const topbarInfo = [
  {
    icon: <Icons.MapPin className="w-4 h-4" />,
    text: "Strada Toporași 69, București 052034",
    label: "Adresa"
  },
  {
    icon: <Icons.Clock className="w-4 h-4" />,
    text: "Lun-Vin: 08:00-18:00 | Sâm: 09:00-14:00",
    label: "Program"
  },
  {
    icon: <Icons.Phone className="w-4 h-4" />,
    text: "0769393545",
    label: "Telefon"
  }
]

const TopBar = () => {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % topbarInfo.length)
    }, 7000) // Schimbă la 7 secunde

    return () => clearInterval(interval)
  }, [])

  const currentInfo = topbarInfo[currentIndex]

  return (
    <div className="bg-navy text-white py-2 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="flex items-center space-x-2"
            >
              <div className="text-blue-accent">
                {currentInfo.icon}
              </div>
              <span className="text-sm font-medium">
                {currentInfo.text}
              </span>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default TopBar
