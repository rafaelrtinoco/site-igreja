import React, { useState } from "react";
import { 
  FaMapMarkerAlt, 
  FaClock, 
  FaCalendarAlt, 
  FaChevronLeft, 
  FaChevronRight,
  FaWhatsapp 
} from "react-icons/fa";

// --- DADOS DOS EVENTOS ---
const specialEvents = [  
  {
    id: "mes-4",
    title: "Encontro de Homens e Mulheres",
    day: 4,
    month: 3, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  },
  {
    id: "mes-5",
    title: "Encontro de Homens e Mulheres",
    day: 2,
    month: 4, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  },
  {
    id: "mes-6",
    title: "Encontro de Homens e Mulheres",
    day: 6,
    month: 5, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-7",
    title: "Encontro de Homens e Mulheres",
    day: 4,
    month: 6, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-8",
    title: "Encontro de Homens e Mulheres",
    day: 1,
    month: 7, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-9",
    title: "Encontro de Homens e Mulheres",
    day: 5,
    month: 8, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-10",
    title: "Encontro de Homens e Mulheres",
    day: 3,
    month: 9, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-11",
    title: "Encontro de Homens e Mulheres",
    day: 7,
    month: 10, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  }, 
  {
    id: "mes-12",
    title: "Encontro de Homens e Mulheres",
    day: 5,
    month: 11, 
    year: 2026,
    time: "19:00",
    location: "Rua Jucuruçu, 282",
    description: "Momento de edificação e partilha.",
  },
  {
    id: "GC-5",
    title: "Grupo de Comunhão",
    day: 14,
    month: 4, 
    year: 2026,
    time: "20:00",
    location: "Consultar endereços.",
    description: "Momento de edificação e partilha.",
  },
  {
    id: "GC-5.1",
    title: "Grupo de Comunhão",
    day: 28,
    month: 4, 
    year: 2026,
    time: "20:00",
    location: "Consultar endereços.",
    description: "Momento de edificação e partilha.",
  },

];

export default function Eventos() {
  const [viewDate, setViewDate] = useState(new Date());

  const currentMonth = viewDate.getMonth();
  const currentYear = viewDate.getFullYear();
  
  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();
  const daysInMonth = new Date(currentYear, currentMonth + 1, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const blanks = Array.from({ length: firstDayOfMonth }, (_, i) => i);

  const isSunday = (day) => {
    return new Date(currentYear, currentMonth, day).getDay() === 0;
  };

  const getMonthlyEvents = () => {
    let list = specialEvents.filter(e => e.month === currentMonth && e.year === currentYear);
    
    daysArray.forEach(day => {
      if (isSunday(day)) {
        list.push({
          id: `ebd-${day}`,
          title: "Escola Bíblica",
          day: day,
          time: "09:00",
          location: "Rua Jucuruçu, 282",
          description: "Escola Bíblica Dominical.",
          isRecurring: true
        });
        list.push({
          id: `culto-${day}`,
          title: "Serviço de Culto",
          day: day,
          time: "10:30",
          location: "Rua Jucuruçu, 282",
          description: "Serviço de Culto.",
          isRecurring: true
        });
      }
    });

    return list.sort((a, b) => {
      if (a.day !== b.day) return a.day - b.day;
      return a.time.localeCompare(b.time);
    });
  };

  const monthlyEventsList = getMonthlyEvents();

  return (
    <div className="bg-white min-h-screen text-olive">
      <main className="py-12 px-6 max-w-7xl mx-auto">
        
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-12 border-b border-olive/10 pb-6 gap-4">
          <h2 className="text-4xl font-bold text-terracotta capitalize">
            {monthNames[currentMonth]} <span className="text-olive/20 font-light">{currentYear}</span>
          </h2>
          
          <div className="flex gap-2">
            <button onClick={() => setViewDate(new Date(currentYear, currentMonth - 1, 1))} className="p-3 rounded-full hover:bg-olive-lighter text-terracotta"><FaChevronLeft /></button>
            <button onClick={() => setViewDate(new Date(currentYear, currentMonth + 1, 1))} className="p-3 rounded-full hover:bg-olive-lighter text-terracotta"><FaChevronRight /></button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* CALENDÁRIO */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-7 mb-4">
              {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map(d => (
                <div key={d} className="text-center font-bold text-xs uppercase tracking-tighter text-olive/40">{d}</div>
              ))}
            </div>
            
            <div className="grid grid-cols-7 gap-2">
              {blanks.map(b => <div key={`b-${b}`} />)}

              {daysArray.map((day) => {
                const sunday = isSunday(day);
                // Buscamos o evento específico deste dia para pegar o título
                const dayEvent = specialEvents.find(e => e.day === day && e.month === currentMonth && e.year === currentYear);
                const highlight = sunday || !!dayEvent;

                return (
                  <div 
                    key={day} 
                    className={`h-20 md:h-28 border border-olive/5 rounded-2xl flex flex-col items-center justify-center relative transition-all p-1
                      ${highlight ? "bg-terracotta text-white shadow-lg" : "bg-white text-olive hover:bg-olive-lighter"}`}
                  >
                    <span className="text-xl md:text-2xl font-bold">{day}</span>
                    
                    {/* Lógica de exibição do nome ou horário */}
                    {dayEvent ? (
                      <span className="text-[9px] md:text-[11px] font-medium leading-tight text-center mt-1 line-clamp-2 uppercase tracking-tighter">
                        {dayEvent.time}
                      </span>
                    ) : sunday ? (
                      <span className="text-[10px] md:text-xs font-medium opacity-90 mt-1 text-center">
                        09:00 • 10:30
                      </span>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>

          {/* LISTA DE EVENTOS */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold flex items-center gap-2 border-b border-olive/10 pb-2">
              <FaCalendarAlt className="text-terracotta" />
              Programação do Mês
            </h3>

            <div className="flex flex-col gap-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              {monthlyEventsList.map((event) => (
                <div key={event.id} className={`p-5 rounded-2xl border-l-4 shadow-sm
                  ${event.isRecurring ? "bg-olive-lighter/40 border-olive/20" : "bg-terracotta-lighter border-terracotta"}`}>
                  
                  <div className="flex justify-between items-start mb-2">
                    <span className={`px-2 py-1 rounded text-[10px] font-bold uppercase
                      ${event.isRecurring ? "bg-olive/10 text-olive" : "bg-terracotta text-white"}`}>
                      Dia {event.day}
                    </span>
                    <div className="flex items-center gap-1 text-terracotta font-bold text-sm">
                      <FaClock size={12} />
                      {event.time}
                    </div>
                  </div>

                  <h4 className="font-bold text-lg mb-1 leading-tight">{event.title}</h4>
                  <p className="text-xs text-olive/70 flex items-center gap-1 mb-2 font-montserrat">
                    <FaMapMarkerAlt size={10} /> {event.location}
                  </p>
                  {/* <p className="text-sm opacity-80 leading-snug">{event.description}</p> */}
                </div>
              ))}
            </div>

            {/* <button className="w-full flex items-center justify-center gap-3 bg-[#25D366] text-white p-4 rounded-2xl font-bold hover:brightness-90 transition-all shadow-md">
              <FaWhatsapp size={20} />
              Lembrar no WhatsApp
            </button> */}
          </div>
        </div>
      </main>
    </div>
  );
}