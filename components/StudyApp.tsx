
import React, { useState, useMemo, useEffect } from 'react';
import { Button } from './Button';
import { Questao, SessaoResposta } from '../types';
import { obterDiagnostico } from '../geminiService';
import { TOPICOS_POR_MATERIA } from '../constants';

interface StudyAppProps {
  questoes: Questao[];
  onBack: () => void;
}

type StudyViewState = 'SELECIONAR_MATERIA' | 'SELECIONAR_ASSUNTO' | 'QUESTOES' | 'DIAGNOSTICO';

interface ProgressoQuestao {
  alternativaPreSelecionada: number | null;
  alternativasDescartadas: number[];
  foiRespondida: boolean;
  estaCorreta: boolean | null;
}

export const StudyApp: React.FC<StudyAppProps> = ({ questoes, onBack }) => {
  const [viewState, setViewState] = useState<StudyViewState>('SELECIONAR_MATERIA');
  const [materiaSelecionada, setMateriaSelecionada] = useState<string | null>(null);
  const [assuntoSelecionado, setAssuntoSelecionado] = useState<string | null>(null);
  
  const [paginaAtual, setPaginaAtual] = useState(0);
  const [progresso, setProgresso] = useState<Record<string, ProgressoQuestao>>({});
  const [sessoes, setSessoes] = useState<SessaoResposta[]>([]);
  const [diagnostico, setDiagnostico] = useState<any>(null);
  const [carregandoDiagnostico, setCarregandoDiagnostico] = useState(false);

  const QUESTOES_POR_PAGINA = 10;

  const materias = useMemo(() => {
    return Object.keys(TOPICOS_POR_MATERIA).map(nome => {
      const total = questoes.filter((q: Questao) => (q.materia || '').trim() === nome.trim()).length;
      return { nome, total };
    });
  }, [questoes]);

  const assuntos = useMemo(() => {
    const currentMateria = materiaSelecionada;
    if (!currentMateria) return [];
    
    const topicosEdital = TOPICOS_POR_MATERIA[currentMateria] || [];
    
    const assuntosNasQuestoes: string[] = Array.from(new Set(
      questoes
        .filter((q: Questao) => (q.materia || '').trim() === currentMateria.trim())
        .map((q: Questao) => (q.assunto || '').trim())
    )).filter((a): a is string => typeof a === 'string' && a !== '');

    const todosAssuntos: string[] = Array.from(new Set([...topicosEdital, ...assuntosNasQuestoes]));
    
    return todosAssuntos.map(nomeAssunto => {
      const total = questoes.filter((q: Questao) => 
        (q.materia || '').trim() === currentMateria.trim() && 
        (q.assunto || '').trim() === nomeAssunto.trim()
      ).length;
      return { nome: nomeAssunto, total };
    }).sort((a: {nome: string, total: number}, b: {nome: string, total: number}) => {
      return a.nome.localeCompare(b.nome, undefined, { numeric: true, sensitivity: 'base' });
    });
  }, [questoes, materiaSelecionada]);

  const questoesFiltradas = useMemo(() => {
    const currentMateria = materiaSelecionada;
    if (!currentMateria) return [];
    const currentAssunto = assuntoSelecionado;

    return questoes.filter((q: Questao) => {
      const bMateria = (q.materia || '').trim() === currentMateria.trim();
      const bAssunto = !currentAssunto || currentAssunto === 'Ver Tudo' || (q.assunto || '').trim() === currentAssunto.trim();
      return bMateria && bAssunto;
    });
  }, [questoes, materiaSelecionada, assuntoSelecionado]);

  const questoesPaginadas = useMemo(() => {
    const inicio = paginaAtual * QUESTOES_POR_PAGINA;
    return questoesFiltradas.slice(inicio, inicio + QUESTOES_POR_PAGINA);
  }, [questoesFiltradas, paginaAtual]);

  const totalPaginas = Math.ceil(questoesFiltradas.length / QUESTOES_POR_PAGINA);

  useEffect(() => {
    const novoProgresso = { ...progresso };
    let mudou = false;
    questoesFiltradas.forEach(q => {
      if (!novoProgresso[q.id]) {
        novoProgresso[q.id] = {
          alternativaPreSelecionada: null,
          alternativasDescartadas: [],
          foiRespondida: false,
          estaCorreta: null
        };
        mudou = true;
      }
    });
    if (mudou) setProgresso(novoProgresso);
  }, [questoesFiltradas]);

  const alternarDescarte = (idQuestao: string, indiceAlternativa: number) => {
    const atual = progresso[idQuestao];
    if (!atual || atual.foiRespondida) return;

    const estaDescartada = atual.alternativasDescartadas.includes(indiceAlternativa);
    const novasDescartadas = estaDescartada 
      ? atual.alternativasDescartadas.filter(i => i !== indiceAlternativa)
      : [...atual.alternativasDescartadas, indiceAlternativa];

    setProgresso({
      ...progresso,
      [idQuestao]: {
        ...atual,
        alternativasDescartadas: novasDescartadas,
        alternativaPreSelecionada: atual.alternativaPreSelecionada === indiceAlternativa ? null : atual.alternativaPreSelecionada
      }
    });
  };

  const selecionarAlternativa = (idQuestao: string, indiceAlternativa: number) => {
    const atual = progresso[idQuestao];
    if (!atual || atual.foiRespondida || atual.alternativasDescartadas.includes(indiceAlternativa)) return;

    setProgresso({
      ...progresso,
      [idQuestao]: { ...atual, alternativaPreSelecionada: indiceAlternativa }
    });
  };

  const confirmarResposta = (idQuestao: string) => {
    const atual = progresso[idQuestao];
    const questao = questoes.find(q => q.id === idQuestao);
    if (!questao || !atual || atual.alternativaPreSelecionada === null || atual.foiRespondida) return;

    const estaCorreta = atual.alternativaPreSelecionada === questao.indiceCorreto;
    
    setProgresso({
      ...progresso,
      [idQuestao]: { ...atual, foiRespondida: true, estaCorreta }
    });

    const novaSessao: SessaoResposta = {
      idQuestao,
      alternativaSelecionada: atual.alternativaPreSelecionada,
      estaCorreta,
      timestamp: Date.now(),
    };
    
    setSessoes(prev => [...prev, novaSessao]);
  };

  const finalizarSessao = async () => {
    setViewState('DIAGNOSTICO');
    setCarregandoDiagnostico(true);
    const feedback = await obterDiagnostico(sessoes, questoesFiltradas);
    setDiagnostico(feedback);
    setCarregandoDiagnostico(false);
  };

  if (viewState === 'SELECIONAR_MATERIA') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-12 text-center md:text-left">
            <h1 className="text-4xl font-serif font-bold text-[#4b3621]">Diagnóstico de Performance</h1>
            <p className="text-gray-500 mt-2">Escolha uma disciplina para avaliar seu conhecimento técnico.</p>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {materias.map(materia => (
              <button
                key={materia.nome}
                onClick={() => { setMateriaSelecionada(materia.nome); setViewState('SELECIONAR_ASSUNTO'); }}
                className="bg-white p-6 md:p-8 rounded-sm shadow-sm border-2 border-transparent hover:border-[#B58863] transition-all text-left group"
              >
                <div className="text-[10px] font-bold text-[#B58863] uppercase mb-2 tracking-widest">Matéria</div>
                <h3 className="text-lg md:text-xl font-serif font-bold text-gray-800 mb-4 h-14 overflow-hidden leading-tight">{materia.nome}</h3>
                <div className="flex justify-between items-center text-[10px] md:text-xs text-gray-400 font-bold uppercase tracking-wider">
                  <span>{materia.total} Questões</span>
                  <span className={`transition-colors ${materia.total > 0 ? 'group-hover:text-[#B58863]' : 'opacity-20'}`}>
                    {materia.total > 0 ? 'Selecionar →' : 'Vazio'}
                  </span>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-12 flex justify-center">
            <Button variant="outline" onClick={onBack}>Voltar ao Início</Button>
          </div>
        </div>
      </div>
    );
  }

  if (viewState === 'SELECIONAR_ASSUNTO') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8 flex justify-between items-end">
            <div>
              <button onClick={() => setViewState('SELECIONAR_MATERIA')} className="text-[10px] font-bold text-[#B58863] uppercase tracking-widest mb-2 flex items-center gap-1 hover:underline">
                ← Voltar para Matérias
              </button>
              <h1 className="text-3xl md:text-4xl font-serif font-bold text-[#4b3621]">{materiaSelecionada}</h1>
            </div>
          </div>
          <div className="grid gap-4">
            <button 
              disabled={questoesFiltradas.length === 0}
              onClick={() => { setAssuntoSelecionado(null); setViewState('QUESTOES'); }} 
              className={`p-6 rounded-sm text-left font-bold uppercase text-sm tracking-widest flex justify-between items-center shadow-lg transition-colors ${questoesFiltradas.length > 0 ? 'bg-[#B58863] text-white hover:bg-[#a07654]' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}
            >
              <span>Resolver Todas as Questões ({questoesFiltradas.length})</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
            </button>
            
            <div className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mt-6 mb-2">Tópicos e Assuntos</div>
            {assuntos.map(assunto => (
              <button 
                key={assunto.nome} 
                disabled={assunto.total === 0}
                onClick={() => { setAssuntoSelecionado(assunto.nome); setViewState('QUESTOES'); }} 
                className={`bg-white p-5 md:p-6 border rounded-sm text-left transition-all flex justify-between items-center group ${assunto.total > 0 ? 'hover:border-[#B58863]' : 'opacity-50 grayscale cursor-not-allowed'}`}
              >
                <span className="font-serif font-bold text-base md:text-lg text-gray-700">{assunto.nome}</span>
                <span className="text-[10px] md:text-xs font-bold text-gray-300 group-hover:text-[#B58863] whitespace-nowrap ml-4">{assunto.total} questões</span>
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
        <div className="sticky top-0 z-40 bg-white border-b border-gray-200 py-4 px-6 md:px-12 flex justify-between items-center shadow-sm">
          <div className="flex items-center gap-4">
            <h2 className="font-serif font-bold text-[#4b3621] truncate max-w-[150px] md:max-w-none">{materiaSelecionada}</h2>
            <div className="h-4 w-px bg-gray-200 hidden md:block"></div>
            <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest truncate max-w-[100px] md:max-w-none">{assuntoSelecionado || 'Geral'}</span>
          </div>
          <div className="flex items-center gap-4 md:gap-6">
            <div className="text-[10px] font-bold uppercase text-gray-400 hidden sm:block">
               <span className="text-[#B58863]">{sessoes.length}</span> / {questoesFiltradas.length}
            </div>
            <Button size="sm" onClick={finalizarSessao} disabled={sessoes.length === 0}>Finalizar</Button>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-8 md:mt-12 px-4 md:px-6 space-y-8 md:y-12">
          {questoesPaginadas.map((q, idx) => {
            const estado = progresso[q.id] || { alternativaPreSelecionada: null, alternativasDescartadas: [], foiRespondida: false, estaCorreta: null };
            return (
              <div key={q.id} className="bg-white border rounded-sm shadow-sm overflow-hidden">
                <div className="p-6 md:p-8">
                  <div className="flex justify-between items-start mb-6">
                    <span className="bg-gray-100 text-[9px] md:text-[10px] font-bold text-gray-400 px-2 py-1 rounded-sm uppercase tracking-widest">Questão {paginaAtual * QUESTOES_POR_PAGINA + idx + 1}</span>
                    {estado.foiRespondida && (
                      <span className={`text-[9px] md:text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm ${estado.estaCorreta ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {estado.estaCorreta ? '✓ Correta' : '✗ Incorreta'}
                      </span>
                    )}
                  </div>
                  <p className="text-base md:text-lg font-serif font-medium leading-relaxed text-gray-800 mb-8 whitespace-pre-wrap">{q.enunciado}</p>

                  <div className="space-y-3">
                    {q.alternativas.map((textoAlternativa, oIdx) => {
                      const estaDescartada = estado.alternativasDescartadas.includes(oIdx);
                      const estaPreSelecionada = estado.alternativaPreSelecionada === oIdx;
                      
                      let btnStyles = "flex-1 text-left p-4 rounded-sm border-2 transition-all flex items-start gap-3 md:gap-4 text-sm ";
                      
                      if (estado.foiRespondida) {
                        if (oIdx === q.indiceCorreto) btnStyles += "border-green-500 bg-green-50 text-green-900";
                        else if (oIdx === estado.alternativaPreSelecionada) btnStyles += "border-red-400 bg-red-50 text-red-900";
                        else btnStyles += "border-transparent bg-white opacity-40";
                      } else if (estaDescartada) {
                        btnStyles += "border-transparent bg-gray-100 opacity-40 grayscale pointer-events-none";
                      } else if (estaPreSelecionada) {
                        btnStyles += "border-[#B58863] bg-white shadow-md ring-1 ring-[#B58863]";
                      } else {
                        btnStyles += "border-gray-100 bg-white hover:border-gray-200 shadow-sm";
                      }

                      return (
                        <div key={oIdx} className="flex gap-2 items-center group/opt">
                          {!estado.foiRespondida && (
                            <button 
                              onClick={() => alternarDescarte(q.id, oIdx)}
                              className={`p-2 transition-colors rounded-sm hover:bg-gray-200 ${estaDescartada ? 'text-red-500' : 'text-gray-300'}`}
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l18 18" />
                              </svg>
                            </button>
                          )}
                          <button 
                            disabled={estado.foiRespondida || estaDescartada}
                            onClick={() => selecionarAlternativa(q.id, oIdx)}
                            className={btnStyles}
                          >
                            <span className={`font-bold ${estaPreSelecionada ? 'text-[#B58863]' : 'text-gray-300'}`}>{String.fromCharCode(65 + oIdx)})</span>
                            <span className={estaDescartada ? "line-through" : ""}>{textoAlternativa}</span>
                          </button>
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-8 flex justify-center">
                    {!estado.foiRespondida && estado.alternativaPreSelecionada !== null && (
                      <Button onClick={() => confirmarResposta(q.id)} variant="primary" className="px-12">
                        RESPONDER
                      </Button>
                    )}
                  </div>
                </div>

                {estado.foiRespondida && (
                  <div className="bg-[#B58863]/5 border-t p-6 md:p-8">
                    <div className="max-w-3xl mx-auto">
                      <span className="text-[10px] font-bold text-[#B58863] uppercase tracking-widest mb-2 block">Fundamentação Jurídica</span>
                      <p className="text-sm text-gray-700 italic leading-relaxed font-serif whitespace-pre-wrap">"{q.explicacao}"</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {totalPaginas > 1 && (
            <div className="flex justify-center items-center gap-4 py-12">
              <Button variant="outline" size="sm" disabled={paginaAtual === 0} onClick={() => setPaginaAtual(p => p - 1)}>Anterior</Button>
              <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Página {paginaAtual + 1} de {totalPaginas}</span>
              <Button variant="outline" size="sm" disabled={paginaAtual === totalPaginas - 1} onClick={() => setPaginaAtual(p => p + 1)}>Próxima</Button>
            </div>
          )}
        </div>
      </div>
    );
  }

  if (viewState === 'DIAGNOSTICO') {
    const corretas = sessoes.filter(s => s.estaCorreta).length;
    const porcentagem = sessoes.length > 0 ? Math.round((corretas / sessoes.length) * 100) : 0;
    
    return (
      <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
        <div className="max-w-4xl mx-auto">
          <header className="text-center mb-16">
            <h1 className="text-4xl font-serif font-bold text-[#4b3621] mb-4">Análise Final do Diagnóstico</h1>
            <p className="text-gray-500 uppercase tracking-widest text-xs font-bold">Baseado em {sessoes.length} questões resolvidas</p>
          </header>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white p-12 rounded-sm shadow-sm flex flex-col items-center justify-center border-b-4 border-[#B58863]">
              <div className="text-7xl font-bold text-[#4b3621] mb-2">{porcentagem}%</div>
              <div className="text-xs font-bold uppercase tracking-widest text-gray-400">Aproveitamento Médio</div>
            </div>
            <div className="bg-white p-12 rounded-sm shadow-sm space-y-6">
              <h3 className="font-bold text-[#B58863] uppercase text-xs tracking-[0.2em] border-b pb-2">Direcionamento de Estudo</h3>
              {carregandoDiagnostico ? (
                <div className="space-y-4 animate-pulse">
                  <div className="h-4 bg-gray-100 w-full"></div>
                  <div className="h-4 bg-gray-100 w-3/4"></div>
                  <div className="h-4 bg-gray-100 w-5/6"></div>
                </div>
              ) : (
                <div className="space-y-4">
                  <p className="text-sm text-gray-700 leading-relaxed italic">"{diagnostico?.direcaoEstudo || 'Seu desempenho sugere que você deve continuar focando na consolidação da base doutrinária.'}"</p>
                  {diagnostico?.proximaMateria && (
                    <div className="bg-gray-50 p-4 rounded-sm">
                      <span className="text-[10px] font-bold text-gray-400 uppercase">Próximo Foco Sugerido:</span>
                      <p className="font-bold text-gray-800">{diagnostico.proximaMateria}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
            <Button size="lg" onClick={() => window.location.reload()}>Nova Sessão</Button>
            <Button variant="outline" size="lg" onClick={onBack}>Voltar ao Menu</Button>
          </div>
        </div>
      </div>
    );
  }

  return null;
};
