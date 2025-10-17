import React from "react";
// Ícones importados da biblioteca react-icons, de pacotes específicos como 'fa' (Font Awesome)
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMusic,
  FaSpotify,
  FaCopy,
} from "react-icons/fa";
import Photos from "../Photos/Photos";
import WelcomeSection from "../WelcomeSection/WelcomeSection";
import backgroundImage from "/public/logo-nome-IC.png";
import VisitUsSection from "../visitUsSection/visitUsSection"

// A função de copiar PIX precisará ser definida no seu componente ou hook
const handleCopyPix = () => {
  const pixKey = "SEU_CNPJ_AQUI"; // Coloque sua chave PIX aqui
  navigator.clipboard.writeText(pixKey).then(() => {
    alert("Chave PIX copiada!");
  });
};

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="relative h-screen bg-contain bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Overlay verde com opacidade */}
        <div className="absolute inset-0 bg-[#4e4627]/95"></div>

        {/* Conteúdo centralizado */}
        <div className="relative h-full flex flex-col items-center justify-center text-center text-[#ffffff] px-6 z-10">
          {" "}
          {/* z-10 para ficar acima do overlay */}
          <h1 className="text-5xl md:text-5xl font-bold text-brand-white mb-6">
            IGREJA DA CRUZ
          </h1>
          <p className="text-xl md:text-1xl text-brand-white/90 max-w-3xl leading-relaxed mb-10">
            IGREJA BATISTA REFORMADA
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Botão Primário - preenchido com terracota */}
            <button className="bg-[#914d30] text-brand-white px-8 py-3 rounded hover:bg-[#a65c3f] transition-colors font-medium text-lg shadow-lg">
              ASSISTA AO ÚLTIMO SERMÃO
            </button>
            {/* Botão Secundário - outline branco */}
            <button className="border-2 border-[#fff] text-[#fff] px-8 py-3 rounded hover:bg-[#fff] hover:text-[#4e4627] transition-colors font-medium text-lg shadow-lg">
              PLANEJE SUA VISITA
            </button>
          </div>
          <WelcomeSection />
        </div>
      </section>

      {/* Seção Spotify */}
      <section className="bg-brand-olive-lighter py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <FaSpotify className="text-brand-terracotta mx-auto mb-4" size={48} />
          <h2 className="text-3xl md:text-4xl font-bold text-brand-olive mb-4">
            Ouça os Sermões
          </h2>
          <p className="text-lg text-brand-olive/80 mb-8 max-w-2xl mx-auto">
            Disponibilizamos os sermões pregados aos Domingo no Spotify, para
            que você consiga ouvir quando puder.
          </p>
          <a
            href="#" // <-- Substitua com o link da sua playlist do Spotify
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#914d30] text-[#fff] px-8 py-3 rounded hover:bg-[#a65c3f] transition-colors font-medium text-lg"
          >
            OUVIR NO SPOTIFY
          </a>
        </div>
      </section>

      <Photos />

      {/* Seção Galeria de Fotos
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-brand-terracotta mb-4">
              Nossa Comunidade
            </h2>
            <p className="text-lg text-brand-olive/80 max-w-2xl mx-auto">
              Momentos de comunhão, adoração e serviço.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-lg shadow-md aspect-square"
              >
                <img
                  src={`https://images.unsplash.com/photo-1529156069898-fac51a637394?ixlib=rb-4.0.3&q=80&w=400&h=400&fit=crop&${index}`}
                  alt={`Foto da comunidade ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section> */}

      <section className="bg-brand-olive/5 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-terracotta mb-4">
            Ofertas
          </h2>
          <p className="text-lg text-brand-olive/80 mb-10 max-w-2xl mx-auto">
            "Para aqueles que desejam louvar ao Senhor com suas ofertas, a
            contribuição pode ser feita através do PIX da Igreja. Que ninguém se
            sinta pressionado a contribuir, mas que cada um o faça conforme
            propôs em seu coração, com alegria e louvor a Deus, como nos ensina
            2 Coríntios 9:7."
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12">
            <div className="text-center md:text-left">
              <h3 className="text-xl font-bold text-brand-olive mb-2">
                Contribua via PIX
              </h3>
              <p className="text-md font-semibold text-brand-olive mb-2">
                Chave PIX (CNPJ):
              </p>
              <div className="flex justify-center md:justify-start">
                <div className="flex items-center gap-2 p-3 border-2 border-brand-olive/20 rounded bg-white">
                  <span className="font-mono text-brand-terracotta tracking-wider">
                    00.000.000/0001-00
                  </span>
                  <button
                    onClick={handleCopyPix}
                    title="Copiar Chave PIX"
                    className="text-brand-olive hover:text-brand-terracotta transition-colors"
                  >
                    <FaCopy size={20} />
                  </button>
                </div>
              </div>
            </div>
            <div className="text-center">
              <p className="text-brand-olive font-semibold mb-2">
                Ou aponte a câmera
              </p>
              <div className="bg-white p-2 border-2 border-brand-olive/20 rounded-lg inline-block">
                <img
                  src="https://api.qrserver.com/v1/create-qr-code/?size=160x160&data=SuaChavePIX"
                  alt="QR Code PIX"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <VisitUsSection />
    </div>
  );
}
