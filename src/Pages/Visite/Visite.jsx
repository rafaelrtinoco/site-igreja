import React from "react";
// Ícones importados da biblioteca react-icons, de pacotes específicos como 'fa' (Font Awesome)
import {
  FaCopy,
} from "react-icons/fa";

import VisitUs from "../../components/visitUs/visitUs"

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
      

      
      <VisitUs />
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
