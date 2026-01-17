
import React, { useState } from 'react';
import { Button } from './Button';

interface LoginProps {
  onLogin: () => void;
  onBack: () => void;
}

type AuthMode = 'login' | 'register' | 'verify';

export const Login: React.FC<LoginProps> = ({ onLogin, onBack }) => {
  const [mode, setMode] = useState<AuthMode>('login');
  const [email, setEmail] = useState('');
  const [nome, setNome] = useState('');
  const [senha, setSenha] = useState('');
  const [codigo, setCodigo] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (mode === 'register') {
      setMode('verify');
    } else if (mode === 'verify') {
      onLogin();
    } else {
      onLogin();
    }
  };

  const renderSocialButtons = () => (
    <div className="grid grid-cols-2 gap-3">
      <button type="button" className="flex items-center justify-center gap-2 p-3 border rounded-sm hover:bg-gray-50 transition-colors text-[10px] font-bold uppercase tracking-tighter">
        <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" className="w-4 h-4" alt="Google" />
        Google
      </button>
      <button type="button" className="flex items-center justify-center gap-2 p-3 border rounded-sm hover:bg-gray-50 transition-colors text-[10px] font-bold uppercase tracking-tighter">
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.152 6.896c-.548 0-1.711.516-1.711 1.564 0 1.031 1.147 1.492 1.711 1.492.564 0 1.726-.461 1.726-1.492 0-1.048-1.162-1.564-1.726-1.564zm10.032 5.03c0 5.414-4.288 9.805-9.684 9.805s-9.684-4.391-9.684-9.805c0-5.413 4.288-9.805 9.684-9.805s9.684 4.392 9.684 9.805z" /></svg>
        Apple
      </button>
    </div>
  );

  if (mode === 'verify') {
    return (
      <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white shadow-2xl rounded-sm border-t-8 border-[#B58863] p-10 space-y-8 animate-in zoom-in-95 duration-300">
          <div className="text-center space-y-2">
            <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-4">
               <svg className="w-6 h-6 text-[#B58863]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
            </div>
            <h2 className="text-2xl font-serif font-bold text-[#4b3621]">Verifique seu E-mail</h2>
            <p className="text-xs text-gray-400">Enviamos um código para <strong>{email}</strong></p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Código de Verificação</label>
              <input 
                type="text" 
                maxLength={6}
                className="w-full p-4 border rounded-sm bg-gray-50 focus:ring-1 focus:ring-[#B58863] outline-none text-center text-2xl tracking-[0.5em] font-mono" 
                placeholder="000000"
                value={codigo}
                onChange={e => setCodigo(e.target.value)}
                required
              />
            </div>
            <Button type="submit" className="w-full">Confirmar e Entrar</Button>
          </form>

          <div className="text-center">
            <button type="button" onClick={() => setMode('register')} className="text-[10px] text-[#B58863] uppercase font-bold hover:underline">Reenviar código</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F7F7F7] flex items-center justify-center p-6">
      <div className="max-w-md w-full bg-white shadow-2xl rounded-sm border-t-8 border-[#B58863] p-10 space-y-8 animate-in zoom-in-95 duration-300">
        <div className="text-center">
          <div className="w-12 h-12 bg-[#B58863] rounded-sm flex items-center justify-center mx-auto mb-4">
             <span className="text-white font-serif font-bold text-xl">B</span>
          </div>
          <h2 className="text-2xl font-serif font-bold text-[#4b3621]">
            {mode === 'login' ? 'Acesso à Budega' : 'Criar minha conta'}
          </h2>
          <p className="text-xs text-gray-400 uppercase tracking-widest mt-2">
            {mode === 'login' ? 'Concurseiro de Elite' : 'Junte-se aos aprovados'}
          </p>
        </div>

        <div className="space-y-4">
          {renderSocialButtons()}
          <div className="flex items-center gap-4 py-2">
            <div className="h-px bg-gray-100 flex-1"></div>
            <span className="text-[9px] text-gray-300 font-bold uppercase">Ou continue com e-mail</span>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          {mode === 'register' && (
            <div className="space-y-1 animate-in slide-in-from-top-2 duration-200">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Nome Completo</label>
              <input 
                type="text" 
                className="w-full p-3 border rounded-sm bg-gray-50 focus:ring-1 focus:ring-[#B58863] outline-none text-sm" 
                placeholder="Seu nome"
                value={nome}
                onChange={e => setNome(e.target.value)}
                required
              />
            </div>
          )}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-400 uppercase">E-mail</label>
            <input 
              type="email" 
              className="w-full p-3 border rounded-sm bg-gray-50 focus:ring-1 focus:ring-[#B58863] outline-none text-sm" 
              placeholder="exemplo@email.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="space-y-1">
            <div className="flex justify-between items-center">
              <label className="text-[10px] font-bold text-gray-400 uppercase">Senha</label>
              {mode === 'login' && <button type="button" className="text-[9px] text-[#B58863] uppercase font-bold hover:underline">Esqueci</button>}
            </div>
            <input 
              type="password" 
              className="w-full p-3 border rounded-sm bg-gray-50 focus:ring-1 focus:ring-[#B58863] outline-none text-sm" 
              placeholder="••••••••"
              value={senha}
              onChange={e => setSenha(e.target.value)}
              required
            />
          </div>
          
          <Button type="submit" className="w-full shadow-lg">
            {mode === 'login' ? 'Entrar Agora' : 'Criar Cadastro'}
          </Button>
        </form>

        <div className="pt-6 border-t border-gray-100 flex flex-col items-center gap-4">
          <button 
            onClick={() => setMode(mode === 'login' ? 'register' : 'login')} 
            className="text-[10px] font-bold text-[#B58863] uppercase tracking-widest hover:underline"
          >
            {mode === 'login' ? 'Não tem conta? Cadastre-se' : 'Já tem conta? Faça Login'}
          </button>
          <button onClick={onBack} className="text-[9px] font-bold text-gray-300 uppercase tracking-widest hover:text-gray-500 transition-colors">← Voltar ao Início</button>
        </div>
      </div>
    </div>
  );
};
