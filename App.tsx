
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

  // Sincronização com LocalStorage
  useEffect(() => {
    const salvas = localStorage.getItem('budega_questions');
    const configSalva = localStorage.getItem('budega_config_materias');
    const cadernoSalvo = localStorage.getItem('budega_caderno');
    
    if (salvas) {
      try { 
        const parsed = JSON.parse(salvas);
        setQuestoes(parsed.length > 0 ? parsed : QUESTOES_EXEMPLO); 
      } catch (e) { setQuestoes(QUESTOES_EXEMPLO); }
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

  useEffect(() => {
    if (estaCarregado) {
      localStorage.setItem('budega_questions', JSON.stringify(questoes));
      localStorage.setItem('budega_config_materias', JSON.stringify(configMaterias));
      localStorage.setItem('budega_caderno', JSON.stringify(cadernoIds));
    }
  }, [questoes, configMaterias, cadernoIds, estaCarregado]);

  // Handlers de Admin
  const adicionarQuestao = (q: Questao | Questao[]) => {
    if (Array.isArray(q)) {
      setQuestoes(prev => [...q, ...prev]);
    } else {
      setQuestoes(prev => [q, ...prev]);
    }
  };

  const removerQuestao = (id: string) => {
    setQuestoes(prev => prev.filter(q => q.id !== id));
    setCadernoIds(prev => prev.filter(cid => cid !== id));
  };

  const atualizarEstrutura = (novaEstrutura: Record<string, string[]>) => {
    setConfigMaterias(novaEstrutura);
  };

  const toggleCaderno = (id: string) => {
    setCadernoIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <main className="min-h-screen font-sans">
      {!estaCarregado ? (
        <div className="min-h-screen flex items-center justify-center bg-white">
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 border-4 border-[#B58863] border-t-transparent rounded-full animate-spin"></div>
            <span className="font-serif italic text-[#B58863]">Preparando seu Edital...</span>
          </div>
        </div>
      ) : (
        <>
          {view === AppView.LANDING && (
            <LandingPage 
              onStart={() => setView(AppView.ESTUDO)} 
              onOpenCaderno={() => setView(AppView.CADERNO)}
              onAdmin={() => setView(AppView.ADMIN)}
              totalCaderno={cadernoIds.length}
            />
          )}
          
          {view === AppView.ESTUDO && (
            <StudyApp 
              questoes={questoes}
              configMaterias={configMaterias}
              cadernoIds={cadernoIds}
              onToggleCaderno={toggleCaderno}
              onBack={() => setView(AppView.LANDING)}
              onOpenCaderno={() => setView(AppView.CADERNO)}
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

          {view === AppView.CADERNO && (
            <CadernoErros
              questoes={questoes}
              cadernoIds={cadernoIds}
              onToggleCaderno={toggleCaderno}
              onBack={() => setView(AppView.ESTUDO)}
            />
          )}
        </>
      )}
    </main>
  );
};

export default App;
