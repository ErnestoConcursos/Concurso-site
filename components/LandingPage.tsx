
import React from 'react';
import { Button } from './Button';

interface LandingPageProps {
  onStart: () => void;
  onManage: () => void;
  onOpenCaderno: () => void;
  totalNoCaderno: number;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, onManage, onOpenCaderno, totalNoCaderno }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Cabeçalho */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#B58863] rounded-sm flex items-center justify-center">
             <span className="text-white font-serif font-bold text-xs">B</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#4b3621]">BUDEGA DOS CONCURSOS</span>
        </div>
        <div className="flex gap-4 items-center">
          <button onClick={onOpenCaderno} className="relative p-2 text-gray-400 hover:text-[#B58863] transition-colors">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            {totalNoCaderno > 0 && (
              <span className="absolute -top-1 -right-1 bg-[#B58863] text-white text-[9px] font-bold w-4 h-4 rounded-full flex items-center justify-center">{totalNoCaderno}</span>
            )}
          </button>
          <button onClick={onManage} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#B58863] transition-colors">Administração</button>
          <Button variant="primary" size="sm" onClick={onStart}>Iniciar Estudo</Button>
        </div>
      </nav>

      {/* Seção Hero */}
      <section className="px-6 md:px-12 py-20 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="space-y-6 mb-12">
          <h1 className="text-4xl md:text-7xl font-serif font-bold text-gray-900 leading-tight">
            Estude exatamente onde você erra
          </h1>
          <div className="h-px w-24 bg-[#B58863] mx-auto opacity-30"></div>
          <h2 className="text-2xl md:text-4xl font-serif font-medium text-[#B58863] italic">
            Transforme cada erro em direção
          </h2>
        </div>

        <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
          O diagnóstico definitivo para Magistratura e Ministério Público. 
          A Budega dos Concursos mapeia suas falhas técnicas e entrega o caminho cirúrgico para a sua aprovação.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={onStart} className="shadow-xl shadow-[#B58863]/20">Começar Diagnóstico Agora</Button>
          <Button variant="outline" size="lg" onClick={onOpenCaderno}>
            Caderno de Erros {totalNoCaderno > 0 && `(${totalNoCaderno})`}
          </Button>
        </div>

        <div className="mt-20 w-full aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border-8 border-white bg-gray-200">
           <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" alt="Ambiente Jurídico" className="w-full h-full object-cover opacity-90" />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6 md:px-12 mt-auto">
        <div className="max-w-6xl mx-auto text-center">
          <div className="font-serif text-lg font-bold text-[#4b3621] mb-2">BUDEGA DOS CONCURSOS</div>
          <p className="text-[10px] text-gray-400 uppercase tracking-widest">&copy; 2025 - Inteligência Jurídica para Alta Performance</p>
        </div>
      </footer>
    </div>
  );
};
