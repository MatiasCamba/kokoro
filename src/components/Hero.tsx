'use client'

import { ScrollAnimation } from './ScrollAnimations'

export default function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-white relative overflow-hidden">
     
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-black mb-6 animate-hero-text leading-tight">
            Veni y aprendé con los mejores
            <span className="block text-gray-800 mt-2">Bjj y Lucha</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
            Descubrí tu potencial máximo, aprende con profesionales.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#programas"
              className="hero-button bg-black text-white px-8 py-4 rounded-lg text-lg font-medium hover:bg-gray-800 animate-slide-up"
            >
              Conocé nuestras clases
            </a>
            <a
              href="#contacto"
              className="hero-button border-2 border-black text-black px-8 py-4 rounded-lg text-lg font-medium hover:bg-black hover:text-white animate-slide-up-delay"
            >
              Agendá una clase
            </a>
          </div>
        </div>
      </div>

     
      <div className="absolute top-0 right-0 w-1/3 h-full opacity-5">
        <div className="w-full h-full bg-gradient-to-l from-black to-transparent"></div>
      </div>
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 opacity-5">
        <div className="w-full h-full bg-gradient-to-tr from-black to-transparent"></div>
      </div>

      
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" threshold={0.2}>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                Nuestros valores
              </h2>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ScrollAnimation animation="slideInLeft" delay={100}>
              <div className="text-center alliance-card bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Disciplina</h3>
                <p className="text-gray-600">Disciplina en cada entrenamiento.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={200}>
              <div className="text-center alliance-card bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Comunidad</h3>
                <p className="text-gray-600">Compitiendo con una red de apoyo.</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight" delay={300}>
              <div className="text-center alliance-card bg-white p-8 rounded-lg shadow-sm">
                <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-black mb-2">Pasión</h3>
                <p className="text-gray-600">Amor genuino por lo que hacemos.</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}