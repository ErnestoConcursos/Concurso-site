
import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { StudyApp } from './components/StudyApp';
import { AdminPanel } from './components/AdminPanel';
import { CadernoErros } from './components/CadernoErros';
import { AppView, Questao } from './types';
import { QUESTOES_EXEMPLO, TOPICOS_POR_MATERIA } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [configMaterias, setConfigMaterias] = useState<Record<string, string[]>>(TOPICOS_POR_MATERIA);
  const [cadernoIds, setCadernoIds] = useState<string[]>([]);
  const [estaCarregado, setEstaCarregado] = useState(false);

  // Carregar dados iniciais
  useEffect(() => {
    const salvas = localStorage.getItem('budega_questions');
    const configSalva = localStorage.getItem('budega_config_materias');
    const cadernoSalvo = localStorage.getItem('budega_caderno');
    
    if (salvas) {
      try { setQuestoes(JSON.parse(salvas)); } catch (e) { setQuestoes(QUESTOES_EXEMPLO); }
    } else {
      setQuestoes(QUESTOES_EXEMPLO);
    }

    if (configSalva) {
      try { setConfigMaterias(JSON.parse(configSalva)); } catch (e) { setConfigMaterias(TOPICOS_POR_MATERIA); }
    }

    if (cadernoSalvo) {
      try { setCadernoIds(JSON.parse(cadernoSalvo)); } catch (e) { setCadernoIds([]); }
    }
    
    setEstaCarregado(true);
  }, []);

  // Salvar automaticamente
  useEffect(() => {
    if (estaCarregado) {
      localStorage.setItem('budega_questions', JSON.stringify(questoes));
      localStorage.setItem('budega_config_materias', JSON.stringify(configMaterias));
      localStorage.setItem('budega_caderno', JSON.stringify(cadernoIds));
    }
  }, [questoes, configMaterias, cadernoIds, estaCarregado]);

  const adicionarQuestao = (q: Questao | Questao[]) => {
    if (Array.isArray(q)) {
      setQuestoes(prev => [...q, ...prev]);
    } else {
      setQuestoes(prev => [q, ...prev]);
    }
  };

  const removerQuestao = (id: string) => {
    if (confirm('Deseja realmente excluir esta questão permanentemente?')) {
      setQuestoes(prev => prev.filter(q => q.id !== id));
      setCadernoIds(prev => prev.filter(cid => cid !== id));
    }
  };

  const toggleCaderno = (id: string) => {
    setCadernoIds(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const atualizarEstrutura = (novaEstrutura: Record<string, string[]>) => {
    setConfigMaterias(novaEstrutura);
  };

  return (
    <main className="min-h-screen">
      {!estaCarregado ? (
        <div className="min-h-screen flex items-center justify-center bg-[#F7F7F7]">
          <div className="animate-pulse font-serif text-[#B58863]">Carregando Biblioteca Jurídica...</div>
        </div>
      ) : (
        <>
          {view === AppView.LANDING && (
            <LandingPage 
              onStart={() => setView(AppView.ESTUDO)} 
              onManage={() => setView(AppView.ADMIN)}
              onOpenCaderno={() => setView(AppView.CADERNO)}
              totalNoCaderno={cadernoIds.length}
            />
          )}
          {view === AppView.ESTUDO && (
            <StudyApp 
              questoes={questoes}
              configMaterias={configMaterias}
              cadernoIds={cadernoIds}
              onToggleCaderno={toggleCaderno}
              onBack={() => setView(AppView.LANDING)} 
            />
          )}
          {view === AppView.CADERNO && (
            <CadernoErros
              questoes={questoes}
              cadernoIds={cadernoIds}
              onToggleCaderno={toggleCaderno}
              onBack={() => setView(AppView.LANDING)}
            />
          )}
          {view === AppView.ADMIN && (
            <AdminPanel 
              questoes={questoes}
              configMaterias={configMaterias}
              onAddQuestao={adicionarQuestao}
              onRemoveQuestao={removerQuestao}
              onUpdateEstrutura={atualizarEstrutura}
              onBack={() => setView(AppView.LANDING)}
            />
          )}
        </>
      )}
    </main>
  );
};

export default App;
