export default function Team() {
  const teamMembers = [
    {
      name: "Ana Silva",
      role: "Entrenadora Personal",
      specialization: "Musculación y Adelgazamiento",
      experience: "8 años de experiencia",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Carlos Mendes",
      role: "Instructor de Crossfit",
      specialization: "Entrenamiento Funcional",
      experience: "6 años de experiencia",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Marina Costa",
      role: "Instructora de Yoga",
      specialization: "Yoga y Pilates",
      experience: "10 años de experiencia",
      image: "/api/placeholder/300/300"
    },
    {
      name: "Roberto Alves",
      role: "Fisioterapeuta",
      specialization: "Rehabilitación y RPG",
      experience: "12 años de experiencia",
      image: "/api/placeholder/300/300"
    }
  ]

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
            Nuestro Equipo
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Profesionales altamente calificados y apasionados por ayudarte
            a alcanzar tus objetivos de salud y bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 animate-fade-in-stagger">
              <div className="aspect-square bg-gray-200 flex items-center justify-center">
                <div className="w-24 h-24 bg-gray-300 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                  </svg>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-gray-800 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm mb-2">{member.specialization}</p>
                <p className="text-gray-500 text-sm">{member.experience}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4 animate-fade-in">
              ¿Por qué elegir nuestro equipo?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Certificaciones</h4>
                <p className="text-gray-600 text-sm">Todos los profesionales poseen certificaciones reconocidas</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Experiencia</h4>
                <p className="text-gray-600 text-sm">Años de experiencia práctica en el mercado fitness</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/>
                  </svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Dedicación</h4>
                <p className="text-gray-600 text-sm">Compromiso total con tu éxito y bienestar</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}