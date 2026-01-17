
import React from 'react';

interface LandingPageProps {
  onStart: () => void;
  onOpenCaderno: () => void;
  onAdmin: () => void;
  totalCaderno: number;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, onOpenCaderno, onAdmin, totalCaderno }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#B58863] selection:text-white">
      {/* Header Funcional */}
      <nav className="w-full py-6 px-6 md:px-12 flex justify-between items-center bg-white border-b border-gray-50 sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-[#B58863] flex items-center justify-center shadow-md">
             <span className="text-white font-serif font-bold text-lg">B</span>
          </div>
          <span className="font-serif text-xl font-bold text-[#4b3621] tracking-tight uppercase">
            Budega dos Concursos
          </span>
        </div>
        <div className="flex items-center gap-8">
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onAdmin(); }} 
            className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] hover:text-[#B58863] transition-colors cursor-pointer p-2"
          >
            Administração
          </button>
          <button 
            type="button"
            onClick={(e) => { e.preventDefault(); onStart(); }}
            className="bg-[#B58863] text-white px-6 py-2 text-sm font-bold rounded-sm hover:bg-[#a07654] transition-colors shadow-sm cursor-pointer"
          >
            Iniciar Estudo
          </button>
        </div>
      </nav>

      {/* Hero Content */}
      <main className="flex-1 flex flex-col items-center justify-center px-6 text-center -mt-10">
        <div className="max-w-5xl space-y-10">
          <div>
            <span className="text-[10px] font-bold tracking-[0.6em] text-[#B58863] uppercase">O Método de Elite</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-[#1a1a1a] leading-[1.1] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6">
              <span className="text-[#E5D3C0] text-4xl md:text-6xl select-none">01.</span>
              <span>Estude exatamente onde você erra</span>
            </h1>
            
            <h2 className="text-3xl md:text-5xl font-serif italic text-[#4b4b4b] flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 opacity-90">
              <span className="text-[#E5D3C0] not-italic text-3xl md:text-4xl select-none">02.</span>
              <span>Transforme cada erro em direção</span>
            </h2>
          </div>

          <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto font-normal leading-relaxed">
            O diagnóstico definitivo para Carreiras Jurídicas. <br className="hidden md:block" /> Pare de andar em círculos e ataque os pontos cegos do seu edital.
          </p>

          <div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-6">
            <button 
              type="button"
              onClick={onStart}
              className="px-10 py-5 bg-[#B58863] text-white font-bold text-sm uppercase tracking-wider rounded-sm shadow-xl shadow-[#B58863]/20 hover:bg-[#a07654] transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              Testar Ferramenta Gratuitamente
            </button>
            <button 
              type="button"
              className="px-10 py-5 border-2 border-[#B58863] text-[#B58863] font-bold text-sm uppercase tracking-wider rounded-sm hover:bg-[#B58863] hover:text-white transition-all transform hover:-translate-y-1 cursor-pointer"
            >
              Entenda o Conceito
            </button>
          </div>
        </div>
      </main>

      <footer className="py-8 px-6 text-center border-t border-gray-50 opacity-40">
        <p className="text-[9px] uppercase tracking-[0.5em] font-bold text-gray-400">Budega dos Concursos &copy; 2025</p>
      </footer>
    </div>
  );
};
