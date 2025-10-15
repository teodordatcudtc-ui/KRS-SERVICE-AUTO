import { motion } from 'framer-motion'

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg'
  color?: 'primary' | 'white' | 'gray'
}

const LoadingSpinner = ({ size = 'md', color = 'primary' }: LoadingSpinnerProps) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  const colorClasses = {
    primary: 'text-blue-primary',
    white: 'text-white',
    gray: 'text-gray-400'
  }

  return (
    <div className="flex items-center justify-center">
      <motion.div
        className={`${sizeClasses[size]} ${colorClasses[color]}`}
        animate={{ rotate: 360 }}
        transition={{
          duration: 1,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <svg
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 40"
            className="opacity-25"
          />
          <motion.circle
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="60 40"
            strokeDashoffset="100"
            animate={{ strokeDashoffset: 0 }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </svg>
      </motion.div>
    </div>
  )
}

export default LoadingSpinner
