import React from "react";
import { Download, FileText, ShieldCheck } from "lucide-react";

// --- COMPONENTE DE DOCUMENTO (Botão de Download) ---
const DownloadButton = ({ title, fileUrl }) => (
  <a
    href={fileUrl}
    download
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-between bg-white border-2 border-olive/20 p-4 rounded-xl hover:border-terracotta hover:shadow-md transition-all group"
  >
    <div className="flex items-center gap-4">
      <div className="bg-olive-lighter p-3 rounded-lg group-hover:bg-terracotta-lighter transition-colors">
        <FileText className="text-olive group-hover:text-terracotta" size={24} />
      </div>
      <span className="font-bold text-olive group-hover:text-terracotta tracking-tight">
        {title}
      </span>
    </div>
    <Download className="text-olive/40 group-hover:text-terracotta" size={20} />
  </a>
);

const Sublinhado = ({ children }) => (
  <span className="underline decoration-terracotta/30 decoration-2 underline-offset-4">
    {children}
  </span>
);

export default function Identidade() {
  return (
    <div className="bg-white min-h-screen">
      <main className="py-16 sm:py-24 px-6 max-w-4xl mx-auto">
        
        {/* --- SEÇÃO 1: QUEM SOMOS --- */}
        <header className="text-center mb-20">
          <h2 className="text-4xl font-bold text-olive tracking-tight mb-6 font-sans">
            Confissão de Fé
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10 rounded-full"></div>
          
          <div className="text-justify md:text-lg text-olive/80 leading-relaxed space-y-6">
            
            <p>
            <strong>Cremos que a Palavra de Deus é inspirada</strong>, suficiente e autoritativa. Nossa teologia encontra ressonância na tradição reformada batista, expressa na <strong>Confissão de Fé Batista de 1689</strong>.
            </p>
            <p>
              Valorizamos a pregação expositiva, o discipulado intencional e o culto centrado em Deus. Entendemos que o evangelho não é apenas uma mensagem para a salvação individual, mas o poder de Deus que transforma todas as áreas da vida.
            </p>
          </div>
        </header>

        <hr className="border-olive/10 mb-20" />

        {/* --- SEÇÃO 2: DOCUMENTOS DE FÉ --- */}
        <section className="bg-olive-lighter/30 rounded-3xl p-8 md:p-12 border border-olive/5">
          <div className="flex items-center gap-3 justify-center md:justify-start">
           
            
          </div>
          
          <p className="text-olive/70 mb-10 text-center md:text-center justify-center ">
            <strong>Abaixo você pode baixar os documentos que norteiam nossa fé, prática e compromisso comunitário.</strong>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <DownloadButton 
              title="Confissão de Fé de 1689" 
              fileUrl="/docs/confissao_batista_1689.pdf" 
            />
            <DownloadButton 
              title="Coalizão Pelo Evangelho" 
              fileUrl="/docs/coalizao.pdf" 
            />
          </div>
{/* 
          <blockquote className="mt-12 border-l-4 border-terracotta pl-6 py-2 text-olive/60 italic text-sm">
            "Procura apresentar-te a Deus aprovado, como obreiro que não tem de que se envergonhar, que maneja bem a palavra da verdade." 
            <span className="block font-bold mt-2">— 2 Timóteo 2:15</span>
          </blockquote> */}
        </section>

      </main>
    </div>
  );
}