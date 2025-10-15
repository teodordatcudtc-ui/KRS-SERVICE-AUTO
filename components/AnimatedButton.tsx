'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface AnimatedButtonProps {
  children: ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  disabled?: boolean
  rippleEffect?: boolean
  icon?: ReactNode
}

const AnimatedButton = ({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  disabled = false,
  rippleEffect = true,
  icon
}: AnimatedButtonProps) => {
  const baseClasses = 'relative inline-flex items-center justify-center font-medium rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden'
  
  const variantClasses = {
    primary: 'bg-blue-primary hover:bg-blue-accent text-white focus:ring-blue-primary shadow-lg hover:shadow-xl',
    secondary: 'bg-white hover:bg-gray-50 text-navy border border-gray-300 focus:ring-gray-500 shadow-md hover:shadow-lg',
    outline: 'border-2 border-blue-primary text-blue-primary hover:bg-blue-primary hover:text-white focus:ring-blue-primary',
    ghost: 'text-blue-primary hover:bg-blue-primary/10 focus:ring-blue-primary'
  }
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  }

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  const buttonContent = (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: disabled ? 1 : 1.03 }}
      whileTap={{ scale: disabled ? 1 : 0.98 }}
      transition={{ duration: 0.2 }}
    >
      {rippleEffect && (
        <motion.div
          className="absolute inset-0 bg-white/20 rounded-xl"
          initial={{ scale: 0, opacity: 0 }}
          whileTap={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      
      <span className="relative z-10 flex items-center">
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </span>
    </motion.button>
  )

  if (href) {
    return (
      <motion.a
        href={href}
        className={classes}
        whileHover={{ scale: disabled ? 1 : 1.03 }}
        whileTap={{ scale: disabled ? 1 : 0.98 }}
        transition={{ duration: 0.2 }}
      >
        <span className="flex items-center">
          {icon && <span className="mr-2">{icon}</span>}
          {children}
        </span>
      </motion.a>
    )
  }

  return buttonContent
}

export default AnimatedButton
