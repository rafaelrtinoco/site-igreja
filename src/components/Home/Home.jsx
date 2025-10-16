import React,{useState, useEffect}from "react";
// Ícones importados da biblioteca react-icons, de pacotes específicos como 'fa' (Font Awesome)
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMusic,
  FaSpotify,
  FaCopy,
} from "react-icons/fa";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// A função de copiar PIX precisará ser definida no seu componente ou hook
const handleCopyPix = () => {
  const pixKey = "SEU_CNPJ_AQUI"; // Coloque sua chave PIX aqui
  navigator.clipboard.writeText(pixKey).then(() => {
    alert("Chave PIX copiada!");
  });
};

export default function Home() {

  const carouselImages = [
    'https://images.unsplash.com/photo-1529156069898-fac51a637394?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNoLGNvbW11bml0eSxреорlZXx8fHx8fDE2NzExNjA1Nzk&ixlib=rb-4.0.3&q=80&w=1400',
    'https://images.unsplash.com/photo-1543269865-cbf427effbad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNoLGNvbW11bml0eSxреорlZXx8fHx8fDE2NzExNjA2MTE&ixlib=rb-4.0.3&q=80&w=1400',
    'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNoLGNvbW11bml0eSxреорlZXx8fHx8fDE2NzExNjA2MzM&ixlib=rb-4.0.3&q=80&w=1400',
    'https://images.unsplash.com/photo-1519340039796-f33d3c19a0a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNoLGNvbW11bml0eSxреорlZXx8fHx8fDE2NzExNjA2NTY&ixlib=rb-4.0.3&q=80&w=1400',
    'https://images.unsplash.com/photo-1600038865943-78c90358246d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8Y2h1cmNoLGNvbW11bml0eSxреорlZXx8fHx8fDE2NzExNjA2Nzk&ixlib=rb-4.0.3&q=80&w=1400',
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Lógica para avançar o slide automaticamente
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
    }, 5000); // Muda a imagem a cada 5 segundos

    return () => clearInterval(slideInterval); // Limpa o intervalo ao desmontar o componente
  }, [carouselImages.length]);

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % carouselImages.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + carouselImages.length) % carouselImages.length);
  };

  return (
    <div className="min-h-screen bg-brand-white">
      {/* Hero Section */}
      <section className="relative h-[600px] bg-brand-olive/90 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-brand-olive/80 to-brand-olive/60"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 border-4 border-brand-white/30 rotate-45"></div>
        </div>
        <div className="relative h-full flex flex-col items-center justify-center text-center px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-brand-white mb-6">
            Igreja da Cruz
          </h1>
          <p className="text-xl md:text-2xl text-brand-white/90 max-w-3xl leading-relaxed mb-10">
            Igreja Batista Reformada
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-brand-terracotta text-brand-white px-8 py-3 rounded hover:bg-brand-terracotta-light transition-colors font-medium text-lg">
              ASSITA AO ULTIM? SERMÃO
            </button>
            <button className="border-2 border-brand-white text-brand-white px-8 py-3 rounded hover:bg-brand-white hover:text-brand-olive transition-colors font-medium text-lg">
              PLANEJE SUA VISITA
            </button>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-brand-white to-transparent"></div>
      </section>
      {/* Welcome Section */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-terracotta mb-6">
            Bem vindo à IgreJa da Cruz
          </h2>
          <p className="text-lg text-brand-olive/80 mb-4">
            Uma Igreja centrada no evangelho e dedicada a pregação expositiva
            das Sagradas Escrituras.
          </p>

          <div className="space-y-3 text-brand-olive">
            <div className="flex items-center justify-center">
              <span className="font-medium">Escola Bíblica Dominical:</span>
              <span className="text-brand-terracotta font-semibold">09h00</span>
            </div>
            <div className="flex items-center justify-center">
              <span className="font-medium">Serviço de Culto:</span>
              <span className="text-brand-terracotta font-semibold">10h30</span>
            </div>
          </div>
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
            Siga nossa playlist e adore a Deus conosco durante a semana.
          </p>
          <a
            href="#" // <-- Substitua com o link da sua playlist do Spotify
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-brand-terracotta text-brand-white px-8 py-3 rounded hover:bg-brand-terracotta-light transition-colors font-medium text-lg"
          >
            OUVIR NO SPOTIFY
          </a>
        </div>
      </section>

      {/* Seção Galeria de Fotos */}
      <section className="relative w-full overflow-hidden" style={{ height: '500px' }}> 
        <h2 className="text-3xl md:text-4xl font-bold text-brand-terracotta mb-4">

                    Nossa Comunidade

                </h2>

                <p className="text-lg text-brand-olive/80 max-w-2xl mx-auto">

                    Momentos de comunhão, adoração e serviço.

                </p>{/* Altura fixa para o carrossel */}
        {carouselImages.map((src, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={src}
              alt={`Foto da comunidade ${index + 1}`}
              className="w-full h-full object-cover" // object-cover para garantir que a imagem preencha o espaço
            />
          </div>
        ))}

        {/* Botões de navegação */}
        <button
          onClick={goToPrevSlide}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-brand-olive/50 text-white p-3 rounded-full hover:bg-brand-olive/70 transition-colors z-10"
          aria-label="Previous slide"
        >
          <FaChevronLeft size={24} />
        </button>
        <button
          onClick={goToNextSlide}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-brand-olive/50 text-white p-3 rounded-full hover:bg-brand-olive/70 transition-colors z-10"
          aria-label="Next slide"
        >
          <FaChevronRight size={24} />
        </button>

        {/* Indicadores de slide */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? 'bg-brand-terracotta' : 'bg-brand-white/50 hover:bg-brand-white/80'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
      </section>

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
    </div>
  );
}
