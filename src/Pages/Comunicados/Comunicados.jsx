import React from "react";
import { FaMapMarkerAlt, FaClock, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

// --- DADOS DOS EVENTOS ---
const eventsData = [
  {
    id: 1,
    title: "Retiro de Jovens 2025",
    date: { day: "15", month: "FEV" },
    time: "08:00 - 18:00",
    location: "Chácara Recanto de Paz",
    description: "Um tempo precioso de comunhão, adoração e estudo da palavra focado na juventude.",
    imageUrl: "/images/retiro.jpg", // Substitua pelo caminho real
    registrationLink: "#",
    isFeatured: true, // Opção para destacar um evento
  },
  {
    id: 2,
    title: "Conferência de Missões",
    date: { day: "10", month: "MAR" },
    time: "19:30",
    location: "Auditório Principal",
    description: "Receberemos missionários de diversos campos para compartilhar o que Deus tem feito.",
    imageUrl: "/images/missoes.jpg",
    registrationLink: "#",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Páscoa: A Vitória",
    date: { day: "20", month: "ABR" },
    time: "09:00 e 18:00",
    location: "Igreja Local",
    description: "Celebração especial da ressurreição de Cristo com cantata e mensagem especial.",
    imageUrl: "/images/pascoa.jpg",
    registrationLink: "#",
    isFeatured: false,
  },
  {
    id: 4,
    title: "Escola Bíblica de Férias",
    date: { day: "15", month: "JUL" },
    time: "14:00 - 17:00",
    location: "Departamento Infantil",
    description: "Uma semana inteira de atividades, brincadeiras e aprendizado para as crianças.",
    imageUrl: "/images/ebf.jpg",
    registrationLink: "#",
    isFeatured: false,
  },
];

// --- COMPONENTE DO CARD DE EVENTO ---
const EventCard = ({ event }) => (
  <article className="flex flex-col w-full bg-white rounded-lg shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group border border-[#4e4627]/5">
    
    {/* Área da Imagem com Data Sobreposta */}
    <div className="relative w-full h-52 overflow-hidden">
      <img
        src={event.imageUrl || 'https://via.placeholder.com/600x400/38321d/FFFFFF?Text=Evento'}
        alt={event.title}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
      />
      
      {/* Badge de Data */}
      <div className="absolute top-4 right-4 bg-[#f7f5f1] text-[#4e4627] px-3 py-2 rounded shadow-md text-center min-w-[60px]">
        <span className="block text-2xl font-bold leading-none">{event.date.day}</span>
        <span className="block text-xs font-bold tracking-widest uppercase">{event.date.month}</span>
      </div>
    </div>

    {/* Conteúdo do Card */}
    <div className="flex flex-col p-6 flex-grow">
      {/* Título */}
      <h3 className="text-2xl font-bold text-[#4e4627] mb-3 group-hover:text-[#a1997e] transition-colors">
        {event.title}
      </h3>

      {/* Info: Horário e Local */}
      <div className="flex flex-col gap-2 mb-4 text-sm text-[#4e4627]/70">
        <div className="flex items-center gap-2">
          <FaClock className="text-[#a1997e]" />
          <span>{event.time}</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt className="text-[#a1997e]" />
          <span>{event.location}</span>
        </div>
      </div>

      {/* Descrição Curta */}
      <p className="text-[#4e4627]/80 text-sm leading-relaxed mb-6 line-clamp-3">
        {event.description}
      </p>

      {/* Botão de Ação */}
      <div className="mt-auto">
        <a
          href={event.registrationLink}
          className="inline-flex items-center gap-2 text-[#4e4627] font-bold text-sm uppercase tracking-wider hover:gap-4 transition-all duration-300"
        >
          Saiba Mais <FaArrowRight size={12} />
        </a>
      </div>
    </div>
  </article>
);

// --- PÁGINA PRINCIPAL DE EVENTOS ---
export default function Eventos() {
  return (
    <div className="bg-[#f7f5f1] min-h-screen font-sans">
      <main className="py-16 sm:py-24 px-6 max-w-7xl mx-auto">
        
        {/* Cabeçalho da Página */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <div className="flex items-center justify-center gap-2 mb-4 text-[#a1997e]">
            <FaCalendarAlt />
            <span className="uppercase tracking-[0.2em] text-sm font-semibold">Calendário 2025</span>
          </div>
          <h2 className="text-4xl md:text-4xl font-bold text-[#914d30] tracking-tight mb-6">
            Próximos Eventos
          </h2>
          <div className="w-16 h-1 bg-[#4e4627] mx-auto mb-6 opacity-10 rounded-full"></div>
          <p className="text-base md:text-lg text-[#4e4627]/80 leading-relaxed">
            Fique por dentro de tudo o que acontece em nossa comunidade. Participe, envolva-se e cresça conosco em comunhão.
          </p>
        </header>

        {/* Grid de Eventos */}
        {/* Responsividade: 1 coluna (mobile), 2 (tablet), 3 (desktop) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventsData.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>

        {/* Seção de Newsletter / Aviso Extra (Opcional) */}
        <section className="mt-24 bg-[#4e4627] rounded-2xl p-8 md:p-12 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl">
          <div className="text-[#f7f5f1]">
            <h3 className="text-2xl font-bold mb-2">Não quer perder nada?</h3>
            <p className="text-[#f7f5f1]/80">Receba a agenda mensal diretamente no seu WhatsApp.</p>
          </div>
          <button className="whitespace-nowrap bg-[#f7f5f1] text-[#4e4627] px-8 py-3 rounded font-bold hover:bg-[#a1997e] hover:text-white transition-colors shadow-lg">
            Entrar no Grupo
          </button>
        </section>

      </main>
    </div>
  );
}