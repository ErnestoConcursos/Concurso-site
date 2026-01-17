
import React, { useState } from 'react';
import { Button } from './Button';
import { Questao } from '../types';
import { AdminQuestions } from './AdminQuestions';
import { AdminStructure } from './AdminStructure';

interface AdminPanelProps {
  questoes: Questao[];
  configMaterias: Record<string, string[]>;
  onAddQuestao: (q: Questao | Questao[]) => void;
  onRemoveQuestao: (id: string) => void;
  onUpdateEstrutura: (nova: Record<string, string[]>) => void;
  onBack: () => void;
}

export const AdminPanel: React.FC<AdminPanelProps> = ({ 
  questoes, 
  configMaterias, 
  onAddQuestao, 
  onRemoveQuestao, 
  onUpdateEstrutura,
  onBack 
}) => {
  const [secaoAtiva, setSecaoAtiva] = useState<'estrutura' | 'questoes'>('estrutura');

  return (
    <div className="min-h-screen bg-[#F9F9F9] flex flex-col">
      {/* Sub-Header Administrativo */}
      <div className="bg-white border-b px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-4">
          <button onClick={onBack} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" /></svg>
          </button>
          <div>
            <h1 className="text-2xl font-serif font-bold text-[#4b3621]">Painel Administrativo</h1>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Controle de Acervo e Conteúdo</p>
          </div>
        </div>

        <nav className="flex bg-gray-100 p-1 rounded-sm">
          <button 
            onClick={() => setSecaoAtiva('estrutura')}
            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${secaoAtiva === 'estrutura' ? 'bg-white text-[#B58863] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            1. Estrutura (Matérias/Assuntos)
          </button>
          <button 
            onClick={() => setSecaoAtiva('questoes')}
            className={`px-6 py-2 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm ${secaoAtiva === 'questoes' ? 'bg-white text-[#B58863] shadow-sm' : 'text-gray-400 hover:text-gray-600'}`}
          >
            2. Banco de Questões
          </button>
        </nav>
      </div>

      {/* Conteúdo das Abas */}
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="max-w-7xl mx-auto">
          {secaoAtiva === 'estrutura' ? (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="mb-8 border-l-4 border-[#B58863] bg-[#B58863]/5 p-4">
                <p className="text-sm text-[#4b3621]"><strong>Fase 1:</strong> Defina quais disciplinas e tópicos do edital estarão disponíveis para o aluno escolher.</p>
              </div>
              <AdminStructure 
                configMaterias={configMaterias} 
                onUpdateEstrutura={onUpdateEstrutura} 
              />
            </div>
          ) : (
            <div className="animate-in fade-in slide-in-from-bottom-2 duration-500">
              <div className="mb-8 border-l-4 border-[#B58863] bg-[#B58863]/5 p-4">
                <p className="text-sm text-[#4b3621]"><strong>Fase 2:</strong> Alimente o banco com questões manuais ou importe textos em lote usando a Inteligência Artificial.</p>
              </div>
              <AdminQuestions 
                questoes={questoes}
                configMaterias={configMaterias}
                onAddQuestao={onAddQuestao}
                onRemoveQuestao={onRemoveQuestao}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
};
