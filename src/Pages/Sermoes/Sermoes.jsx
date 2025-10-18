import React from "react";
import { FaSpotify, FaYoutube } from "react-icons/fa";

// --- DADOS DOS SERMÕES ---
// Você pode substituir estes dados por dados vindos de uma API ou de outro lugar.
const sermonsData = [
  {
    id: 1,
    title: "Vinde a Mim!",
    seriesInfo: "SÉRIE DE SERMÕES | JANEIRO 2024 - FEVEREIRO 2024",
    imageUrl: "/caminho/para/sua/imagem1.jpg", // Substitua pelo caminho real da imagem
    spotifyUrl: "https://open.spotify.com/sua-playlist-1",
    youtubeUrl: "https://youtube.com/sua-playlist-1",
  },
  {
    id: 2,
    title: "Advento",
    seriesInfo: "SÉRIE DE SERMÕES | DEZEMBRO 2023",
    imageUrl: "/caminho/para/sua/imagem2.jpg", // Substitua pelo caminho real da imagem
    spotifyUrl: "https://open.spotify.com/sua-playlist-2",
    youtubeUrl: "https://youtube.com/sua-playlist-2",
  },
  {
    id: 3,
    title: "Calvinismo Humilde",
    seriesInfo: "SÉRIE DE SERMÕES | NOVEMBRO 2023",
    imageUrl: "/caminho/para/sua/imagem3.jpg", // Substitua pelo caminho real da imagem
    spotifyUrl: "https://open.spotify.com/sua-playlist-3",
    youtubeUrl: "https://youtube.com/sua-playlist-3",
  },
  {
    id: 4,
    title: "Exposição de Tito",
    seriesInfo: "SÉRIE DE SERMÕES | SETEMBRO 2023 - OUTUBRO 2023",
    imageUrl: "/caminho/para/sua/imagem4.jpg", // Substitua pelo caminho real da imagem
    spotifyUrl: "https://open.spotify.com/sua-playlist-4",
    youtubeUrl: "https://youtube.com/sua-playlist-4",
  },
];

// --- COMPONENTE DO CARTÃO DE SERMÃO ---
// Componente reutilizável para cada série de sermão
const SermonCard = ({ title, seriesInfo, imageUrl, spotifyUrl, youtubeUrl }) => (
  <article className="flex flex-col md:flex-row items-center gap-8 md:gap-12 w-full max-w-5xl mx-auto">
    {/* Coluna de Texto */}
    <div className="md:w-1/2 w-full text-center md:text-left">
      <h2 className="text-3xl md:text-4xl font-semibold text-[#4e4627] mb-2">
        {title}
      </h2>
      <p className="text-sm text-[#4e4627]/70 uppercase tracking-wider mb-8">
        {seriesInfo}
      </p>
      <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
        {/* Botão Spotify */}
        <a
          href={spotifyUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-[#a1997e] text-[#4e4627] font-semibold rounded-sm hover:bg-[#a1997e] hover:text-white transition-colors"
        >
          <FaSpotify size={20} />
          <span>OUVIR NO SPOTIFY</span>
        </a>
        {/* Botão YouTube */}
        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 px-6 py-2 border-2 border-[#a1997e] text-[#4e4627] font-semibold rounded-sm hover:bg-[#a1997e] hover:text-white transition-colors"
        >
          <FaYoutube size={20} />
          <span>VER NO YOUTUBE</span>
        </a>
      </div>
    </div>
    
    {/* Coluna de Imagem */}
    <div className="md:w-1/2 w-full mt-8 md:mt-0">
      {/* Imagem de exemplo, substitua `imageUrl` pelos links das suas imagens */}
      <img
        src={imageUrl || 'https://via.placeholder.com/500x500/38321d/FFFFFF?Text=Vinde+a+Mim!'}
        alt={`Imagem da série de sermões: ${title}`}
        className="w-full h-auto object-cover rounded-md shadow-lg"
      />
    </div>
  </article>
);


// --- COMPONENTE PRINCIPAL DA PÁGINA DE SERMÕES ---
export default function Sermoes() {
  return (
    // Usei uma cor de fundo que se assemelha à da imagem.
    <div className="bg-[#f7f5f1] min-h-screen">
      <main className="py-16 sm:py-24 px-6">
        {/* Seção do Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-[#4e4627] tracking-tight mb-4">
            SERMÕES
          </h2>
          <p className="text-base md:text-lg text-[#4e4627]/80 max-w-3xl mx-auto">
            Disponibilizamos os nossos sermões não como um substituto à pertença de uma igreja, mas sim como um complemento na caminhada da fé. Se ainda não depositas a tua fé em Cristo, que estes sermões possam abrir o teu coração para o Evangelho.
          </p>
        </header>

        {/* Lista de Sermões */}
        <div className="flex flex-col items-center gap-16 md:gap-20">
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