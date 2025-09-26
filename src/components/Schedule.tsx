export default function Schedule() {
  const schedule = [
    {
      time: "06:00 - 07:00",
      monday: "Crossfit",
      tuesday: "Yoga",
      wednesday: "Crossfit",
      thursday: "Pilates",
      friday: "Crossfit",
      saturday: "Funcional"
    },
    {
      time: "07:00 - 08:00",
      monday: "Funcional",
      tuesday: "Personal",
      wednesday: "Funcional",
      thursday: "Personal",
      friday: "Funcional",
      saturday: "Yoga"
    },
    {
      time: "08:00 - 09:00",
      monday: "Personal",
      tuesday: "Crossfit",
      wednesday: "Personal",
      thursday: "Crossfit",
      friday: "Personal",
      saturday: "Personal"
    },
    {
      time: "18:00 - 19:00",
      monday: "Crossfit",
      tuesday: "Funcional",
      wednesday: "Crossfit",
      thursday: "Yoga",
      friday: "Crossfit",
      saturday: "Pilates"
    },
    {
      time: "19:00 - 20:00",
      monday: "Funcional",
      tuesday: "Yoga",
      wednesday: "Funcional",
      thursday: "Personal",
      friday: "Funcional",
      saturday: "Crossfit"
    },
    {
      time: "20:00 - 21:00",
      monday: "Personal",
      tuesday: "Personal",
      wednesday: "Personal",
      thursday: "Funcional",
      friday: "Personal",
      saturday: "Personal"
    }
  ]

  const days = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"]
  const dayKeys = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]

  return (
    <section id="horarios" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-black mb-4 animate-fade-in">
            Horarios de las Clases
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto animate-fade-in-delay">
            Mirá nuestra grilla de horarios y encontrá el mejor momento para entrenar.
            Todas las clases tienen una duración de 1 hora.
          </p>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 overflow-x-auto animate-fade-in">
          <table className="w-full min-w-[800px]">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-4 px-4 font-semibold text-black">Horario</th>
                {days.map((day) => (
                  <th key={day} className="text-center py-4 px-4 font-semibold text-black">
                    {day}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, index) => (
                <tr key={index} className="border-b border-gray-100 hover:bg-white transition-all duration-300">
                  <td className="py-4 px-4 font-medium text-gray-800">{row.time}</td>
                  {dayKeys.map((dayKey) => (
                    <td key={dayKey} className="py-4 px-4 text-center">
                      <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${
                        row[dayKey as keyof typeof row] === 'Crossfit' ? 'bg-red-100 text-red-800' :
                        row[dayKey as keyof typeof row] === 'Funcional' ? 'bg-blue-100 text-blue-800' :
                        row[dayKey as keyof typeof row] === 'Yoga' ? 'bg-green-100 text-green-800' :
                        row[dayKey as keyof typeof row] === 'Pilates' ? 'bg-purple-100 text-purple-800' :
                        row[dayKey as keyof typeof row] === 'Personal' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-gray-100 text-gray-800'
                      }`}>
                        {row[dayKey as keyof typeof row]}
                      </span>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          <div className="flex items-center">
            <div className="w-4 h-4 bg-red-100 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Crossfit</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-blue-100 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Funcional</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-green-100 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Yoga</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-purple-100 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Pilates</span>
          </div>
          <div className="flex items-center">
            <div className="w-4 h-4 bg-yellow-100 rounded-full mr-2"></div>
            <span className="text-sm text-gray-700">Personal</span>
          </div>
        </div>

        <div className="mt-12 bg-black text-white rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Clases especiales los domingos</h3>
          <p className="text-gray-300 mb-6">
            Los domingos ofrecemos clases especiales de relajación y actividades al aire libre.
          </p>
          <a
            href="#contato"
            className="inline-block bg-white text-black px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
          >
            Sabé más
          </a>
        </div>
      </div>
    </section>
  )
}