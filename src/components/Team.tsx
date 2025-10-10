'use client'

import Image from "next/image"
import Link from "next/link"

export default function Team() {
   const teamMembers = [
    {
      name: "Paco",
      role: "Head Coach • Mestre",
      specialization: ["Bjj", "No-Gi", "Takedowns"],
      image: "https://placehold.co/300x300/8ecae6/fff?text=Paco",
      bio: "Profesor principal, especialista en No-Gi y takedowns. Enseña clases de todos los niveles y dirige el equipo de competencia."
    },
    {
      name: "Lean",
      role: "Profesor • Coach",
      specialization: ["Bjj Avanzado", "Técnica competitiva"],
      image: "https://placehold.co/300x300/f94144/fff?text=Lean",
      bio: "Entrenador de avanzados, foco en estrategia y drills de competición."
    },
    {
      name: "Bianca",
      role: "Profesor • Coach",
      specialization: ["No-Gi All Levels", "Fundamentos"],
      image: "https://placehold.co/300x300/f9c74f/fff?text=Bianca",
      bio: "Imparte clases accesibles para todos los niveles, con énfasis en la técnica y el aprendizaje progresivo."
    },
    {
      name: "Lucas",
      role: "Profesor • Coach",
      specialization: ["No-Gi Avanzados"],
      image: "https://placehold.co/300x300/43aa8b/fff?text=Lucas",
      bio: "Entrenador de grupos avanzados, trabaja transiciones y sparring técnico."
    },
    {
      name: "Ceci",
      role: "Coach • Profesora",
      specialization: ["NOGI Femenino", "Fundamentos"],
      image: "https://placehold.co/300x300/577590/fff?text=Ceci",
      bio: "Lidera las clases femeninas y promueve un ambiente inclusivo y seguro para aprender."
    },
    {
      name: "Nicolás Anselmo",
      role: "Profesor / Competidor",
      specialization: ["Bjj"],
      image: "https://placehold.co/300x300/f3722c/fff?text=Nicolás",
      bio: "Competidor y profesor, enfocado en técnica aplicada y preparación para torneos."
    }
  ]

  return (
    <section id="equipo" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-black mb-4">Nuestro Equipo</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Competidores y profesionales altamente calificados y apasionados por el deporte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]"
              role="group"
              aria-labelledby={`member-${member.name}`}
            >
              <div className="relative aspect-square bg-gray-100 flex items-center justify-center">
                <Image
                  src={member.image}
                  alt={`${member.name} foto`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full"
                  // quick mock: evita validar domains en next.config.js
                  unoptimized
                />
                <div className="absolute left-4 top-4 bg-black text-white text-xs px-2 py-1 rounded-md">
                  {member.role.split("•")[0].trim()}
                </div>
              </div>

              <div className="p-6">
                <h3 id={`member-${member.name}`} className="text-xl font-semibold text-black mb-1">{member.name}</h3>
                <p className="text-gray-800 font-medium mb-2">{member.role}</p>

                <div className="flex flex-wrap gap-2 mb-3" aria-hidden>
                  {member.specialization.map((spec) => (
                    <span key={spec} className="text-xs px-2 py-1 rounded-full bg-gray-100 text-gray-700 border border-gray-200">
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-gray-500 text-sm mb-4 line-clamp-3">{member.bio}</p>

                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-gray-200 text-sm hover:bg-gray-100 transition"
                    aria-label={`Contactar a ${member.name}`}
                  >
                    Contacto
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* sección de beneficios */}
        <div className="mt-16 text-center">
          <div className="bg-white rounded-lg p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-black mb-4">¿Por qué elegir nuestro equipo?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Competidores</h4>
                <p className="text-gray-600 text-sm">Profesores activos en competición con experiencia práctica en torneos.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Experiencia</h4>
                <p className="text-gray-600 text-sm">Años de práctica y docencia dedicados al arte suave.</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
                </div>
                <h4 className="font-semibold text-black mb-2">Dedicación</h4>
                <p className="text-gray-600 text-sm">Compromiso y disciplina para mejorar constantemente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
