
import { Questao } from './types';

export const TOPICOS_POR_MATERIA: Record<string, string[]> = {
  "Direito Administrativo": [
    "1.1 Princípios do Direito Administrativo",
    "1.2 Organização Administrativa",
    "1.3 Ato Administrativo",
    "1.4 Poderes Administrativos",
    "1.5 Licitação e Contratos (Lei 14.133/21)",
    "1.6 Agentes Públicos",
    "1.7 Responsabilidade Civil do Estado",
    "1.8 Improbidade Administrativa"
  ],
  "Direito Constitucional": [
    "2.1 Teoria da Constituição",
    "2.2 Direitos e Garantias Fundamentais",
    "2.3 Organização do Estado",
    "2.4 Organização dos Poderes",
    "2.5 Controle de Constitucionalidade"
  ],
  "Direito Penal": [
    "1. Teoria do Crime",
    "2. Tipicidade",
    "3. Ilicitude",
    "4. Culpabilidade",
    "5. Aplicação da Pena"
  ],
  "Direito Processual Penal": [
    "1. Inquérito Policial",
    "2. Ação Penal",
    "3. Prisão e Medidas Cautelares",
    "4. Nulidades",
    "5. Recursos"
  ],
  "Direito Civil": [
    "1. LINDB",
    "2. Parte Geral",
    "3. Obrigações",
    "4. Contratos",
    "5. Direito das Coisas"
  ]
};

export const QUESTOES_EXEMPLO: Questao[] = [
  {
    id: "ex1",
    materia: "Direito Constitucional",
    assunto: "2.2 Direitos e Garantias Fundamentais",
    enunciado: "Sobre a impenhorabilidade da pequena propriedade rural, assinale a alternativa correta segundo a CF/88 e o STF:",
    alternativas: [
      "Depende de autorização do Incra para ser reconhecida.",
      "Aplica-se apenas se for o único bem imóvel do devedor.",
      "Não será objeto de penhora para pagamento de débitos decorrentes de sua atividade produtiva, desde que trabalhada pela família.",
      "A proteção é absoluta, inclusive para débitos alimentares ou tributários do próprio imóvel.",
      "A pequena propriedade rural é definida como aquela que possui até 10 módulos fiscais."
    ],
    indiceCorreto: 2,
    explicacao: "Art. 5º, XXVI, CF. A Constituição garante a impenhorabilidade quando a área é qualificada como pequena propriedade rural e trabalhada pela família para fins produtivos."
  },
  {
    id: "ex2",
    materia: "Direito Administrativo",
    assunto: "1.5 Licitação e Contratos (Lei 14.133/21)",
    enunciado: "Na Nova Lei de Licitações (14.133/2021), a modalidade de licitação para contratação de bens e serviços comuns, cujo critério de julgamento poderá ser o de menor preço ou o de maior desconto, é o:",
    alternativas: [
      "Concurso.",
      "Leilão.",
      "Pregão.",
      "Diálogo Competitivo.",
      "Concorrência."
    ],
    indiceCorreto: 2,
    explicacao: "Art. 6º, XLI da Lei 14.133/21. O pregão é a modalidade obrigatória para bens e serviços comuns."
  },
  {
    id: "ex3",
    materia: "Direito Penal",
    assunto: "1. Teoria do Crime",
    enunciado: "No que concerne ao erro de tipo e erro de proibição, assinale a opção correta:",
    alternativas: [
      "O erro de tipo essencial invencível exclui o dolo, mas permite a punição por crime culposo.",
      "O erro de tipo essencial vancível exclui o dolo e a culpa.",
      "O erro de proibição inevitável isenta o agente de pena.",
      "O erro de proibição vencível exclui a ilicitude da conduta.",
      "Ambos são institutos que analisam exclusivamente a tipicidade penal."
    ],
    indiceCorreto: 2,
    explicacao: "O erro de proibição inevitável (escusável) exclui a potencial consciência da ilicitude, que é elemento da culpabilidade, isentando o agente de pena."
  }
];
