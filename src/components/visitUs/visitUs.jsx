import React from 'react';

export default function VisitUsSection() {
  const address = "Rua Jucuruçu, 282 - Paraíso XV de Novembro, São Paulo - SP - 08246-031";
  const googleMapsUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.0494077973117!2d-46.4340477!3d-23.5307253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce641bfc877b9b%3A0x838ec41647d1f56a!2sR.%20Jucurucu%2C%20282%20-%20Parada%20XV%20de%20Novembro%2C%20S%C3%A3o%20Paulo%20-%20SP%2C%2008246-030!5e0!3m2!1spt-BR!2sbr!4v1765305237148!5m2!1spt-BR!2sbr`; // URL do Google Maps Embed (substitua pela sua se quiser mais personalizado)

  return (
    // Seção principal com fundo bg-brand-olive-lighter (creme claro)
    <section className="py-20 px-6 bg-[#f5f4f0]">
      <div className="max-w-7xl mx-auto">
        {/* Título da Seção - Se necessário */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-{#914d30} font-cinzel mb-6">
            Visite-nos
          </h2>
          
          <p className="text-lg text-[#4e4627]/80 mt-2">
            Venha nos conhecer.
          </p>
        </div>

        {/* Layout de 2 colunas para desktop, empilhado para mobile */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          {/* Coluna da Esquerda: Informações de Contato e Horários */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8 text-[#4e4627]">
            {/* Endereço */}
            <div>
              <h3 className="text-2xl font-semibold text-[#914d30] mb-3 font-cinzel">
                ENDEREÇO
              </h3>
              <p className="text-lg leading-relaxed">
                RUA JUCURUÇU, 282<br />
                PARADA XV DE NOVEMBRO – SÃO PAULO – SP <br />
                CEP: 08246-031
              </p>
              <a 
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block mt-4 text-[#914d30] hover:text-brand-[#a65c3f] transition-colors font-medium"
              >
                Ver no mapa
              </a>
            </div>

            {/* Horários */}
            <div>
              <h3 className="text-2xl font-semibold text-[#914d30] mb-3 font-cinzel">
                HORÁRIOS
              </h3>
              <p className="text-lg mb-2">
                <span className="font-semibold">ESCOLA BÍBLICA</span> <br />
                Domingo 09H00
              </p>
              <p className="text-lg mb-2">
                <span className="font-semibold">SERVIÇO DE CULTO:</span> <br />
                Domingo 10H30
              </p>
              <p className="text-lg">
                <span className="font-semibold">Reunião de Homens de Mulheres:</span> <br />
                Ultimo Sábado do mês 20h00
              </p>
            </div>

            {/* Contato */}
            <div>
              <h3 className="text-2xl font-semibold text-[#914d30] mb-3 font-cinzel">
                CONTATO
              </h3>
              <p className="text-lg">(11) 98235-1338</p>
            </div>

           
          </div>

          {/* Coluna da Direita: Mapa do Google Maps */}
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px] bg-[#fff] rounded-lg shadow-xl overflow-hidden">
            <iframe
              src={googleMapsUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização da Igreja da Cruz"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}