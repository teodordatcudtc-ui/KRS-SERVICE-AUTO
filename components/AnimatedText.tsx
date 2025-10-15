'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedTextProps {
  children: ReactNode
  className?: string
  delay?: number
  stagger?: number
  type?: 'fade' | 'slide' | 'scale' | 'typing'
  duration?: number
}

const AnimatedText = ({ 
  children, 
  className = '', 
  delay = 0,
  stagger = 0.1,
  type = 'fade',
  duration = 0.6
}: AnimatedTextProps) => {
  const getVariants = () => {
    switch (type) {
      case 'fade':
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
      case 'slide':
        return {
          hidden: { opacity: 0, y: 30 },
          visible: { opacity: 1, y: 0 }
        }
      case 'scale':
        return {
          hidden: { opacity: 0, scale: 0.8 },
          visible: { opacity: 1, scale: 1 }
        }
      case 'typing':
        return {
          hidden: { opacity: 0, x: -20 },
          visible: { opacity: 1, x: 0 }
        }
      default:
        return {
          hidden: { opacity: 0 },
          visible: { opacity: 1 }
        }
    }
  }

  const variants = getVariants()

  if (typeof children === 'string') {
    const words = children.split(' ')
    
    return (
      <motion.div className={className}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={variants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{
              duration,
              delay: delay + index * stagger,
              ease: "easeOut"
            }}
            className="inline-block mr-2"
          >
            {word}
          </motion.span>
        ))}
      </motion.div>
    )
  }

  return (
    <motion.div
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
    >
      {children}
    </motion.div>
  )
}

export default AnimatedText
