import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface ServiceCardProps {
  icon: ReactNode
  title: string
  description: string
  duration?: string
  price?: string
  features?: string[]
  className?: string
}

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  duration, 
  price, 
  features = [], 
  className = '' 
}: ServiceCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className={`card group hover:shadow-2xl ${className}`}
    >
      <div className="flex items-center space-x-4 mb-4">
        <div className="w-12 h-12 bg-blue-primary/10 rounded-xl flex items-center justify-center text-blue-primary group-hover:bg-blue-primary group-hover:text-white transition-colors duration-200">
          {icon}
        </div>
        <h3 className="font-heading font-semibold text-xl text-navy group-hover:text-blue-primary transition-colors duration-200">
          {title}
        </h3>
      </div>
      
      <div className="flex-grow flex flex-col">
        <p className="text-gray-text mb-4 leading-relaxed flex-grow">
          {description}
        </p>
        
        {(duration || price) && (
          <div className="flex flex-wrap gap-4 mb-4 text-sm">
            {duration && (
              <span className="flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                {duration}
              </span>
            )}
            {price && (
              <span className="flex items-center text-green-600 font-medium">
                <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
                {price}
              </span>
            )}
          </div>
        )}
        
        {features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {feature}
              </li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  )
}

export default ServiceCard
