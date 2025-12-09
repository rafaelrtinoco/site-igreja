import React from "react";

// Um componente simples para aplicar o estilo de sublinhado
const Sublinhado = ({ children }) => {
  return (
    <span className="underline decoration-[#4e4627] decoration-2 underline-offset-2 ">
      {children}
    </span>
  );
};

// --- COMPONENTE PRINCIPAL ---
export default function Identidade() {
  return (
    <div className="bg-[#f7f5f1] min-h-screen">
      <main className="py-16 sm:py-24 px-6">
        {/* Seção do Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-[#914d30] tracking-tight mb-6">
            História da Igreja
          </h2>

          <div className="w-16 h-1 bg-black mx-auto mb-6 opacity-10"></div>

          {/* ALTERAÇÃO AQUI: Adicionado 'text-justify' e 'hyphens-auto' */}
          <p className="text-justify hyphens-auto text-base md:text-lg text-[#4e4627]/80 max-w-3xl mx-auto">
            A Igreja da Cruz nasceu de uma santa inquietação: o desejo de viver
            em comunhão em uma igreja centrada no evangelho, com convicções
            bíblicas reformada e credobatista, no Extremo Leste de São Paulo.
            <br></br>
            <br></br>
            Tudo começou quando um pequeno grupo de crentes, sem encontrar uma
            igreja alinhada a essas convicções, se encontram sem igreja e
            decidem dedicar algum tempo a procura de tal igreja. Entre eles
            estavam o pastor Anderson Lopes e sua esposa, Stefani Cipriano, que,
            preocupados com a falta de comunhão, os meios de graça ordenados por
            Deus e os riscos espirituais dessa espera, passaram a conduzir
            devocionais regulares com o grupo, mantendo firme a esperança de que
            logo encontrariam uma igreja para congregar.
            <br></br>
            <br></br>
            Mas os planos de Deus eram outros. O que parecia ser uma espera,
            revelou-se um chamado.
            <br></br>
            <br></br>
            Após seis meses de oração, estudo da Palavra, orientação e
            encorajamento de pastores maduros e irmãos igualmente sedentos por
            uma igreja centrada no evangelho, ficou claro que{" "}
            <strong>
              o Senhor estava conduzindo à plantação de uma nova igreja.
            </strong>
            <br></br>
            <br></br>
            Reconhecendo os dons, a vocação pastoral e os sinais providenciais —
            ordinários e extraordinários — compreendemos que não se tratava
            apenas de um desejo pessoal, mas de um passo de obediência.
            <br></br>
            <br></br>
            Durante um ano inteiro, o grupo se dedicou a estudos dominicais,
            reuniões de oração, cultos e aprofundamento teológico, especialmente
            na área de eclesiologia. Também construímos nossa base confessional,
            adotando a princípio a Declaração Confessional da Coalizão pelo
            Evangelho.
            <br></br>
            <br></br>
            Nosso compromisso era (e continua sendo) viver e anunciar o
            evangelho como algo que muda tudo — inclusive a maneira como
            plantamos uma igreja. No dia 23 de janeiro de 2021, celebramos nossa
            primeira Ceia do Senhor como comunidade e firmamos um pacto de
            membresia, oficializando o nascimento da plantação da Igreja da
            Cruz...
            <br></br>
            <br></br>
            Desde então, temos buscado ser uma igreja centrada no evangelho em
            todas as nossas atividades: visitas e atendimentos pastorais,
            reuniões de oração, cultos dominicais e encontros mensais nos quais
            refletimos como o evangelho molda todas as esferas da vida,
            começando pelo nosso lar.
          </p>
        </header>
      </main>
    </div>
  );
}
