'use client'

import { motion } from 'framer-motion'

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {/* Static Gradient Orbs - No animation for better performance */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-accent/10 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl" />
    </div>
  )
}

export default AnimatedBackground
