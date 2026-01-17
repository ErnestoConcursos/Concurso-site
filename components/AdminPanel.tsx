
import React, { useState, useRef } from 'react';
import { Button } from './Button';
import { Questao } from '../types';
import { processarQuestoesLote } from '../geminiService';

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
  const [abaAtiva, setAbaAtiva] = useState<'manual' | 'lote' | 'estrutura'>('manual');
  const [estaProcessando, setEstaProcessando] = useState(false);
  const [textoLote, setTextoLote] = useState('');
  const [materiaLote, setMateriaLote] = useState('');
  const [assuntoLote, setAssuntoLote] = useState('');
  const [previaQuestoes, setPreviaQuestoes] = useState<Questao[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Estados para Gestão de Estrutura
  const [novaMateriaNome, setNovaMateriaNome] = useState('');
  const [novoAssuntoNome, setNovoAssuntoNome] = useState<Record<string, string>>({});

  const [novaQ, setNovaQ] = useState<Partial<Questao>>({
    materia: '',
    assunto: '',
    enunciado: '',
    alternativas: ['', '', '', '', ''],
    indiceCorreto: 0,
    explicacao: ''
  });

  const LISTA_MATERIAS = Object.keys(configMaterias);

  const adicionarNovaMateria = () => {
    if (!novaMateriaNome.trim()) return;
    if (configMaterias[novaMateriaNome.trim()]) {
      alert('Esta matéria já existe.');
      return;
    }
    onUpdateEstrutura({ ...configMaterias, [novaMateriaNome.trim()]: [] });
    setNovaMateriaNome('');
  };

  const excluirMateria = (materia: string) => {
    if (confirm(`Tem certeza que deseja excluir "${materia}"? As questões existentes nesta matéria não serão apagadas, mas ela não aparecerá mais nos filtros.`)) {
      const nova = { ...configMaterias };
      delete nova[materia];
      onUpdateEstrutura(nova);
    }
  };

  const adicionarAssunto = (materia: string) => {
    const nome = novoAssuntoNome[materia];
    if (!nome?.trim()) return;
    const nova = { ...configMaterias };
    nova[materia] = [...(nova[materia] || []), nome.trim()];
    onUpdateEstrutura(nova);
    setNovoAssuntoNome({ ...novoAssuntoNome, [materia]: '' });
  };

  const excluirAssunto = (materia: string, assunto: string) => {
    const nova = { ...configMaterias };
    nova[materia] = nova[materia].filter(a => a !== assunto);
    onUpdateEstrutura(nova);
  };

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
    const backup = {
      questoes: questoes,
      config: configMaterias
    };
    const dataStr = JSON.stringify(backup, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', `full_backup_budega_${new Date().toLocaleDateString()}.json`);
    linkElement.click();
  };

  const importarDados = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const json = JSON.parse(e.target?.result as string);
        // Suporte para backup novo (objeto com questoes e config) ou antigo (apenas array de questoes)
        if (Array.isArray(json)) {
          if (confirm(`Importar ${json.length} questões?`)) onAddQuestao(json);
        } else if (json.questoes && Array.isArray(json.questoes)) {
          if (confirm(`Importar backup completo (${json.questoes.length} questões)?`)) {
            onAddQuestao(json.questoes);
            if (json.config) onUpdateEstrutura(json.config);
          }
        }
      } catch (err) { alert('❌ Erro ao ler arquivo.'); }
    };
    reader.readAsText(file);
  };

  const processarLote = async () => {
    if (!textoLote.trim()) return;
    setEstaProcessando(true);
    try {
      const promptPersonalizado = `MATÉRIAS DISPONÍVEIS: ${LISTA_MATERIAS.join(', ')}\n${textoLote}`;
      const processadas = await processarQuestoesLote(promptPersonalizado);
      setPreviaQuestoes(processadas);
    } catch (e) { alert('❌ Erro na análise por IA.'); }
    finally { setEstaProcessando(false); }
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] p-6 md:p-12">
      <div className="max-w-6xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10 gap-4">
          <div>
            <h1 className="text-3xl font-serif font-bold text-[#4b3621]">Administração</h1>
            <p className="text-sm text-[#B58863] font-bold uppercase tracking-[0.2em]">Acervo e Estrutura</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <input type="file" accept=".json" onChange={importarDados} className="hidden" ref={fileInputRef} />
            <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>Importar</Button>
            <Button variant="outline" size="sm" onClick={exportarDados}>Backup Completo</Button>
            <Button variant="outline" size="sm" onClick={onBack}>Sair</Button>
          </div>
        </header>

        <div className="flex gap-4 mb-8 border-b border-gray-200">
          <button onClick={() => setAbaAtiva('manual')} className={`pb-4 px-6 font-bold uppercase text-xs tracking-widest transition-all ${abaAtiva === 'manual' ? 'border-b-2 border-[#B58863] text-[#B58863]' : 'text-gray-400'}`}>Questões</button>
          <button onClick={() => setAbaAtiva('lote')} className={`pb-4 px-6 font-bold uppercase text-xs tracking-widest transition-all ${abaAtiva === 'lote' ? 'border-b-2 border-[#B58863] text-[#B58863]' : 'text-gray-400'}`}>Importar IA</button>
          <button onClick={() => setAbaAtiva('estrutura')} className={`pb-4 px-6 font-bold uppercase text-xs tracking-widest transition-all ${abaAtiva === 'estrutura' ? 'border-b-2 border-[#B58863] text-[#B58863]' : 'text-gray-400'}`}>Matérias/Tópicos</button>
        </div>

        {abaAtiva === 'estrutura' ? (
          <div className="space-y-8 animate-in fade-in duration-500">
            <section className="bg-white p-6 border rounded-sm shadow-sm flex gap-4 items-end">
              <div className="flex-1 space-y-1">
                <label className="text-[10px] font-bold text-gray-400 uppercase">Nova Matéria (ex: Direito Eleitoral)</label>
                <input 
                  className="p-3 border rounded-sm w-full bg-gray-50" 
                  value={novaMateriaNome} 
                  onChange={e => setNovaMateriaNome(e.target.value)}
                  placeholder="Nome da disciplina..."
                />
              </div>
              <Button onClick={adicionarNovaMateria}>Adicionar Disciplina</Button>
            </section>

            <div className="grid md:grid-cols-2 gap-6">
              {LISTA_MATERIAS.map(materia => (
                <div key={materia} className="bg-white border rounded-sm shadow-sm overflow-hidden flex flex-col">
                  <div className="bg-[#4b3621] p-4 flex justify-between items-center">
                    <h3 className="text-white font-serif font-bold">{materia}</h3>
                    <button onClick={() => excluirMateria(materia)} className="text-white/50 hover:text-red-400 text-xs uppercase font-bold tracking-tighter">Remover</button>
                  </div>
                  <div className="p-4 flex-1 space-y-4">
                    <div className="space-y-2">
                      {configMaterias[materia].map(assunto => (
                        <div key={assunto} className="flex justify-between items-center text-sm p-2 bg-gray-50 rounded-sm border border-gray-100 group">
                          <span className="text-gray-600">{assunto}</span>
                          <button onClick={() => excluirAssunto(materia, assunto)} className="text-gray-300 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                        </div>
                      ))}
                    </div>
                    <div className="flex gap-2">
                      <input 
                        className="p-2 border rounded-sm flex-1 text-xs bg-gray-50" 
                        placeholder="Novo assunto..." 
                        value={novoAssuntoNome[materia] || ''}
                        onChange={e => setNovoAssuntoNome({...novoAssuntoNome, [materia]: e.target.value})}
                      />
                      <button onClick={() => adicionarAssunto(materia)} className="bg-[#B58863] text-white p-2 rounded-sm text-xs font-bold hover:bg-[#a07654] transition-colors">Add</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ) : abaAtiva === 'manual' ? (
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Matéria Principal *</label>
                    <select className="p-3 border rounded-sm w-full bg-gray-50" value={novaQ.materia} onChange={e => setNovaQ({...novaQ, materia: e.target.value, assunto: ''})}>
                      <option value="">Selecione...</option>
                      {LISTA_MATERIAS.map(m => <option key={m} value={m}>{m}</option>)}
                    </select>
                  </div>
                  <div className="space-y-1">
                    <label className="text-[10px] font-bold text-gray-400 uppercase">Assunto Específico *</label>
                    <select className="p-3 border rounded-sm w-full bg-gray-50" value={novaQ.assunto} onChange={e => setNovaQ({...novaQ, assunto: e.target.value})}>
                      <option value="">Selecione...</option>
                      {(configMaterias[novaQ.materia || ''] || []).map(a => <option key={a} value={a}>{a}</option>)}
                      <option value="Outros">Outros</option>
                    </select>
                  </div>
                </div>
                
                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Enunciado *</label>
                  <textarea className="p-3 border rounded-sm w-full h-32 bg-gray-50" value={novaQ.enunciado} onChange={e => setNovaQ({...novaQ, enunciado: e.target.value})} />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-bold text-gray-400 uppercase block">Alternativas (A-E)</label>
                  {novaQ.alternativas?.map((alt, i) => (
                    <div key={i} className="flex gap-3 items-center">
                      <input type="radio" checked={novaQ.indiceCorreto === i} onChange={() => setNovaQ({...novaQ, indiceCorreto: i})} className="accent-[#B58863]" />
                      <input placeholder={`Alternativa ${String.fromCharCode(65+i)}`} className="p-2 border rounded-sm flex-1 text-sm bg-gray-50" value={alt} onChange={e => {
                        const alts = [...(novaQ.alternativas || [])];
                        alts[i] = e.target.value;
                        setNovaQ({...novaQ, alternativas: alts});
                      }} />
                    </div>
                  ))}
                </div>

                <div className="space-y-1">
                  <label className="text-[10px] font-bold text-gray-400 uppercase">Fundamentação</label>
                  <textarea className="p-3 border rounded-sm w-full h-24 text-sm bg-gray-50" value={novaQ.explicacao} onChange={e => setNovaQ({...novaQ, explicacao: e.target.value})} />
                </div>

                <Button onClick={enviarManual} className="w-full" disabled={!manualValido}>Salvar Questão</Button>
              </section>
            </div>
            <div className="lg:col-span-1">
               <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">Banco Atual ({questoes.length})</h2>
               <div className="max-h-[800px] overflow-y-auto space-y-3">
                {questoes.map(q => (
                  <div key={q.id} className="bg-white p-3 rounded-sm border border-gray-100 shadow-sm relative group hover:border-[#B58863]">
                    <div className="text-[8px] font-bold text-[#B58863] uppercase mb-1">{q.materia}</div>
                    <p className="text-[10px] text-gray-700 line-clamp-2">{q.enunciado}</p>
                    <button onClick={() => onRemoveQuestao(q.id)} className="absolute top-1 right-1 text-gray-200 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">×</button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <section className="bg-white p-8 rounded-sm shadow-sm border border-gray-100 space-y-6">
            <textarea placeholder="Cole o texto bruto das questões..." className="p-4 border rounded-sm w-full h-80 font-mono text-xs bg-gray-900 text-green-500 outline-none" value={textoLote} onChange={e => setTextoLote(e.target.value)} />
            <Button onClick={processarLote} disabled={estaProcessando || !textoLote.trim()}>{estaProcessando ? 'Analisando...' : 'Processar com Gemini'}</Button>
            {previaQuestoes.length > 0 && (
              <Button onClick={() => { onAddQuestao(previaQuestoes); setPreviaQuestoes([]); setTextoLote(''); alert('Sucesso!'); }} className="w-full mt-4">Confirmar {previaQuestoes.length} questões</Button>
            )}
          </section>
        )}
      </div>
    </div>
  );
};
