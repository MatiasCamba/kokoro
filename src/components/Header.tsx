'use client'

import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-black tracking-wider">Kokoro</h1>
          </div>

          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#inicio" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Inicio
              </a>
              <a href="#programas" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Programas
              </a>
              <a href="#equipo" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Equipo
              </a>
              <a href="#horarios" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Horarios
              </a>
              <a href="#contacto" className="text-black hover:text-gray-600 px-3 py-2 text-sm font-medium transition-colors duration-300">
                Contacto
              </a>
            </div>
          </nav>

          <div className="hidden md:block">
            <a
              href="https://wa.me/5511999999999"
              className="bg-black hover:bg-gray-800 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 transform hover:scale-105"
            >
              WhatsApp
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-black hover:text-gray-600 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#inicio" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Inicio
            </a>
            <a href="#programas" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Programas
            </a>
            <a href="#equipo" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Equipo
            </a>
            <a href="#horarios" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Horarios
            </a>
            <a href="#contacto" className="text-black hover:text-gray-600 block px-3 py-2 text-base font-medium transition-colors duration-300">
              Contacto
            </a>
            <a
              href="https://wa.me/5511999999999"
              className="bg-black hover:bg-gray-800 text-white block px-3 py-2 text-base font-medium rounded-lg mx-3 mt-2 text-center transition-all duration-300"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  )
}