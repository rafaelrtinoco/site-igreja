import React from 'react';
import { Download } from 'lucide-react'; // Usando um ícone do Lucide

// --- DADOS DOS DOCUMENTOS ---
// Estrutura de dados para facilitar a manutenção.
// Coloque seus arquivos PDF na pasta `public` do seu projeto.
const faithDocuments = [
  {
    id: 1,
    title: 'Confissão Batista de 1689',
    fileUrl: '/docs/confissao_batista_1689.pdf', // Exemplo de caminho
    styleType: 'dark',
  },
  {
    id: 2,
    title: 'Pacto de Membresia',
    fileUrl: '/docs/credo_niceno.pdf',
    styleType: 'light',
  },
  {
    id: 3,
    title: 'Declaração ...',
    fileUrl: '/docs/declaracao_cambridge.pdf',
    styleType: 'dark',
  },
  {
    id: 4,
    title: 'Credo Apostólico',
    fileUrl: '/docs/credo_apostolico.pdf',
    styleType: 'light',
  },
  {
    id: 5,
    title: 'Teologia PActual Batista',
    fileUrl: '/docs/sinodo_dort.pdf',
    styleType: 'dark',
  },
  {
    id: 6,
    title: 'Credo ...',
    fileUrl: '/docs/credo_atanasio.pdf',
    styleType: 'light',
  },
];

// --- COMPONENTE DO BOTÃO DE DOWNLOAD ---
// Componente reutilizável para cada documento.
const DocumentLink = ({ title, fileUrl, styleType }) => {
  // Define os estilos com base no tipo (dark ou light)
  const baseStyle = "flex items-center justify-between w-full p-6 rounded-md text-lg font-semibold transition-colors duration-300 shadow-sm";
  const darkStyle = "bg-[#4e4627] text-white hover:bg-[#3a341d]";
  const lightStyle = "bg-[#e3dcd0] text-[#4e4627] hover:bg-[#d1c8b9]";

  const style = styleType === 'dark' ? darkStyle : lightStyle;

  return (
    <a
      href={fileUrl}
      download // Este atributo força o download do arquivo
      className={`${baseStyle} ${style}`}
    >
      <span>{title}</span>
      <Download size={24} className="opacity-80" />
    </a>
  );
};


// --- COMPONENTE PRINCIPAL DA PÁGINA "NOSSA FÉ" ---
export default function Identidade() {
  return (
    <div className="bg-[#f7f5f1] min-h-screen">
      <main className="py-16 sm:py-24 px-6">
        {/* Seção do Cabeçalho */}
        <header className="text-center max-w-4xl mx-auto mb-16 sm:mb-20">
          <h1 className="text-4xl md:text-4xl font-bold text-[#4e4627] tracking-tight mb-4">
            Conheça nossa identidade e no que cremos
          </h1>
          <p className="text-base md:text-lg text-[#4e4627]/80 max-w-3xl mx-auto leading-relaxed">
            Somos uma igreja cristã, batista e reformada, fundada na zona leste de São Paulo ...
          </p>
        </header>

        {/* Grade de Documentos */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {faithDocuments.map((doc) => (
            <DocumentLink
              key={doc.id}
              title={doc.title}
              fileUrl={doc.fileUrl}
              styleType={doc.styleType}
            />
          ))}
        </div>
      </main>
    </div>
  );
}