import React from "react";
import { Download, FileText } from "lucide-react";

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
        <FileText
          className="text-olive group-hover:text-terracotta"
          size={24}
        />
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
    <div className="bg-olive-lighter min-h-screen">
      <main className="py-16 sm:py-24 px-6">
        {/* Seção do Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h2 className="text-4xl md:text-4xl font-bold text-olive tracking-tight mb-6">
            Confissão de Fé
          </h2>
          <div className="w-16 h-1 bg-terracotta mx-auto mb-10 rounded-full"></div>
          {/* ALTERAÇÃO AQUI: Adicionado 'text-justify' e 'hyphens-auto' */}
          <p className="text-justify hyphens-auto text-base md:text-lg text-olive/80 max-w-3xl mx-auto">
            <strong>Cremos que a Palavra de Deus é inspirada</strong>,
            suficiente e autoritativa. Nossa teologia encontra ressonância na
            tradição reformada batista, expressa na{" "}
            <strong>Confissão de Fé Batista de 1689</strong>.<br></br> <br></br>
            Valorizamos a pregação expositiva, o discipulado intencional e o
            culto centrado em Deus. Entendemos que o evangelho não é apenas uma
            mensagem para a salvação individual, mas o poder de Deus que
            transforma todas as áreas da vida.
          </p>

          <hr className="border-olive/10 mb-10 mt-10" />

          <section className="bg-olive-lighter/30 rounded-3xl p-8 md:p-12 border border-olive">
            <div className="flex items-center gap-3 justify-center md:justify-start"></div>

            <p className="text-olive/70 mb-10 text-center md:text-center justify-center ">
              <strong>
                Abaixo você pode baixar os documentos que norteiam nossa fé,
                prática e compromisso comunitário.
              </strong>
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
          </section>
        </header>
      </main>
    </div>
  );
}
