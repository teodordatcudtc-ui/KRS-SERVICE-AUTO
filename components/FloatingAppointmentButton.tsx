'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, MessageCircle, X, Minimize2 } from 'lucide-react'

const FloatingAppointmentButton = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const handleClose = () => {
    setIsMinimized(true)
    setIsOpen(false)
  }

  const handleOpen = () => {
    setIsMinimized(false)
    setIsOpen(true)
  }

  return (
    <>
      {/* Minimized Button */}
      <AnimatePresence>
        {isMinimized && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={handleOpen}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-accent transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <div className="bg-white rounded-2xl shadow-2xl p-6 w-80 border border-gray-100">
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-heading font-semibold text-navy">
                  Programează acum
                </h3>
                <button
                  onClick={handleClose}
                  className="p-1 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <X className="w-5 h-5 text-gray-500" />
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6">
                Contactează-ne pentru o programare rapidă și profesională!
              </p>

              {/* Buttons */}
              <div className="space-y-3">
                {/* Phone Button */}
                <motion.a
                  href="tel:0769393545"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 w-full bg-blue-primary text-white p-4 rounded-xl hover:bg-blue-accent transition-colors"
                >
                  <Phone className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">Sună acum</div>
                    <div className="text-sm opacity-90">0769393545</div>
                  </div>
                </motion.a>

                {/* WhatsApp Button */}
                <motion.a
                  href="https://wa.me/40769393545?text=Bună! Aș vrea să programez o vizită la service."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center space-x-3 w-full bg-green-500 text-white p-4 rounded-xl hover:bg-green-600 transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-semibold">WhatsApp</div>
                    <div className="text-sm opacity-90">Mesaj rapid</div>
                  </div>
                </motion.a>
              </div>

              {/* Minimize Button */}
              <button
                onClick={handleClose}
                className="mt-4 w-full flex items-center justify-center space-x-2 text-gray-500 hover:text-gray-700 transition-colors"
              >
                <Minimize2 className="w-4 h-4" />
                <span className="text-sm">Minimizează</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Initial Button */}
      <AnimatePresence>
        {!isOpen && !isMinimized && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            className="fixed bottom-6 right-6 z-50"
          >
            <motion.button
              onClick={() => setIsOpen(true)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-blue-primary text-white p-4 rounded-full shadow-lg hover:bg-blue-accent transition-colors"
            >
              <MessageCircle className="w-6 h-6" />
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default FloatingAppointmentButton
