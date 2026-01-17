
export enum AppView {
  LANDING = 'landing',
  ESTUDO = 'estudo',
  ADMIN = 'admin',
  CADERNO = 'caderno'
}

export interface Questao {
  id: string;
  materia: string;
  assunto: string;
  enunciado: string;
  alternativas: string[];
  indiceCorreto: number;
  explicacao: string;
}

export interface SessaoResposta {
  idQuestao: string;
  alternativaSelecionada: number;
  estaCorreta: boolean;
  timestamp: number;
}

export interface EstatisticasUsuario {
  totalQuestoes: number;
  respostasCorretas: number;
  desempenhoPorMateria: Record<string, { total: number; corretas: number }>;
}
