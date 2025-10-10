'use client'

import dynamic from "next/dynamic"
import Link from "next/link"


const ScrollAnimation = dynamic(
  () => import("./ScrollAnimations").then((mod) => mod.ScrollAnimation),
  { ssr: false }
)
const StaggeredAnimation = dynamic(
  () => import("./ScrollAnimations").then((mod) => mod.StaggeredAnimation),
  { ssr: false }
)

export default function Programs() {
  const programs = [
    {
      title: "NO GI ALL LEVELS",
      description: "Entrenamiento sin kimono abierto a todos los niveles. Ideal para mejorar agarres, defensa y fluidez técnica.",
      features: ["Técnica y sparring", "Todos los niveles", "Sesiones de 60-90min"],
      icon: "🥋"
    },
    {
      title: "NO GI AVANZADOS",
      description: "Clases intensivas enfocadas en estrategia, transición y dominio competitivo sin kimono.",
      features: ["Competencia", "Drills técnicos avanzados", "Entrenamiento exigente"],
      icon: "🔥"
    },
    {
      title: "NO GI FUNDAMENTALS",
      description: "Fundamentos del grappling sin kimono: posturas, escapes y control. Ideal para principiantes.",
      features: ["Base técnica sólida", "Aprendizaje progresivo", "Ambiente guiado"],
      icon: "🧩"
    },
    {
      title: "KIMONO ALL LEVELS",
      description: "Entrenamiento con gi para todos los niveles. Foco en agarres, barridos y control con kimono.",
      features: ["Trabajo de gi", "Agarres y barridos", "Sesiones de 90min"],
      icon: "🥇"
    },
    {
      title: "NO GI FEMENINO",
      description: "Clases exclusivas para mujeres con enfoque técnico, seguridad y empoderamiento.",
      features: ["Ambiente inclusivo", "Técnica aplicada", "Coach femenina"],
      icon: "💪"
    },
    {
      title: "MMA",
      description: "Entrenamientos de artes marciales mixtas combinando striking, grappling y control en suelo.",
      features: ["Golpeo + grappling", "Transiciones", "Condición física total"],
      icon: "🥊"
    },
    {
      title: "OPEN MAT",
      description: "Espacio libre para practicar, hacer sparring o repasar técnicas. Ideal para pulir detalles.",
      features: ["Entrenamiento libre", "Sin profesor fijo", "Ambiente colaborativo"],
      icon: "⚡"
    }
  ]

  return (
    <section id="programas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollAnimation animation="fadeIn" threshold={0.2}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-4">
              Clases
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Mañana · Tarde · Noche — encontrá tu estilo y nivel de entrenamiento.
            </p>
          </div>
        </ScrollAnimation>

        <StaggeredAnimation
          staggerDelay={150}
          threshold={0.1}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {programs.map((program, index) => (
            <div
              key={index}
              className="alliance-card bg-gray-50 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="text-5xl mb-6 text-center">{program.icon}</div>
              <h3 className="text-2xl font-semibold text-black mb-3 text-center">
                {program.title}
              </h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed">
                {program.description}
              </p>
              <ul className="space-y-3 mb-8">
                {program.features.map((feature, featureIndex) => (
                  <li
                    key={featureIndex}
                    className="flex items-center text-sm text-gray-700"
                  >
                    <svg
                      className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
             <Link href="/#contacto" className="block">
                <button className="w-full bg-black text-white py-3 px-6 rounded-lg hover:bg-gray-800 font-medium transition-transform duration-300 hover:scale-105">
                  Conoce más
                </button>
              </Link>
            </div>
          ))}
        </StaggeredAnimation>
      </div>
    </section>
  )
}
