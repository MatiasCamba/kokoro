export default function Programs() {
  const programs = [
    {
      title: "Entrenamiento Personal",
      description: "Entrenamientos personalizados con seguimiento individual para máximos resultados.",
      features: ["Evaluación física completa", "Plan personalizado", "Seguimiento constante"],
      icon: "💪"
    },
    {
      title: "Entrenamiento Funcional",
      description: "Ejercicios que mejoran tu funcionalidad en el día a día.",
      features: ["Mejora de la coordinación", "Fortalecimiento del core", "Flexibilidad"],
      icon: "🏃"
    },
    {
      title: "Yoga & Pilates",
      description: "Equilibrá cuerpo y mente con nuestras clases de yoga y pilates.",
      features: ["Relajación mental", "Fortalecimiento muscular", "Flexibilidad"],
      icon: "🧘"
    },
    {
      title: "Crossfit",
      description: "Entrenamientos intensos y variados para romper la rutina.",
      features: ["Alta intensidad", "Variedad de ejercicios", "Comunidad activa"],
      icon: "🏋️"
    },
    {
      title: "Nutrición",
      description: "Seguimiento nutricional para potenciar tus resultados.",
      features: ["Plan alimentario", "Orientación profesional", "Soporte continuo"],
      icon: "🥗"
    },
    {
      title: "Rehabilitación",
      description: "Programas especializados para recuperación y prevención de lesiones.",
      features: ["Fisioterapia", "Ejercicios terapéuticos", "Prevención"],
      icon: "🏥"
    }
  ]

  return (
    <section id="programas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
            Nuestros Programas
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Ofrecemos una variedad de programas para atender tus necesidades específicas
            y ayudarte a alcanzar tus objetivos de salud y bienestar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-stagger">
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold text-black mb-3">{program.title}</h3>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <ul className="space-y-2">
                {program.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-700">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105">
                Sabé más
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}