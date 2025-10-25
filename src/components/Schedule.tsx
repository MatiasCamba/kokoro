"use client";

import { useMemo, useState } from "react";

type ClassCell = {
  title: string;
  instructor?: string;
  duration?: string;
  type?: string; // ej: "No-Gi", "MMA", "Nogi Femenino", "Kimono"
};

type ScheduleRow = {
  time: string;
  monday: ClassCell | null;
  tuesday: ClassCell | null;
  wednesday: ClassCell | null;
  thursday: ClassCell | null;
  friday: ClassCell | null;
  saturday: ClassCell | null;
};

type DayKey = keyof Omit<ScheduleRow, "time">;

const rawSchedule = [
  {
    time: "08:00 / 09:00",
    monday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    } as ClassCell,
    tuesday: null,
    wednesday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    } as ClassCell,
    thursday: null,
    friday: {
      title: "NO GI TAKEDOWNS/ESPECIFICOS ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "Takedowns",
    } as ClassCell,
    saturday: null,
  },
  {
    time: "09:30 / 11:00",
    monday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "90min",
      type: "No-Gi",
    },
    tuesday: {
      title: "NO GI AVANZADOS",
      instructor: "Lean",
      duration: "90min",
      type: "No-Gi",
    },
    wednesday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "90min",
      type: "No-Gi",
    },
    thursday: {
      title: "NO GI AVANZADOS",
      instructor: "Lean",
      duration: "90min",
      type: "No-Gi",
    },
    friday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "90min",
      type: "No-Gi",
    },
    saturday: null,
  },
  {
    time: "10:00 / 11:00",
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
  },
  {
    time: "11:00 / 12:00",
    monday: { title: "MMA", duration: "60min", type: "MMA" },
    tuesday: null,
    wednesday: { title: "MMA", duration: "60min", type: "MMA" },
    thursday: null,
    friday: { title: "MMA", duration: "60min", type: "MMA" },
    saturday: null,
  },
  {
    time: "11:00 / 12:30",
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: {
      title: "NOGI FEMENINO ALL LEVELS",
      instructor: "Ceci",
      duration: "90min",
      type: "Nogi Femenino",
    },
  },
  {
    time: "12:30 / 13:30",
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: {
      title: "NO GI FUNDAMENTALS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
  },
  {
    time: "13:30 / 15:00",
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: { title: "OPEN MAT", type: "Open Mat" },
  },
  {
    time: "13:00 / 14:00",
    monday: {
      title: "NO GI ALL LEVELS",
      instructor: "Bianca",
      duration: "60min",
      type: "No-Gi",
    },
    tuesday: null,
    wednesday: {
      title: "NO GI ALL LEVELS",
      instructor: "Bianca",
      duration: "60min",
      type: "No-Gi",
    },
    thursday: null,
    friday: {
      title: "NO GI ALL LEVELS",
      instructor: "Bianca",
      duration: "60min",
      type: "No-Gi",
    },
    saturday: null,
  },
  {
    time: "14:00 / 15:30",
    monday: null,
    tuesday: {
      title: "ALL LEVELS KIMONO",
      instructor: "Nico",
      duration: "90min",
      type: "Kimono",
    },
    wednesday: null,
    thursday: {
      title: "ALL LEVELS KIMONO",
      instructor: "Nico",
      duration: "90min",
      type: "Kimono",
    },
    friday: null,
    saturday: null,
  },
  {
    time: "15:00 / 16:30",
    monday: {
      title: "NO GI AVANZADOS",
      instructor: "Lucas",
      duration: "90min",
      type: "No-Gi",
    },
    tuesday: null,
    wednesday: {
      title: "NO GI AVANZADOS",
      instructor: "Lucas",
      duration: "90min",
      type: "No-Gi",
    },
    thursday: null,
    friday: {
      title: "NO GI AVANZADOS",
      instructor: "Lucas",
      duration: "90min",
      type: "No-Gi",
    },
    saturday: null,
  },
  {
    time: "15:30 / 17:00",
    monday: null,
    tuesday: {
      title: "NO GI TAKEDOWNS/ESPECIFICOS/ALL LEVELS",
      instructor: "Paco",
      duration: "90min",
      type: "Takedowns",
    },
    wednesday: null,
    thursday: {
      title: "NO GI TAKEDOWNS/ESPECIFICOS/ALL LEVELS",
      instructor: "Paco",
      duration: "90min",
      type: "Takedowns",
    },
    friday: null,
    saturday: null,
  },
  {
    time: "16:00 / 17:00",
    monday: null,
    tuesday: null,
    wednesday: null,
    thursday: null,
    friday: null,
    saturday: null,
  },
  {
    time: "17:00 / 18:00",
    monday: null,
    tuesday: null,
    wednesday: {
      title: "NOGI FEMENINO ALL LEVELS",
      instructor: "Ceci",
      duration: "90min",
      type: "Nogi Femenino",
    },
    thursday: null,
    friday: null,
    saturday: null,
  },
  {
    time: "18:00 / 19:30",
    monday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    tuesday: null,
    wednesday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    thursday: null,
    friday: null,
    saturday: null,
  },
  {
    time: "18:30 / 19:30",
    monday: null,
    tuesday: {
      title: "NO GI FUNDAMENTALS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    wednesday: null,
    thursday: {
      title: "NO GI FUNDAMENTALS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    friday: {
      title: "NO GI TAKEDOWNS/ESPECIFICOS ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "Takedowns",
    },
    saturday: null,
  },
  {
    time: "19:30 / 20:30",
    monday: {
      title: "NO GI FUNDAMENTALS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    tuesday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    wednesday: {
      title: "NO GI TAKEDOWNS/ESPECIFICOS ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "Takedowns",
    },
    thursday: {
      title: "NO GI ALL LEVELS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    friday: {
      title: "NO GI FUNDAMENTALS",
      instructor: "Paco",
      duration: "60min",
      type: "No-Gi",
    },
    saturday: null,
  },
  {
    time: "20:30 / 21:30",
    monday: null,
    tuesday: { title: "MMA", duration: "60min", type: "MMA" },
    wednesday: null,
    thursday: { title: "MMA", duration: "60min", type: "MMA" },
    friday: null,
    saturday: null,
  },
];

export default function Schedule() {
  const [openDayIndex, setOpenDayIndex] = useState<number | null>(null);

  const days: string[] = [
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  const dayKeys: DayKey[] = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ];

  const typeColorMap: Record<string, string> = useMemo(() => {
    const types = new Set<string>();
    rawSchedule.forEach((row) => {
      dayKeys.forEach((k) => {
        const cell = row[k];
        if (cell?.type) types.add(cell.type);
      });
    });
    const palette = [
      "bg-green-100 text-green-800",
      "bg-blue-100 text-blue-800",
      "bg-yellow-100 text-yellow-800",
      "bg-red-100 text-red-800",
      "bg-purple-100 text-purple-800",
      "bg-indigo-100 text-indigo-800",
      "bg-pink-100 text-pink-800",
      "bg-gray-100 text-gray-800",
    ];
    const map: Record<string, string> = {};
    Array.from(types).forEach((t, i) => {
      map[t] = palette[i % palette.length];
    });
    return map;
  }, []);

  const scheduleByDay: Record<
    DayKey,
    { time: string; cell: ClassCell | null }[]
  > = useMemo(() => {
    const out: Record<DayKey, { time: string; cell: ClassCell | null }[]> = {
      monday: [],
      tuesday: [],
      wednesday: [],
      thursday: [],
      friday: [],
      saturday: [],
    };
    dayKeys.forEach((key) => {
      out[key] = rawSchedule.map((row) => ({
        time: row.time,
        cell: row[key],
      }));
    });
    return out;
  }, []);

  return (
    <section id="horarios" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-black mb-2">
            Horarios de las Clases
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Mir&aacute; la grilla y encontr&aacute; tu clase. Toca una celda
            para ver m&aacute;s.
          </p>
        </div>

        {/* TABLE (desktop & tablet) */}
        <div className="hidden md:block bg-gray-50 rounded-lg p-4 overflow-x-auto">
          <table className="w-full min-w-[900px] table-auto">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="text-left py-3 px-4 font-semibold text-sm text-gray-700">
                  Horario
                </th>
                {days.map((d) => (
                  <th
                    key={d}
                    className="text-center py-3 px-4 font-semibold text-sm text-gray-700"
                  >
                    {d}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rawSchedule.map((row, rIdx) => (
                <tr
                  key={rIdx}
                  className="border-b border-transparent hover:bg-white transition-colors"
                >
                  <td className="py-3 px-4 font-medium text-sm text-gray-800 w-36">
                    {row.time}
                  </td>
                  {dayKeys.map((dk) => {
                    const cell = row[dk];
                    const isEmpty = !cell;
                    const colorClass = cell?.type
                      ? typeColorMap[cell.type] ?? "bg-gray-100 text-gray-800"
                      : "bg-transparent text-gray-400";
                    return (
                      <td key={dk} className="py-3 px-4 text-center align-top">
                        <div
                          role="button"
                          tabIndex={0}
                          aria-label={
                            cell
                              ? `${cell.title} con ${cell.instructor} ${cell.duration}`
                              : "Sin clase"
                          }
                          className={`mx-auto max-w-[220px] text-sm rounded-lg px-3 py-2 cursor-pointer border ${
                            isEmpty
                              ? "border-dashed border-gray-200"
                              : "border-transparent"
                          } shadow-sm`}
                          onClick={() => setOpenDayIndex(null)}
                          onKeyDown={(e) =>
                            e.key === "Enter" && setOpenDayIndex(null)
                          }
                        >
                          {isEmpty ? (
                            <div className="text-gray-400">—</div>
                          ) : (
                            <div
                              className={`inline-block ${colorClass} px-2 py-1 rounded-md text-xs font-semibold`}
                            >
                              <div
                                className="truncate"
                                title={`${cell.title} — ${
                                  cell.instructor ?? ""
                                }`}
                              >
                                {cell.title}
                              </div>
                              <div className="text-[11px] opacity-80 mt-1">
                                {cell.instructor
                                  ? `${cell.instructor} • ${
                                      cell.duration ?? ""
                                    }`
                                  : cell.duration ?? ""}
                              </div>
                            </div>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ACCORDION (mobile) */}
        <div className="md:hidden space-y-4">
          {dayKeys.map((dk, idx) => {
            const dayList = scheduleByDay[dk];
            const open = openDayIndex === idx;
            return (
              <div key={dk} className="bg-gray-50 rounded-lg overflow-hidden">
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left"
                  aria-expanded={open}
                  onClick={() => setOpenDayIndex(open ? null : idx)}
                >
                  <div className="font-semibold">{days[idx]}</div>
                  <div className="text-sm text-gray-600">
                    {open ? "Ocultar" : "Ver horarios"}
                  </div>
                </button>

                {open && (
                  <div className="px-4 pb-4 space-y-2">
                    {dayList.map((entry, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-28 text-xs text-gray-600">
                          {entry.time}
                        </div>
                        <div className="flex-1">
                          {!entry.cell ? (
                            <div className="text-gray-400 text-sm">
                              Sin clase
                            </div>
                          ) : (
                            <div className="rounded-md p-2 shadow-sm">
                              <div className="font-medium text-sm">
                                {entry.cell.title}
                              </div>
                              <div className="text-xs text-gray-600">
                                {entry.cell.instructor
                                  ? `${entry.cell.instructor} • ${
                                      entry.cell.duration ?? ""
                                    }`
                                  : entry.cell.duration ?? ""}
                              </div>
                              <div
                                className={`mt-1 inline-block text-xs font-semibold px-2 py-0.5 rounded ${
                                  typeColorMap[entry.cell.type ?? ""] ??
                                  "bg-gray-100 text-gray-700"
                                }`}
                              >
                                {entry.cell.type}
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>

     
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
          {Object.keys(typeColorMap).map((type) => (
            <div key={type} className="flex items-center gap-2">
              <div
                className={`w-4 h-4 rounded-full ${
                  typeColorMap[type].split(" ")[0] ?? "bg-gray-100"
                }`}
              ></div>
              <div className="text-sm text-gray-700">{type}</div>
            </div>
          ))}
        </div>

        
        <div className="mt-8 bg-black text-white rounded-lg p-6 text-center">
          <h3 className="text-xl font-bold mb-2">
            Clases especiales los sábados
          </h3>
          <p className="text-gray-300 mb-4">
            Los sábados hay open mat y clases especiales. Ver detalles en
            recepción o en la app.
          </p>
          <a
            href="#contact"
            className="inline-block bg-white text-black px-5 py-2 rounded-md font-medium hover:bg-gray-100 transition-transform transform hover:scale-105"
          >
            Más info
          </a>
        </div>
      </div>
    </section>
  );
}
