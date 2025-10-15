'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedCardProps {
  children: ReactNode
  className?: string
  delay?: number
  hoverScale?: number
  glowEffect?: boolean
}

const AnimatedCard = ({ 
  children, 
  className = '', 
  delay = 0,
  hoverScale = 1.05,
  glowEffect = false
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: hoverScale,
        y: -8,
        transition: { duration: 0.2 }
      }}
      className={`relative group h-full ${className}`}
    >
      {glowEffect && (
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-blue-primary/20 to-blue-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      <motion.div
        className="relative z-10 h-full flex flex-col"
        whileHover={{
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        transition={{ duration: 0.2 }}
      >
        {children}
      </motion.div>
    </motion.div>
  )
}

export default AnimatedCard
