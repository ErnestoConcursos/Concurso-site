
import React from 'react';
import { Button } from './Button';
import { AppView } from '../types';

interface LandingPageProps {
  onStart: () => void;
  onManage: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onStart, onManage }) => {
  return (
    <div className="flex flex-col min-h-screen bg-[#F7F7F7]">
      {/* Cabeçalho */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-100 py-4 px-6 md:px-12 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#B58863] rounded-sm flex items-center justify-center">
             <span className="text-white font-serif font-bold text-xs">B</span>
          </div>
          <span className="font-serif text-xl font-bold tracking-tight text-[#4b3621]">BUDEGA DOS CONCURSOS</span>
        </div>
        <div className="flex gap-4">
          <button onClick={onManage} className="text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-[#B58863] transition-colors">Administração</button>
          <Button variant="primary" size="sm" onClick={onStart}>Iniciar Estudo</Button>
        </div>
      </nav>

      {/* Seção Hero - Estilo Manifesto */}
      <section className="px-6 md:px-12 py-20 md:py-32 flex flex-col items-center text-center max-w-5xl mx-auto">
        <div className="space-y-4 mb-12">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold text-[#B58863] uppercase tracking-[0.4em]">O Método</span>
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 leading-tight">
              <span className="text-[#B58863]/30 mr-2 md:mr-4">01.</span>Estude exatamente onde você erra
            </h1>
          </div>
          <div className="flex flex-col items-center gap-2">
            <h2 className="text-2xl md:text-4xl font-serif font-medium text-gray-600 italic">
              <span className="text-[#B58863]/30 mr-2 md:mr-4 italic-none font-bold">02.</span>Transforme cada erro em direção
            </h2>
          </div>
        </div>

        <p className="text-lg text-gray-500 mb-10 max-w-2xl leading-relaxed">
          O diagnóstico definitivo para Magistratura e Ministério Público. 
          Pare de andar em círculos e comece a atacar os pontos cegos do seu edital.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg" onClick={onStart} className="shadow-xl shadow-[#B58863]/20">Testar Ferramenta Gratuitamente</Button>
          <Button variant="outline" size="lg" onClick={() => window.scrollTo({top: 800, behavior: 'smooth'})}>Entenda o Conceito</Button>
        </div>

        <div className="mt-20 w-full aspect-[21/9] rounded-sm overflow-hidden shadow-2xl border-8 border-white bg-gray-200">
           <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=1973&auto=format&fit=crop" alt="Ambiente de estudo jurídico" className="w-full h-full object-cover opacity-90" />
        </div>
      </section>

      {/* Seção Problema vs Solução */}
      <section id="conceito" className="bg-white py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif font-bold mb-4 text-[#4b3621]">O problema não é o volume de questões.</h2>
            <div className="h-1 w-20 bg-[#B58863] mx-auto"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-16 items-start">
             <div className="space-y-6">
               <h3 className="text-xl font-bold text-red-900/60 uppercase tracking-widest text-sm">O Sintoma</h3>
               <p className="text-gray-600 leading-relaxed">
                 Você estuda 10 horas, resolve 100 questões, mas sente que sua média está estagnada. O erro é visto como uma derrota, quando na verdade ele é o <strong>mapa da sua aprovação</strong>.
               </p>
               <div className="space-y-3">
                 {["“Por que erro sempre o mesmo tema?”", "“Meu edital é um labirinto infinito.”"].map((q, i) => (
                   <div key={i} className="pl-4 border-l-2 border-gray-100 italic text-gray-400 text-sm">{q}</div>
                 ))}
               </div>
             </div>
             <div className="space-y-6">
               <h3 className="text-xl font-bold text-[#B58863] uppercase tracking-widest text-sm">A Budega</h3>
               <p className="text-gray-600 leading-relaxed">
                 Nós transformamos o erro em dado. Nossa IA analisa a natureza das suas falhas e sugere o próximo passo cirúrgico. Menos tempo perdido, mais base consolidada.
               </p>
               <Button variant="outline" size="sm" onClick={onStart}>Ver Matérias Disponíveis</Button>
             </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-100 py-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-left">
            <div className="font-serif text-lg font-bold text-[#4b3621] mb-2">BUDEGA DOS CONCURSOS</div>
            <p className="text-xs text-gray-400 uppercase tracking-widest">Alta Performance para Carreiras Jurídicas</p>
          </div>
          <div className="flex gap-8 text-[10px] font-bold text-gray-400 uppercase tracking-widest">
            <span>Privacidade</span>
            <span>Termos</span>
            <span>Suporte</span>
          </div>
        </div>
        <div className="mt-12 text-center text-[10px] text-gray-300 uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Budega &bull; Todos os direitos reservados
        </div>
      </footer>
    </div>
  );
};
