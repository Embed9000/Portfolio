import React from 'react'
import { ChevronDownIcon } from 'lucide-react'
const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById('about')
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
      })
    }
  }
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center py-20 px-4"
      style={{
        backgroundImage:
          'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://images.unsplash.com/photo-1511512578047-dfb367046420?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80")',
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-900/50 to-gray-900"></div>
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="text-white">Crafting </span>
          <span className="text-purple-500">Immersive</span>
          <span className="text-white"> Game</span>
          <span className="text-purple-500"> Worlds</span>
        </h1>
        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Independent game developer with a passion for creating unique gaming
          experiences that tell compelling stories
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              document.getElementById('projects').scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="px-8 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-md transition-colors text-lg font-medium"
          >
            View Projects
          </button>
          <button
            onClick={() =>
              document.getElementById('contact').scrollIntoView({
                behavior: 'smooth',
              })
            }
            className="px-8 py-3 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-md transition-colors text-lg font-medium"
          >
            Get in Touch
          </button>
        </div>
      </div>
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDownIcon size={32} />
      </button>
    </section>
  )
}
export default Hero
