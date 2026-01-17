
import React, { useState } from 'react';
import { Button } from './Button';

interface AdminStructureProps {
  configMaterias: Record<string, string[]>;
  onUpdateEstrutura: (nova: Record<string, string[]>) => void;
}

export const AdminStructure: React.FC<AdminStructureProps> = ({ 
  configMaterias, 
  onUpdateEstrutura 
}) => {
  const [novaMateriaNome, setNovaMateriaNome] = useState('');
  const [novoAssuntoInputs, setNovoAssuntoInputs] = useState<Record<string, string>>({});

  const LISTA_MATERIAS = Object.keys(configMaterias);

  const handleAddMateria = () => {
    const nome = novaMateriaNome.trim();
    if (!nome) return;
    if (configMaterias[nome]) {
      alert('Esta disciplina já consta no sistema.');
      return;
    }
    onUpdateEstrutura({ ...configMaterias, [nome]: [] });
    setNovaMateriaNome('');
  };

  const handleAddAssunto = (materia: string) => {
    const nome = novoAssuntoInputs[materia]?.trim();
    if (!nome) return;
    const nova = { ...configMaterias };
    nova[materia] = [...(nova[materia] || []), nome];
    onUpdateEstrutura(nova);
    setNovoAssuntoInputs({ ...novoAssuntoInputs, [materia]: '' });
  };

  const handleExcluirMateria = (materia: string) => {
    if (confirm(`Atenção: Excluir "${materia}" removerá apenas a categoria dos filtros. As questões já cadastradas não serão excluídas do banco, mas ficarão sem categoria vinculada.`)) {
      const nova = { ...configMaterias };
      delete nova[materia];
      onUpdateEstrutura(nova);
    }
  };

  const handleExcluirAssunto = (materia: string, assunto: string) => {
    const nova = { ...configMaterias };
    nova[materia] = nova[materia].filter(a => a !== assunto);
    onUpdateEstrutura(nova);
  };

  return (
    <div className="space-y-12 animate-in fade-in duration-500">
      {/* Nova Disciplina */}
      <section className="bg-white p-8 rounded-sm border shadow-sm border-t-4 border-[#B58863]">
        <div className="max-w-2xl">
          <h2 className="text-xl font-serif font-bold text-[#4b3621] mb-2">Expansão do Edital</h2>
          <p className="text-xs text-gray-400 mb-6 uppercase tracking-wider">Adicione novas disciplinas ao seu banco de dados</p>
          <div className="flex flex-col md:flex-row gap-3">
            <input 
              className="flex-1 p-4 border rounded-sm bg-gray-50 focus:bg-white focus:ring-1 focus:ring-[#B58863] outline-none transition-all"
              placeholder="Ex: Direito Processual Civil"
              value={novaMateriaNome}
              onChange={e => setNovaMateriaNome(e.target.value)}
              onKeyPress={e => e.key === 'Enter' && handleAddMateria()}
            />
            <Button onClick={handleAddMateria} className="px-10">Criar Disciplina</Button>
          </div>
        </div>
      </section>

      {/* Grid de Estrutura */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {LISTA_MATERIAS.sort().map(materia => (
          <div key={materia} className="bg-white border rounded-sm shadow-sm flex flex-col group transition-all hover:shadow-md border-b-2 hover:border-b-[#B58863]">
            {/* Header da Disciplina */}
            <div className="bg-[#4b3621] p-4 flex justify-between items-center">
              <h3 className="text-white font-serif font-bold text-sm truncate pr-4">{materia}</h3>
              <button 
                onClick={() => handleExcluirMateria(materia)}
                className="text-white/20 hover:text-red-400 transition-colors"
                title="Remover Disciplina"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" /></svg>
              </button>
            </div>

            {/* Listagem de Tópicos (Assuntos) */}
            <div className="p-5 flex-1 flex flex-col gap-4">
              <div className="flex-1 space-y-1.5 max-h-52 overflow-y-auto pr-1 custom-scrollbar">
                {configMaterias[materia].length === 0 ? (
                  <div className="text-[10px] text-gray-300 italic py-4 border-2 border-dashed border-gray-50 rounded-sm text-center">
                    Nenhum tópico cadastrado.
                  </div>
                ) : (
                  configMaterias[materia].map(assunto => (
                    <div key={assunto} className="flex justify-between items-center p-2.5 bg-gray-50/50 border border-gray-100 rounded-sm group/item hover:bg-white hover:border-[#B58863]/30 transition-all">
                      <span className="text-[11px] text-gray-600 font-medium truncate pr-4">{assunto}</span>
                      <button 
                        onClick={() => handleExcluirAssunto(materia, assunto)}
                        className="text-gray-200 hover:text-red-500 opacity-0 group-item-hover:opacity-100 transition-all"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                      </button>
                    </div>
                  ))
                )}
              </div>

              {/* Input Adicionar Tópico */}
              <div className="flex gap-1 pt-3 border-t border-gray-50">
                <input 
                  className="flex-1 p-2.5 border rounded-sm text-[11px] bg-gray-50 outline-none focus:bg-white focus:border-[#B58863] transition-colors" 
                  placeholder="Novo tópico/assunto..."
                  value={novoAssuntoInputs[materia] || ''}
                  onChange={e => setNovoAssuntoInputs({...novoAssuntoInputs, [materia]: e.target.value})}
                  onKeyPress={e => e.key === 'Enter' && handleAddAssunto(materia)}
                />
                <button 
                  onClick={() => handleAddAssunto(materia)}
                  className="bg-[#B58863] text-white p-2.5 rounded-sm hover:bg-[#a07654] transition-colors shadow-sm"
                  title="Adicionar Tópico"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
