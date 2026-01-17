
import React, { useState } from 'react';
import { Button } from './Button';
import { Questao } from '../types';
import { processarQuestoesLote } from '../geminiService';

interface AdminQuestionsProps {
  questoes: Questao[];
  configMaterias: Record<string, string[]>;
  onAddQuestao: (q: Questao | Questao[]) => void;
  onRemoveQuestao: (id: string) => void;
}

export const AdminQuestions: React.FC<AdminQuestionsProps> = ({ 
  questoes, 
  configMaterias, 
  onAddQuestao, 
  onRemoveQuestao 
}) => {
  const [modo, setModo] = useState<'manual' | 'ia'>('manual');
  const [estaProcessando, setEstaProcessando] = useState(false);
  const [textoLote, setTextoLote] = useState('');
  const [previaQuestoes, setPreviaQuestoes] = useState<Questao[]>([]);
  
  const [novaQ, setNovaQ] = useState<Partial<Questao>>({
    materia: '',
    assunto: '',
    enunciado: '',
    alternativas: ['', '', '', '', ''],
    indiceCorreto: 0,
    explicacao: ''
  });

  const materiasDisponiveis = Object.keys(configMaterias);

  const handleSalvarManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!novaQ.materia || !novaQ.assunto || !novaQ.enunciado) {
      alert('Preencha os campos obrigatórios.');
      return;
    }

    const questao: Questao = {
      id: Math.random().toString(36).substr(2, 9) + Date.now().toString(),
      materia: novaQ.materia,
      assunto: novaQ.assunto,
      enunciado: novaQ.enunciado,
      alternativas: novaQ.alternativas as string[],
      indiceCorreto: novaQ.indiceCorreto || 0,
      explicacao: novaQ.explicacao || ''
    };
    onAddQuestao(questao);
    setNovaQ({ ...novaQ, enunciado: '', alternativas: ['', '', '', '', ''], explicacao: '' });
    alert('Questão cadastrada no acervo local!');
  };

  const handleProcessarIA = async () => {
    if (!textoLote.trim()) return;
    setEstaProcessando(true);
    try {
      const processadas = await processarQuestoesLote(textoLote);
      setPreviaQuestoes(processadas);
    } catch (e) {
      alert('Ocorreu um erro ao processar o texto com a IA. Verifique sua conexão.');
    } finally {
      setEstaProcessando(false);
    }
  };

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* Área de Inserção */}
      <div className="lg:col-span-8 space-y-6">
        <div className="bg-white border p-6 rounded-sm shadow-sm">
          <div className="flex gap-8 mb-8 border-b border-gray-100 pb-4">
            <button 
              onClick={() => setModo('manual')} 
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${modo === 'manual' ? 'text-[#B58863] border-b-2 border-[#B58863] pb-4 -mb-[18px]' : 'text-gray-400'}`}
            >
              Cadastro Manual
            </button>
            <button 
              onClick={() => setModo('ia')} 
              className={`text-[11px] font-bold uppercase tracking-widest transition-colors ${modo === 'ia' ? 'text-[#B58863] border-b-2 border-[#B58863] pb-4 -mb-[18px]' : 'text-gray-400'}`}
            >
              Importação Inteligente (IA)
            </button>
          </div>

          {modo === 'manual' ? (
            <form onSubmit={handleSalvarManual} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Disciplina Principal</label>
                  <select 
                    className="w-full p-3 border rounded-sm bg-gray-50 text-sm focus:border-[#B58863] outline-none"
                    value={novaQ.materia}
                    onChange={e => setNovaQ({...novaQ, materia: e.target.value, assunto: ''})}
                    required
                  >
                    <option value="">Selecione a matéria...</option>
                    {materiasDisponiveis.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Tópico do Edital</label>
                  <select 
                    className="w-full p-3 border rounded-sm bg-gray-50 text-sm focus:border-[#B58863] outline-none"
                    value={novaQ.assunto}
                    onChange={e => setNovaQ({...novaQ, assunto: e.target.value})}
                    required
                    disabled={!novaQ.materia}
                  >
                    <option value="">Selecione o tópico...</option>
                    {(configMaterias[novaQ.materia || ''] || []).map(a => <option key={a} value={a}>{a}</option>)}
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Texto do Enunciado</label>
                <textarea 
                  className="w-full p-4 border rounded-sm bg-gray-50 text-sm h-32 focus:border-[#B58863] outline-none"
                  value={novaQ.enunciado}
                  onChange={e => setNovaQ({...novaQ, enunciado: e.target.value})}
                  placeholder="Ex: No que concerne aos direitos fundamentais..."
                  required
                />
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Alternativas e Gabarito</label>
                {novaQ.alternativas?.map((alt, i) => (
                  <div key={i} className="flex gap-3 items-center group">
                    <div className="flex items-center gap-2">
                      <input 
                        type="radio" 
                        name="correta_manual" 
                        checked={novaQ.indiceCorreto === i} 
                        onChange={() => setNovaQ({...novaQ, indiceCorreto: i})}
                        className="w-4 h-4 accent-[#B58863] cursor-pointer"
                      />
                      <span className="text-xs font-bold text-gray-400">{String.fromCharCode(65+i)}</span>
                    </div>
                    <input 
                      className="flex-1 p-2.5 border rounded-sm bg-gray-50 text-[13px] focus:border-[#B58863] outline-none group-hover:bg-white transition-colors" 
                      placeholder={`Texto da alternativa ${String.fromCharCode(65+i)}...`}
                      value={alt}
                      onChange={e => {
                        const newAlts = [...(novaQ.alternativas || [])];
                        newAlts[i] = e.target.value;
                        setNovaQ({...novaQ, alternativas: newAlts});
                      }}
                      required
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Fundamentação / Comentário</label>
                <textarea 
                  className="w-full p-4 border rounded-sm bg-amber-50/30 text-[13px] h-24 italic focus:border-[#B58863] outline-none"
                  value={novaQ.explicacao}
                  onChange={e => setNovaQ({...novaQ, explicacao: e.target.value})}
                  placeholder="Inclua o dispositivo legal ou jurisprudência..."
                />
              </div>

              <Button type="submit" className="w-full py-4 shadow-xl">Salvar Questão no Banco</Button>
            </form>
          ) : (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="bg-amber-50 p-4 border-l-4 border-[#B58863] text-[11px] text-[#4b3621] leading-relaxed">
                <strong>MODO IA:</strong> Cole o texto bruto de provas ou PDFs (incluindo gabarito se houver). 
                O Gemini irá ler o conteúdo e sugerir o cadastro estruturado automaticamente.
              </div>
              <textarea 
                className="w-full p-4 border rounded-sm bg-gray-900 text-green-400 font-mono text-[11px] h-[400px] outline-none focus:ring-1 focus:ring-green-500/50"
                placeholder="Cole o texto aqui..."
                value={textoLote}
                onChange={e => setTextoLote(e.target.value)}
              />
              <Button 
                onClick={handleProcessarIA} 
                className="w-full py-4" 
                disabled={estaProcessando || !textoLote}
              >
                {estaProcessando ? 'IA Budega está Analisando...' : 'Processar Texto com IA'}
              </Button>

              {previaQuestoes.length > 0 && (
                <div className="mt-8 p-6 border-2 border-dashed border-[#B58863] bg-[#B58863]/5 rounded-sm animate-in slide-in-from-top duration-500">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex flex-col">
                      <h4 className="font-serif font-bold text-[#B58863] text-lg">Resultados da IA</h4>
                      <p className="text-[10px] text-gray-500 uppercase">{previaQuestoes.length} Questões prontas para importação</p>
                    </div>
                    <Button onClick={() => { onAddQuestao(previaQuestoes); setPreviaQuestoes([]); setTextoLote(''); alert('Importação concluída!'); }} size="sm">Confirmar Tudo</Button>
                  </div>
                  <div className="space-y-2 max-h-40 overflow-y-auto">
                    {previaQuestoes.map((p, idx) => (
                      <div key={idx} className="text-[10px] p-2 bg-white border rounded truncate text-gray-400">
                        <span className="font-bold text-[#B58863] mr-2">[{p.materia}]</span> {p.enunciado}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Listagem Rápida Lateral */}
      <div className="lg:col-span-4">
        <div className="bg-white border p-6 rounded-sm shadow-sm sticky top-12">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Acervo Atual</h3>
            <span className="bg-gray-100 text-gray-600 text-[10px] px-2 py-0.5 rounded-full font-bold">{questoes.length} q</span>
          </div>
          
          <div className="space-y-3 max-h-[700px] overflow-y-auto pr-2 custom-scrollbar">
            {questoes.length > 0 ? (
              questoes.slice().reverse().map(q => (
                <div key={q.id} className="p-3 border rounded-sm bg-gray-50 hover:bg-white hover:border-[#B58863] transition-all relative group">
                  <div className="text-[8px] font-bold text-[#B58863] uppercase mb-1 tracking-tighter">{q.materia} • {q.assunto}</div>
                  <p className="text-[11px] text-gray-600 line-clamp-2 leading-snug">{q.enunciado}</p>
                  <button 
                    onClick={() => onRemoveQuestao(q.id)}
                    className="absolute top-2 right-2 text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-all p-1"
                    title="Excluir questão"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
                  </button>
                </div>
              ))
            ) : (
              <div className="py-20 text-center space-y-2 opacity-30">
                <svg className="w-8 h-8 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>
                <p className="text-[10px] font-bold uppercase">Banco Vazio</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
