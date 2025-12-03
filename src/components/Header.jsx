import React, { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
      setIsMenuOpen(false)
    }
  }
  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'}`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold text-purple-500">
          <span className="text-white">Tabiica </span>Catalin
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {['home', 'about','writings','projects','education','contact'].map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-purple-400 transition-colors capitalize"
            >
              {item}
            </button>
          ))}
        </nav>

        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="container mx-auto px-4 py-2">
            {['home', 'about','writings', 'projects','education','contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-gray-300 hover:text-purple-400 transition-colors capitalize border-b border-gray-700 last:border-none"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}
export default Header
