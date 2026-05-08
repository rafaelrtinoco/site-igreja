import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";
import vindeAMim from "/vinde-a-mim.webp";
import advento from "/advento.webp";
import calvinismoHumilde from "/calvinismo-humilde.webp";
import tito from "/tito.webp";
// import OEvangelho from "/o-evangelho.webp";

// --- DADOS DOS SERMÕES ---
const sermonsData = [
  {
    id: 1,
    title: "Vinde a Mim!",
    seriesInfo: "Janeiro 2024",
    imageUrl: vindeAMim,
    spotifyUrl: "https://open.spotify.com/episode/7gen6o70wO5PqLRVILLhs1?si=J5Tuupk3S3SZaEYwEXI-9Q",
    youtubeUrl: "https://youtu.be/XlahCiKw6iw?si=9utdwbLQWjGIaJU_",
  },
  {
    id: 2,
    title: "Advento",
    seriesInfo: "Dezembro 2023",
    imageUrl: advento,
    spotifyUrl:
      "https://open.spotify.com/episode/4jIJmPOyKLbp2pFJnikE2M?si=b1QWdt-LRYSegW3TzA2T-w",
    // youtubeUrl: "https://youtu.be/XlahCiKw6iw?si=9utdwbLQWjGIaJU_",
  },
  {
    id: 3,
    title: "Calvinismo Humilde",
    seriesInfo: "Novembro 2023",
    imageUrl: calvinismoHumilde,
    spotifyUrl:
      "https://open.spotify.com/episode/6mHXrdFgDQQZLYrqjy1EXH?si=aCZZ8IBWR-CZvQpsKaqEWg",
    youtubeUrl: "https://youtube.com/sua-playlist-3",
  },
  {
    id: 4,
    title: "Exposição de Tito",
    seriesInfo: "Setembro 2023",
    imageUrl: tito,
    spotifyUrl:
      "https://open.spotify.com/episode/7qMvvh2TXiGcGLWTxhXDUG?si=Vaa3FLt_TXS9T0LzEsYZ4Q",
    youtubeUrl: "https://youtu.be/y-8KqeeQcVY?si=OGGAaqfMrF6PIIij",
  },
  // Adicionei mais um item fictício apenas para visualizar o grid melhor
  // {
  //   id: 5,
  //   title: "O Evangelho",
  //   seriesInfo: "Agosto 2023",
  //   imageUrl: OEvangelho,
  //   spotifyUrl: "#",
  //   youtubeUrl: "#",
  // },
];

// --- COMPONENTE DO CARTÃO DE SERMÃO ---
const SermonCard = ({
  title,
  seriesInfo,
  imageUrl,
  spotifyUrl,
  youtubeUrl,
}) => (
  <article className="flex flex-col w-full bg-white rounded-md shadow-sm hover:shadow-lg transition-shadow duration-300 overflow-hidden group">
    {/* Área da Imagem (Agora fica no topo) */}
    <div className="w-full aspect-video overflow-hidden relative">
      <img
        src={
          imageUrl ||
          "https://via.placeholder.com/500x500/38321d/FFFFFF?Text=Sermão"
        }
        alt={`Sermão: ${title}`}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>

    {/* Área de Texto (Abaixo da imagem) */}
    <div className="flex flex-col p-5 flex-grow">
      <h2 className="text-xl font-bold text-olive mb-1 line-clamp-2">
        {title}
      </h2>
      <p className="text-xs text-olive/60 uppercase tracking-widest mb-4 font-medium">
        {seriesInfo}
      </p>

      {/* Botões - Ajustados para layout de card */}
      <div className="mt-auto pt-4 flex gap-2 border-t border-gray-100">
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          title="Ouvir no Spotify"
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-olive-light/30 text-olive text-sm font-semibold rounded hover:bg-olive-light hover:text-white transition-colors"
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
          className="flex-1 inline-flex items-center justify-center gap-2 py-2 border border-olive-light/30 text-olive text-sm font-semibold rounded hover:bg-olive-light hover:text-white transition-colors"
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
    <div className="bg-olive-lighter min-h-screen font-sans">
      <main className="py-16 sm:py-24 px-6 max-w-7xl mx-auto">
        {/* Cabeçalho */}
        <header className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-4xl font-bold text-terracotta tracking-tight mb-6">
            Sermões
          </h2>
          {/* Linha decorativa opcional igual ao print */}
          <div className="w-16 h-1 bg-olive mx-auto mb-10 rounded-full"></div>

          <p className="text-base md:text-lg text-olive/80 leading-relaxed">
            Disponibilizamos os nossos sermões como um complemento na caminhada
            da fé.
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
