import React from 'react';

export default function PhotoGallerySection() {
  // Array de objetos para cada foto, incluindo URL e classes específicas para o layout
  // Você pode adicionar mais propriedades aqui, como 'alt' text, links, etc.
  const photos = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1510525287611-6644f8087781?auto=format&fit=crop&q=80&w=400&h=400", // Imagem placeholder
      alt: "Pessoas em adoração",
      className: "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // Grande, ocupando 2x2 células
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1543269865-cbf427fdc87e?auto=format&fit=crop&q=80&w=300&h=200", // Imagem placeholder
      alt: "Comunidade rindo",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1529156069898-fac51a637394?auto=format&fit=crop&q=80&w=300&h=300", // Imagem placeholder
      alt: "Famílias unidas",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1533157793181-ed8148b5ffb9?auto=format&fit=crop&q=80&w=600&h=200", // Imagem placeholder
      alt: "Grupo de jovens",
      className: "col-span-2 md:col-span-2", // Retangular horizontal
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1574026366050-65e04b4d7c00?auto=format&fit=crop&q=80&w=200&h=300", // Imagem placeholder
      alt: "Momento de oração",
      className: "col-span-1 row-span-2 md:col-span-1 md:row-span-2", // Retangular vertical (alto)
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1502672260268-d055620df93d?auto=format&fit=crop&q=80&w=300&h=300", // Imagem placeholder
      alt: "Mesa de comunhão",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1543269665-b16952813583?auto=format&fit=crop&q=80&w=400&h=250", // Imagem placeholder
      alt: "Encontro de membros",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1510531707963-c350117004f8?auto=format&fit=crop&q=80&w=300&h=400", // Imagem placeholder
      alt: "Crianças na igreja",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1541818787752-6d11d11e5c8e?auto=format&fit=crop&q=80&w=200&h=200", // Imagem placeholder
      alt: "Pequenos grupos",
      className: "col-span-1 md:col-span-1", // Tamanho padrão
    },
  ];

  return (
    <section className="py-20 px-6 bg-brand-white"> {/* Adicionei um bg-brand-white para melhor contraste */}
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-brand-terracotta mb-4">
            Nossa Comunidade
          </h2>
          <p className="text-lg text-brand-olive/80 max-w-2xl mx-auto">
            Momentos de comunhão, adoração e serviço.
          </p>
        </div>

        {/* CONTÊINER DO GRID PERSONALIZADO */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4 auto-rows-[150px] md:auto-rows-[200px]">
          {photos.map((photo) => (
            <div
              key={photo.id}
              // As classes de layout vêm do objeto `photo`
              className={`relative overflow-hidden rounded-lg shadow-md group ${photo.className}`}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
              />
              {/* Overlay sutil para indicar interatividade ou um toque moderno */}
              <div className="absolute inset-0 bg-brand-olive/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                {/* Você pode adicionar um ícone de lupa ou texto aqui se quiser */}
                {/* <span className="text-white text-xl">🔍</span> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}