'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { EXTERNAL_LINKS } from '@/constants/links'

export default function NavbarV2() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: '核心功能介绍', href: EXTERNAL_LINKS.coreFunction, external: true },
    { name: '短剧出海', href: EXTERNAL_LINKS.shortDramaAbroad, external: true },
    { name: 'API合作', href: EXTERNAL_LINKS.apiCooperation, external: true },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/95 backdrop-blur-xl shadow-2xl' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-green-400 via-emerald-500 to-green-600 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-green-500/50 transition-all duration-300">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-emerald-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
            </div>
            <div>
              <h1 className="text-white font-bold text-lg">AI解说大师</h1>
              <p className="text-gray-400 text-xs">智能解说·一键成片</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-green-400 transition-all duration-200 text-sm font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-green-400 to-emerald-500 group-hover:w-full transition-all duration-300"></span>
              </a>
            ))}

            <a
              href={EXTERNAL_LINKS.tryNow}
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium text-white transition duration-300 ease-out rounded-full shadow-xl group hover:shadow-2xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-green-500 via-emerald-500 to-green-600"></span>
              <span className="absolute bottom-0 right-0 block w-64 h-64 mb-32 mr-4 transition duration-500 origin-bottom-left transform rotate-45 translate-x-24 bg-green-400 rounded-full opacity-30 group-hover:rotate-90 ease"></span>
              <span className="relative text-white">立即体验</span>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden relative w-10 h-10 text-gray-300 hover:text-white focus:outline-none"
          >
            <span className="sr-only">Open menu</span>
            <div className="absolute w-6 h-6 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'rotate-45 translate-y-0' : '-translate-y-2'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`absolute h-0.5 w-6 bg-current transform transition duration-300 ease-in-out ${isMobileMenuOpen ? '-rotate-45 translate-y-0' : 'translate-y-2'}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-3 text-gray-300 hover:text-green-400 hover:bg-gray-900/50 rounded-lg transition-all duration-200 text-base font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <a
                href={EXTERNAL_LINKS.tryNow}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-gradient-to-r from-green-500 to-emerald-600 text-white px-6 py-3 rounded-full font-medium shadow-lg hover:shadow-green-500/30 transition-all duration-300"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                立即体验
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}