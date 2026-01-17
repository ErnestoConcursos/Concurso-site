
import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { Questao } from '../types';
import { processarQuestoesLote } from '../geminiService';
import { TOPICOS_POR_MATERIA } from '../constants';

interface AdminPanelProps {
  questoes: Questao[];
  onAddQuestao: (q: Questao | Questao[]) => void;
  onRemoveQuestao: (id: string) => void;
  onBack: () => void;
}

const LISTA_MATERIAS = Object.keys(TOPICOS_POR_MATERIA);

export const AdminPanel: React.FC<AdminPanelProps> = ({ questoes, onAddQuestao, onRemoveQuestao, onBack }) => {
  const [abaAtiva, setAbaAtiva] = useState<'manual' | 'lote'>('manual');
  const [estaProcessando, setEstaProcessando] = useState(false);
  const [textoLote, setTextoLote] = useState('');
  const [materiaLote, setMateriaLote] = useState('');
  const [assuntoLote, setAssuntoLote] = useState('');
  const [previaQuestoes, setPreviaQuestoes] = useState<Questao[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [novaQ, setNovaQ] = useState<Partial<Questao>>({
    materia: '',
    assunto: '',
    enunciado: '',
    alternativas: ['', '', '', '', ''],
    indiceCorreto: 0,
    explicacao: ''
  });

  const manualValido = 
    novaQ.materia?.trim() !== '' && 
    novaQ.assunto?.trim() !== '' && 
    novaQ.enunciado?.trim() !== '' && 
    novaQ.alternativas?.every(a => a.trim() !== '');

  const enviarManual = (e: React.FormEvent) => {
    e.preventDefault();
    if (!manualValido) return;

    const questao: Questao = {
      id: Math.random().toString(36).substr(2, 9) + Date.now().toString(),
      materia: novaQ.materia!.trim(),
      assunto: novaQ.assunto!.trim(),
      enunciado: novaQ.enunciado!.trim(),
      alternativas: novaQ.alternativas!.map(a => a.trim()),
      indiceCorreto: novaQ.indiceCorreto || 0,
      explicacao: novaQ.explicacao?.trim() || ''
    };

    onAddQuestao(questao);
    setNovaQ({ materia: novaQ.materia, assunto: '', enunciado: '', alternativas: ['', '', '', '', ''], indiceCorreto: 0, explicacao: '' });
    alert('✅ Questão salva com sucesso!');
  };

  const exportarDados = () => {
    const dataStr = JSON.stringify(questoes, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `backup_budega_${new Date().toLocaleDateString()}.json`);
    linkElement.click();
  };

  const importarDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        if (Array.isArray(json)) {
          if (confirm(`Deseja importar ${json.length} questões? Isso as adicionará ao seu banco atual.`)) {
            onAddQuestao(json);
            alert('✅ Importação concluída com sucesso!');
          }
        } else {
          alert('❌ Erro: O arquivo não parece ser um backup válido da Budega.');
        }
      } catch (err) {
        alert('❌ Erve: Falha ao ler o arquivo JSON.');
      }
    };
    reader.readAsText(file);
    if (fileInputRef.current) fileInputRef.current.value = '';
  };

  const processarLote = async () => {
    if (!textoLote.trim()) return;
    setEstaProcessando(true);
    try {
      const promptPersonalizado = `MATÉRIA ALVO: ${materiaLote || 'Identificar automaticamente'}\nASSUNTO ALVO: ${assuntoLote || 'Identificar automaticamente'}\n\n${textoLote}`;
      const processadas = await processarQuestoesLote(promptPersonalizado);
      setPreviaQuestoes(processadas);
    } catch (e) {
      alert('❌ Erro na análise por IA.');
    } finally {
      setEstaProcessando(false);
    }
  };

  const confirmarLote = () => {
    onAddQuestao(previaQuestoes);
    setPreviaQuestoes([]);
    setTextoLote('');
    alert(`✅ ${previaQuestoes.length} questões integradas!`);
  };

  const atualizarAlternativa = (idx: number, val: string) => {
    const alts = [...(novaQ.alternativas || ['', '', '', '', ''])];
    alts[idx] = val;
    setNovaQ({ ...novaQ, alternativas: alts });
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#4b3621]">Gestão de Acervo</h1>
            <p className="text-sm text-[#B58863] font-bold uppercase tracking-[0.2em]">Magistratura e Ministério Público</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input type="file" accept=".json" onChange={importarDados} className="hidden" ref={fileInputRef} />
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>Importar JSON</Button>
            <Button variant="outline" size="sm" onClick={exportarDados}>Exportar Backup</Button>
            <Button variant="outline" size="sm" onClick={onBack}>Voltar</Button>
          </div>
        </header>

        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button onClick={() => setAbaAtiva('manual')} className={`pb-4 px-6 font-bold uppercase text-xs tracking-widest transition-all ${abaAtiva === 'manual' ? 'border-b-2 border-[#B58863] text-[#B58863]' : 'text-gray-400'}`}>Cadastro Manual</button>
          <button onClick={() => setAbaAtiva('lote')} className={`pb-4 px-6 font-bold uppercase text-xs tracking-widest transition-all ${abaAtiva === 'lote' ? 'border-b-2 border-[#B58863] text-[#B58863]' : 'text-gray-400'}`}>Importação por IA</button>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            {abaAtiva === 'manual' ? (
              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Matéria Principal *</label>
                    <input list="lista-materias" className="p-3 border rounded-sm w-full bg-gray-50" value={novaQ.materia} onChange={e => setNovaQ({...novaQ, materia: e.target.value})} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Assunto Específico *</label>
                    <input className="p-3 border rounded-sm w-full bg-gray-50" value={novaQ.assunto} onChange={e => setNovaQ({...novaQ, assunto: e.target.value})} />
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Enunciado da Questão *</label>
                  <textarea className="p-3 border rounded-sm w-full h-32 bg-gray-50" value={novaQ.enunciado} onChange={e => setNovaQ({...novaQ, enunciado: e.target.value})} />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase block">Alternativas (A-E)</label>
                  {novaQ.alternativas?.map((alt, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <input type="radio" checked={novaQ.indiceCorreto === i} onChange={() => setNovaQ({...novaQ, indiceCorreto: i})} className="accent-[#B58863]" />
                      <input placeholder={`Alternativa ${String.fromCharCode(65+i)}`} className="p-2 border rounded-sm flex-1 text-sm bg-gray-50" value={alt} onChange={e => atualizarAlternativa(i, e.target.value)} />
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Fundamentação</label>
                  <textarea className="p-3 border rounded-sm w-full h-24 text-sm bg-gray-50" value={novaQ.explicacao} onChange={e => setNovaQ({...novaQ, explicacao: e.target.value})} />
                </div>

                <Button onClick={enviarManual} className="w-full" disabled={!manualValido}>Salvar Questão</Button>
              </section>
            ) : (
              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Matéria do Lote</label>
                    <input list="lista-materias" className="p-3 border rounded-sm w-full bg-gray-50" value={materiaLote} onChange={e => setMateriaLote(e.target.value)} />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Assunto do Lote</label>
                    <input className="p-3 border rounded-sm w-full bg-gray-50" value={assuntoLote} onChange={e => setAssuntoLote(e.target.value)} />
                  </div>
                </div>
                <textarea placeholder="Cole o texto bruto das questões..." className="p-4 border rounded-sm w-full h-80 font-mono text-xs bg-gray-900 text-green-500 outline-none" value={textoLote} onChange={e => setTextoLote(e.target.value)} />
                <Button onClick={processarLote} disabled={estaProcessando || !textoLote.trim()}>{estaProcessando ? 'Analisando...' : 'Processar com Gemini'}</Button>
                
                {previaQuestoes.length > 0 && (
                  <div className="pt-6 border-t mt-6">
                    <Button onClick={confirmarLote} className="w-full">Confirmar Importação de {previaQuestoes.length} itens</Button>
                  </div>
                )}
              </section>
            )}
          </div>

          <div className="lg:col-span-1">
             <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Banco Atual ({questoes.length})</h2>
             <div className="max-h-[800px] overflow-y-auto space-y-3">
              {questoes.map(q => (
                <div key={q.id} className="bg-white p-3 rounded-sm border border-gray-100 shadow-sm relative group hover:border-[#B58863]">
                  <div className="text-[8px] font-bold text-[#B58863] uppercase mb-1">{q.materia}</div>
                  <p className="text-[10px] text-gray-700 line-clamp-2">{q.enunciado}</p>
                  <button onClick={() => onRemoveQuestao(q.id)} className="absolute top-1 right-1 text-gray-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <datalist id="lista-materias">
        {LISTA_MATERIAS.map(m => <option key={m} value={m} />)}
      </datalist>
    </div>
  );
};
