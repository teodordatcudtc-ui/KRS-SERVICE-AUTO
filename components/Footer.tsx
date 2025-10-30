import Link from 'next/link'
import { Phone, MapPin, Clock, Mail } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="font-heading font-bold text-xl">KRS SERVICE AUTO</h3>
            <p className="text-gray-300 text-sm leading-relaxed">
              Service auto profesionist în București. Oferim servicii complete de reparații, 
              diagnoză, vulcanizare și montaj anvelope cu calitate garantată.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Linkuri Rapide</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/servicii" className="text-gray-300 hover:text-blue-accent transition-colors">
                  Servicii
                </Link>
              </li>
              <li>
                <Link href="/despre-noi" className="text-gray-300 hover:text-blue-accent transition-colors">
                  Despre noi
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-blue-accent transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-300 hover:text-blue-accent transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-blue-accent mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 text-sm">
                    Strada Toporași 69<br />
                    București 052034
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-blue-accent flex-shrink-0" />
                <a 
                  href="tel:0769393545" 
                  className="text-gray-300 hover:text-blue-accent transition-colors text-sm"
                >
                  0769393545
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-blue-accent flex-shrink-0" />
                <a 
                  href="mailto:contact@krs-service-auto.ro" 
                  className="text-gray-300 hover:text-blue-accent transition-colors text-sm"
                >
                  contact@krs-service-auto.ro
                </a>
              </div>
            </div>
          </div>

          {/* Opening Hours */}
          <div className="space-y-4">
            <h4 className="font-heading font-semibold text-lg">Program</h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-blue-accent flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Luni - Vineri: 09:00 - 18:00</p>
                  <p>Sâmbătă: 09:00 - 14:00</p>
                  <p>Duminică: Închis</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-gray-400 text-sm">
              © {currentYear} KRS SERVICE AUTO. Toate drepturile rezervate.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link href="/politica-gdpr" className="text-gray-400 hover:text-blue-accent transition-colors">
                Politica GDPR
              </Link>
              <Link href="/termeni-conditii" className="text-gray-400 hover:text-blue-accent transition-colors">
                Termeni și Condiții
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
