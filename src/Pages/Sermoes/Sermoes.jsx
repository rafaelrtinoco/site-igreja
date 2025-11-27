import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

// --- DADOS DOS SERMÕES ---
const sermonsData = [
  {
    id: 1,
    title: "Vinde a Mim!",
    seriesInfo: "Janeiro 2024",
    imageUrl: "/caminho/para/sua/imagem1.jpg", 
    spotifyUrl: "https://open.spotify.com/sua-playlist-1",
    youtubeUrl: "https://youtube.com/sua-playlist-1",
  },
  {
    id: 2,
    title: "Advento",
    seriesInfo: "Dezembro 2023",
    imageUrl: "/caminho/para/sua/imagem2.jpg", 
    spotifyUrl: "https://open.spotify.com/sua-playlist-2",
    youtubeUrl: "https://youtube.com/sua-playlist-2",
  },
  {
    id: 3,
    title: "Calvinismo Humilde",
    seriesInfo: "Novembro 2023",
    imageUrl: "/caminho/para/sua/imagem3.jpg", 
    spotifyUrl: "https://open.spotify.com/sua-playlist-3",
    youtubeUrl: "https://youtube.com/sua-playlist-3",
  },
  {
    id: 4,
    title: "Exposição de Tito",
    seriesInfo: "Setembro 2023",
    imageUrl: "/caminho/para/sua/imagem4.jpg", 
    spotifyUrl: "https://open.spotify.com/sua-playlist-4",
    youtubeUrl: "https://youtube.com/sua-playlist-4",
  },
    // Adicionei mais um item fictício apenas para visualizar o grid melhor
  {
    id: 5,
    title: "O Evangelho",
    seriesInfo: "Agosto 2023",
    imageUrl: "", 
    spotifyUrl: "#",
    youtubeUrl: "#",
  },
];

// --- COMPONENTE DO CARTÃO DE SERMÃO ---
const SermonCard = ({ title, seriesInfo, imageUrl, spotifyUrl, youtubeUrl }) => (
  <article className="flex flex-col w-full bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
    
    {/* Área da Imagem (Agora fica no topo) */}
    <div className="w-full h-48 overflow-hidden relative">
      <img
        src={imageUrl || 'https://via.placeholder.com/500x500/38321d/FFFFFF?Text=Sermão'}
        alt={`Sermão: ${title}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Área de Texto (Abaixo da imagem) */}
    <div className="flex flex-col p-5 flex-grow">
      <h2 className="text-xl font-bold text-[#4e4627] mb-1 line-clamp-2">
        {title}
      </h2>
      <p className="text-xs text-[#4e4627]/60 uppercase tracking-widest mb-4 font-medium">
        {seriesInfo}
      </p>
      
      {/* Botões - Ajustados para layout de card */}
      <div className="mt-auto pt-4 flex gap-2 border-t border-gray-100">
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ouvir no Spotify"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-[#a1997e]/30 text-[#4e4627] text-sm font-semibold rounded hover:bg-[#a1997e] hover:text-white transition-colors"
        >
          <FaSpotify size={18} />
          {/* Oculta texto em telas muito pequenas se necessário, ou mantém */}
          <span className="hidden sm:inline">Spotify</span>
        </a>
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ver no YouTube"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-[#a1997e]/30 text-[#4e4627] text-sm font-semibold rounded hover:bg-[#a1997e] hover:text-white transition-colors"
        >
          <FaYoutube size={18} />
          <span className="hidden sm:inline">YouTube</span>
        </a>
      </div>
    </div>
  </article>
);


// --- COMPONENTE PRINCIPAL ---
export default function Sermoes() {
  return (
    <div className="bg-[#f7f5f1] min-h-screen font-sans">
      <main className="py-16 sm:py-24 px-6 max-w-7xl mx-auto">
        
        {/* Cabeçalho */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#4e4627] tracking-tight mb-6">
            Sermões
          </h2>
          {/* Linha decorativa opcional igual ao print */}
          <div className="w-16 h-1 bg-black mx-auto mb-6 opacity-10"></div>
          
          <p className="text-base md:text-lg text-[#4e4627]/80 leading-relaxed">
            Disponibilizamos os nossos sermões como um complemento na caminhada da fé.
          </p>
        </header>

        {/* Grid de Cards */}
        {/* grid-cols-1: Mobile (1 por linha)
            sm:grid-cols-2: Tablet pequeno (2 por linha)
            lg:grid-cols-3: Desktop (3 por linha)
            xl:grid-cols-4: Telas grandes (4 por linha)
        */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-6 md:gap-8">
          {sermonsData.map((sermon) => (
            <SermonCard
              key={sermon.id}
              title={sermon.title}
              seriesInfo={sermon.seriesInfo}
              imageUrl={sermon.imageUrl}
              spotifyUrl={sermon.spotifyUrl}
              youtubeUrl={sermon.youtubeUrl}
            />
          ))}
        </div>
      </main>
    </div>
  );
}