
import { Questao } from './types';

export const TOPICOS_POR_MATERIA: Record<string, string[]> = {
  "Direito Administrativo": [
    "1.1 Gênese, Evolução e Fontes",
    "1.2 Princípios do Direito Administrativo",
    "1.3 Organização Administrativa",
    "1.4 Terceiro Setor",
    "1.5 Ato Administrativo",
    "1.6 Poderes Administrativos",
    "1.7 Serviços Públicos (Concessão e Permissão)",
    "1.8 Licitação e Contratos (Lei 14.133/21)",
    "1.9 Agentes Públicos",
    "1.10 Responsabilidade Civil do Estado",
    "1.11 Controle da Administração",
    "1.12 Improbidade Administrativa",
    "1.13 Processo Administrativo",
    "1.14 Bens Públicos",
    "1.15 Intervenção do Estado na Propriedade"
  ],
  "Direito Constitucional": [
    "2.1 Teoria da Constituição",
    "2.2 Direitos e Garantias Fundamentais",
    "2.3 Organização do Estado",
    "2.4 Organização dos Poderes",
    "2.5 Controle de Constitucionalidade",
    "2.6 Funções Essenciais à Justiça",
    "2.7 Defesa do Estado e das Instituições",
    "2.8 Ordem Social"
  ],
  "Direito Penal": [
    "3.1 Princípios e Aplicação da Lei Penal",
    "3.2 Teoria do Crime",
    "3.3 Culpabilidade e Erro",
    "3.4 Concurso de Pessoas e de Crimes",
    "3.5 Teoria da Pena e Extinção da Punibilidade",
    "3.6 Crimes contra a Pessoa",
    "3.7 Crimes contra o Patrimônio",
    "3.8 Crimes contra a Dignidade Sexual",
    "3.9 Crimes contra a Administração Pública",
    "3.10 Legislação Penal Especial"
  ],
  "Direito Processual Penal": [
    "4.1 Princípios e Sistemas Processuais",
    "4.2 Inquérito Policial",
    "4.3 Ação Penal",
    "4.4 Jurisdição e Competência",
    "4.5 Provas",
    "4.6 Prisões e Medidas Cautelares",
    "4.7 Procedimento Comum e Especiais",
    "4.8 Nulidades e Recursos",
    "4.9 Execução Penal"
  ],
  "Direito Civil": [
    "5.1 LINDB",
    "5.2 Pessoas Naturais e Jurídicas",
    "5.3 Bens e Fatos Jurídicos",
    "5.4 Prescrição e Decadência",
    "5.5 Teoria Geral das Obrigações",
    "5.6 Teoria Geral dos Contratos",
    "5.7 Contratos em Espécie",
    "5.8 Responsabilidade Civil",
    "5.9 Direito das Coisas (Posse e Propriedade)",
    "5.10 Direito de Família",
    "5.11 Direito das Sucessões"
  ],
  "Direito Processual Civil": [
    "6.1 Normas Fundamentais",
    "6.2 Sujeitos do Processo",
    "6.3 Atos Processuais e Prazos",
    "6.4 Tutelas Provisórias",
    "6.5 Procedimento Comum",
    "6.6 Sentença e Coisa Julgada",
    "6.7 Recursos e Processos nos Tribunais",
    "6.8 Execução e Cumprimento de Sentença",
    "6.9 Procedimentos Especiais"
  ],
  "Direito do Consumidor": [
    "7.1 Princípios e Direitos Básicos",
    "7.2 Conceito de Consumidor e Fornecedor",
    "7.3 Responsabilidade pelo Fato e Vício",
    "7.4 Práticas Comerciais e Abusivas",
    "7.5 Proteção Contratual",
    "7.6 Defesa do Consumidor em Juízo"
  ],
  "Direito Tributário": [
    "8.1 Sistema Tributário Nacional",
    "8.2 Competência e Limitações ao Poder de Tributar",
    "8.3 Espécies Tributárias",
    "8.4 Obrigação e Crédito Tributário",
    "8.5 Garantias e Privilégios do Crédito",
    "8.6 Processo Tributário",
    "8.7 Tributos em Espécie"
  ],
  "Direito Eleitoral": [
    "9.1 Princípios e Justiça Eleitoral",
    "9.2 Capacidade Eleitoral e Alistamento",
    "9.3 Sistemas Eleitorais",
    "9.4 Partidos Políticos",
    "9.5 Registro de Candidatura e Inelegibilidades",
    "9.6 Propaganda Eleitoral",
    "9.7 Abuso de Poder e Crimes Eleitorais"
  ],
  "Direito Ambiental": [
    "10.1 Princípios e Competências Ambientais",
    "10.2 Política Nacional do Meio Ambiente (PNMA)",
    "10.3 Licenciamento e SISNAMA",
    "10.4 Responsabilidade Ambiental (Tríplice)",
    "10.5 Unidades de Conservação",
    "10.6 Código Florestal"
  ],
  "Direito Financeiro": [
    "11.1 Orçamento Público (PPA, LDO, LOA)",
    "11.2 Receita e Despesa Pública",
    "11.3 Crédito Público e Dívida",
    "11.4 Lei de Responsabilidade Fiscal (LRF)",
    "11.5 Fiscalização Contábil e Financeira"
  ]
};

export const QUESTOES_EXEMPLO: Questao[] = [
  {
    id: '1',
    materia: 'Direito Constitucional',
    assunto: '2.2 Direitos e Garantias Fundamentais',
    enunciado: 'Acerca da disciplina constitucional das associações, assinale a opção correta:',
    alternativas: [
      'A criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento.',
      'As associações só poderão ser compulsoriamente dissolvidas ou ter suas atividades suspensas por decisão judicial, exigindo-se, em ambos os casos, o trânsito em julgado.',
      'Ninguém poderá ser compelido a associar-se ou a permanecer associado, salvo por decisão de assembleia geral da respectiva entidade.',
      'As entidades associativas, quando expressamente autorizadas, têm legitimidade para representar seus filiados apenas na esfera administrativa.',
      'As associações não podem, em hipótese alguma, impetrar mandado de segurança coletivo para defender interesses de seus membros.'
    ],
    indiceCorreto: 0,
    explicacao: 'Art. 5º, XVIII, CF: a criação de associações e, na forma da lei, a de cooperativas independem de autorização, sendo vedada a interferência estatal em seu funcionamento.'
  }
];

export const CORES_TEMA = {
  madeira: '#B58863',
  bege: '#F0D9B5',
  claro: '#F7F7F7',
  oliva: '#556B2F'
};
