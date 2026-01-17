
import React, { useState, useMemo } from 'react';
import { Button } from './Button';
import { Questao, SessaoResposta } from '../types';
import { obterDiagnostico } from '../geminiService';

interface StudyAppProps {
  questoes: Questao[];
  configMaterias: Record<string, string[]>;
  cadernoIds: string[];
  onToggleCaderno: (id: string) => void;
  onBack: () => void;
  onOpenCaderno?: () => void;
}

type StudyViewState = 'SELECIONAR_MATERIA' | 'SELECIONAR_ASSUNTO' | 'QUESTOES' | 'DIAGNOSTICO';

export const StudyApp: React.FC<StudyAppProps> = ({ 
  questoes, 
  configMaterias, 
  cadernoIds, 
  onToggleCaderno, 
  onBack,
  onOpenCaderno 
}) => {
  const [viewState, setViewState] = useState<StudyViewState>('SELECIONAR_MATERIA');
  const [materiaSelecionada, setMateriaSelecionada] = useState<string | null>(null);
  const [assuntoSelecionado, setAssuntoSelecionado] = useState<string | null>(null);
  
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [progresso, setProgresso] = useState<Record<string, any>>({});
  const [sessoes, setSessoes] = useState<SessaoResposta[]>([]);
  const [diagnostico, setDiagnostico] = useState<any>(null);
  const [carregandoDiagnostico, setCarregandoDiagnostico] = useState(false);

  const QUESTOES_POR_PAGINA = 10;

  const materias = useMemo(() => {
    return Object.keys(configMaterias).map(nome => {
      const total = questoes.filter(q => q.materia === nome).length;
      return { nome, total };
    });
  }, [questoes, configMaterias]);

  const assuntos = useMemo(() => {
    if (!materiaSelecionada) return [];
    const topicosEdital = configMaterias[materiaSelecionada] || [];
    return topicosEdital.map(nome => ({
      nome,
      total: questoes.filter(q => q.materia === materiaSelecionada && q.assunto === nome).length
    }));
  }, [questoes, materiaSelecionada, configMaterias]);

  const questoesFiltradas = useMemo(() => {
    if (!materiaSelecionada) return [];
    return questoes.filter(q => {
      const bMateria = q.materia === materiaSelecionada;
      const bAssunto = !assuntoSelecionado || q.assunto === assuntoSelecionado;
      return bMateria && bAssunto;
    });
  }, [questoes, materiaSelecionada, assuntoSelecionado]);

  const questoesPaginadas = useMemo(() => {
    const inicio = paginaAtual * QUESTOES_POR_PAGINA;
    return questoesFiltradas.slice(inicio, inicio + QUESTOES_POR_PAGINA);
  }, [questoesFiltradas, paginaAtual]);

  const confirmarResposta = (idQuestao: string) => {
    const atual = progresso[idQuestao];
    const questao = questoes.find(q => q.id === idQuestao);
    if (!questao || !atual || atual.alternativaPreSelecionada === null || atual.foiRespondida) return;

    const estaCorreta = atual.alternativaPreSelecionada === questao.indiceCorreto;
    setProgresso({ ...progresso, [idQuestao]: { ...atual, foiRespondida: true, estaCorreta } });
    setSessoes(prev => [...prev, { idQuestao, alternativaSelecionada: atual.alternativaPreSelecionada, estaCorreta, timestamp: Date.now() }]);
  };

  if (viewState === 'SELECIONAR_MATERIA') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 flex flex-col md:flex-row justify-between items-end gap-4">
            <div>
              <h1 className="text-4xl font-serif font-bold text-[#4b3621]">Onde você deseja focar?</h1>
              <p className="text-gray-500 mt-2">Escolha uma disciplina para iniciar seu mapeamento.</p>
            </div>
            {onOpenCaderno && cadernoIds.length > 0 && (
              <button 
                onClick={onOpenCaderno}
                className="text-[10px] font-bold text-[#B58863] uppercase tracking-widest border-b border-[#B58863]/30 pb-1 hover:border-[#B58863] transition-all"
              >
                Ver Caderno de Erros ({cadernoIds.length})
              </button>
            )}
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materias.map(m => (
              <button key={m.nome} onClick={() => { setMateriaSelecionada(m.nome); setViewState('SELECIONAR_ASSUNTO'); }} className="bg-white p-6 border-2 border-transparent hover:border-[#B58863] text-left group transition-all shadow-sm">
                <div className="text-[10px] font-bold text-[#B58863] uppercase mb-2">Disciplina</div>
                <h3 className="font-serif font-bold text-gray-800 h-12 overflow-hidden">{m.nome}</h3>
                <div className="mt-4 text-xs text-gray-400 font-bold uppercase">{m.total} Questões</div>
              </button>
            ))}
          </div>
          <div className="mt-12 flex justify-center"><Button variant="outline" onClick={onBack}>Voltar ao Início</Button></div>
        </div>
      </div>
    );
  }

  if (viewState === 'SELECIONAR_ASSUNTO') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <button onClick={() => setViewState('SELECIONAR_MATERIA')} className="text-[10px] font-bold text-[#B58863] uppercase mb-4">← Voltar</button>
          <h1 className="text-3xl font-serif font-bold text-[#4b3621] mb-8">{materiaSelecionada}</h1>
          <div className="grid gap-3">
            <button onClick={() => { setAssuntoSelecionado(null); setViewState('QUESTOES'); }} className="p-6 bg-[#B58863] text-white font-bold uppercase text-xs tracking-widest text-left">Resolver Geral ({questoesFiltradas.length})</button>
            {assuntos.map(a => (
              <button key={a.nome} onClick={() => { setAssuntoSelecionado(a.nome); setViewState('QUESTOES'); }} className="p-4 bg-white border hover:border-[#B58863] text-left flex justify-between items-center group">
                <span className="font-serif text-gray-700">{a.nome}</span>
                <span className="text-xs text-gray-300 group-hover:text-[#B58863]">{a.total} q</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'QUESTOES') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] pb-24">
        <div className="sticky top-0 bg-white border-b py-4 px-6 md:px-12 flex justify-between items-center z-50">
          <div className="font-serif font-bold text-[#4b3621] truncate max-w-[200px] md:max-w-md">{materiaSelecionada} {assuntoSelecionado && `> ${assuntoSelecionado}`}</div>
          <div className="flex gap-2 md:gap-4">
            <Button size="sm" variant="outline" onClick={() => setViewState('SELECIONAR_ASSUNTO')}>Trocar Tópico</Button>
            <Button size="sm" onClick={async () => { setViewState('DIAGNOSTICO'); setCarregandoDiagnostico(true); const d = await obterDiagnostico(sessoes, questoesFiltradas); setDiagnostico(d); setCarregandoDiagnostico(false); }}>Finalizar Sessão</Button>
          </div>
        </div>
        <div className="max-w-4xl mx-auto mt-12 px-6 space-y-8">
          {questoesPaginadas.map((q, idx) => {
            const estado = progresso[q.id] || { alternativaPreSelecionada: null, foiRespondida: false };
            const noCaderno = cadernoIds.includes(q.id);

            return (
              <div key={q.id} className="bg-white p-8 border rounded-sm shadow-sm relative overflow-hidden">
                {estado.foiRespondida && (
                  <div className={`absolute top-0 right-0 px-4 py-1 text-[10px] font-bold uppercase ${estado.estaCorreta ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                    {estado.estaCorreta ? 'Acerto' : 'Erro'}
                  </div>
                )}
                
                <div className="flex justify-between items-start mb-6">
                  <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{q.assunto}</div>
                  <button 
                    onClick={() => onToggleCaderno(q.id)}
                    className={`transition-colors ${noCaderno ? 'text-[#B58863]' : 'text-gray-200 hover:text-gray-400'}`}
                    title={noCaderno ? "Remover do Caderno" : "Adicionar ao Caderno de Erros"}
                  >
                    <svg className="w-6 h-6" fill={noCaderno ? "currentColor" : "none"} stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" /></svg>
                  </button>
                </div>

                <p className="text-lg font-serif mb-8 text-gray-800 leading-relaxed">{q.enunciado}</p>
                
                <div className="space-y-3">
                  {q.alternativas.map((alt, i) => (
                    <button 
                      key={i} 
                      onClick={() => setProgresso({...progresso, [q.id]: {...estado, alternativaPreSelecionada: i}})}
                      className={`w-full text-left p-4 border rounded-sm transition-all text-sm flex gap-4 ${
                        estado.foiRespondida 
                          ? (i === q.indiceCorreto ? 'border-green-500 bg-green-50' : (estado.alternativaPreSelecionada === i ? 'border-red-300 bg-red-50' : 'border-gray-100 text-gray-400'))
                          : (estado.alternativaPreSelecionada === i ? 'border-[#B58863] bg-white ring-1 ring-[#B58863]' : 'border-gray-100 bg-gray-50 hover:border-gray-300')
                      }`}
                      disabled={estado.foiRespondida}
                    >
                      <span className="font-bold">{String.fromCharCode(65+i)})</span>
                      <span>{alt}</span>
                    </button>
                  ))}
                </div>

                {!estado.foiRespondida && estado.alternativaPreSelecionada !== null && (
                  <Button onClick={() => confirmarResposta(q.id)} className="mt-8 w-full">Confirmar Resposta</Button>
                )}

                {estado.foiRespondida && (
                  <div className="mt-8 p-6 bg-amber-50 border-l-4 border-[#B58863] animate-in slide-in-from-top duration-300">
                    <h4 className="text-[10px] font-bold uppercase text-[#B58863] mb-2">Fundamentação Técnica</h4>
                    <p className="text-sm text-gray-700 italic leading-relaxed">{q.explicacao}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7] p-12">
      <div className="max-w-md w-full text-center space-y-6">
        {carregandoDiagnostico ? (
          <div className="space-y-4">
             <div className="w-12 h-12 border-4 border-[#B58863] border-t-transparent rounded-full animate-spin mx-auto"></div>
             <p className="font-serif italic text-gray-500">O Gemini está processando sua performance...</p>
          </div>
        ) : (
          <div className="bg-white p-8 border rounded-sm shadow-xl">
             <h2 className="text-2xl font-serif font-bold text-[#4b3621] mb-6">Diagnóstico Pronto</h2>
             <div className="text-left space-y-4 mb-8">
                <div>
                  <span className="text-[10px] font-bold text-gray-400 uppercase">Pontos de Atenção</span>
                  <ul className="text-sm text-gray-600 list-disc ml-4 mt-1">
                    {diagnostico?.pontosFracos.map((p: string) => <li key={p}>{p}</li>)}
                  </ul>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed bg-gray-50 p-4 rounded-sm border italic">{diagnostico?.direcaoEstudo}</p>
             </div>
             <Button onClick={() => setViewState('SELECIONAR_MATERIA')} className="w-full">Voltar às Matérias</Button>
          </div>
        )}
      </div>
    </div>
  );
};
