
import React from 'react';
import { Button } from './Button';

interface DashboardProps {
  onStart: () => void;
  onOpenCaderno: () => void;
  onManage: () => void;
  onLogout: () => void;
  totalCaderno: number;
}

export const Dashboard: React.FC<DashboardProps> = ({ onStart, onOpenCaderno, onManage, onLogout, totalCaderno }) => {
  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col">
      <nav className="bg-white border-b py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-[#B58863] rounded-sm flex items-center justify-center">
             <span className="text-white font-serif font-bold text-[10px]">B</span>
          </div>
          <span className="font-serif font-bold text-[#4b3621]">Painel de Performance</span>
        </div>
        <button onClick={onLogout} className="text-[10px] font-bold text-red-400 uppercase tracking-widest">Sair</button>
      </nav>

      <main className="flex-1 max-w-6xl mx-auto w-full p-6 md:p-12 space-y-12">
        <header>
          <h1 className="text-3xl font-serif font-bold text-gray-900">Bom dia, Doutor(a).</h1>
          <p className="text-gray-500 mt-2">Escolha seu foco estratégico para hoje.</p>
        </header>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card de Diagnóstico */}
          <div className="bg-white p-8 border rounded-sm shadow-sm group hover:border-[#B58863] transition-all">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B58863] transition-colors">
              <svg className="w-6 h-6 text-[#B58863] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Iniciar Diagnóstico</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Resolva questões por matéria e receba uma análise técnica imediata dos seus pontos de falha.</p>
            <Button onClick={onStart} className="w-full">Abrir Banco</Button>
          </div>

          {/* Card de Caderno de Erros */}
          <div className="bg-white p-8 border rounded-sm shadow-sm group hover:border-[#B58863] transition-all relative overflow-hidden">
            {totalCaderno > 0 && (
              <div className="absolute top-4 right-4 bg-[#B58863] text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
                {totalCaderno} itens
              </div>
            )}
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-[#B58863] transition-colors">
              <svg className="w-6 h-6 text-[#B58863] group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Caderno de Erros</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Revise as questões que você separou para estudo reverso. Onde mora o seu erro, mora a sua aprovação.</p>
            <Button variant="outline" onClick={onOpenCaderno} className="w-full">Revisar Erros</Button>
          </div>

          {/* Card de Administração */}
          <div className="bg-white p-8 border rounded-sm shadow-sm group hover:border-gray-900 transition-all opacity-80 hover:opacity-100">
            <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-900 transition-colors">
              <svg className="w-6 h-6 text-gray-400 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" /></svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-3">Gestão de Acervo</h3>
            <p className="text-sm text-gray-500 mb-8 leading-relaxed">Adicione novas questões, altere a estrutura de tópicos do edital ou importe bancos em lote via IA.</p>
            <Button variant="secondary" onClick={onManage} className="w-full">Administrar</Button>
          </div>
        </div>

        <div className="bg-[#4b3621] p-10 rounded-sm text-white flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="space-y-2 text-center md:text-left">
            <h4 className="text-xl font-serif font-bold italic text-[#F0D9B5]">"A lei é o que a gente diz que ela é."</h4>
            <p className="text-xs text-amber-200/50 uppercase tracking-[0.3em]">Mantenha a Constância</p>
          </div>
          <div className="text-center md:text-right">
             <div className="text-3xl font-bold">100%</div>
             <p className="text-[10px] uppercase opacity-50">Foco em Performance</p>
          </div>
        </div>
      </main>
    </div>
  );
};
