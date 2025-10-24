'use client'

import { ScrollAnimation } from './ScrollAnimations'

export default function Hero() {
  return (
    <section className="pt-16 bg-gradient-to-b from-white via-shark-50 to-white relative overflow-hidden">
      {/* Japanese-inspired decorative circles */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-crimson opacity-5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-shark-900 opacity-5 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-shark-950 mb-6 animate-hero-text leading-tight">
            Vení y aprendé con los mejores
            <span className="block text-crimson mt-3">BJJ y Lucha</span>
          </h1>
          <p className="text-xl md:text-2xl text-shark-600 mb-10 max-w-4xl mx-auto animate-fade-in-delay leading-relaxed">
            Descubrí tu potencial máximo, aprendé con profesionales
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            <a
              href="#clases"
              className="hero-button bg-shark-950 text-white px-10 py-4 rounded-xl text-lg font-semibold hover:bg-crimson transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-2xl animate-slide-up"
            >
              Conocé nuestras clases
            </a>
            <a
              href="#contacto"
              className="hero-button border-2 border-shark-950 text-shark-950 px-10 py-4 rounded-xl text-lg font-semibold hover:bg-shark-950 hover:text-white transform hover:scale-105 transition-all duration-300 shadow-lg animate-slide-up-delay"
            >
              Agendá una clase
            </a>
          </div>
        </div>
      </div>


      {/* Values section */}
      <div className="bg-shark-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation animation="fadeIn" threshold={0.2}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-shark-950 mb-4">
                Nuestros valores
              </h2>
              <div className="w-20 h-1 bg-crimson mx-auto"></div>
            </div>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <ScrollAnimation animation="slideInLeft" delay={100}>
              <div className="text-center alliance-card bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-shark-950 mb-3">Disciplina</h3>
                <p className="text-shark-600 leading-relaxed">Compromiso y constancia en cada entrenamiento para alcanzar tus objetivos</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideUp" delay={200}>
              <div className="text-center alliance-card bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-shark-950 mb-3">Comunidad</h3>
                <p className="text-shark-600 leading-relaxed">Una familia que te apoya y te acompaña en tu camino deportivo</p>
              </div>
            </ScrollAnimation>

            <ScrollAnimation animation="slideInRight" delay={300}>
              <div className="text-center alliance-card bg-white p-10 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 group">
                <div className="w-20 h-20 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-shark-950 mb-3">Pasión</h3>
                <p className="text-shark-600 leading-relaxed">Amor genuino por las artes marciales y el desarrollo personal</p>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </section>
  )
}