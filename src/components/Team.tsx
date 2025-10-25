'use client'

import Image from "next/image"
import Link from "next/link"

export default function Team() {
   const teamMembers = [
    {
      name: "Francisco Cuneo",
      role: "Head Coach • Mestre",
      specialization: ["Bjj", "No-Gi", "Takedowns"],
      image: "/Profe-Paco.jpg",
      bio: "Profesor principal, especialista en No-Gi y takedowns. Enseña clases de todos los niveles y dirige el equipo de competencia."
    },
    {
      name: "Lean Galbusera",
      role: "Profesor • Coach",
      specialization: ["Bjj Avanzado", "Técnica competitiva"],
      image: "https://placehold.co/400x400/c41e3a/fff?text=Lean",
      bio: "Entrenador de avanzados, foco en estrategia y drills de competición."
    },
    {
      name: "Bianca Giannini",
      role: "Profesora • Coach",
      specialization: ["No-Gi All Levels", "Fundamentos"],
      image: "/Profe-Bianca.jpg",
      bio: "Imparte clases accesibles para todos los niveles, con énfasis en la técnica y el aprendizaje progresivo."
    },
    {
      name: "Lucas Galbusera",
      role: "Profesor • Coach",
      specialization: ["No-Gi Avanzados"],
      image: "/Profe-Lucas.jpg",
      bio: "Entrenador de grupos avanzados, trabaja transiciones y sparring técnico."
    },
    {
      name: "Cecilia Velozo",
      role: "Coach • Profesora",
      specialization: ["NOGI Femenino", "Fundamentos"],
      image: "https://placehold.co/400x400/3a5a40/fff?text=Ceci",
      bio: "Lidera las clases femeninas y promueve un ambiente inclusivo y seguro para aprender."
    },
    {
      name: "Nicolás Anselmo",
      role: "Profesor • Competidor",
      specialization: ["Bjj", "Competición"],
      image: "/Profe-Nico.jpg",
      bio: "Competidor y profesor, enfocado en técnica aplicada y preparación para torneos."
    }
  ]

  return (
    <section id="equipo" className="py-20 bg-shark-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-shark-950 mb-4">Nuestro Equipo</h2>
          <div className="w-20 h-1 bg-crimson mx-auto mb-6"></div>
          <p className="text-xl text-shark-600 max-w-3xl mx-auto leading-relaxed">
            Competidores y profesionales altamente calificados y apasionados por el deporte.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <article
              key={member.name}
              className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.03] hover:-translate-y-2 group"
              role="group"
              aria-labelledby={`member-${member.name}`}
            >
              <div className="relative aspect-square bg-shark-100 flex items-center justify-center overflow-hidden">
                <Image
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  width={600}
                  height={600}
                  className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
                  style={{ objectPosition: 'center 0%' }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shark-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute left-4 top-4 bg-shark-950 text-white text-xs px-3 py-1.5 rounded-md shadow-lg">
                  {member.role.split("•")[0].trim()}
                </div>
              </div>

              <div className="p-6">
                <h3 id={`member-${member.name}`} className="text-2xl font-bold text-shark-950 mb-1">{member.name}</h3>
                <p className="text-shark-700 font-medium mb-3 text-sm">{member.role}</p>

                <div className="flex flex-wrap gap-2 mb-4" aria-hidden>
                  {member.specialization.map((spec) => (
                    <span key={spec} className="text-xs px-3 py-1 rounded-full bg-shark-100 text-shark-800 border border-shark-300 font-medium">
                      {spec}
                    </span>
                  ))}
                </div>

                <p className="text-shark-600 text-sm mb-5 line-clamp-3 leading-relaxed">{member.bio}</p>

                <div className="flex items-center justify-between gap-3">
                  <Link
                    href="/#contacto"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-shark-950 text-white text-sm font-medium hover:bg-crimson transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
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
        <div className="mt-20 text-center">
          <div className="bg-white rounded-2xl p-10 max-w-5xl mx-auto shadow-xl border border-shark-200">
            <h3 className="text-3xl font-bold text-shark-950 mb-6">¿Por qué elegir nuestro equipo?</h3>
            <div className="w-16 h-1 bg-crimson mx-auto mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
                </div>
                <h4 className="font-bold text-shark-950 mb-3 text-lg">Competidores</h4>
                <p className="text-shark-600 text-sm leading-relaxed">Profesores activos en competición con experiencia práctica en torneos.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/></svg>
                </div>
                <h4 className="font-bold text-shark-950 mb-3 text-lg">Experiencia</h4>
                <p className="text-shark-600 text-sm leading-relaxed">Años de práctica y docencia dedicados al arte suave.</p>
              </div>
              <div className="text-center group">
                <div className="w-16 h-16 bg-shark-950 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-crimson transition-colors duration-300 shadow-lg">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"/></svg>
                </div>
                <h4 className="font-bold text-shark-950 mb-3 text-lg">Dedicación</h4>
                <p className="text-shark-600 text-sm leading-relaxed">Compromiso y disciplina para mejorar constantemente.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
