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
  hoverScale = 1.02,
  glowEffect = false
}: AnimatedCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay, ease: "easeOut" }}
      whileHover={{ 
        scale: hoverScale,
        y: -4,
        transition: { duration: 0.15 }
      }}
      className={`relative group h-full ${className}`}
    >
      {glowEffect && (
        <div className="absolute inset-0 bg-gradient-to-r from-blue-primary/20 to-blue-accent/20 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10" />
      )}
      
      <div className="relative z-10 h-full flex flex-col group-hover:shadow-xl transition-shadow duration-200">
        {children}
      </div>
    </motion.div>
  )
}

export default AnimatedCard
