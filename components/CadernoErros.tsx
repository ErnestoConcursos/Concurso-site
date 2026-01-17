
import React, { useState, useMemo } from 'react';
import { Button } from './Button';
import { Questao } from '../types';

interface CadernoErrosProps {
  questoes: Questao[];
  cadernoIds: string[];
  onToggleCaderno: (id: string) => void;
  onBack: () => void;
}

export const CadernoErros: React.FC<CadernoErrosProps> = ({ questoes, cadernoIds, onToggleCaderno, onBack }) => {
  const [materiaFiltro, setMateriaFiltro] = useState<string | null>(null);
  const [assuntoFiltro, setAssuntoFiltro] = useState<string | null>(null);

  const questoesSalvas = useMemo(() => {
    return questoes.filter(q => cadernoIds.includes(q.id));
  }, [questoes, cadernoIds]);

  const materiasDisponiveis = useMemo(() => {
    const s = new Set<string>();
    questoesSalvas.forEach(q => s.add(q.materia));
    return Array.from(s).sort();
  }, [questoesSalvas]);

  const assuntosDisponiveis = useMemo(() => {
    if (!materiaFiltro) return [];
    const s = new Set<string>();
    questoesSalvas.filter(q => q.materia === materiaFiltro).forEach(q => s.add(q.assunto));
    return Array.from(s).sort();
  }, [questoesSalvas, materiaFiltro]);

  const filtradas = useMemo(() => {
    return questoesSalvas.filter(q => {
      const bMat = !materiaFiltro || q.materia === materiaFiltro;
      const bAss = !assuntoFiltro || q.assunto === assuntoFiltro;
      return bMat && bAss;
    });
  }, [questoesSalvas, materiaFiltro, assuntoFiltro]);

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex flex-col md:flex-row">
      {/* Sidebar de Filtros */}
      <aside className="w-full md:w-80 bg-white border-r border-gray-100 p-8 flex flex-col gap-8">
        <div>
          <button onClick={onBack} className="text-[10px] font-bold text-[#B58863] uppercase tracking-widest mb-6 flex items-center gap-2">
            ← Voltar ao Início
          </button>
          <h1 className="text-2xl font-serif font-bold text-[#4b3621]">Caderno de Erros</h1>
          <p className="text-xs text-gray-400 mt-2 uppercase tracking-tighter">Espaço de Revisão Técnica</p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label className="text-[10px] font-bold text-gray-400 uppercase">Filtrar Disciplina</label>
            <div className="flex flex-col gap-1">
              <button 
                onClick={() => { setMateriaFiltro(null); setAssuntoFiltro(null); }}
                className={`text-left p-2 text-sm rounded-sm transition-colors ${!materiaFiltro ? 'bg-[#F0D9B5] text-[#4b3621] font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
              >
                Todas ({questoesSalvas.length})
              </button>
              {materiasDisponiveis.map(m => (
                <button 
                  key={m}
                  onClick={() => { setMateriaFiltro(m); setAssuntoFiltro(null); }}
                  className={`text-left p-2 text-sm rounded-sm transition-colors ${materiaFiltro === m ? 'bg-[#F0D9B5] text-[#4b3621] font-bold' : 'hover:bg-gray-50 text-gray-600'}`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>

          {materiaFiltro && (
            <div className="space-y-2 animate-in slide-in-from-top duration-200">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Tópico Específico</label>
              <div className="flex flex-col gap-1">
                <button 
                  onClick={() => setAssuntoFiltro(null)}
                  className={`text-left p-2 text-[11px] rounded-sm transition-colors ${!assuntoFiltro ? 'text-[#B58863] font-bold border-l-2 border-[#B58863]' : 'text-gray-400 hover:text-gray-600'}`}
                >
                  Geral do Tópico
                </button>
                {assuntosDisponiveis.map(a => (
                  <button 
                    key={a}
                    onClick={() => setAssuntoFiltro(a)}
                    className={`text-left p-2 text-[11px] rounded-sm transition-colors ${assuntoFiltro === a ? 'text-[#B58863] font-bold border-l-2 border-[#B58863]' : 'text-gray-400 hover:text-gray-600'}`}
                  >
                    {a}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="mt-auto pt-8 border-t border-gray-50">
          <div className="bg-gray-50 p-4 rounded-sm border text-center">
            <div className="text-2xl font-serif font-bold text-[#B58863]">{filtradas.length}</div>
            <div className="text-[9px] font-bold text-gray-400 uppercase">Itens em Revisão</div>
          </div>
        </div>
      </aside>

      {/* Área de Revisão */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto max-h-screen">
        <div className="max-w-4xl mx-auto space-y-8 pb-20">
          {filtradas.length === 0 ? (
            <div className="h-[60vh] flex flex-col items-center justify-center text-center opacity-40">
              <svg className="w-16 h-16 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
              <h3 className="font-serif text-xl">Nenhuma questão neste filtro.</h3>
              <p className="text-sm">As questões salvas durante o estudo aparecerão aqui.</p>
            </div>
          ) : (
            filtradas.map(q => (
              <div key={q.id} className="bg-white p-8 border border-gray-100 rounded-sm shadow-sm relative group">
                <button 
                  onClick={() => onToggleCaderno(q.id)}
                  className="absolute top-4 right-4 text-[#B58863] hover:text-red-400 transition-colors"
                  title="Remover do Caderno"
                >
                  <svg className="w-5 h-5" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                </button>

                <div className="flex gap-4 items-center mb-4">
                  <span className="bg-gray-100 text-gray-500 text-[9px] font-bold px-2 py-0.5 rounded-sm uppercase">{q.materia}</span>
                  <span className="text-gray-300 text-xs">/</span>
                  <span className="text-[#B58863] text-[9px] font-bold uppercase">{q.assunto}</span>
                </div>

                <p className="text-base font-serif text-gray-800 mb-6 leading-relaxed">{q.enunciado}</p>

                <div className="space-y-2 mb-8">
                  {q.alternativas.map((alt, i) => (
                    <div 
                      key={i} 
                      className={`p-3 text-xs border rounded-sm flex gap-3 ${i === q.indiceCorreto ? 'border-green-500 bg-green-50' : 'border-gray-50 bg-gray-50/50 text-gray-400'}`}
                    >
                      <span className="font-bold">{String.fromCharCode(65+i)})</span>
                      <span>{alt}</span>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-amber-50 border-l-2 border-[#B58863]">
                  <div className="text-[9px] font-bold uppercase text-[#B58863] mb-1">Revisão do Ponto</div>
                  <p className="text-xs text-gray-700 italic">{q.explicacao}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </main>
    </div>
  );
};
