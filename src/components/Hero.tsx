export default function Hero() {
  return (
    <section id="inicio" className="pt-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-black mb-6 animate-fade-in">
            Transformá tu vida a través del
            <span className="block text-gray-800">movimiento y bienestar</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in-delay">
            Descubrí tu potencial máximo con nuestros programas personalizados
            de fitness y bienestar, desarrollados por profesionales especializados.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#programas"
              className="bg-black text-white px-8 py-3 rounded-lg text-lg font-medium hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 animate-slide-up"
            >
              Conocé nuestros programas
            </a>
            <a
              href="#contacto"
              className="border-2 border-black text-black px-8 py-3 rounded-lg text-lg font-medium hover:bg-black hover:text-white transition-all duration-300 transform hover:scale-105 animate-slide-up-delay"
            >
              Agendá una consulta
            </a>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-black mb-4 animate-fade-in">
              Nuestros valores
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Excelencia</h3>
              <p className="text-gray-600">Compromiso con la calidad en cada entrenamiento y atención.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Comunidad</h3>
              <p className="text-gray-600">Construyendo relaciones duraderas y una red de apoyo.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-black mb-2">Pasión</h3>
              <p className="text-gray-600">Amor genuino por lo que hacemos y por los resultados de nuestros clientes.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}