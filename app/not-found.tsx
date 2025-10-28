'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/Button'
import { Icons } from '@/components/IconSet'

export default function NotFound() {
  return (
    <div className="min-h-screen pt-24 flex items-center justify-center bg-gray-50">
      <div className="max-w-2xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          {/* 404 Animation */}
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="relative"
          >
            <div className="text-9xl md:text-[12rem] font-bold text-blue-primary/20">
              404
            </div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Icons.Car className="w-16 h-16 md:w-24 md:h-24 text-blue-primary" />
            </div>
          </motion.div>

          <div className="space-y-4">
            <h1 className="text-3xl md:text-4xl font-heading font-bold text-navy">
              Pagina nu a fost găsită
            </h1>
            <p className="text-lg text-gray-text max-w-md mx-auto">
              Se pare că pagina pe care o căutați nu există sau a fost mutată. 
              Să vă ajutăm să găsiți ceea ce căutați.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="/" size="lg">
              <Icons.ArrowRight className="w-5 h-5 mr-2" />
              Înapoi la Acasă
            </Button>
            <Button href="/contact" variant="outline" size="lg">
              <Icons.Phone className="w-5 h-5 mr-2" />
              Contactează-ne
            </Button>
          </div>

          {/* Quick Links */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-600 mb-4">
              Poate că căutați:
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link 
                href="/servicii" 
                className="text-blue-primary hover:text-blue-accent transition-colors text-sm"
              >
                Servicii
              </Link>
              <Link 
                href="/despre-noi" 
                className="text-blue-primary hover:text-blue-accent transition-colors text-sm"
              >
                Despre noi
              </Link>
              <Link 
                href="/faq" 
                className="text-blue-primary hover:text-blue-accent transition-colors text-sm"
              >
                FAQ
              </Link>
              <a 
                href="tel:0769393545" 
                className="text-blue-primary hover:text-blue-accent transition-colors text-sm"
              >
                0769393545
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
