'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone } from 'lucide-react'
import TopBar from './TopBar'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollTop, setLastScrollTop] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      
      // Hide/show header based on scroll direction
      if (scrollY > 200) {
        if (scrollY > lastScrollTop) {
          setIsVisible(false)
        } else {
          setIsVisible(true)
        }
      } else {
        setIsVisible(true)
      }
      
      setLastScrollTop(scrollY <= 0 ? 0 : scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollTop])

  const navItems = [
    { name: 'Acasă', href: '/' },
    { name: 'Servicii', href: '/servicii' },
    { name: 'Despre noi', href: '/despre-noi' },
    { name: 'Contact', href: '/contact' },
    { name: 'FAQ', href: '/faq' },
  ]

  return (
    <>
      <TopBar />
      
      {/* Header - slides up/down based on scroll */}
      <motion.header
        initial={{ y: 0 }}
        animate={{ 
          y: isVisible ? 0 : -100
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="fixed left-0 right-0 top-[40px] z-40 bg-white shadow-lg"
        style={{ marginTop: 0 }}
      >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-12 lg:h-14">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2"
            >
              <div className="w-8 h-8 bg-blue-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <span className="font-heading font-bold text-xl text-navy">
                KRS SERVICE AUTO
              </span>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="font-medium transition-colors duration-200 hover:text-blue-primary text-gray-700"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:0769393545"
              className="flex items-center space-x-2 btn-primary"
            >
              <Phone className="w-4 h-4" />
              <span>0769393545</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md transition-colors text-gray-700 hover:bg-gray-100"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white rounded-lg shadow-lg mt-2 overflow-hidden"
          >
            <div className="px-4 py-2 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-2 text-gray-700 hover:bg-gray-100 rounded-md transition-colors"
                >
                  {item.name}
                </Link>
              ))}
              <a
                href="tel:0769393545"
                className="flex items-center space-x-2 px-3 py-2 text-blue-primary hover:bg-blue-50 rounded-md transition-colors"
              >
                <Phone className="w-4 h-4" />
                <span>0769393545</span>
              </a>
            </div>
          </motion.div>
        )}
        </div>
      </motion.header>
    </>
  )
}

export default Header
