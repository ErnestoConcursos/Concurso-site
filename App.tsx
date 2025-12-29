
import React, { useState, useEffect } from 'react';
import { LandingPage } from './components/LandingPage';
import { StudyApp } from './components/StudyApp';
import { AdminPanel } from './components/AdminPanel';
import { AppView, Questao } from './types';
import { QUESTOES_EXEMPLO } from './constants';

const App: React.FC = () => {
  const [view, setView] = useState<AppView>(AppView.LANDING);
  const [questoes, setQuestoes] = useState<Questao[]>([]);
  const [estaCarregado, setEstaCarregado] = useState(false);

  useEffect(() => {
    const salvas = localStorage.getItem('budega_questions');
    if (salvas) {
      try {
        const parseadas = JSON.parse(salvas);
        // Migração de chaves legadas se necessário ou apenas carregamento
        setQuestoes(parseadas);
      } catch (e) {
        setQuestoes(QUESTOES_EXEMPLO);
      }
    } else {
      setQuestoes(QUESTOES_EXEMPLO);
    }
    setEstaCarregado(true);
  }, []);

  useEffect(() => {
    if (estaCarregado) {
      localStorage.setItem('budega_questions', JSON.stringify(questoes));
    }
  }, [questoes, estaCarregado]);

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
    }
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
            />
          )}
          {view === AppView.ESTUDO && (
            <StudyApp 
              questoes={questoes}
              onBack={() => setView(AppView.LANDING)} 
            />
          )}
          {view === AppView.ADMIN && (
            <AdminPanel 
              questoes={questoes}
              onAddQuestao={adicionarQuestao}
              onRemoveQuestao={removerQuestao}
              onBack={() => setView(AppView.LANDING)}
            />
          )}
        </>
      )}
    </main>
  );
};

export default App;
