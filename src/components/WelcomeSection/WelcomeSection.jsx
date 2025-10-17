import React from 'react';

export default function WelcomeSection() {
  return (
    // A seção agora tem o bg-brand-olive
    <section className="py-16 px-6 text-[#ffffff]">
      <div className="max-w-4xl mx-auto text-center">
     
        <p className="text-lg text-brand-white/80 mb-4">
          Uma Igreja centrada no evangelho e dedicada à pregação expositiva
          das Sagradas Escrituras.
        </p>

        {/* O contêiner de horários agora tem text-brand-white para os spans padrão */}
        <div className="space-y-1 text-brand-white">
          <div className="flex items-center justify-center gap-1"> {/* Adicionei gap-2 para espaçamento */}
            <span className="font-medium">Escola Bíblica Dominical:</span>
            {/* O horário mantém text-brand-terracotta */}
            <span className="text-brand-terracotta font-semibold">09h00</span>
          </div>
          <div className="flex items-center justify-center gap-1"> {/* Adicionei gap-2 para espaçamento */}
            <span className="font-medium">Serviço de Culto:</span>
            {/* O horário mantém text-brand-terracotta */}
            <span className="text-brand-terracotta font-semibold">10h30</span>
          </div>
        </div>
      </div>
    </section>
  );
}