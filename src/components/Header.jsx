import { useEffect, useState } from 'react'
import { MenuIcon, XIcon } from 'lucide-react'
import  CV from '../../public/pdf/cv/Catalin_Tabiica_CV.pdf'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const menuItems = ['home', 'about', 'writings', 'projects', 'education', 'contact']

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-gray-900/95 shadow-lg backdrop-blur-sm' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* LOGO */}
        <div className="text-2xl font-bold text-purple-500">
          <a href="#">
            <span className="text-white">Tăbîică </span>Cătălin
            </a>
        </div>

        {/* DESKTOP NAVIGATION */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="text-gray-300 hover:text-purple-400 transition-colors capitalize"
            >
              {item}
            </button>
          ))}

          {/* CV BUTTON */}
          <a
            href={CV}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-1 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition font-semibold"
          >
            Resume
          </a>
        </nav>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 shadow-xl">
          <div className="container mx-auto px-4 py-2">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className="block w-full text-left py-3 text-gray-300 hover:text-purple-400 transition-colors capitalize border-b border-gray-700 last:border-none"
              >
                {item}
              </button>
            ))}

            {/* CV BUTTON MOBILE */}
            <a
              href={CV}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-left py-3 text-purple-400 hover:text-purple-300 transition-colors border-b border-gray-700"
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </header>
  )
}

export default Header
