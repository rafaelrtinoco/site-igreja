import React from "react";
import { Download } from "lucide-react";

// --- DADOS DOS DOCUMENTOS ---
const faithDocuments = [
  {
    id: 1,
    title: "Confissão Batista de 1689",
    fileUrl: "/docs/confissao_batista_1689.pdf",
    styleType: "dark",
  },
  {
    id: 2,
    title: "Pacto de Membresia",
    fileUrl: "/docs/credo_niceno.pdf",
    styleType: "light",
  },
  {
    id: 3,
    title: "Declaração ...",
    fileUrl: "/docs/declaracao_cambridge.pdf",
    styleType: "dark",
  },
  {
    id: 4,
    title: "Credo Apostólico",
    fileUrl: "/docs/credo_apostolico.pdf",
    styleType: "light",
  },
  {
    id: 5,
    title: "Teologia PActual Batista",
    fileUrl: "/docs/sinodo_dort.pdf",
    styleType: "dark",
  },
  {
    id: 6,
    title: "Credo ...",
    fileUrl: "/docs/credo_atanasio.pdf",
    styleType: "light",
  },
];

// Um componente simples para aplicar o estilo de sublinhado
const Sublinhado = ({ children }) => {
  return (
    <span className="underline decoration-olive decoration-2 underline-offset-2 ">
      {children}
    </span>
  );
};


// --- COMPONENTE PRINCIPAL ---
export default function Identidade() {
  return (
    <div className="bg-olive-lighter min-h-screen">
      <main className="py-16 sm:py-24 px-6">
        {/* Seção do Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-olive tracking-tight mb-6">
            A Igreja da Cruz
          </h2>
           <div className="w-16 h-1 bg-terracotta mx-auto mb-10 rounded-full"></div>
          {/* ALTERAÇÃO AQUI: Adicionado 'text-justify' e 'hyphens-auto' */}
          <p className="text-justify hyphens-auto text-base md:text-lg text-olive/80 max-w-3xl mx-auto">
            É uma <strong>igreja batista reformada localizada na Zona Leste de São
            Paulo.</strong> Nascemos do desejo de <Sublinhado>ver o evangelho de Jesus Cristo
            transformando vidas, famílias e a cidade para a glória de Deus. </Sublinhado>
            Somos uma igreja pequena, mas com grandes convicções. <strong>Cremos que a
            Palavra de Deus é inspirada por Deus</strong>, suficiente, infalível,
            inerrante e autoritativa, e buscamos viver à luz dessa verdade em
            tudo o que fazemos. Nossa teologia é fundamentada nas Escrituras e
            encontra ressonância na tradição reformada batista, especialmente
            expressa na <strong>Confissão de Fé Batista de 1689</strong>, entre outros documentos
            como a <Sublinhado>Declaração Confessional da Coalizão Pelo Evangelho e o Credo
            Apostólico.</Sublinhado>
            <br></br> <br></br>
             Valorizamos a pregação expositiva, o discipulado
            intencional, o culto centrado em Deus e a vida comunitária marcada
            pelo amor, serviço e edificação mútua. Cremos que existe uma
            diferença entre uma igreja que "apenas" prega o evangelho e uma
            igreja centrada no evangelho. Entendemos que o evangelho não é
            apenas uma mensagem para a salvação individual, mas o poder de Deus
            que transforma todas as áreas da vida — pessoal, familiar,
            profissional e social. 
            <br></br> <br></br>
            Por isso, somos uma igreja comprometida com a
            formação de discípulos e com a plantação de outras igrejas fiéis ao
            evangelho. Nosso nome, Igreja da Cruz, aponta para o centro de nossa
            fé e missão: Jesus Cristo crucificado e ressurreto. Estamos apenas
            no início de nossa jornada, mas cremos que Deus está edificando algo
            precioso entre nós — e é por isso que buscamos irmãos e igrejas
            parceiras que queiram orar, contribuir e caminhar conosco nessa
            obra.
          </p>
        </header>

        
      </main>
    </div>
  );
}