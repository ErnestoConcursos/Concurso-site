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
    "1. Conceito de Direito Penal",
    "2. Funções do Direito Penal",
    "3. Bem jurídico-penal",
    "4. Princípios penais",
    "5. Direito Penal na sociedade do risco",
    "6. Lei penal",
    "7. Teoria do crime",
    "8. Conduta",
    "9. Tipicidade",
    "10. Ilicitude",
    "11. Culpabilidade",
    "12. Erro de tipo",
    "13. Erro de proibição",
    "14. Concurso de pessoas",
    "15. Penas privativas de liberdade",
    "16. Aplicação da pena",
    "17. Penas restritivas de direito",
    "18. Pena de multa",
    "19. Concurso de crimes",
    "20. Suspensão condicional da pena",
    "21. Livramento condicional",
    "22. Medidas de segurança",
    "23. Extinção da punibilidade"
  ],
  "Direito Processual Penal": [
    "1. Sistema processuais penais. Princípios processuais",
"2. Lei processual penal",
"3. Sujeitos do processo",
"4. Comunicação dos atos processuais",
"5. Inquérito policial",
"6. Ação penal",
"7. Ação civil",
"8. Questões e processos incidentes",
"9. Prova penal",
"10. Jurisdição e competência",
"11. Procedimentos comum (ordinário e sumário)",
"12. Juizados especiais criminais (lei 9.099/1995)",
"13. Procedimento de apuração dos crimes falimentares",
"14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)",
"15. Tribunal do júri",
"16. Suspensão condicional do processo (art. 89 da lei 9.099/1995)",
"17. Medidas cautelares diversas da prisão",
"18. Prisão",
"19. Audiência de custódia",
"20. Nulidades",
"21. Sentença penal",
"22. Recursos criminais",
"23. Habeas corpus, revisão criminal, mandado de segurança, correição parcial e reclamação",
"24. Relações jurisdicionais com autoridades estrangeiras"
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
  },
  // Questões de Desapropriação (1.15 Intervenção do Estado na Propriedade)
  {
    id: '2',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Um Município, após aprovação de seu Plano Diretor, notificou o proprietário de um grande terreno urbano central e não edificado para que promovesse seu adequado aproveitamento, sob pena de aplicação das medidas previstas no Estatuto da Cidade. O proprietário manteve-se inerte, ignorando sucessivas notificações. Após a aplicação do IPTU progressivo no tempo pelo prazo máximo legal, o Município decidiu pela desapropriação do imóvel. Considerando o caso narrado e a disciplina jurídica da desapropriação urbanística, assinale a alternativa correta.',
    alternativas: [
      'A indenização devida será prévia, justa e em dinheiro, a ser paga por meio de precatório, conforme a regra geral para as desapropriações ordinárias.',
      'A competência para promover essa modalidade de desapropriação é comum a todos os entes federados, desde que o imóvel urbano não cumpra sua função social.',
      'A indenização será realizada mediante títulos da dívida pública, resgatáveis em até dez anos, em prestações anuais, iguais e sucessivas, vedada a compensação de lucros cessantes.',
      'Trata-se de desapropriação ordinária por interesse social, regida pela Lei nº 4.132/1962, sendo devida indenização em dinheiro, com atualização monetária e juros compensatórios.',
      'O Município poderia ter optado diretamente pela desapropriação, independentemente da aplicação prévia e sucessiva das medidas de parcelamento ou edificação compulsórios e do IPTU progressivo.'
    ],
    indiceCorreto: 2,
    explicacao: 'A desapropriação urbanística (art. 182, §4º, III, CF e Estatuto da Cidade) é sancionatória e subsidiária. A indenização é em títulos da dívida pública (não em dinheiro), resgatáveis em até 10 anos, não computando lucros cessantes (art. 8º, §2º, do Estatuto da Cidade).'
  },
  {
    id: '3',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Acerca das características e da disciplina legal da desapropriação, assinale a alternativa INCORRETA.',
    alternativas: [
      'A desapropriação constitui forma originária de aquisição da propriedade pelo Poder Público, extinguindo-se ônus reais anteriores, que se sub-rogam no preço indenizatório.',
      'É possível a desapropriação de bens públicos, sendo exigida, na forma do Decreto-Lei nº 3.365/1941, autorização legislativa e observância do critério hierárquico de que a União pode desapropriar bens estaduais e municipais.',
      'A expropriação confiscatória prevista no art. 243 da Constituição Federal, por envolver sanção ao proprietário pela utilização do imóvel para cultivo de psicotrópicos, admite indenização posterior em títulos da dívida agrária, resgatáveis em longo prazo.',
      'O direito de extensão, que permite ao proprietário exigir a desapropriação total quando a parte remanescente perder utilidade econômica, pode ser invocado como mecanismo para evitar a desapropriação indireta parcial.',
      'O art. 1.228, §4º, do Código Civil disciplina a expropriação social privada, instituto de direito privado distinto da desapropriação, no qual a indenização é devida pelos possuidores ao proprietário reivindicante.'
    ],
    indiceCorreto: 2,
    explicacao: 'A expropriação confiscatória do art. 243 da CF não admite qualquer indenização ao proprietário. É uma sanção que resulta na perda da propriedade sem contraprestação, destinando-se o imóvel à reforma agrária ou habitação popular.'
  },
  {
    id: '4',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Com relação à ação de desapropriação e seus aspectos processuais, analise as assertivas abaixo:\nI. A imissão provisória na posse, que antecipa a satisfação do interesse público, depende de declaração de urgência pelo expropriante e de depósito prévio calculado com base em critérios legais, sendo constitucional, ainda que o valor depositado não corresponda integralmente ao valor de mercado do bem.\nII. Nos termos do art. 20 do Decreto-Lei nº 3.365/1941, a contestação na ação de desapropriação pode versar livremente sobre a existência do interesse público, vícios do decreto expropriatório e o valor da indenização, cabendo ao juiz analisar todas as questões no mesmo processo.\nIII. Os juros compensatórios, que indenizam a perda prematura da posse, têm como termo inicial a data da imissão provisória e incidem, por força de entendimento do STF, sobre a diferença entre o valor fixado na sentença e 80% do preço oferecido, quando houver levantamento parcial do depósito.\nIV. A prescrição da ação de desapropriação indireta, considerada ação de natureza real, segue o prazo necessário para a consumação do usucapião extraordinário pelo Poder Público, normalmente de 10 anos, em razão da presunção de realização de obras ou serviços públicos.',
    alternativas: [
      'I e II.',
      'I, III e IV.',
      'II e III.',
      'I e IV.',
      'II, III e IV.'
    ],
    indiceCorreto: 1,
    explicacao: 'I. Correta. STF (Súmula 652) considera constitucional o depósito com base nos critérios do art. 15, §1º, do DL 3.365/41. II. Incorreta. A contestação é limitada a vícios processuais e impugnação do preço (art. 20). III. Correta. STF interpretou o art. 15-A conforme a CF nesse sentido. IV. Correta. É o entendimento do STJ (prazo do usucapião extraordinário com presunção de obras).'
  },
  {
    id: '5',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Um Estado-membro, visando à criação de um parque estadual, publicou decreto declarando de utilidade pública uma vasta área de terra. O imóvel, contudo, era objeto de arrendamento para cultivo de soja, com contrato de longa duração ainda vigente. O Estado, alegando urgência, promoveu a imissão provisória na posse e iniciou as obras de infraestrutura do parque. O arrendatário, que havia realizado significativas benfeitorias úteis na propriedade com anuência do proprietário, busca seus direitos. Nesse contexto, assinale a alternativa correta.',
    alternativas: [
      'O arrendatário não tem legitimidade para discutir qualquer indenização na ação de desapropriação, pois é mero detentor, cabendo-lhe apenas ação de perdas e danos contra o proprietário.',
      'As benfeitorias úteis realizadas pelo arrendatário serão indenizáveis diretamente a ele pelo Poder Público, independentemente de terem sido realizadas antes ou após a declaração de utilidade pública.',
      'Os direitos do arrendatário, embora derivados de contrato, constituem ônus reais que se sub-rogam no preço da desapropriação, devendo ele pleitear seus créditos perante o montante indenizatório depositado pelo expropriante.',
      'O arrendatário poderá continuar no imóvel até o final do prazo contratual, uma vez que a desapropriação não atinge direitos pessoais de terceiros, apenas transfere a propriedade.',
      'A benfeitoria útil somente será indenizada se realizada antes da declaração de utilidade pública e se o arrendatário comprovar que não tinha ciência do processo expropriatório.'
    ],
    indiceCorreto: 2,
    explicacao: 'O art. 31 do DL 3.365/41 estabelece que quaisquer ônus ou direitos reais sobre o bem se sub-rogam no preço. O arrendamento, embora originário de contrato, gera direito real (lajeação) que é atingido pela desapropriação. O arrendatário deve pleitear seu crédito sobre o valor depositado.'
  },
  {
    id: '6',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'A desapropriação rural para fins de reforma agrária, nos termos do art. 184 da Constituição Federal, apresenta características específicas. Sobre essa modalidade, assinale a alternativa INCORRETA.',
    alternativas: [
      'Tem caráter sancionatório, pressupondo o descumprimento da função social da propriedade rural, e a competência para sua decretação é exclusiva da União.',
      'A indenização é realizada mediante títulos da dívida agrária, resgatáveis em até vinte anos, a partir do segundo ano de emissão, com cláusula de preservação do valor real.',
      'As benfeitorias úteis e necessárias serão indenizadas em dinheiro, seguindo, contudo, a regra do precatório prevista no art. 100 da Constituição.',
      'A pequena e média propriedade rural, assim definida em lei, é absolutamente imune a esse tipo de desapropriação, mesmo que não seja produtiva e seu proprietário possua outros imóveis rurais.',
      'Operações de transferência dos imóveis desapropriados para assentados são isentas de impostos federais, estaduais e municipais.'
    ],
    indiceCorreto: 3,
    explicacao: 'A imunidade da pequena e média propriedade rural (art. 185, I, CF) pressupõe que seu proprietário não possua outra. Se possuir outros imóveis rurais, a imunidade não se aplica. Além disso, a propriedade produtiva também é imune (art. 185, II).'
  },
  {
    id: '7',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Sobre o objeto da desapropriação e suas limitações, analise as seguintes afirmativas:\nI. Bens inalienáveis podem ser desapropriados, pois o interesse público justificador prevalece sobre a característica da inalienabilidade.\nII. É vedada a desapropriação de ações de empresas que dependam de autorização federal para funcionar, salvo com prévia autorização por decreto do Presidente da República.\nIII. A desapropriação de bens integrantes do patrimônio de uma empresa pública federal por um Município é sempre viável, pois tais bens têm natureza privada, equiparando-se a bens de particulares.\nIV. A desapropriação por zona, que abrange áreas valorizadas por obras públicas, é instrumento legítimo e preferencial para capturar mais-valias fundiárias, não havendo outra medida menos gravosa para o mesmo fim.',
    alternativas: [
      'I e II.',
      'II e III.',
      'I, II e III.',
      'III e IV.',
      'I e IV.'
    ],
    indiceCorreto: 0,
    explicacao: 'I. Correta: O interesse público da desapropriação supera a inalienabilidade. II. Correta: Art. 2º, §3º, do DL 3.365/41. III. Incorreta: Há discussão doutrinária e jurisprudencial; não é "sempre viável", muitos exigem autorização do chefe do Executivo. IV. Incorreta: A contribuição de melhoria é medida menos gravosa para capturar mais-valias (princípio da necessidade).'
  },
  {
    id: '8',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'O Município Beta desapropriou, por utilidade pública, um imóvel para a construção de uma creche municipal. Após o trânsito em julgado da sentença e o pagamento da indenização via precatório, a obra não foi iniciada. Decorridos oito anos, o terreno permaneceu abandonado e, posteriormente, a prefeitura publicou edital para sua alienação. O antigo proprietário, ciente do fato, pretende reaver o bem. Nesse caso, de acordo com a teoria da retrocessão e a jurisprudência predominante, assinale a alternativa correta.',
    alternativas: [
      'Caberá ação de reintegração de posse, pois a desapropriação tornou-se nula pela ausência de destinação pública do bem no prazo razoável.',
      'O proprietário tem direito à retrocessão, consistente na devolução do bem, pois se caracterizou tredestinação ilícita com a tentativa de alienação para fim privado.',
      'O direito do proprietário restringe-se a ação de perdas e danos contra o Município, pois os bens expropriados, uma vez incorporados ao patrimônio público, não podem ser reivindicados.',
      'A alienação do bem desapropriado configura mera desdestinação, ato discricionário do administrador que não gera qualquer direito ao expropriado, uma vez que o bem já foi indenizado.',
      'A alegação de tredestinação só é cabível se a destinação final diversa da prevista, mas ainda pública (tredestinação lícita), não se aplicando à hipótese de alienação.'
    ],
    indiceCorreto: 1,
    explicacao: 'A tredestinação ilícita (uso do bem para fim privado, como alienação) gera direito à retrocessão. A jurisprudência do STJ entende que a tentativa de venda do bem desapropriado evidencia o desvio de finalidade, autorizando a devolução do imóvel ao antigo proprietário, com restituição do preço.'
  },
  {
    id: '9',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'No contexto da desapropriação por interesse social para fins de reforma agrária, assinale a alternativa correta.',
    alternativas: [
      'É modalidade sancionatória de competência exclusiva da União, aplicável apenas a imóveis rurais que não cumprem sua função social.',
      'Pode ser promovida por qualquer ente federado, com base no art. 5º, XXIV, da CF e na Lei nº 4.132/1962, desde que o imóvel rural se destine à reforma agrária.',
      'Difere da desapropriação rural do art. 184 da CF por não ser sancionatória, exigindo indenização prévia, justa e em dinheiro, e por não ter competência exclusiva da União.',
      'A Lei Complementar nº 76/1993 estabelece o procedimento sumário aplicável exclusivamente a essa modalidade, vedando a imissão provisória na posse.',
      'O pagamento da indenização, mesmo quando a ação é proposta por Estado-membro, deve observar o regime de precatório, por tratar-se de obrigação da Fazenda Pública.'
    ],
    indiceCorreto: 2,
    explicacao: 'A desapropriação por interesse social para reforma agrária (Lei 4.132/62) é ordinária, exige indenização prévia, justa e em dinheiro e pode ser promovida por qualquer ente. Já a do art. 184 é sancionatória, com indenização em títulos e competência exclusiva da União.'
  },
  {
    id: '10',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'A União desapropriou, por utilidade pública, um imóvel para a construção de uma estrada federal. Na ação judicial, foi deferida a imissão provisória na posse. O proprietário levantou 80% do valor depositado. A sentença transitada em julgado fixou a indenização em valor superior ao oferecido. Sobre os juros devidos nessa situação, assinale a alternativa INCORRETA.',
    alternativas: [
      'Os juros compensatórios incidem da data da imissão provisória na posse até a expedição do precatório, para compensar a perda antecipada da posse.',
      'A base de cálculo dos juros compensatórios, conforme interpretação do STF, é a diferença entre o valor fixado na sentença e 80% do valor oferecido em juízo.',
      'Os juros moratórios, que indenizam o atraso no pagamento, incidem a partir do trânsito em julgado da sentença, sobre o valor total da indenização fixada.',
      'O percentual dos juros compensatórios, após decisão do STF, é fixo em 6% ao ano, sendo inconstitucional a redução para patamar inferior por arbitramento judicial.',
      'A incidência de juros moratórios sobre os juros compensatórios não configura anatocismo vedado, pois referem-se a períodos e naturezas distintas.'
    ],
    indiceCorreto: 2,
    explicacao: 'Para pessoas de direito público, os juros moratórios não incidem a partir do trânsito em julgado, mas a partir de 1º de janeiro do exercício seguinte ao que o pagamento via precatório deveria ter sido feito (art. 15-B do DL 3.365/41 e art. 100, §5º, CF).'
  },
  {
    id: '11',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Sobre as fases e competências no procedimento desapropriatório, analise as assertivas:\nI. A fase declaratória inicia-se com decreto do Chefe do Executivo, mas pode ter iniciativa do Poder Legislativo, por meio de decreto legislativo, cabendo ao Executivo a efetivação.\nII. Concessionários de serviços públicos podem promover a desapropriação, desde que autorizados por lei ou contrato, possuindo competência executória, mas não declaratória.\nIII. A Agência Nacional de Energia Elétrica (ANEEL) possui competência declaratória para desapropriações necessárias a seus projetos, formalizando-a por portaria.\nIV. O prazo de caducidade do decreto expropriatório é de dois anos para a desapropriação por utilidade pública e de cinco anos para a desapropriação por interesse social.',
    alternativas: [
      'I e III.',
      'II e III.',
      'II e IV.',
      'I, II e III.',
      'I, II e IV.'
    ],
    indiceCorreto: 1,
    explicacao: 'I. Incorreta: A iniciativa do Legislativo deve ser por lei, não por decreto legislativo (art. 8º, DL 3.365/41). II. Correta (art. 3º, DL 3.365/41). III. Correta (Lei 9.074/95, art. 10). IV. Incorreta: Inverte os prazos - 5 anos para utilidade pública (art. 10, DL 3.365/41) e 2 anos para interesse social (art. 3º, Lei 4.132/62).'
  },
  {
    id: '12',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Um proprietário rural teve parte de seu imóvel desapropriada pela União para a ampliação de uma reserva ambiental. A área remanescente, embora ainda extensa, ficou isolada e sem acesso a fontes de água, tornando-se economicamente inviável para a agricultura que praticava. O proprietário busca uma solução jurídica. Nesse caso, com base no direito de extensão e na recente jurisprudência do STJ, assinale a alternativa correta.',
    alternativas: [
      'O direito de extensão só é aplicável à desapropriação rural para reforma agrária, com base na LC 76/1993, não cabendo na desapropriação por utilidade pública.',
      'Como a área remanescente não é inferior à dimensão da pequena propriedade rural, não cabe o direito de extensão, mas o proprietário tem direito a indenização complementar pela desvalorização da área remanescente.',
      'O proprietário pode requerer, na contestação, a desapropriação de todo o imóvel, pois a parte remanescente perdeu sua utilidade econômica, caracterizando desapropriação indireta parcial.',
      'A única solução é a propositura de ação autônoma de perdas e danos após o fim do processo de desapropriação, pois a discussão sobre o prejuízo do remanescente não pode ser analisada na ação principal.',
      'O direito de extensão é de natureza personalíssima e deve ser exercitado necessariamente na via administrativa, antes da propositura da ação judicial, sob pena de preclusão.'
    ],
    indiceCorreto: 1,
    explicacao: 'STJ (REsp 1.937.626-RO, 2024) entende que o direito de extensão do art. 4º da LC 76/93 tem aplicação subsidiária, mas exige que a área remanescente seja inferior à pequena propriedade rural. Não sendo o caso, cabe indenização complementar pela desvalorização com base no art. 27 do DL 3.365/41.'
  },
  {
    id: '13',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'No que se refere à expropriação confiscatória prevista no art. 243 da Constituição Federal, é correto afirmar:',
    alternativas: [
      'A competência para sua promoção é concorrente entre União, Estados e Municípios, desde que o imóvel esteja localizado em suas respectivas jurisdições.',
      'Exige-se a expedição de decreto expropriatório e o pagamento de indenização em títulos da dívida pública, sob pena de nulidade do procedimento.',
      'Abrange apenas a área efetivamente utilizada para o cultivo ilegal ou trabalho escravo, devendo o restante do imóvel permanecer com o proprietário.',
      'Pressupõe a culpa do proprietário, podendo ser afastada se este comprovar que não incorreu em culpa pela utilização ilícita de sua propriedade.',
      'Os bens apreendidos em decorrência do tráfico de entorpecentes revertem a um fundo especial, mas os imóveis onde ocorreu o cultivo não estão sujeitos à expropriação sem indenização.'
    ],
    indiceCorreto: 3,
    explicacao: 'O STF admite a exclusão da expropriação confiscatória se o proprietário comprovar ausência de culpa (in vigilando ou in eligendo). A competência é exclusiva da União, não exige decreto, abrange todo o imóvel (não apenas a área usada) e não há indenização.'
  },
  {
    id: '14',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Durante o processo de desapropriação por utilidade pública, o Poder Público, após a imissão provisória na posse, resolve desistir da ação. O proprietário opõe-se, argumentando que o imóvel sofreu alterações substanciais devido a obras iniciadas e que não deseja recebê-lo de volta nas condições atuais. Com base na disciplina jurídica aplicável, assinale a alternativa correta.',
    alternativas: [
      'A desistência depende de anuência do réu, nos termos do art. 485, §4º, do CPC, pois a contestação já foi apresentada.',
      'O Poder Público pode desistir da ação a qualquer tempo antes do pagamento integral da indenização, independentemente da anuência do réu, devendo, porém, indenizá-lo pelos danos causados.',
      'A desistência é vedada após a imissão provisória na posse, pois gera direito adquirido do expropriante à propriedade do bem.',
      'A desistência acarreta a extinção do processo sem resolução do mérito, cabendo ao proprietário ação autônoma para discutir eventuais prejuízos, mas sem direito à condenação do Poder Público em honorários advocatícios.',
      'A única consequência da desistência é a devolução do bem nas condições em que se encontra, não havendo dever de indenizar por eventuais danos ou melhorias.'
    ],
    indiceCorreto: 1,
    explicacao: 'O STF entende que a desistência na ação de desapropriação não depende de anuência do réu, podendo ser feita até o pagamento da indenização. Contudo, o Poder Público deve indenizar o proprietário pelos prejuízos decorrentes da imissão provisória e das alterações no bem.'
  },
  {
    id: '15',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Sobre a intervenção do Ministério Público e a defesa do réu na ação de desapropriação, assinale a alternativa INCORRETA.',
    alternativas: [
      'A intervenção do Ministério Público é obrigatória na ação de desapropriação rural para reforma agrária, mas não o é na desapropriação ordinária por utilidade pública.',
      'O art. 20 do Decreto-Lei nº 3.365/1941 limita a contestação à discussão de vícios processuais e ao preço, remetendo outras questões (como a existência do interesse público) para ação direta autônoma.',
      'É admitida a reconvenção na ação de desapropriação para que o proprietário pleiteie indenização por danos morais decorrentes do procedimento expropriatório.',
      'A alegação de vício formal no decreto expropriatório, como a ausência de motivação suficiente, pode ser arguida na contestação, por tratar-se de vício que pode invalidar o processo.',
      'O entendimento majoritário na doutrina e na jurisprudência considera constitucionais as limitações à defesa previstas na lei de desapropriação, por se tratar de devido processo legal especial.'
    ],
    indiceCorreto: 2,
    explicacao: 'A reconvenção não é admitida no processo de desapropriação, pois o art. 20 do DL 3.365/41 remete outras questões para "ação direta" autônoma. A reconvenção seria uma nova ação dentro do mesmo processo, o que violaria essa regra especial.'
  },
  {
    id: '16',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'A Lei nº 14.620/2023 introduziu alterações no Decreto-Lei nº 3.365/1941. Sobre essas modificações, analise as afirmativas:\nI. Foi dispensada a autorização legislativa para desapropriação de bens públicos de outros entes quando houver acordo entre eles, fixando as responsabilidades financeiras pelas indenizações.\nII. Foi estabelecido que, em desapropriações de núcleos urbanos informais ocupados por população de baixa renda, o expropriante deve prever medidas compensatórias, como realocação ou indenização de benfeitorias.\nIII. Foi autorizado o ingresso nas áreas declaradas de utilidade pública para inspeções e levantamentos de campo, independentemente de autorização judicial, prevendo responsabilidade por danos causados.\nIV. Foi alterado o percentual dos juros compensatórios, que passou a ser fixado discricionariamente pelo juiz entre 1% e 6% ao ano, a depender das circunstâncias do caso.',
    alternativas: [
      'I e II.',
      'I, II e III.',
      'II e IV.',
      'I, III e IV.',
      'II, III e IV.'
    ],
    indiceCorreto: 1,
    explicacao: 'I, II e III estão corretas conforme a Lei 14.620/2023 (arts. 2º, §2º-A; 4º-A; e 7º do DL 3.365/41). IV está incorreta: a lei não alterou o percentual dos juros compensatórios, que continua disciplinado pelo art. 15-A (6% ao ano, conforme interpretação do STF).'
  },
  {
    id: '17',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Um particular ajuizou ação de desapropriação indireta contra um Estado-membro, alegando apossamento administrativo de seu imóvel para construção de um hospital estadual há doze anos. O Estado alega a prescrição da pretensão indenizatória. Considerando a jurisprudência do STJ sobre o tema, assinale a alternativa correta.',
    alternativas: [
      'A ação prescreve em cinco anos, contados do apossamento, por tratar-se de pretensão indenizatória de natureza pessoal.',
      'A prescrição ocorre em dez anos, pois há presunção de que o Poder Público realizou obras ou serviços de caráter produtivo no local, encurtando o prazo do usucapião extraordinário.',
      'O prazo prescricional é de vinte anos, conforme a Súmula 119 do STJ, que permanece aplicável mesmo após o Código Civil de 2002.',
      'A ação é imprescritível, pois versa sobre direito de propriedade, que é protegido contra atos ilegais do Poder Público.',
      'O prazo prescricional de quinze anos só se aplica se o autor comprovar, concretamente, que não houve qualquer obra ou serviço público no local pelo Poder Público.'
    ],
    indiceCorreto: 1,
    explicacao: 'O STJ aplica o prazo do usucapião extraordinário (art. 1.238, CC). Há presunção de que o Poder Público realizou obras ou serviços produtivos, o que reduz o prazo para 10 anos (parágrafo único do art. 1.238). Só será 15 anos se o autor comprovar a inexistência de tais obras.'
  },
  {
    id: '18',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'No processo de desapropriação judicial, sobre os honorários advocatícios, é correto afirmar:',
    alternativas: [
      'São devidos sempre que houver condenação da Fazenda Pública, fixados obrigatoriamente entre 10% e 20% do valor da condenação, nos termos do CPC.',
      'A lei da desapropriação prevê que serão devidos apenas se o valor fixado na sentença for superior ao oferecido, incidindo sobre a diferença e com percentual entre 0,5% e 5%.',
      'O teto de R$ 151.000,00 para os honorários, estabelecido por Medida Provisória, foi considerado constitucional pelo STF, para evitar enriquecimento ilícito dos advogados.',
      'Em caso de desistência da ação pelo expropriante, os honorários advocatícios não são devidos, pois não houve julgamento de mérito contra a Fazenda Pública.',
      'A sucumbência recíproca é regra na desapropriação, dividindo-se os honorários proporcionalmente ao êxito das partes na discussão sobre o valor do imóvel.'
    ],
    indiceCorreto: 1,
    explicacao: 'Art. 27, §1º, do DL 3.365/41. Os honorários só são devidos se o valor fixado for superior ao oferecido, incidindo sobre a diferença com percentual de 0,5% a 5%. O teto de R$ 151.000 foi considerado inconstitucional pelo STF.'
  },
  {
    id: '19',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Sobre a desapropriação de bens da Administração Indireta, assinale a alternativa correta.',
    alternativas: [
      'Bens de autarquias federais, por serem públicos, são inexpropriáveis por Estados e Municípios, em observância ao princípio hierárquico do art. 2º, §2º, do DL 3.365/1941.',
      'Bens de empresas públicas federais, por terem natureza privada, podem ser livremente desapropriados por Estados e Municípios, sem necessidade de qualquer autorização.',
      'A desapropriação de ações de sociedades de economia mista depende de prévia autorização por decreto do Presidente da República, conforme previsão legal específica.',
      'A desapropriação de bens de fundações públicas de direito privado por entes federados inferiores sempre exige a concordância do chefe do Executivo da entidade a que estão vinculadas.',
      'A jurisprudência do STF admite a desapropriação de bens de estatais por entes federados menores apenas quando os bens estiverem desvinculados do objeto social da empresa.'
    ],
    indiceCorreto: 2,
    explicacao: 'Art. 2º, §3º, do DL 3.365/41 estabelece a necessidade de prévia autorização do Presidente da República para desapropriação de ações, cotas e direitos representativos do capital de instituições que dependam de autorização federal, o que inclui sociedades de economia mista.'
  },
  {
    id: '20',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Um Município desapropriou um imóvel para a construção de um mercado público. Após o pagamento da indenização e o registro da transferência, o Município revogou o projeto e inseriu o imóvel em um programa de alienação de bens patrimoniais para equilibrar suas contas. O ex-proprietário ajuizou ação pleiteando a retrocessão. O Município alega que a alienação de bem próprio é ato discricionário de gestão patrimonial. Com base na doutrina e na jurisprudência sobre tredestinação, assinale a alternativa correta.',
    alternativas: [
      'Configura-se tredestinação lícita, pois o Município está dando uma destinação pública ao bem (geração de receita para os cofres públicos), não cabendo retrocessão.',
      'Configura-se tredestinação ilícita, pois o bem desapropriado para fim público específico está sendo destinado a satisfazer interesses privados via alienação, gerando direito à retrocessão.',
      'Não há tredestinação, mas sim adestinação, que não gera direito à retrocessão, apenas eventual ação por omissão administrativa, que não beneficia o ex-proprietário.',
      'O direito à retrocessão prescreve em cinco anos, contados da consolidação da desapropriação (pagamento), tendo o ex-proprietário perdido sua chance.',
      'A ação cabível é de improbidade administrativa contra o gestor que decidiu pela alienação, e não ação de retrocessão, que só cabe em caso de nulidade do processo expropriatório.'
    ],
    indiceCorreto: 1,
    explicacao: 'A alienação do bem desapropriado para fim privado configura tredestinação ilícita, pois o bem não está mais atendendo ao interesse público para o qual foi retirado do particular. A jurisprudência (STJ) entende que isso gera direito à retrocessão.'
  },
  {
    id: '21',
    materia: 'Direito Administrativo',
    assunto: '1.15 Intervenção do Estado na Propriedade',
    enunciado: 'Com relação ao momento da transferência da propriedade na desapropriação, analise as assertivas:\nI. Para a corrente majoritária, a transferência opera-se com o pagamento da indenização, pois a Constituição condiciona a supressão da propriedade à prévia indenização.\nII. A inscrição da sentença no Registro de Imóveis é o marco definitivo da aquisição pela Fazenda Pública, independentemente do pagamento, pois a sentença constitui título hábil.\nIII. Na desapropriação amigável, a propriedade transfere-se com a transcrição do acordo no RGI, o que normalmente ocorre após o pagamento.\nIV. Na hipótese de imissão provisória com concordância do expropriado (art. 34-A do DL 3.365/41), a propriedade transfere-se desde logo, ainda que se discuta posteriormente o valor da indenização.',
    alternativas: [
      'I e III.',
      'I, III e IV.',
      'II e IV.',
      'I e II.',
      'II, III e IV.'
    ],
    indiceCorreto: 1,
    explicacao: 'I. Correta (majoritária). II. Incorreta (a corrente minoritária). III. Correta. IV. Correta (art. 34-A estabelece que a concordância na imissão implica aquisição da propriedade, embora o preço possa ser questionado).'
  },
    {
    id: '22',
    materia: 'Direito Constitucional',
    assunto: '2.4 Organização dos Poderes',
    enunciado: 'A Constituição Federal estabelece garantias institucionais e funcionais para os membros do Poder Judiciário, visando assegurar sua independência. Sobre essas garantias, analise as assertivas a seguir:\n\nI. Os juízes togados, após três anos de exercício, adquirem a vitaliciedade, podendo perder o cargo apenas por sentença judicial transitada em julgado.\nII. A inamovibilidade dos magistrados não é absoluta, admitindo-se remoção, disponibilidade e aposentadoria por interesse público, mediante deliberação do respectivo tribunal.\nIII. A irredutibilidade de subsídios é garantia assegurada apenas aos membros do Poder Judiciário em sentido estrito, não se estendendo aos servidores da Justiça Militar.\nIV. Os Ministros do Supremo Tribunal Federal, além das garantias de vitaliciedade e inamovibilidade, têm assegurada a irredutibilidade de subsídio, mas não gozam de foro por prerrogativa de função.',
    alternativas: [
      'A) I e II.',
      'B) II e III.',
      'C) II e IV.',
      'D) I, II e III.',
      'E) III e IV.'
    ],
    indiceCorreto: 0,
    explicacao: 'I. Correta (art. 95, I, CF). II. Correta (art. 95, II, CF). III. Incorreta (a irredutibilidade se estende a todos os membros do Judiciário, incluída a Justiça Militar). IV. Incorreta (Ministros do STF têm foro por prerrogativa de função perante o Senado Federal).'
  },
  {
    id: '23',
    materia: 'Direito Constitucional',
    assunto: '2.4 Organização dos Poderes',
    enunciado: 'Durante sessão do Tribunal de Justiça de determinado Estado, um Desembargador proferiu voto contundente contra projeto de lei recentemente aprovado pela Assembleia Legislativa, criticando abertamente os parlamentares e qualificando a norma como "inconstitucional e autoritária". Os parlamentares ofendidos ingressaram com representação perante o Conselho Nacional de Justiça, alegando abuso de autoridade e exercício ilegal da liberdade de expressão pelo magistrado, que deveria manter estrita neutralidade política. À luz das garantias e deveres funcionais dos magistrados, assinale a alternativa correta.',
    alternativas: [
      'A) O magistrado cometeu infração disciplinar grave, pois sua manifestação política viola o dever de imparcialidade e pode configurar ato de improbidade administrativa por desvio de finalidade.',
      'B) A liberdade de expressão do magistrado é plena, não se admitindo qualquer censura ou responsabilização por suas opiniões, mesmo quando proferidas no exercício da função jurisdicional.',
      'C) O magistrado goza de liberdade de expressão, mas está sujeito aos limites éticos e disciplinares inerentes à função, podendo ser responsabilizado se suas declarações ultrapassarem a crítica técnica e configurarem ataque pessoal ou desmoralização de outros Poderes.',
      'D) A representação deve ser rejeitada de plano, pois compete exclusivamente ao respectivo Tribunal de Justiça disciplinar a conduta de seus membros, sendo vedada a atuação do CNJ nesses casos.',
      'E) A crítica pública a ato do Poder Legislativo por membro do Judiciário configura violação ao princípio da separação dos Poderes, sendo cabível a remoção compulsória do magistrado por interesse público.'
    ],
    indiceCorreto: 2,
    explicacao: 'Os magistrados têm liberdade de expressão, mas esta não é ilimitada. Deve ser exercida com moderação e respeito às instituições. A jurisprudência do CNJ e do STF entende que críticas que ultrapassem o debate técnico-jurídico e configurem ataque pessoal ou desmoralização de outros Poderes podem sujeitar o magistrado a processo disciplinar.'
  },
  {
    id: '24',
    materia: 'Direito Constitucional',
    assunto: '2.4 Organização dos Poderes',
    enunciado: 'Sobre a competência e a composição do Superior Tribunal de Justiça, assinale a alternativa INCORRETA.',
    alternativas: [
      'A) Compete ao STJ processar e julgar, originariamente, os mandados de segurança e os habeas data contra ato de Ministro de Estado, dos Comandantes da Marinha, do Exército e da Aeronáutica.',
      'B) O STJ é composto por, no mínimo, 33 Ministros, sendo um terço dentre juízes dos Tribunais Regionais Federais, um terço dentre desembargadores dos Tribunais de Justiça e um terço, em partes iguais, dentre advogados e membros do Ministério Público.',
      'C) O recurso especial, instrumento de uniformização da interpretação da lei federal, é julgado pelo STJ quando a decisão recorrida contrariar tratado ou lei federal, ou negar-lhes vigência.',
      'D) Compete ao STJ a homologação de sentenças estrangeiras e a concessão de exequatur às cartas rogatórias, excetuadas as matérias de competência originária do Supremo Tribunal Federal.',
      'E) Os Ministros do STJ são nomeados pelo Presidente da República, depois de aprovada a escolha pela maioria absoluta do Senado Federal, sendo vitalícios após dois anos de exercício.'
    ],
    indiceCorreto: 4,
    explicacao: 'Os Ministros do STJ são vitalícios após nomeação e posse, não havendo prazo de exercício para aquisição da vitaliciedade. O art. 94 da CF estabelece que os Ministros dos tribunais superiores adquirem a vitaliciedade após nomeação, diferentemente dos juízes de primeiro grau (art. 95, I).'
  },
  {
    id: '25',
    materia: 'Direito Constitucional',
    assunto: '2.4 Organização dos Poderes',
    enunciado: 'A Emenda Constitucional n° 45/2004 instituiu significativas alterações na estrutura do Poder Judiciário. Sobre essas modificações, é correto afirmar:',
    alternativas: [
      'A) Criou o Conselho Nacional de Justiça como órgão de cúpula administrativa e correicional do Judiciário, com competência para expedir atos regulamentares com força de lei sobre organização judiciária.',
      'B) Estabeleceu a competência originária do Supremo Tribunal Federal para o julgamento de ações diretas de inconstitucionalidade interpostas por partido político com representação no Congresso Nacional.',
      'C) Introduziu a súmula vinculante, que confere eficácia erga omnes e efeito vinculante às decisões do STF sobre matéria constitucional, após reiteradas decisões e aprovação por dois terços de seus membros.',
      'D) Ampliou a competência do Superior Tribunal de Justiça para incluir o julgamento, em recurso ordinário, dos habeas corpus decididos em única instância pelos Tribunais Regionais Federais.',
      'E) Determinou a criação dos Juizados Especiais da Fazenda Pública em todas as unidades da Federação, com competência para causas de menor complexidade contra a União, Estados e Municípios.'
    ],
    indiceCorreto: 2,
    explicacao: 'A EC 45/2004 acrescentou o art. 103-A à CF, disciplinando a súmula vinculante. As demais alternativas estão incorretas: A) O CNJ não tem competência legislativa; B) Essa competência já existia; D) O recurso de habeas corpus ao STJ é extraordinário; E) A EC 45 não criou Juizados da Fazenda Pública.'
  },
  {
    id: '26',
    materia: 'Direito Constitucional',
    assunto: '2.4 Organização dos Poderes',
    enunciado: 'Um advogado ajuizou mandado de segurança contra ato de juiz de direito de primeira instância que, ao conceder tutela de urgência em ação de desapropriação, determinou a imissão provisória na posse do imóvel sem a realização do depósito prévio previsto em lei. O advogado argumenta violação do devido processo legal. Sobre a competência para processar e julgar esse mandado de segurança, assinale a alternativa correta.',
    alternativas: [
      'A) Compete originariamente ao Supremo Tribunal Federal, por envolver ato de magistrado no exercício da função jurisdicional.',
      'B) Compete originariamente ao Superior Tribunal de Justiça, pois o ato coator foi praticado por juiz de primeira instância.',
      'C) Compete ao Tribunal de Justiça do Estado, em razão da hierarquia funcional sobre o juízo de primeira instância.',
      'D) Compete ao próprio juízo de primeira instância, por tratar-se de correição parcial para revisão de ato processual.',
      'E) Compete originariamente ao Tribunal Regional Federal da região, por se tratar de matéria que envolve interpretação de lei federal.'
    ],
    indiceCorreto: 2,
    explicacao: 'Conforme o art. 105, I, "a", da CF, compete ao STJ processar e julgar, originariamente, o mandado de segurança contra ato de Ministro de Estado. Para atos de juízes de primeira instância, a competência é do Tribunal de Justiça, por força do princípio do juízo natural (art. 102, I, "d", c/c art. 105, I, CF e jurisprudência do STF).'
  },
  {
    id: '27',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'O Ministério Público ofereceu denúncia contra "A" pela prática de furto qualificado, cuja pena máxima cominada é de 8 anos. Após o recebimento da inicial acusatória, o magistrado, ao analisar os elementos constantes dos autos, concluiu que a conduta narrada se amolda perfeitamente ao tipo do furto simples, cuja pena máxima é de 4 anos. Considerando que entre a data da suposta consumação do delito e o recebimento da denúncia já haviam transcorrido mais de 8 anos, o defensor arguiu a ocorrência da prescrição da pretensão punitiva. Diante do exposto, assinale a alternativa que indica o correto entendimento jurisprudencial acerca do prazo prescricional aplicável ao caso.',
    alternativas: [
      'A) O prazo prescricional deve ser calculado com base na pena máxima cominada para o crime de furto qualificado (8 anos), pois foi este o delito descrito na denúncia, não tendo ocorrido prescrição.',
      'B) O prazo prescricional deve ser calculado com base na pena máxima do crime que efetivamente corresponde à conduta narrada na denúncia, qual seja, o furto simples (4 anos), tendo ocorrido a prescrição da pretensão punitiva.',
      'C) Deve ser aplicada a prescrição retroativa, regulando-se o prazo pela pena aplicada na sentença, uma vez que houve alteração substancial na definição jurídica do fato.',
      'D) O prazo prescricional fica suspenso até que seja solucionada a questão prejudicial relativa à correta tipificação da conduta, nos termos do art. 116, I, do CP.',
      'E) A prescrição deve ser calculada com base na pena do furto simples, mas o prazo será aumentado de um terço, pois a alteração do enquadramento por emendatio libelli constitui causa interruptiva.'
    ],
    indiceCorreto: 1,
    explicacao: 'A jurisprudência pacífica do STF e STJ estabelece que o prazo prescricional deve ser calculado conforme a classificação que se deva dar aos fatos imputados na denúncia, e não segundo a capitulação eventualmente incorreta nela contida (HC 77.928/STF).'
  },

  {
    id: '28',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Analise as assertivas abaixo acerca das causas extintivas da punibilidade e assinale a alternativa que indica aquelas que estão corretas. I. A morte do agente extingue a punibilidade, inclusive em relação à pena de multa, em observância ao princípio da pessoalidade das penas. No entanto, os efeitos civis da sentença condenatória subsistem, podendo a reparação do dano ser executada contra os herdeiros, até o limite do patrimônio transferido. II. A decadência, por consistir na perda do direito de ação do ofendido, aplica-se apenas aos crimes de ação penal privada e pública condicionada à representação, iniciando-se o prazo decadencial do dia em que o ofendido veio a saber quem é o autor do crime. III. O perdão judicial, quando concedido, importa em sentença absolutória imprópria, não gerando reincidência e extinguindo a punibilidade do agente. IV. A anistia possui efeitos ex tunc, extinguindo tanto os efeitos penais principais quanto os secundários da sentença condenatória, mas não alcança a obrigação de reparar o dano, que permanece executável.',
    alternativas: [
      'A) Apenas as assertivas I e II estão corretas.',
      'B) Apenas as assertivas I e IV estão corretas.',
      'C) Apenas as assertivas II e III estão corretas.',
      'D) Apenas as assertivas I, II e IV estão corretas.',
      'E) Apenas as assertivas II, III e IV estão corretas.'
    ],
    indiceCorreto: 3,
    explicacao: 'I - Correta (art. 5º, XLV, CF e art. 91, CP). II - Correta (art. 103, CP). III - Incorreta: conforme Súmula 18 do STJ, o perdão judicial tem natureza de sentença declaratória de extinção da punibilidade, não sendo absolutória. IV - Correta: a anistia extingue os efeitos penais, mas não os civis (reparação do dano).'
  },

  {
    id: '29',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"B" foi condenado definitivamente pela prática de tráfico de drogas, na modalidade privilegiada do art. 33, § 4º, da Lei 11.343/2006, a uma pena de 5 anos de reclusão. Após o trânsito em julgado, "B" requereu ao Presidente da República a comutação de sua pena. Diante do caso concreto, assinale a alternativa que apresenta a análise correta sobre a possibilidade de concessão do benefício.',
    alternativas: [
      'A) É vedada a concessão de qualquer benefício de graça ou indulto, pois o crime de tráfico de drogas, em qualquer modalidade, é considerado hediondo e, portanto, insuscetível de clemência.',
      'B) É possível a concessão de comutação da pena, uma vez que o tráfico privilegiado, conforme entendimento do STF, não possui natureza hedionda, não estando alcançado pela vedação constitucional e legal.',
      'C) A competência para a concessão de graça ou indulto, após o trânsito em julgado, é exclusiva do Congresso Nacional, sendo inviável o pleito dirigido ao Presidente da República.',
      'D) A comutação de pena é uma espécie de anistia imprópria, que somente pode ser concedida por lei, tornando inviável o pleito administrativo.',
      'E) Embora o tráfico privilegiado não seja hediondo, a vedação ao indulto e à graça para crimes de tráfico é absoluta, conforme disposto no art. 44 da Lei de Drogas, impedindo o benefício.'
    ],
    indiceCorreto: 1,
    explicacao: 'Conforme julgamento do HC 118.533/STF, o tráfico privilegiado não possui natureza hedionda. Assim, não se aplicam as vedações da Lei 8.072/90 (hediondos) nem do art. 44 da Lei de Drogas, que se refere ao tráfico em sua forma simples.'
  },

  {
    id: '30',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Em relação às causas interruptivas e suspensivas da prescrição da pretensão punitiva, assinale a alternativa INCORRETA.',
    alternativas: [
      'A) O recebimento de aditamento à denúncia que inclui novo corréu interrompe a prescrição em relação a este, mas a interrupção não se comunica aos demais já denunciados, por tratar-se de ato personalíssimo.',
      'B) A pronúncia, ainda que posteriormente o Tribunal do Júri venha a desclassificar o crime, constitui causa interruptiva da prescrição, conforme entendimento sumulado pelo STJ.',
      'C) O curso da prescrição fica suspenso durante a pendência de questão prejudicial de natureza civil, cujo reconhecimento da existência do crime dela dependa.',
      'D) Nos termos da Súmula 415 do STJ, nos casos de citação por edital com não comparecimento do acusado (art. 366 do CPP), o período de suspensão do prazo prescricional é regulado pelo máximo da pena cominada.',
      'E) A publicação de acórdão condenatório recorrível, em processo de competência originária de Tribunal, interrompe o curso da prescrição.'
    ],
    indiceCorreto: 0,
    explicacao: 'A) INCORRETA. Segundo o art. 117, § 1º, do CP, a interrupção da prescrição produz efeitos relativamente a todos os autores do crime, comunicando-se inclusive em caso de inclusão de novo corréu por aditamento.'
  },

  {
    id: '31',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"C", com 68 anos de idade, foi denunciado pela prática de um crime cuja pena máxima é de 6 anos. O recebimento da denúncia ocorreu em 10/01/2015. A sentença condenatória, aplicando pena de 4 anos, foi publicada em 15/03/2020. O Ministério Público não recorreu. Considerando que a defesa interpôs recurso de apelação, o qual ainda não foi julgado, e com base na sistemática da prescrição da pretensão punitiva, assinale a alternativa correta. (Desconsidere causas interruptivas ou suspensivas não mencionadas).',
    alternativas: [
      'A) Considerando que "C" tinha mais de 70 anos na data da sentença, aplica-se a redução de metade dos prazos prescricionais, ocorrendo a prescrição superveniente.',
      'B) Não ocorreu prescrição retroativa, pois o prazo entre o recebimento da denúncia (2015) e a publicação da sentença (2020) é inferior a 8 anos, prazo prescricional para pena de 4 anos.',
      'C) Ocorreu prescrição superveniente, pois o prazo entre a publicação da sentença (2020) e a data atual, sem o julgamento do recurso, já supera 8 anos, que é o prazo para a pena aplicada.',
      'D) A prescrição não pode ser reconhecida, pois o recurso de apelação pendente impede a verificação do trânsito em julgado para a acusação, pressuposto necessário para o cálculo da prescrição superveniente ou retroativa.',
      'E) A prescrição deve ser calculada com base na pena máxima (6 anos), cujo prazo é de 12 anos. Como entre a consumação e a data atual não transcorreu esse período, não houve prescrição.'
    ],
    indiceCorreto: 1,
    explicacao: 'Para ocorrer prescrição retroativa ou superveniente, é necessário trânsito em julgado para a acusação (art. 110, § 1º, CP). O prazo entre denúncia (2015) e sentença (2020) é de 5 anos, inferior aos 8 anos do prazo prescricional para pena de 4 anos (art. 109, IV, CP). Não há redução por idade, pois "C" tinha 68 anos na sentença (art. 115 exige >70 anos).'
  },

  {
    id: '32',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Sobre a extinção da punibilidade, analise as assertivas e assinale a alternativa que indica aquelas que estão corretas. I. A retratação nos crimes de calúnia e difamação, quando a ofensa foi veiculada por meio de comunicação social, poderá, a pedido do ofendido, ser realizada pelo mesmo veículo, conforme previsão legal introduzida pela Lei 13.188/2015. II. A renúncia ao direito de queixa, nos crimes de ação penal privada, deve ser aceita pelo querelado para produzir efeitos extintivos, à semelhança do perdão do ofendido. III. O acordo de não persecução penal (ANPP) suspende o curso da prescrição da pretensão punitiva enquanto não for rescindido ou integralmente cumprido. IV. A abolitio criminis, decorrente da revogação de uma portaria da Anvisa que retirou determinada substância da lista de entorpecentes, retroage para beneficiar os agentes que praticaram o fato na vigência da portaria anterior, configurando hipótese de retroatividade benéfica do complemento de norma penal em branco.',
    alternativas: [
      'A) Apenas as assertivas I e III estão corretas.',
      'B) Apenas as assertivas I, III e IV estão corretas.',
      'C) Apenas as assertivas II e IV estão corretas.',
      'D) Apenas as assertivas I, II e III estão corretas.',
      'E) Todas as assertivas estão corretas.'
    ],
    indiceCorreto: 1,
    explicacao: 'I - Correta (art. 143, § único, CP). II - Incorreta: a renúncia é ato unilateral do ofendido, não dependendo de aceitação (art. 104, CP). III - Correta (art. 116, IV, CP). IV - Correta: alteração benéfica do complemento de norma penal em branco sem caráter temporário retroage (abolitio criminis).'
  },

  {
    id: '33',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"D" foi condenado definitivamente por um crime hediondo praticado em 1989, antes do advento da Lei 8.072/1990. Em 2015, por ocasião da análise de decreto presidencial de indulto natalino, sua pretensão ao benefício foi indeferida com base na vedação contida na Lei de Crimes Hediondos. "D" alega violação ao princípio da irretroatividade da lei mais gravosa. Com base na jurisprudência dos Tribunais Superiores, assinale a alternativa correta.',
    alternativas: [
      'A) O indeferimento é ilegal, pois a vedação ao indulto só se aplica a crimes cometidos após a vigência da Lei 8.072/1990, em observância ao princípio da anterioridade.',
      'B) O indeferimento é correto, pois a concessão do indulto é ato discricionário e a aferição da natureza do crime, para seus efeitos, deve ser feita na data do decreto, e não na do cometimento do delito.',
      'C) A vedação ao indulto para crimes hediondos é inconstitucional, pois a Constituição veda apenas a anistia e a graça, devendo o benefício ser concedido.',
      'D) O indeferimento é ilegal, pois o STJ possui entendimento consolidado de que os benefícios de indulto e comutação são possíveis para crimes hediondos praticados antes da vigência da lei que os definiu.',
      'E) O indeferimento é correto apenas se o crime for também de tortura, pois a Lei 9.455/97, posterior, veda expressamente o indulto para este delito.'
    ],
    indiceCorreto: 1,
    explicacao: 'Conforme entendimento do STF (HC 117.938), a aferição da natureza do crime para concessão do indulto há de se fazer na data da edição do decreto presidencial respectivo, não na do cometimento do delito, não configurando violação à irretroatividade.'
  },

  {
    id: '34',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Assinale a alternativa que descreve corretamente uma diferença essencial entre anistia, graça e indulto.',
    alternativas: [
      'A) A anistia extingue a punibilidade, a graça extingue apenas a execução da pena, e o indulto pode ser concedido antes do trânsito em julgado.',
      'B) A anistia é concedida por lei e refere-se a fatos, a graça é concedida por decreto a pessoa determinada, e o indulto é concedido por decreto de forma coletiva.',
      'C) A anistia e o indulto extinguem os efeitos penais principais e secundários, enquanto a graça extingue apenas a pretensão executória.',
      'D) Tanto a anistia quanto a graça dependem de provocação do interessado, enquanto o indulto é concedido de ofício.',
      'E) A anistia impede a reincidência, a graça não impede, e o indulto só pode ser concedido para crimes comuns, nunca para políticos.'
    ],
    indiceCorreto: 1,
    explicacao: 'A anistia é concedida por lei (art. 48, VIII, CF) e atinge fatos; a graça é indulto individual por decreto a pessoa certa; o indulto é concedido por decreto de forma coletiva (art. 84, XII, CF).'
  },

  {
    id: '35',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"E", maior de 70 anos, foi denunciado pela prática de um crime cuja pena máxima é de 2 anos. O recebimento da denúncia se deu em 02/03/2018. Em 10/10/2023, ainda sem que houvesse sentença, sua defesa arguiu a prescrição da pretensão punitiva. Considerando apenas as regras de prazo, termo inicial e causas de redução, assinale a alternativa correta.',
    alternativas: [
      'A) Não ocorreu prescrição, pois o prazo é de 4 anos (para pena máxima de 2 anos) e entre o recebimento da denúncia (2018) e a arguição (2023) não se passaram 4 anos completos.',
      'B) Ocorreu prescrição, pois o prazo, considerando a redução pela metade em razão da idade (art. 115, CP), é de 2 anos, e desde o recebimento da denúncia já se passaram mais de 2 anos.',
      'C) Não ocorreu prescrição, pois o termo inicial é a consumação do crime, data que não foi informada e que pode ser anterior ao recebimento da denúncia.',
      'D) Ocorreu prescrição retroativa, pois o prazo reduzido pela metade (2 anos) já se esgotou entre a data da denúncia e a arguição.',
      'E) A redução de prazo do art. 115 do CP só se aplica se o agente era maior de 70 anos na data do fato, o que não está demonstrado, devendo-se aplicar o prazo integral de 4 anos, não ocorrendo prescrição.'
    ],
    indiceCorreto: 1,
    explicacao: 'Para pena máxima de 2 anos, o prazo prescricional é de 4 anos (art. 109, V). Com a redução pela metade (art. 115) por ser maior de 70 anos na data da sentença (presume-se, pois a questão não indica), o prazo fica em 2 anos. Desde o recebimento da denúncia (2018) até a arguição (2023) já se passaram mais de 2 anos.'
  },

  {
    id: '36',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Em relação ao perdão judicial, analise as assertivas abaixo e assinale a alternativa correta. I. Conforme entendimento sumulado pelo STJ, a sentença que concede o perdão judicial tem natureza declaratória de extinção da punibilidade. II. O perdão judicial extingue a punibilidade e, consequentemente, todos os efeitos da condenação, inclusive a possibilidade de reincidência. III. O perdão judicial pode ser concedido mesmo após o trânsito em julgado da sentença condenatória, desde que preenchidos os requisitos legais. IV. Trata-se de causa extintiva de natureza objetiva, aplicável a qualquer coautor ou partícipe do crime, independentemente de suas condições pessoais.',
    alternativas: [
      'A) Apenas a assertiva I está correta.',
      'B) Apenas as assertivas I e III estão corretas.',
      'C) Apenas as assertivas II e IV estão corretas.',
      'D) Apenas as assertivas I, II e III estão corretas.',
      'E) Todas as assertivas estão corretas.'
    ],
    indiceCorreto: 0,
    explicacao: 'I - Correta (Súmula 18 STJ). II - Incorreta: conforme art. 120 do CP, o condenado que recebe perdão judicial não é reincidente, mas outros efeitos secundários podem persistir. III - Incorreta: o perdão judicial deve ser concedido na sentença, não após o trânsito em julgado. IV - Incorreta: é causa pessoal que não se comunica a outros agentes.'
  },

  {
    id: '37',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"F", condenado definitivamente a uma pena de 3 anos de reclusão por crime comum, evadiu-se do estabelecimento penal após cumprir 1 ano da pena. A evasão ocorreu em 05/05/2018. Em 2023, ainda foragido, foi preso. Seu defensor alega que a pretensão executória prescreveu. Com base no art. 113 do CP e nos prazos do art. 109, assinale a alternativa correta sobre o tempo restante para prescrição a partir da evasão.',
    alternativas: [
      'A) A prescrição da pretensão executória já ocorreu, pois o prazo para a pena total de 3 anos é de 8 anos, contados do trânsito em julgado, o qual certamente é anterior a 2015.',
      'B) Não ocorreu prescrição. O tempo restante da pena é de 2 anos, cujo prazo prescricional é de 4 anos. Contando da evasão (2018), em 2023 ainda não se completaram 4 anos.',
      'C) A prescrição é regulada pelo tempo total da pena aplicada (3 anos), não pelo restante, portanto o prazo é de 8 anos a partir da evasão, não tendo ocorrido.',
      'D) O prazo prescricional, na hipótese de evasão, é sempre de 20 anos, por se tratar de situação de interrupção da execução que penaliza o condenado.',
      'E) A prescrição da pretensão executória só começa a correr após a recaptura, sendo inaplicável o art. 113 do CP enquanto o condenado está foragido.'
    ],
    indiceCorreto: 1,
    explicacao: 'Conforme art. 113 do CP, na evasão a prescrição é regulada pelo tempo que resta da pena. Restam 2 anos (3 - 1), cujo prazo prescricional é de 4 anos (art. 109, V). Da evasão (05/2018) até 2023 não se passaram 4 anos completos.'
  },

  {
    id: '38',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Assinale a alternativa que indica uma situação na qual NÃO ocorre a extinção da punibilidade.',
    alternativas: [
      'A) Concessão de anistia por lei federal a agentes públicos responsabilizados por crimes previstos em legislação previdenciária revogada.',
      'B) Retratação irrestrita do agente nos autos do processo por crime de falsa perícia, antes do trânsito em julgado.',
      'C) Morte do agente após o trânsito em julgado da sentença condenatória que aplicou, cumulativamente, pena privativa de liberdade e pena de multa.',
      'D) Perdão do ofendido, aceito pelo querelado, em ação penal privada por crime de ameaça, antes da prolação da sentença.',
      'E) Decurso de 6 meses, sem representação, da data em que o ofendido tomou conhecimento da autoria, em crime de lesão corporal leve de ação pública condicionada.'
    ],
    indiceCorreto: 2,
    explicacao: 'C) A morte do agente extingue a punibilidade, mas não extingue a pena de multa, que pode ser executada contra os herdeiros até o limite da herança, conforme entendimento majoritário da doutrina e jurisprudência (art. 5º, XLV, CF).'
  },

  {
    id: '39',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"G" foi denunciado como incurso nas penas do art. 171, § 3º, do CP (estelionato previdenciário), por haver, em conluio com servidor, fornecido declarações falsas que permitiram a terceiro obter benefício indevido, recebido mensalmente entre 2010 e 2015. A denúncia foi oferecida em 2017. Em preliminar, a defesa alegou a prescrição da pretensão punitiva, argumentando que o crime é permanente, tendo cessado a permanência em 2015, e que o prazo prescricional para a pena máxima (5 anos) de 12 anos já teria transcorrido. Com base na jurisprudência dos Tribunais Superiores, assinale a alternativa correta.',
    alternativas: [
      'A) A prescrição não ocorreu, pois o crime é permanente e o prazo só começou a correr em 2015, sendo a denúncia de 2017 interruptiva do prazo de 12 anos.',
      'B) O crime praticado por "G" é instantâneo de efeitos permanentes, iniciando-se a prescrição da data do primeiro pagamento indevido (2010), tendo portanto ocorrido a prescrição antes da denúncia de 2017.',
      'C) Trata-se de crime permanente, cuja prescrição só se inicia com a cessação da permanência (2015), mas o prazo é de 16 anos, por tratar-se de estelionato qualificado, não tendo ocorrido a prescrição.',
      'D) A prescrição deve ser calculada com base na pena aplicada na sentença, na modalidade retroativa, sendo prematuro qualquer juízo na fase atual.',
      'E) O prazo prescricional para crimes contra a previdência social é especial, de 20 anos, não tendo ocorrido a prescrição.'
    ],
    indiceCorreto: 1,
    explicacao: 'Conforme STJ (AgRg no REsp 1.347.082), o estelionato previdenciário praticado por terceiro (não pelo próprio beneficiário) é crime instantâneo de efeitos permanentes. A prescrição inicia-se da consumação (primeiro pagamento indevido - 2010). Pena máxima de 5 anos tem prazo de 12 anos, que já transcorreu até 2017.'
  },

  {
    id: '40',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'Sobre a prescrição no concurso de crimes e nas hipóteses do art. 108 do CP, assinale a alternativa INCORRETA.',
    alternativas: [
      'A) No crime continuado, a prescrição regula-se pela pena de cada crime isoladamente, não se computando o acréscimo decorrente da continuação.',
      'B) A prescrição da pretensão punitiva do crime de receptação não se vê afetada pela prescrição ou pela morte do autor do crime antecedente (furto), salvo se a extinção decorrer de abolitio criminis ou anistia.',
      'C) Se um crime funciona como elementar de outro (crime complexo), a prescrição do primeiro impede a persecução do segundo, por força do princípio da consunção.',
      'D) Nos crimes conexos processados juntos, a interrupção da prescrição relativa a qualquer deles estende-se aos demais.',
      'E) A extinção da punibilidade de uma circunstância agravante que também constitui crime autônomo (ex: dano qualificador do furto) não se estende ao crime agravado.'
    ],
    indiceCorreto: 2,
    explicacao: 'C) INCORRETA. Conforme art. 108, CP, a extinção da punibilidade de elemento componente de um crime (crime complexo) não se estende a este. São infrações autônomas. A consunção trata da absorção na dosimetria, não na extinção da punibilidade.'
  },

  {
    id: '41',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: '"H", já condenado definitivamente por um crime e em liberdade aguardando o início do cumprimento da pena, pratica novo crime. Sobre os efeitos da nova conduta na prescrição da pretensão executória da primeira condenação, assinale a alternativa correta.',
    alternativas: [
      'A) A prática do novo crime interrompe imediatamente a prescrição da pretensão executória do primeiro, independentemente de condenação, nos termos do art. 117, VI, do CP.',
      'B) A prescrição da pretensão executória do primeiro crime terá seu prazo aumentado em um terço, uma vez configurada a reincidência.',
      'C) A interrupção da prescrição da pretensão executória do primeiro crime ocorre a partir da data do trânsito em julgado da sentença condenatória pelo novo crime, quando então se reconhece a reincidência.',
      'D) A prática do novo crime é irrelevante para a prescrição da pretensão executória do primeiro, pois a reincidência como causa interruptiva só se aplica à pretensão punitiva.',
      'E) A prescrição da pretensão executória do primeiro crime é suspensa enquanto pende a ação penal relativa ao novo delito.'
    ],
    indiceCorreto: 2,
    explicacao: 'A reincidência como causa interruptiva (art. 117, VI) aplica-se à PPE. A jurisprudência majoritária entende que a interrupção se dá na data da prática do novo crime, mas seu reconhecimento depende de condenação transitada em julgado por este.'
  },

  {
    id: '42',
    materia: 'Direito Penal',
    assunto: 'Extinção da Punibilidade/Prescrição',
    enunciado: 'A respeito das condições objetivas de punibilidade e das condições negativas de punibilidade (causas absolutórias), assinale a alternativa correta.',
    alternativas: [
      'A) A existência de representação do ofendido, nos crimes de ação pública condicionada, é exemplo de condição objetiva de punibilidade.',
      'B) O lançamento definitivo do crédito tributário, para os crimes contra a ordem tributária, é pacificamente entendido pela doutrina e jurisprudência como condição objetiva de punibilidade.',
      'C) As causas absolutórias, como o furto de pai contra filho, excluem a antijuridicidade do fato, tornando-o atípico.',
      'D) Condições objetivas de punibilidade referem-se a requisitos anteriores à conduta, cuja ausência impede o exercício da ação penal, mas não afeta a existência do crime.',
      'E) Tanto as condições objetivas quanto as negativas de punibilidade são causas pessoais que, se verificadas em relação a um dos agentes, beneficiam a todos os coautores e partícipes.'
    ],
    indiceCorreto: 3,
    explicacao: 'D) Correta. Condições objetivas de punibilidade são requisitos extrínsecos ao crime (ex: autorização para proceder, representação) cuja ausência impede a punição, mas não descaracteriza o crime em si. A) é condição de procedibilidade. B) há divergência (elemento normativo ou condição)'

  },{
  id: '43',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No procedimento do Tribunal do Júri, sobre a fase de instrução preliminar (art. 411, CPP), o juiz, encerrada a instrução probatória, verifica que os elementos colhidos sugerem a ocorrência de um crime diverso do descrito na denúncia, sendo este também da competência do Júri. Diante disso, considerando a possibilidade de mutatio libelli, assinale a alternativa que indica a providência legal cabível ao magistrado.',
  alternativas: [
    'A) Deve impronunciar o acusado, determinando o arquivamento dos autos, por falta de justa causa para a ação penal em relação ao crime apurado.',
    'B) Deve prosseguir com o julgamento nos termos da denúncia oferecida, ficando a nova tipificação a ser discutida apenas em plenário de julgamento.',
    'C) Poderá dar ao fato definição jurídica diversa da constante da acusação, nos termos do art. 418 do CPP, ainda que sujeite o acusado a pena mais grave.',
    'D) Deve absolver sumariamente o acusado, por não estar convencido da materialidade do fato tal como descrito na inicial.',
    'E) Deve remeter os autos ao juiz competente, nos termos do art. 419, caput, do CPP, uma vez que se convencer da existência de crime diverso.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. O art. 418 do CPP autoriza o juiz, ao proferir a decisão de pronúncia, a dar ao fato definição jurídica diversa da constante da acusação, mesmo que mais grave. A hipótese do art. 419 aplica-se apenas quando o juiz se convencer da existência de crime diverso NÃO da competência do Júri.'
},
{
  id: '44',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre a formação da lista anual de jurados e o alistamento, conforme arts. 425 e 426 do CPP, considere as seguintes assertivas: I. A lista geral dos jurados, com indicação das respectivas profissões, deve ser publicada pela imprensa e divulgada em editais até o dia 10 de outubro de cada ano. II. O jurado que tiver integrado o Conselho de Sentença nos doze meses anteriores à publicação da lista geral fica automaticamente excluído dela. III. É vedada a alteração da lista geral após sua publicação definitiva no dia 10 de novembro, mesmo que se descubra vício no alistamento. IV. O sorteio dos nomes para compor a urna deve ser realizado na presença do Ministério Público, de advogado indicado pela OAB e de defensor público, conforme o § 3º do art. 426.',
  alternativas: [
    'A) I e II.',
    'B) I e IV.',
    'C) II e III.',
    'D) I, II e IV.',
    'E) II, III e IV.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. I está correta conforme art. 426. II é incorreta: a exclusão é do alistamento, não da lista já publicada, e refere-se aos 12 meses anteriores à publicação (§4º, art. 426). III é incorreta: a lista pode ser alterada até 10 de novembro (§1º, art. 426). IV está correta conforme §3º do art. 426.'
},
{
  id: '45',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em um processo perante o Tribunal do Júri, após o trânsito em julgado da pronúncia, o acusado, que está preso preventivamente há oito meses, requer ao Tribunal de Justiça o desaforamento do julgamento, alegando excesso de serviço na comarca de origem, o que impossibilitaria a realização do julgamento no prazo legal. O Ministério Público contesta, alegando que o prazo de seis meses, previsto no art. 428 do CPP, não foi ultrapassado. Analise a situação à luz da legislação processual penal e assinale a alternativa INCORRETA.',
  alternativas: [
    'A) O prazo para a realização do julgamento, para fins de desaforamento por excesso de serviço, conta-se a partir do trânsito em julgado da decisão de pronúncia.',
    'B) Para a contagem do prazo referido no art. 428, não se computa o tempo decorrido de adiamentos, diligências ou incidentes de interesse da defesa.',
    'C) A comprovação do excesso de serviço que impossibilite o julgamento no prazo de seis meses é condição necessária para o desaforamento nessa hipótese.',
    'D) O desaforamento por excesso de serviço depende de requerimento da parte, não podendo ser decretado de ofício pelo Tribunal, mesmo representado pelo juiz presidente.',
    'E) Caso não haja excesso de serviço, o acusado poderá requerer ao Tribunal que determine a imediata realização do julgamento.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) INCORRETA. O art. 428 do CPP prevê que o desaforamento por excesso de serviço poderá ser determinado "ouvidos o juiz presidente e a parte contrária", não exigindo requerimento da parte. Pode ser de ofício ou por provocação. As demais alternativas estão corretas conforme o dispositivo legal.'
},
{
  id: '46',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Durante a fase de preparação para o julgamento em plenário (Seção III, Capítulo II, Título VIII do CPP), o juiz presidente do Tribunal do Júri determina a intimação das partes para, no prazo de cinco dias, apresentarem o rol de testemunhas que irão depor em plenário. Sobre essa fase, é correto afirmar:',
  alternativas: [
    'A) Cada parte poderá arrolar até oito testemunhas para o julgamento em plenário, reproduzindo o mesmo limite da fase de instrução preliminar.',
    'B) O assistente do Ministério Público, se já habilitado, tem direito próprio e autônomo para arrolar testemunhas, independentemente da manifestação do Parquet.',
    'C) O número máximo de testemunhas que cada parte pode arrolar para depor em plenário é de cinco, nos termos do art. 422 do CPP.',
    'D) A ausência de intimação para a apresentação do rol de testemunhas de plenário gera nulidade absoluta do julgamento, por ofensa ao contraditório.',
    'E) As testemunhas arroladas nesta fase são as únicas que poderão ser inquiridas, sendo defeso às partes requerer a oitiva de qualquer outra, mesmo que já tenha deposto na instrução preliminar.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. O art. 422 do CPP estabelece expressamente o limite de até cinco testemunhas para depor em plenário. A) incorreta: na fase preliminar são oito (art. 406), no plenário são cinco. B) incorreta: o assistente não tem rol autônomo. D) incorreta: seria nulidade relativa. E) incorreta: testemunhas da instrução preliminar podem ser reouvidas em plenário.'
},
{
  id: '47',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No curso de uma sessão de julgamento pelo Tribunal do Júri, durante os debates orais, o advogado de defesa, em sua sustentação, faz reiteradas referências à decisão de pronúncia, argumentando que ela foi prolatada com base em provas frágeis e que, portanto, o Conselho de Sentença deveria absolver seu cliente. O Ministério Público, imediatamente, levanta protesto contra a conduta. Analisando a situação à luz do art. 478 do CPP, assinale a alternativa que descreve a consequência legal e processual adequada.',
  alternativas: [
    'A) A referência é permitida, pois a pronúncia é peça fundamental do processo e pode ser criticada pela defesa como estratégia para demonstrar a fragilidade da acusação.',
    'B) Configura nulidade relativa, devendo o juiz presidente apenas advertir o orador para que se abstenha de tais referências, sob pena de ter seu tempo de fala reduzido.',
    'C) Configura nulidade absoluta do julgamento, por ofensa direta ao princípio do livre convencimento do júri, determinando a dissolução do Conselho e o marcamento de nova data.',
    'D) A conduta é vedada pelo art. 478, I, do CPP, podendo caracterizar nulidade, a critério do juiz presidente, que deverá intervir para coibir o abuso.',
    'E) A referência é irrelevante, pois os jurados já tiveram acesso à pronúncia, sendo natural que as partes a comentem durante seus argumentos.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta. O art. 478, I, do CPP veda, sob pena de nulidade, referências à decisão de pronúncia como argumento de autoridade que beneficiem ou prejudiquem o acusado. Cabe ao juiz presidente intervir e coibir a prática, sob pena de caracterização de nulidade.'
},
{
  id: '48',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre as hipóteses de absolvição sumária no procedimento do Tribunal do Júri, previstas no art. 415 do CPP, assinale a alternativa CORRETA.',
  alternativas: [
    'A) A absolvição sumária por causa de isenção de pena aplica-se inclusive à inimputabilidade por doença mental, ainda que não seja a única tese defensiva.',
    'B) Provada a inexistência material do fato, o juiz proferirá sentença de impronúncia, determinando o arquivamento dos autos.',
    'C) Demonstrada, durante a instrução preliminar, causa excludente de ilicitude, como a legítima defesa, o juiz deverá absolver sumariamente o acusado.',
    'D) A absolvição sumária é cabível quando o juiz, analisando a matéria de fato e de direito, concluir pela não ocorrência do crime ou pela não participação do acusado.',
    'E) Da sentença que decreta a absolvição sumária cabe recurso em sentido estrito, e não apelação.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta. A absolvição sumária ocorre nas hipóteses do art. 415, que incluem a prova da inexistência do fato, não ser autor ou partícipe, fato atípico ou causa de exclusão do crime. A) incorreta: há exceção para inimputabilidade se não for única tese. B) incorreta: é absolvição, não impronúncia. C) incorreta: excludentes de ilicitude são discutidas em plenário. E) incorreta: cabe apelação (art. 416).'
},
{
  id: '49',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Após a formação do Conselho de Sentença e prestado o compromisso, inicia-se a instrução em plenário. Sobre a ordem de inquirição, de acordo com o art. 473 do CPP, é correto afirmar que:',
  alternativas: [
    'A) O defensor inquirirá primeiro as testemunhas arroladas pela acusação, seguido pelo Ministério Público e pelo querelante.',
    'B) O Ministério Público, o assistente e o querelante inquirirão as testemunhas da acusação, nesta ordem, sucedidos pelo defensor, que inquirirá as testemunhas da defesa.',
    'C) O juiz presidente é o responsável por toda a inquirição, colhendo as informações que as partes lhe sugerirem por escrito.',
    'D) As testemunhas arroladas pela defesa são inquiridas primeiro pelo defensor, mantida, para as testemunhas da acusação, a ordem do caput do art. 473.',
    'E) As partes não podem interrogarem diretamente as testemunhas, devendo todas as perguntas serem dirigidas ao juiz presidente, que as formula.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta. Conforme §1º do art. 473, para as testemunhas da defesa, o defensor pergunta primeiro. Para as da acusação, mantém-se a ordem do caput (MP, assistente, querelante). B) incorreta: inverte a ordem para as testemunhas da defesa. C) e E) incorretas: as partes inquiriem diretamente.'
},
{
  id: '50',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No tocante aos quesitos obrigatórios que devem ser submetidos à votação do Conselho de Sentença, conforme o art. 483 do CPP, considere as seguintes afirmações: I. A resposta negativa, de mais de três jurados, ao quesito sobre a materialidade do fato implica a absolvição do acusado, encerrando-se a votação. II. O quesito sobre a existência de causa de diminuição de pena só será formulado se os jurados, após votarem pela condenação, assim o requererem. III. Sustentada a desclassificação para infração de competência do juiz singular, o quesito respectivo será respondido após o segundo ou terceiro quesito. IV. O questionário sempre será iniciado com a indagação sobre se o acusado deve ser absolvido, para respeitar o princípio da presunção de inocência.',
  alternativas: [
    'A) I e III.',
    'B) II e IV.',
    'C) I, II e III.',
    'D) II, III e IV.',
    'E) I, III e IV.'
  ],
  indiceCorreto: 0,
  explicacao: 'A) Correta. I está correta conforme §1º do art. 483. II está incorreta: o quesito sobre causa de diminuição é obrigatório se alegado pela defesa. III está correta conforme §4º do art. 483. IV está incorreta: a ordem dos quesitos segue a do art. 483, começando pela materialidade.'
},
{
  id: '51',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Durante a sessão de julgamento, após a leitura dos quesitos, o juiz presidente, os jurados e as partes se dirigem à sala especial para a votação. Sobre o procedimento de votação, de acordo com os arts. 486 a 489 do CPP, assinale a alternativa INCORRETA.',
  alternativas: [
    'A) Antes da votação de cada quesito, são distribuídas aos jurados cédulas de papel opaco contendo a palavra "sim" ou "não".',
    'B) Para assegurar o sigilo do voto, o oficial de justiça recolhe em urnas separadas as cédulas correspondentes aos votos e as não utilizadas.',
    'C) As decisões do Tribunal do Júri são tomadas por maioria de votos, considerando-se o total de jurados que compõem o Conselho de Sentença.',
    'D) Se a resposta a um quesito estiver em contradição com outra já dada, o presidente deve explicar a contradição e submeter novamente à votação os quesitos envolvidos.',
    'E) O resultado da votação de cada quesito é registrado em termo pelo escrivão, constando também a conferência das cédulas não utilizadas.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) INCORRETA. A maioria é de votos dos jurados presentes na votação de cada quesito (art. 489), não do total que compõe o Conselho. As demais alternativas estão corretas: A) art. 486; B) art. 487; D) art. 490; E) art. 488.'
},
{
  id: '52',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Um acusado, pronunciado por homicídio qualificado, está preso cautelarmente. Na fase de preparação do processo para julgamento em plenário, seu defensor requer a produção de prova pericial suplementar, alegando que a já existente nos autos é insuficiente. O juiz presidente indeferiu o requerimento, por considerar protelatório. O defensor então alega violação ao direito à ampla defesa. À luz do regramento do CPP sobre o Tribunal do Júri, a atitude do juiz presidente foi:',
  alternativas: [
    'A) Ilegal, pois o direito à produção de provas é amplo na fase de preparação para o plenário, sendo nulo o julgamento se realizado sem a perícia requerida.',
    'B) Legal, pois a fase de produção de provas periciais é própria da instrução preliminar, não cabendo sua repetição ou complementação na fase de preparação para o plenário, salvo para sanar nulidade.',
    'C) Legal, pois compete ao juiz presidente, nos termos do art. 422, § 1º, c/c art. 423, indeferir diligências consideradas irrelevantes, impertinentes ou protelatórias.',
    'D) Ilegal, pois a defesa tem o direito constitucional de produzir todas as provas necessárias a qualquer tempo, sendo nula qualquer restrição imposta pelo juiz.',
    'E) Legal, apenas se o Ministério Público também tiver se manifestado pelo indeferimento, respeitando-se o princípio do contraditório.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. A fase de produção de provas é na instrução preliminar (arts. 410-411). Na fase de preparação para o plenário (art. 422), o objetivo é sanar nulidades ou esclarecer fatos (art. 423, I), não produzir provas novas. C) incorreta: esses dispositivos não se referem a produção de prova nova.'
},
{
  id: '53',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre as recusas de jurados durante a formação do Conselho de Sentença, conforme art. 468 do CPP, é correto afirmar que:',
  alternativas: [
    'A) Cada parte pode recusar, sem necessidade de motivação, até três jurados sorteados, e as recusas são sempre feitas após o sorteio de todos os sete jurados.',
    'B) A defesa e o Ministério Público podem recusar, justificadamente, quantos jurados entenderem necessários, sem qualquer limite numérico.',
    'C) As partes podem recusar jurados de forma motivada ou imotivada, mas o número máximo de recusas imotivadas, por parte, é de três.',
    'D) O jurado recusado imotivadamente por uma das partes fica excluído apenas daquele processo, podendo compor o Conselho em julgamentos subsequentes no mesmo dia.',
    'E) Em caso de recusa motivada por impedimento, a parte que a arguir deve apresentar provas pré-constituídas da existência do vício.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. O art. 468 estabelece que as partes podem recusar até três jurados cada, sem motivar a recusa (imotivada). Para recusas motivadas (impedimento, suspeição), não há limite numérico. A) incorreta: as recusas são feitas à medida que as cédulas são sorteadas.'
},
{
  id: '54',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Após o julgamento pelo Tribunal do Júri que resultou na condenação do réu a pena de 18 anos de reclusão, a defesa interpôs apelação. Sobre os efeitos e o processamento desse recurso, à luz das alterações promovidas pela Lei nº 13.964/2019 (Pacote Anticrime), analise as assertivas: I. A apelação não terá efeito suspensivo, devendo o acusado iniciar o cumprimento da pena de imediato. II. Excepcionalmente, o tribunal ad quem pode atribuir efeito suspensivo à apelação, se o recurso não for protelatório e levantar questão substancial que possa resultar em redução da pena para patamar inferior a 15 anos. III. A execução provisória da pena é mandatória em caso de condenação igual ou superior a 15 anos, não havendo qualquer margem de discricionariedade para o juiz presidente. IV. O pedido de concessão de efeito suspensivo pode ser feito incidentemente na apelação ou por meio de petição em separado dirigida diretamente ao relator.',
  alternativas: [
    'A) I e II.',
    'B) II e IV.',
    'C) I, II e IV.',
    'D) I, III e IV.',
    'E) II, III e IV.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. II e IV estão corretas conforme arts. 492, §5º e §6º, do CPP. I está incorreta: a regra é a inexistência de efeito suspensivo (§4º), mas há exceção (§5º). III está incorreta: o juiz presidente pode, excepcionalmente, deixar de autorizar a execução provisória (§3º).'
},
{
  id: '55',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Na fase de instrução preliminar do procedimento do Júri, o juiz, ao analisar a resposta do acusado, verifica que ele arguiu a incompetência do juízo por prerrogativa de função. De acordo com o art. 407 do CPP, como deve ser processada essa arguição?',
  alternativas: [
    'A) Deve ser decidida de plano pelo juiz, antes de qualquer ato instrutório, sob pena de preclusão.',
    'B) Deve ser processada em apartado, nos termos dos arts. 95 a 112 do CPP, suspendendo-se o curso do processo principal.',
    'C) Deve ser analisada apenas após o encerramento de toda a instrução probatória, juntamente com o mérito.',
    'D) Por se tratar de questão prejudicial, deve ser remetida imediatamente ao tribunal competente, independentemente de processamento em apartado.',
    'E) Por ser matéria de defesa, sua arguição na resposta é intempestiva, devendo ser rejeitada liminarmente.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. O art. 407 do CPP remete expressamente ao processamento em apartado das exceções, nos termos dos arts. 95 a 112. A incompetência por prerrogativa de função é exceção que se processa em apartado.'
},
{
  id: '56',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No que diz respeito à publicidade dos atos processuais no Tribunal do Júri, de acordo com o Código de Processo Penal, assinale a alternativa que indica corretamente quais dos atos listados possuem natureza pública obrigatória. I. O sorteio dos 25 jurados para a reunião periódica, realizado entre o 15º e o 10º dia útil antes da sessão. II. A votação dos quesitos pelo Conselho de Sentença na sala especial. III. A sessão de instrução e julgamento em plenário, com a inquirição de testemunhas e debates. IV. A leitura da sentença pelo juiz presidente ao final da sessão.',
  alternativas: [
    'A) Apenas I e II.',
    'B) Apenas III e IV.',
    'C) Apenas I, III e IV.',
    'D) Apenas II e III.',
    'E) I, II, III e IV.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. I é público: o sorteio é realizado "a portas abertas" (art. 433, caput, CPP). II é sigiloso: a votação na sala especial é ato sigiloso para garantia do segredo do voto (art. 485, CPP). III é público: a sessão de instrução e julgamento em plenário obedece à regra geral de publicidade dos atos processuais (art. 793, CPP). IV é público: a leitura da sentença é parte integrante da sessão pública de julgamento (art. 493, CPP).'
},
{
  id: '57',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em relação às atribuições do juiz presidente do Tribunal do Júri, previstas no art. 497 do CPP, assinale a alternativa que indica uma conduta que ele NÃO está autorizado a praticar.',
  alternativas: [
    'A) Regular a polícia das sessões e prender os desobedientes.',
    'B) Nomear defensor ao acusado, quando o considerar indefeso, podendo dissolver o Conselho e designar nova data.',
    'C) Decretar, de ofício, a prisão preventiva do acusado durante os debates, caso ele profira ameaças contra a vítima.',
    'D) Suspender a sessão pelo tempo indispensável à realização de diligências, mantida a incomunicabilidade dos jurados.',
    'E) Mandar retirar da sala o acusado que dificultar a realização do julgamento, o qual prosseguirá sem sua presença.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) INCORRETA/NÃO AUTORIZADA. O art. 497 não atribui ao presidente a competência para decretar prisão preventiva. Essa é decisão que deve seguir o rito próprio do Título IX do Livro I do CPP. As demais estão previstas: A) inciso I; B) inciso V; D) inciso VII; E) inciso VI.'
},
{
  id: '58',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Durante os debates no plenário do Júri, o representante do Ministério Público, em sua sustentação, exibe um vídeo contendo entrevista com uma testemunha que não foi arrolada e não consta dos autos. A defesa opõe-se veementemente. Com base no art. 479 do CPP, assinale a alternativa que exprime a consequência legal adequada.',
  alternativas: [
    'A) A exibição é permitida, desde que a testemunha tenha sido ouvida em inquérito policial e o vídeo seja fiel ao seu depoimento.',
    'B) A exibição é vedada, pois a prova não foi juntada aos autos com a antecedência mínima de três dias úteis, dando-se ciência à outra parte.',
    'C) A exibição é permitida a critério do juiz presidente, desde que considere a prova relevante para a formação da convicção dos jurados.',
    'D) A exibição gera nulidade absoluta da sessão, obrigando a dissolução do Conselho de Sentença e o marcamento de novo julgamento.',
    'E) A exibição é permitida apenas se a defesa concordar expressamente com a sua utilização, renunciando ao direito de prévia ciência.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. O art. 479 do CPP veda, durante o julgamento, a leitura de documento ou exibição de objeto não juntado aos autos com antecedência mínima de 3 dias úteis, com ciência à outra parte. O parágrafo único especifica que a proibição inclui vídeos.'
},
{
  id: '59',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre a resposta à acusação no procedimento do Tribunal do Júri (art. 406, CPP), é INCORRETO afirmar que:',
  alternativas: [
    'A) O prazo para resposta é de dez dias, contado a partir do efetivo cumprimento do mandado de citação ou do comparecimento espontâneo.',
    'B) Na resposta, o acusado pode arguir preliminares, alegar fatos, oferecer documentos e arrolar até oito testemunhas.',
    'C) Não apresentada a resposta no prazo, o juiz nomeará defensor para oferecê-la em até dez dias, concedendo-lhe vista dos autos.',
    'D) A apresentação da resposta é condição de procedibilidade para a continuidade do processo, sendo sua falta causa para a absolvição sumária.',
    'E) O acusado pode, na resposta, especificar as provas pretendidas e requerer a intimação das testemunhas arroladas.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) INCORRETA. A falta de resposta não gera absolvição sumária, mas sim a nomeação de defensor para oferecê-la (art. 408). As demais estão corretas: A) art. 406 e §1º; B) e E) art. 406, §3º; C) art. 408.'
},
{
  id: '60',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Um cidadão convocado para servir como jurado alega, por motivo de convicção filosófica profundamente arraigada, ser contrário à ideia de julgar seu semelhante, recusando-se a integrar o Conselho de Sentença. Diante disso, de acordo com o art. 438 do CPP, assinale a alternativa que descreve o procedimento legal.',
  alternativas: [
    'A) A recusa importará na aplicação de multa de 1 a 10 salários mínimos, independentemente de sua fundamentação.',
    'B) A recusa, uma vez aceita pelo juiz, isentará o cidadão do serviço do júri, sem qualquer consequência adicional.',
    'C) A recusa fundada em convicção religiosa, filosófica ou política importará no dever de prestar serviço alternativo, sob pena de suspensão dos direitos políticos.',
    'D) O cidadão será imediatamente preso por desobediência, pois o serviço do júri é obrigatório e não admite escusas de foro íntimo.',
    'E) O juiz presidente determinará sua inclusão compulsória no Conselho, pois motivos de consciência não são considerados legítimos para escusa.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. O art. 438 do CPP prevê expressamente que recusa por convicção religiosa, filosófica ou política implica dever de prestar serviço alternativo, com pena de suspensão de direitos políticos se não prestar. A) seria para recusa injustificada (art. 436).'
},
{
  id: '61',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Após a pronúncia de um acusado por crime doloso contra a vida, o Ministério Público, analisando novamente os autos, identifica indícios robustos de que outra pessoa, não incluída na denúncia original, participou do crime. Com base no art. 417 do CPP, qual o procedimento adequado a ser seguido pelo juiz?',
  alternativas: [
    'A) Deve anular toda a instrução já realizada e determinar a inclusão do novo acusado na mesma denúncia, reiniciando-se o procedimento desde a citação.',
    'B) Ao pronunciar o acusado original, deve determinar o retorno dos autos ao Ministério Público por 15 dias, para que este adite a denúncia ou ofereça denúncia em separado.',
    'C) Deve impronunciar o acusado original e remeter os autos ao Ministério Público para que ofereça nova denúncia, incluindo todos os envolvidos.',
    'D) Deve prosseguir com o julgamento do acusado original e determinar a instauração de um novo inquérito policial para apurar a participação da outra pessoa.',
    'E) Deve desclassificar o crime para outra infração de competência do juiz singular, onde será possível a denúncia contra o novo partícipe.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. O art. 417 do CPP estabelece que, havendo indícios de autoria ou participação de outras pessoas, o juiz, ao pronunciar ou impronunciar, determinará o retorno dos autos ao MP por 15 dias para aditamento ou denúncia em separado, aplicando-se o art. 80.'
},
{
  id: '62',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre a competência para o julgamento de questões incidentais no Tribunal do Júri, à luz do disposto no art. 497, IV, do CPP, assinale a alternativa CORRETA.',
  alternativas: [
    'A) Todas as questões incidentes, inclusive as que envolvam matéria de mérito, devem ser submetidas à apreciação do Conselho de Sentença.',
    'B) O juiz presidente resolve as questões incidentes que não dependam de pronunciamento do júri, como questões de direito e de prejudicialidade.',
    'C) As questões sobre a validade da pronúncia devem ser sempre decididas pelo Conselho de Sentença antes do início da votação dos quesitos.',
    'D) Qualquer questão suscitada pela defesa durante o plenário, como a alegação de prescrição, deve ser obrigatoriamente submetida à votação dos jurados.',
    'E) A arguição de suspeição contra o juiz presidente deve ser julgada pelo próprio Conselho de Sentença, por votação secreta.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. O art. 497, IV, atribui ao juiz presidente a competência para resolver as questões incidentes que não dependam de pronunciamento do júri. A prescrição, por exemplo, é questão de direito resolvida pelo presidente (inciso IX). C, D e E são questões resolvidas pelo juiz presidente.'
},
{
  id: '63',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em um julgamento perante o Tribunal do Júri, durante a sustentação oral do representante do Ministério Público, um dos jurados, de forma espontânea, exclamou em voz alta: "Isso é um absurdo!". O juiz presidente imediatamente o advertiu e prosseguiu com o julgamento, que terminou com a condenação do réu. Com base na jurisprudência dominante, a conduta do jurado:',
  alternativas: [
    'A) Não acarreta nulidade, pois a manifestação foi espontânea e isolada, tendo sido prontamente coibida pelo presidente, sem prejuízo à imparcialidade do colegiado.',
    'B) Configura grave violação ao dever de incomunicabilidade, implicando a nulidade absoluta do julgamento, independentemente da influência sobre os demais jurados.',
    'C) Gera nulidade relativa, sanável se a defesa não tiver feito a respectiva reserva na ata de julgamento imediatamente após o ocorrido.',
    'D) Caracteriza excesso de linguagem do jurado, anulável apenas se comprovado que sua opinião contaminou os demais membros do conselho de sentença.',
    'E) Configura mero erro processual, passível de correção via recurso de apelação, sem necessidade de anulação do júri.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Segundo o STJ (HC 436241-SP), manifestação espontânea de jurado durante os debates viola o dever de incomunicabilidade e gera nulidade absoluta do julgamento, independentemente de influência sobre os demais.'
},
{
  id: '64',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre os recursos no procedimento do Tribunal do Júri, analise as assertivas a seguir: I. O protesto por novo júri permanece como recurso cabível contra sentença condenatória proferida após a vigência da Lei 11.689/2008, se o crime foi cometido antes dessa lei. II. É possível a anulação parcial da sentença do júri para submeter o réu a novo julgamento apenas sobre as qualificadoras, se o veredicto sobre elas for manifestamente contrário à prova dos autos. III. Determinada a anulação do júri por recurso da defesa, em novo julgamento, a pena não poderá ser superior àquela fixada na primeira sentença, sob pena de violação ao princípio da reformatio in pejus indireta. IV. A condenação definitiva pelo Júri pode ser desconstituída via revisão criminal, podendo o tribunal revisor, se entender pela contrariedade à evidência dos autos, absolver diretamente o réu. Está correto o que se afirma APENAS em:',
  alternativas: [
    'A) I e II.',
    'B) I e IV.',
    'C) II e III.',
    'D) III e IV.',
    'E) I, III e IV.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta. III: Correto - vedada reformatio in pejus indireta (STF, HC 165376/SP). IV: Correto - revisão criminal possível (STJ, HC 137504-BA). I: Errado - protesto por novo júri não mais existe após Lei 11.689/2008. II: Errado - não é possível anulação parcial apenas das qualificadoras (STJ, HC 246.223-BA).'
},
{
  id: '65',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Um acusado de homicídio doloso foi pronunciado com base exclusivamente em elementos informativos colhidos no inquérito policial, sem que houvesse produção de prova em juízo sob o crivo do contraditório. A defesa impetrou habeas corpus alegando violação ao art. 155 do CPP. À luz da jurisprudência atual do STJ, o writ deve ser:',
  alternativas: [
    'A) Concedido, pois a pronúncia demanda lastro probatório mínimo colhido em juízo, sendo vedado o uso exclusivo de elementos inquisitoriais.',
    'B) Concedido, mas apenas se o réu estiver preso, pois a ilegalidade flagrante só se configura na restrição de liberdade.',
    'C) Denegado, pois na pronúncia opera o princípio in dubio pro societate, sendo admissível seu fundamento em indícios oriundos do inquérito policial.',
    'D) Denegado, desde que o inquérito policial tenha sido instruído com ampla produção probatória e o juiz tenha motivado sua decisão convencendo-se da existência do crime e de indícios de autoria.',
    'E) Concedido parcialmente, para determinar o desentranhamento dos elementos inquisitoriais e a prolação de nova decisão baseada apenas em provas judicializadas.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Prevalente no STJ é a posição de que é possível a pronúncia com base em indícios do inquérito policial, aplicando-se o princípio in dubio pro societate (HC 435.977/RS, REsp 1458386/PA).'
},
{
  id: '66',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em um julgamento pelo Tribunal do Júri, o réu foi posicionado na sala de plenário de costas para os jurados que compunham o Conselho de Sentença, durante toda a sessão. A defesa protestou, requerendo que o acusado ficasse de frente para os julgadores, mas o pedido foi indeferido pelo juiz presidente. O réu foi condenado. Com base no entendimento jurisprudencial recente, essa conduta do juiz presidente:',
  alternativas: [
    'A) É irrelevante, pois a lei processual não disciplina o posicionamento físico do réu, ficando a critério da segurança do plenário.',
    'B) Configura mero erro formal, não gerando nulidade, uma vez que a decisão dos jurados se baseia na prova oral e documental, não nas expressões do réu.',
    'C) Viola o princípio da plenitude de defesa e da dignidade da pessoa humana, implicando a nulidade do julgamento por cerceamento de direito fundamental.',
    'D) Gera nulidade relativa, que só será reconhecida se a defesa comprovar, em grau recursal, que o posicionamento influenciou diretamente o resultado do veredicto.',
    'E) É correta, pois visa a evitar a intimidação das testemunhas ou dos próprios jurados pelo olhar do acusado.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Segundo o STJ (AgRg no HC 768.422-SP), posicionar o réu de costas para os jurados viola a dignidade humana e o direito de ser visto pelos julgadores, anulando o julgamento.'
},
{
  id: '67',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre o princípio do in dubio pro societate na fase da pronúncia, é INCORRETO afirmar:',
  alternativas: [
    'A) Exige do juízo de pronúncia um padrão probatório inferior ao da certeza além da dúvida razoável, próprio para uma sentença condenatória.',
    'B) Permite que questões sobre a dosimetria da pena ou a configuração de qualificadoras específicas sejam resolvidas em favor da acusação.',
    'C) Não autoriza a pronúncia baseada em prova exclusivamente testemunhal indireta ("ouvir dizer"), sem qualquer outro lastro probatório.',
    'D) Determina que as dúvidas persistentes após a instrução sejam resolvidas em favor da sociedade, admitindo a submissão do acusado ao júri.',
    'E) Não dispensa a análise crítica e racional das provas pelo juiz, que deve verificar a existência de indícios suficientes da autoria e materialidade.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta (por ser a incorreta). O princípio não permite ao juiz resolver questões sobre dosimetria ou qualificadoras específicas em favor da acusação; essas são matérias para o júri. Somente pode excluir qualificadoras manifestamente improcedentes.'
},
{
  id: '68',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No plenário do Tribunal do Júri, o Ministério Público, durante seus debates, fez referência expressa e leu trechos da sentença de pronúncia, argumentando que a decisão judicial que admitiu a acusação já havia se convencido da culpa do réu. A defesa opôs-se, alegando violação ao art. 478, I, do CPP. Acerca da nulidade decorrente de tal conduta, assinale a alternativa correta à luz da jurisprudência:',
  alternativas: [
    'A) É nula a sessão de julgamento, pois qualquer referência à decisão de pronúncia no plenário do júri é vedada em absoluto pelo citado dispositivo.',
    'B) Não há nulidade se a leitura for feita apenas para contextualizar os fatos, sem utilizá-la como argumento de autoridade para beneficiar ou prejudicar o acusado.',
    'C) A nulidade somente ocorre se a referência for à decisão de pronúncia de corréu já julgado, e não à do próprio acusado.',
    'D) Configura excesso de linguagem do representante do MP, gerando a anulação da pronúncia, mas não do julgamento em plenário.',
    'E) A nulidade é relativa, dependendo de demonstração, em grau recursal, de que os jurados foram efetivamente influenciados pelo argumento.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Segundo STF e STJ (RHC 120598/MT, HC 248.617-MT), a nulidade só ocorre se a referência for usada como argumento de autoridade para beneficiar ou prejudicar o acusado.'
},
{
  id: '69',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Após a condenação de um réu pelo Tribunal do Júri, o Ministério Público interpôs apelação com fundamento no art. 593, III, "d", do CPP, alegando que a decisão absolutória de um corréu no mesmo processo foi manifestamente contrária à prova dos autos. O Tribunal de Justiça deu provimento ao recurso, anulou a absolvição e determinou novo júri para esse corréu. Diante do exposto e do entendimento do STF sobre a apelabilidade das absolvições fundadas no quesito genérico, a decisão do Tribunal de Justiça:',
  alternativas: [
    'A) Está correta, pois a soberania dos veredictos não impede o reexame da decisão dos jurados quando eivada de manifesta contrariedade às provas.',
    'B) Está incorreta, pois, em regra, não cabe recurso da acusação contra absolvição fundada no quesito genérico do art. 483, § 2º, do CPP, por força da soberania dos veredictos.',
    'C) Está correta, pois o princípio da paridade de armas exige que a acusação tenha amplo direito de recorrer contra qualquer decisão absolutória.',
    'D) Está incorreta, pois o recurso cabível nessa hipótese seria o "protesto por novo júri", e não a apelação.',
    'E) Está correta, desde que a apelação tenha sido interposta também com base em violação a norma constitucional, como a utilização da tese da legítima defesa da honra.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Posição majoritária do STF (HC 178777/MG, HC 185068) é que, em regra, não cabe apelação da acusação contra absolvição fundada no quesito genérico, por respeito à soberania dos veredictos.'
},
{
  id: '70',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Durante a sessão de julgamento do Tribunal do Júri, a acusação pretendeu exibir um vídeo que não havia sido juntado aos autos nem cientificado à defesa previamente. O defensor opôs-se, invocando o art. 479 do CPP. Sobre o tema, é correto afirmar:',
  alternativas: [
    'A) A exibição é permitida, desde que o objeto seja relevante para a descoberta da verdade real, princípio que prevalece sobre formalidades no Júri.',
    'B) A juntada do documento ou objeto e a ciência à parte contrária devem ocorrer com antecedência mínima de três dias úteis do julgamento.',
    'C) O prazo do art. 479 refere-se apenas à juntada, sendo suficiente a ciência no próprio dia do julgamento, antes do início dos trabalhos.',
    'D) A inobservância do prazo gera nulidade relativa, que deve ser arguida na ocasião, sob pena de preclusão.',
    'E) A regra não se aplica a documentos ou objetos já conhecidos das partes, mas que por esquecimento não foram juntados anteriormente.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme STJ (REsp 1.637288-SP), o prazo de três dias úteis aplica-se tanto à juntada quanto à ciência da parte contrária.'
},
{
  id: '71',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em um processo por homicídio doloso de competência do Júri, o juiz, ao proferir a sentença de pronúncia, utilizou-se de termos excessivamente contundentes e condenatórios, dando a entender que já estava plenamente convencido da culpa do réu. Sobre o "excesso de linguagem" e suas consequências, assinale a alternativa que reflete o entendimento dos tribunais superiores:',
  alternativas: [
    'A) O excesso de linguagem é vício sanável pelo simples envelopamento da sentença de pronúncia, afastando-se sua influência dos jurados.',
    'B) A anulação da sentença de pronúncia é obrigatória, determinando-se que outra seja prolatada com moderação, não sendo suficiente o desentranhamento.',
    'C) A nulidade só ocorre se o excesso de linguagem for replicado nos debates orais pelo Ministério Público, contaminando os jurados.',
    'D) Trata-se de mero vício de motivação, insuscetível de gerar nulidade, pois a pronúncia é juízo de admissibilidade e não se confunde com a sentença condenatória.',
    'E) A defesa pode, em plenário, requerer a exclusão dos trechos exagerados da pronúncia, devendo o juiz presidente acatar para evitar influência indevida.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Segundo STF e STJ (RHC 127522/BA, AgRg no REsp 1.442.002-AL), havendo excesso de linguagem, deve-se anular a pronúncia e determinar nova decisão, não bastando desentranhamento ou envelopamento.'
},
{
  id: '72',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre a execução provisória da pena após condenação pelo Tribunal do Júri, à luz dos julgados mais recentes do STF e do STJ, assinale a alternativa correta:',
  alternativas: [
    'A) É inconstitucional, pois viola o princípio da presunção de inocência, não podendo ser determinada antes do trânsito em julgado.',
    'B) É cabível apenas se a pena fixada for igual ou superior a 15 anos de reclusão, nos termos do art. 492, I, do CPP, com a redação da Lei 13.964/2019.',
    'C) É devida imediatamente, independentemente do quantum da pena aplicada, em respeito à soberania dos veredictos do Júri.',
    'D) É possível, mas somente após a confirmação da condenação pelo Tribunal de Justiça em segundo grau de jurisdição.',
    'E) É inadmissível no processo do Júri, pois a execução provisória só se aplica a crimes julgados pelos juízos singulares.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Segundo tese do STF no Tema 1.068 (RE 1.235.340/SC), confirmada pelo STJ, a execução é imediata independentemente da pena, em respeito à soberania dos veredictos.'
},
{
  id: '73',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Na fase de quesitação perante o Conselho de Sentença, a defesa sustentou como tese principal a legítima defesa e, de forma subsidiária, a desclassificação para lesão corporal grave. Sobre a ordem correta dos quesitos, de acordo com a jurisprudência, é correto afirmar:',
  alternativas: [
    'A) O quesito sobre desclassificação deve vir antes do quesito sobre legítima defesa, por ser análise de natureza prévia.',
    'B) O quesito genérico de absolvição ("O jurado absolve o acusado?") deve ser o primeiro formulado, independentemente das teses defensivas.',
    'C) O quesito sobre a tese defensiva principal (legítima defesa) deve preceder o quesito sobre a tese subsidiária (desclassificação).',
    'D) A ordem é irrelevante, desde que todos os quesitos obrigatórios e complementares sejam formulados.',
    'E) O juiz deve formular primeiro os quesitos da acusação (materialidade e autoria) e, em seguida, alternar entre quesitos defensivos e de qualificadoras, conforme a complexidade do caso.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Conforme STJ (REsp 1.509.504-SP), a tese principal absolutória deve ser quesitada antes da tese subsidiária de desclassificação, para garantir a plenitude da defesa.'
},
{
  id: '74',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Identifique a alternativa INCORRETA sobre aspectos processuais do Tribunal do Júri:',
  alternativas: [
    'A) A lista geral de jurados não pode incluir pessoa que tenha integrado Conselho de Sentença nos doze meses anteriores à sua publicação.',
    'B) O assistente de acusação tem direito à réplica, ainda que o Ministério Público tenha declinado de exercê-lo.',
    'C) Em caso de desaforamento fundado na dúvida sobre a imparcialidade dos jurados, a competência será deslocada obrigatoriamente para a comarca mais próxima.',
    'D) A competência para a execução provisória da pena, após condenação em júri desaforado, é do juízo originário, e não do presidente do Tribunal do Júri onde se realizou o julgamento.',
    'E) A decisão do juiz que proíbe a retirada dos autos do cartório nos cinco dias anteriores ao julgamento não configura ilegalidade.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta (por ser a incorreta). Segundo STJ (HC 219.739-RJ), em desaforamento por dúvida de imparcialidade, o deslocamento não é limitado às comarcas mais próximas, mas sim para onde o risco não exista.'
},
{
  id: '75',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'No contexto do Tribunal do Júri, a defesa de um acusado de feminicídio requereu ao juízo acesso aos antecedentes criminais da vítima, alegando que estes poderiam indicar o envolvimento dela com terceiros perigosos, os quais seriais os verdadeiros autores do crime. O magistrado indeferiu o pleito. À luz do entendimento do STJ, o indeferimento:',
  alternativas: [
    'A) Configura cerceamento de defesa, pois a plenitude de defesa no Júri autoriza a produção de qualquer prova relevante para a tese defensiva.',
    'B) É correto, pois a tentativa de desqualificar a vítima com base em seus antecedentes configura revitimização secundária, vedada por lei.',
    'C) É inadequado, pois os antecedentes da vítima são prova pertinente para aferir sua credibilidade como pessoa, especialmente em crimes passionais.',
    'D) Só seria legítimo se o pedido fosse genérico; a defesa deveria ter indicado processos criminais específicos em que a vítima figurasse como ré.',
    'E) Viola o princípio da ampla defesa, devendo ser reformado pelo Tribunal, com a determinação da juntada dos certidões criminais.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme STJ (AgRg no HC 953.647-SP), a tentativa de acessar antecedentes criminais da vítima para desqualificá-la configura revitimização secundária, vedada pelo art. 474-A do CPP.'
},
{
  id: '76',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Analise as seguintes assertivas acerca de questões controvertidas no Tribunal do Júri: I. É cabível a absolvição sumária do acusado inimputável na fase do art. 415 do CPP, mesmo que a defesa, além da tese de inimputabilidade, alegue genericamente a ausência de dolo e culpabilidade. II. A desclassificação do crime doloso contra a vida para outro de menor potencial ofensivo, reconhecida pelo Conselho de Sentença em favor de um corréu, é automaticamente extensível a outro corréu que participou da mesma conduta, independentemente de recurso. III. O princípio do in dubio pro societate autoriza o juiz, na pronúncia, a afastar qualificadoras sempre que houver dúvida sobre sua configuração. IV. A disponibilização tardia de depoimentos essenciais à defesa, que só foram integralmente acessados durante o julgamento, pode configurar cerceamento de defesa e anular tanto o júri quanto a pronúncia. Está correto o que se afirma em:',
  alternativas: [
    'A) I, II e III, apenas.',
    'B) I, II e IV, apenas.',
    'C) I, III e IV, apenas.',
    'D) II, III e IV, apenas.',
    'E) I, II, III e IV.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. I: STJ REsp 39.920-RJ. II: STJ RHC 67383-SP. IV: STJ REsp 2.050.711-DF. III: Errada - qualificadoras só podem ser excluídas quando manifestamente improcedentes.'
},
{
  id: '77',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Um réu foi condenado pelo Tribunal do Júri. Seu advogado, inconformado, interpôs recurso de apelação. No Tribunal de Justiça, o julgamento foi realizado por uma Câmara composta por um desembargador (presidente) e dois juízes convocados. A defesa alega violação ao princípio do juiz natural. De acordo com a jurisprudência do STF, a composição do órgão colegiado:',
  alternativas: [
    'A) Viola o princípio do juiz natural, pois órgãos colegiados de segundo grau devem ser compostos exclusivamente por desembargadores.',
    'B) Não viola o princípio do juiz natural, sendo válida a composição com maioria de juízes convocados, desde que presidida por desembargador.',
    'C) Viola o princípio, mas a nulidade é relativa, dependendo de demonstração de prejuízo concreto na análise do recurso.',
    'D) É nula apenas se os juízes convocados forem oriundos de comarca diversa daquela do processo de origem.',
    'E) É irrelevante, pois o recurso contra sentença do Júri tem efeito devolutivo e o reexame é restrito às questões de direito.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme STF (HC 101473/SP), não viola o princípio do juiz natural o julgamento por órgão colegiado presidido por desembargador com juízes convocados.'
},
{
  id: '78',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Sobre a utilização de prova ilícita e suas repercussões no processo do Tribunal do Júri, é correto afirmar:',
  alternativas: [
    'A) Se determinada prova é declarada ilícita, devem ser desentranhadas do processo não apenas a prova em si, mas também todas as peças judiciais que a ela façam referência, como a denúncia e a pronúncia.',
    'B) A decisão de pronúncia fundamentada em prova posteriormente declarada ilícita deve ser anulada, independentemente da existência de outros elementos de convicção lícitos.',
    'C) As peças processuais como a denúncia e a sentença de pronúncia não são consideradas "provas" para os fins do art. 157 do CPP, não sendo desentranhadas por fazerem referência a prova ilícita.',
    'D) A declaração de ilicitude de uma prova no curso do Júri obriga a dissolução imediata do conselho de sentença e a anulação de todos os atos processuais anteriores.',
    'E) A teoria dos frutos da árvore envenenada é mitigada no Júri, em razão da soberania dos veredictos e da íntima convicção dos jurados.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Conforme STF (RHC 137368/PR), as peças processuais não são "provas" e não precisam ser desentranhadas por referirem-se a prova ilícita.'
},
{
  id: '79',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Em um processo perante o Tribunal do Júri com três réus, todos defendidos pelo mesmo advogado constituído, foi exercido o direito de recusa imotivada de jurados. O defensor recusou, no total, nove jurados (três para cada réu). O juiz presidente indeferiu as recusas que excederam o limite de três, entendendo ser o direito da defesa, e não de cada acusado. Tal decisão:',
  alternativas: [
    'A) Está correta, pois o art. 469 do CPP garante até três recusas à defesa, independentemente do número de réus.',
    'B) Está incorreta, pois cada réu tem direito a três recusas imotivadas, podendo o defensor comum exercê-las em nome de todos, sob pena de violação à plenitude de defesa.',
    'C) Está correta, pois a recusa é ato personalíssimo do réu, que deve ser exercido por ele próprio, e não por intermédio do advogado.',
    'D) Está incorreta, mas o erro é meramente formal, não gerando nulidade se não houver prejuízo à composição final do conselho.',
    'E) Está correta, desde que o Ministério Público também tenha concordado com o limite de três recusas totais para evitar protelação.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme STJ (REsp 1.540.155-MT), cada réu tem direito a três recusas, podendo o defensor comum exercê-las para todos, sob pena de violar a plenitude de defesa.'
},
{
  id: '80',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Acerca da tese da "legítima defesa da honra" e seu tratamento pelos tribunais superiores, assinale a alternativa correta:',
  alternativas: [
    'A) Trata-se de causa de excludente de ilicitude reconhecida pelo Código Penal, podendo ser invocada normalmente nos plenários do Júri, especialmente em crimes passionais.',
    'B) O STF, ao julgar a ADPF 779, afastou sua aplicação, por considerar a tese incompatível com a dignidade da pessoa humana, a proteção à vida e a igualdade de gênero, proibindo seu uso em qualquer fase do processo.',
    'C) Apesar de criticada pela doutrina, a tese pode ser arguida pela defesa em plenário, cabendo exclusivamente aos jurados, por sua soberania, acolhê-la ou rejeitá-la.',
    'D) A utilização da tese pelo Ministério Público em sua acusação gera nulidade absoluta, mas se utilizada apenas pela defesa, configura exercício regular do direito de ampla defesa.',
    'E) A tese foi declarada inconstitucional apenas para os crimes de feminicídio, mas permanece aplicável aos homicídios dolosos simples.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme ADPF 779/DF (STF), a tese é inconstitucional e seu uso é proibido em qualquer fase processual, sob pena de nulidade.'
},
{
  id: '81',
  materia: 'Direito Processual Penal',
  assunto: '15. Tribunal do júri',
  enunciado: 'Um réu foi pronunciado por homicídio doloso. A defesa sustentou, na fase de alegações finais, que o fato configuraria homicídio culposo, por ausência de dolo. O juiz, na sentença de pronúncia, afastou expressamente a tese defensiva, afirmando estar convencido da existência de dolo eventual. Diante da jurisprudência do STJ, tal procedimento do juiz:',
  alternativas: [
    'A) É correto, pois na pronúncia o juiz deve analisar se o fato se amolda à figura típica dolosa, incluindo a distinção entre dolo e culpa.',
    'B) É incorreto, pois a análise aprofundada sobre a existência de dolo eventual ou culpa consciente é tarefa que deve ser reservada ao Corpo de Jurados, juiz natural da causa.',
    'C) É correto apenas se a acusação também tiver oferecido alegações finais especificamente sobre a modalidade de dolo.',
    'D) É incorreto, pois a pronúncia só pode versar sobre a materialidade e indícios de autoria, sendo vedada qualquer análise subjetiva.',
    'E) É correto, desde que fundamentado em laudo pericial conclusivo sobre o estado psicológico do agente no momento do fato.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme STJ (REsp 1.689.173-SC), a análise entre dolo eventual e culpa consciente é tarefa do Júri, não devendo o juiz da pronúncia adentrar esse mérito.'
},
{
  id: '82',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Sobre o procedimento dos crimes de responsabilidade dos funcionários públicos, analise as assertivas: I. A queixa ou denúncia deve ser instruída com documentos ou justificação que façam presumir a existência do delito, sendo admitida declaração fundamentada da impossibilidade de apresentação dessas provas. II. Após a reforma do art. 323 do CPP, todos os crimes praticados por funcionários públicos são considerados afiançáveis. III. O prazo para resposta escrita do acusado é de 15 dias, sendo obrigatória a nomeação de defensor se não for conhecida a residência do acusado. IV. O juiz poderá rejeitar a queixa ou denúncia em despacho fundamentado se convencido, pela resposta do acusado, da inexistência do crime. Está correto o que se afirma em:',
  alternativas: [
    'A) I e II, apenas.',
    'B) I, II e III, apenas.',
    'C) I, II e IV, apenas.',
    'D) II, III e IV, apenas.',
    'E) I, II, III e IV.'
  ],
  indiceCorreto: 4,
  explicacao: 'E) Correta. Todas as assertivas estão corretas conforme arts. 513, 514 e 516 do CPP. A assertiva III reflete o disposto no art. 514 e seu parágrafo único.'
},
{
  id: '83',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Em um processo por crime de ameaça (pena máxima de 1 ano) que seguiu o rito sumário, durante a audiência de instrução e julgamento, o Ministério Público arrolou 7 testemunhas e a defesa arrolou 6. O juiz, fundamentando-se no princípio da ampla defesa, permitiu a oitiva de todas as testemunhas arroladas. Considerando o disposto no art. 532 do CPP, a conduta do magistrado:',
  alternativas: [
    'A) Está correta, pois o princípio da ampla defesa prevalece sobre limitações procedimentais.',
    'B) Está incorreta, pois no procedimento sumário podem ser inquiridas apenas 5 testemunhas por parte.',
    'C) Está correta, desde que as testemunhas excedentes sejam ouvidas em audiência separada.',
    'D) Está incorreta, mas o vício é sanado se não houver prejuízo ao direito de defesa.',
    'E) Está correta, pois o limite de testemunhas aplica-se apenas aos crimes de menor potencial ofensivo.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. O art. 532 do CPP estabelece limite máximo de 5 testemunhas por parte no procedimento sumário, independentemente do fundamento da ampla defesa.'
},
{
  id: '84',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Identifique a alternativa INCORRETA acerca do procedimento dos crimes de calúnia e injúria de competência do juiz singular:',
  alternativas: [
    'A) Antes de receber a queixa, o juiz deve oferecer às partes oportunidade para reconciliação.',
    'B) Na audiência de reconciliação, as partes são ouvidas separadamente, sem a presença dos advogados.',
    'C) Em caso de reconciliação, após assinatura do termo de desistência pelo querelante, a queixa será arquivada.',
    'D) Quando for oferecida exceção da verdade, o prazo para contestação pelo querelante é de 10 dias.',
    'E) O juiz pode promover entendimento entre as partes se achar provável a reconciliação após ouvi-las.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta (por ser a incorreta). O prazo para contestação da exceção da verdade é de 2 dias, conforme art. 523 do CPP, não 10 dias.'
},
{
  id: '85',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Os autos originais de um processo penal por estelionato foram destruídos por um incêndio no fórum quando o processo estava em segundo grau de jurisdição. Não existe cópia autêntica ou certidão do processo. Sobre o procedimento de restauração, assinale a alternativa correta:',
  alternativas: [
    'A) A restauração deve ser realizada na segunda instância, onde os autos se extraviaram.',
    'B) As partes devem ser citadas por edital com prazo de 15 dias para o processo de restauração.',
    'C) Os selos e taxas judiciárias já pagos nos autos originais deverão ser novamente cobrados.',
    'D) A sentença condenatória em execução continuará a produzir efeito até a decisão que julgue restaurados os autos.',
    'E) As testemunhas falecidas não podem ser substituídas, devendo a prova testemunhal ser considerada perdida.'
  ],
  indiceCorreto: 3,
  explicacao: 'D) Correta. Conforme art. 548 do CPP, a sentença condenatória em execução continua produzindo efeito até decisão sobre restauração. A) Incorreta - a restauração é na 1ª instância (art. 541, §3º). B) Incorreta - prazo é 10 dias (art. 541, §2º, c). C) Incorreta - não há nova cobrança (art. 545). E) Incorreta - testemunhas podem ser substituídas (art. 543, I).'
},
{
  id: '86',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Um autor musical descobriu que suas composições estavam sendo reproduzidas e comercializadas sem autorização. Requereu busca e apreensão dos CDs piratas. A diligência foi realizada por dois peritos que concluíram não haver fundamento para a apreensão. Sobre os desdobramentos processuais, assinale a correta:',
  alternativas: [
    'A) O laudo pericial é definitivo, impedindo qualquer apreensão posterior.',
    'B) O requerente pode impugnar o laudo, cabendo ao juiz ordenar a apreensão se reconhecer a improcedência das razões dos peritos.',
    'C) A queixa não pode mais ser oferecida, pois a perícia foi contrária à apreensão.',
    'D) Deve ser nomeado novo perito para contraprova obrigatória.',
    'E) O Ministério Público deve ser ouvido previamente sobre a impugnação.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 527, parágrafo único, do CPP, o requerente pode impugnar o laudo contrário, cabendo ao juiz ordenar a apreensão se reconhecer a improcedência das razões dos peritos.'
},
{
  id: '87',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Sobre as alegações finais no procedimento sumário, é correto afirmar:',
  alternativas: [
    'A) Devem ser apresentadas por escrito, com prazo de 5 dias para cada parte.',
    'B) São orais, com tempo máximo de 20 minutos para cada parte, prorrogável por mais 10.',
    'C) O assistente do Ministério Público não tem direito a alegações finais no rito sumário.',
    'D) Havendo mais de um acusado, o tempo para defesa é dividido igualmente entre eles.',
    'E) O juiz deve proferir sentença apenas após 10 dias das alegações finais.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 534 do CPP, as alegações são orais com tempo de 20 minutos prorrogáveis por mais 10. C) Incorreta - o assistente tem direito a 10 minutos. D) Incorreta - o tempo é individual (art. 534, §1º). E) Incorreta - sentença é proferida a seguir.'
},
{
  id: '88',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'João, funcionário público municipal, foi denunciado por peculato. A denúncia foi instruída com declaração fundamentada do Ministério Público sobre a impossibilidade de apresentação de documentos, alegando sigilo das investigações. O juiz recebeu a denúncia e notificou o acusado para resposta escrita. João, que se encontrava em viagem ao exterior, não foi localizado para citação. Diante disso, o juiz nomeou defensor dativo para apresentar a resposta. Considerando o art. 514 do CPP e sua aplicação após a reforma do art. 323, assinale a alternativa correta:',
  alternativas: [
    'A) O juiz agiu corretamente, pois a nomeação de defensor é obrigatória quando não conhecida a residência do acusado.',
    'B) O juiz errou, pois deveria ter rejeitado a denúncia por falta de instrução com documentos.',
    'C) O juiz agiu corretamente apenas na nomeação do defensor, mas errou ao receber denúncia sem documentos.',
    'D) O juiz deveria ter determinado a prisão preventiva do acusado por estar fora do país.',
    'E) A nomeação de defensor só seria cabível após esgotadas todas as tentativas de citação pessoal.'
  ],
  indiceCorreto: 0,
  explicacao: 'A) Correta. Conforme art. 514, parágrafo único, do CPP, se não for conhecida a residência ou o acusado estiver fora da jurisdição, nomeia-se defensor para resposta. A denúncia com declaração de impossibilidade é admitida pelo art. 513.'
},
{
  id: '89',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Uma editora foi vítima de violação de direitos autorais. Requereu e obteve apreensão de livros piratas. Após homologação do laudo pericial, a editora não ofereceu queixa no prazo de 30 dias. Decorrido esse prazo, o Ministério Público, tomando conhecimento dos fatos, ofereceu denúncia. Sobre a admissibilidade da ação penal, assinale a alternativa correta:',
  alternativas: [
    'A) A denúncia é inadmissível, pois tratando-se de crime de ação pública condicionada, o prazo do ofendido é peremptório.',
    'B) A denúncia é admissível, pois o Ministério Público tem legitimidade para agir independentemente do prazo do ofendido.',
    'C) A denúncia é inadmissível, mas o ofendido ainda pode oferecer queixa com justificação do retardamento.',
    'D) A denúncia é admissível apenas se o crime deixou vestígios que foram periciados.',
    'E) A denúncia é inadmissível, pois nos crimes contra propriedade imaterial a ação é sempre privada.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 529, parágrafo único, do CPP, se o crime for de ação pública e não tiver sido oferecida queixa no prazo, será dada vista ao MP, que pode oferecer denúncia. A ação não se extingue pela inércia do ofendido.'
},
{
  id: '90',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Analise as assertivas sobre o procedimento sumário: I. A audiência de instrução e julgamento deve ser realizada no prazo máximo de 30 dias. II. Nenhum ato será adiado, salvo quando imprescindível a prova faltante. III. As testemunhas que comparecerem serão inquiridas independentemente da suspensão da audiência. IV. O procedimento sumário aplica-se apenas aos crimes de menor potencial ofensivo. Está correto o que se afirma em:',
  alternativas: [
    'A) I e II, apenas.',
    'B) I, II e III, apenas.',
    'C) I, III e IV, apenas.',
    'D) II, III e IV, apenas.',
    'E) I, II, III e IV.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. I, II e III estão corretas conforme arts. 531, 535 e 536 do CPP. IV está incorreta - o procedimento sumário também pode ser adotado quando o juizado especial encaminhar ao juízo comum (art. 538).'
},
{
  id: '91',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Carlos moveu queixa-crime contra Pedro por injúria racial. Antes de receber a queixa, o juiz convocou as partes para audiência de reconciliação. Pedro compareceu com advogado, mas Carlos compareceu sem. O juiz determinou que os advogados aguardassem fora da sala e ouviu as partes separadamente. Após a oitiva, considerou provável a reconciliação e promoveu entendimento entre eles, resultando em acordo. Sobre a legalidade do procedimento, assinale a correta:',
  alternativas: [
    'A) O juiz agiu corretamente em todos os aspectos, em conformidade com o art. 520 do CPP.',
    'B) O juiz errou ao ouvir as partes separadamente, pois a reconciliação exige confronto direto.',
    'C) O juiz errou ao excluir os advogados, violando o direito à assistência jurídica.',
    'D) O juiz agiu corretamente, exceto pela promoção do entendimento, que compete exclusivamente às partes.',
    'E) O juiz deveria ter lavrado termo da audiência de reconciliação.'
  ],
  indiceCorreto: 0,
  explicacao: 'A) Correta. Conforme art. 520 do CPP, o juiz ouve as partes separadamente, sem a presença dos advogados, e não se lavra termo. O art. 521 autoriza o juiz a promover entendimento se achar provável a reconciliação.'
},
{
  id: '92',
  materia: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  assunto: 'Do processo de restauração de autos extraviados ou destruídos',
  enunciado: 'Em um processo de restauração de autos extraviados, foram realizadas diversas diligências para reconstituir a prova. Sobre as regras aplicáveis a essas diligências, assinale a alternativa INCORRETA:',
  alternativas: [
    'A) As testemunhas podem ser substituídas se tiverem falecido ou se encontrarem em lugar não sabido.',
    'B) Os exames periciais, quando possível, serão repetidos preferencialmente pelos mesmos peritos.',
    'A) A prova documental será reproduzida apenas por meio de cópia autêntica, não admitindo testemunhas.',
    'D) Podem ser inquiridas autoridades e serventuários que tenham funcionado no processo original.',
    'E) As diligências devem concluir-se dentro de 20 dias, salvo motivo de força maior.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta (por ser a incorreta). A prova documental pode ser reproduzida por testemunhas quando impossível a cópia autêntica (art. 543, III). A alternativa está errada por dizer "apenas".'
},
{
  id: '93',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Sobre a apreensão nos crimes contra a propriedade imaterial, à luz dos arts. 530-B a 530-I do CPP, identifique a alternativa correta:',
  alternativas: [
    'A) A apreensão deve abranger apenas amostras dos bens ilicitamente reproduzidos.',
    'B) Os titulares de direito de autor são os fiéis depositários dos bens apreendidos.',
    'C) O laudo pericial deve ser elaborado necessariamente por perito oficial, não admitindo pessoa tecnicamente habilitada.',
    'D) A destruição dos bens apreendidos só pode ser determinada na sentença condenatória definitiva.',
    'E) As associações de titulares de direitos não podem atuar como assistentes da acusação.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 530-E do CPP, os titulares de direito de autor são os fiéis depositários. A) Incorreta - apreende-se totalidade (art. 530-B). C) Incorreta - admite pessoa habilitada (art. 530-D). D) Incorreta - pode ocorrer antes (art. 530-F). E) Incorreta - podem atuar como assistentes (art. 530-H).'
},
{
  id: '94',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Em um processo que seguiu o rito sumário, o advogado de defesa requereu o adiamento da audiência porque uma testemunha imprescindível não compareceu. A testemunha havia sido regularmente intimada, mas não indicada como imprescindível. O juiz indeferiu o pedido e prosseguiu com a audiência, determinando a condução coercitiva da testemunha para nova data. Considerando o art. 535 do CPP, a decisão do magistrado:',
  alternativas: [
    'A) Está correta, pois no procedimento sumário nenhum ato será adiado, salvo quando imprescindível a prova faltante.',
    'B) Está incorreta, pois a ausência de qualquer testemunha obriga o adiamento da audiência.',
    'C) Está correta apenas se a testemunha não intimada com cláusula de imprescindibilidade.',
    'D) Está incorreta, pois a condução coercitiva só é admitida para o réu, não para testemunhas.',
    'E) Está correta, desde que a acusação tenha concordado com o prosseguimento.'
  ],
  indiceCorreto: 0,
  explicacao: 'A) Correta. Conforme art. 535 do CPP, no procedimento sumário nenhum ato será adiado, salvo quando imprescindível a prova faltante. A testemunha não indicada como imprescindível não justifica adiamento.'
},
{
  id: '95',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Maria, servidora pública federal, foi denunciada por corrupção passiva. A denúncia foi instruída com documentos que faziam presumir o delito. Citada, Maria apresentou resposta escrita fundamentada, demonstrando documentalmente a inexistência do crime. O juiz, analisando a resposta, convenceu-se da inexistência do delito. Sobre a possibilidade de rejeição da denúncia nessa fase, assinale a correta:',
  alternativas: [
    'A) O juiz não pode rejeitar a denúncia, pois esta foi recebida e instruída regularmente.',
    'B) O juiz pode rejeitar a denúncia em despacho fundamentado, conforme art. 516 do CPP.',
    'C) O juiz deve remeter os autos ao Tribunal para análise da rejeição da denúncia.',
    'D) O juiz pode rejeitar apenas se o Ministério Público concordar com a inexistência do crime.',
    'E) O juiz deve determinar a absolvição sumária do acusado.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 516 do CPP, o juiz rejeitará a queixa ou denúncia em despacho fundamentado se convencido, pela resposta do acusado, da inexistência do crime ou da improcedência da ação.'
},
{
  id: '96',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Uma empresa de software identificou que seu programa estava sendo copiado e comercializado ilegalmente. Requereu busca e apreensão, que foi realizada por dois peritos. Sobre o laudo pericial nesses casos, assinale a alternativa correta:',
  alternativas: [
    'A) O laudo deve ser apresentado dentro de 5 dias após o encerramento da diligência.',
    'B) Apenas um perito é necessário quando a ação penal for pública.',
    'C) O laudo é dispensável se houver confissão do acusado.',
    'D) O laudo deve ser homologado pelo Ministério Público antes de ser juntado aos autos.',
    'E) O laudo pericial só é exigido quando o crime deixou vestígios materiais.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 530-D, parágrafo único, do CPP, quando a ação penal for pública, basta um único perito ou pessoa tecnicamente habilitada. A) Incorreta - prazo é 3 dias (art. 527).'
},
{
  id: '97',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Pedro foi processado por calúnia contra João. Em sede de exceção da verdade, alegou que os fatos imputados eram verídicos. João, querelante, requereu a inquirição de 8 testemunhas arroladas na queixa para comprovar a falsidade das alegações. Considerando o art. 523 do CPP, o juiz deve:',
  alternativas: [
    'A) Permitir a inquirição de todas as 8 testemunhas, pois não há limite legal.',
    'B) Permitir apenas 5 testemunhas, que é o máximo legal no procedimento especial.',
    'C) Permitir apenas as testemunhas arroladas na queixa ou outras indicadas no prazo de 2 dias.',
    'D) Indeferir o requerimento, pois a exceção da verdade deve ser resolvida apenas com documentos.',
    'E) Determinar produção antecipada de prova antes do recebimento da queixa.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Conforme art. 523 do CPP, o querelante pode contestar a exceção no prazo de 2 dias, podendo ser inquiridas as testemunhas arroladas na queixa, ou outras indicadas naquele prazo.'
},
{
  id: '98',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Os autos de um processo penal foram extraviados após sentença condenatória transitada em julgado, quando o réu já cumpria pena. Iniciado o processo de restauração, apareceram os autos originais durante as diligências. Sobre o procedimento a ser adotado, assinale a correta:',
  alternativas: [
    'A) Os autos da restauração devem ser arquivados, prevalecendo os originais.',
    'B) Os autos originais devem ser apensados aos da restauração, continuando o processo nestes.',
    'C) Deve ser realizado novo julgamento com base nos autos restaurados.',
    'D) O processo de restauração deve continuar independentemente do aparecimento dos originais.',
    'E) Os autos originais devem ser destruídos por já terem sido substituídos.'
  ],
  indiceCorreto: 1,
  explicacao: 'B) Correta. Conforme art. 547, parágrafo único, do CPP, se aparecerem os autos originais, nestes continuará o processo, apensos a eles os autos da restauração.'
},
{
  id: '99',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Sobre a aplicação do procedimento sumário aos crimes de menor potencial ofensivo encaminhados pelo juizado especial criminal, assinale a alternativa correta:',
  alternativas: [
    'A) O procedimento sumário é obrigatório em todos os casos encaminhados pelo juizado especial.',
    'B) Aplica-se apenas quando o juizado especial entender pela impossibilidade de conciliação.',
    'C) Observar-se-á o procedimento sumário previsto no Capítulo V do CPP.',
    'D) O rito sumário só se aplica se o acusado não tiver recursos para pagar transação penal.',
    'E) É facultado ao juiz escolher entre o rito sumário ou o ordinário.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Conforme art. 538 do CPP, quando o juizado especial encaminhar ao juízo comum as peças existentes para adoção de outro procedimento, observar-se-á o procedimento sumário previsto no Capítulo V.'
},
{
  id: '100',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Uma gravadora moveu ação penal por violação de direitos autorais contra uma empresa que reproduzia CDs piratas. Na sentença condenatória, o juiz determinou a destruição dos CDs apreendidos e o perdimento dos equipamentos usados para reprodução. Sobre a destinação desses equipamentos, conforme art. 530-G do CPP, assinale a alternativa correta:',
  alternativas: [
    'A) Devem ser devolvidos ao acusado após o pagamento da multa.',
    'B) Devem ser destruídos obrigatoriamente junto com os CDs.',
    'C) Podem ser doados a instituições públicas de ensino e pesquisa.',
    'D) Devem ser leiloados e o produto revertido ao ofendido.',
    'E) Devem ser guardados para eventual reutilização legal.'
  ],
  indiceCorreto: 2,
  explicacao: 'C) Correta. Conforme art. 530-G do CPP, os equipamentos podem ser doados aos Estados, Municípios, Distrito Federal, instituições públicas de ensino e pesquisa ou de assistência social, entre outras destinações.'
},
{
  id: '101',
  materia: 'Direito Processual Penal',
  assunto: '14. Procedimentos especiais (crimes praticados por funcionários públicos contra a administração pública (arts. 513 a 518 do cpp). Dos crimes contra a honra (arts. 519 a 523 do cpp). Procedimento dos crimes contra a propriedade imaterial (arts. 524 a 530 do cpp). 10.10 procedimento de apuração dos crimes de imprensa (lei 5.250/1967)',
  enunciado: 'Analise as assertivas sobre o processo dos crimes de responsabilidade dos funcionários públicos após a nova redação do art. 323 do CPP: I. Todos os crimes praticados por funcionários públicos são afiançáveis. II. A distinção entre crimes afiançáveis e não afiançáveis perdeu o sentido. III. A prisão preventiva é inadmissível em crimes de funcionários públicos. IV. O procedimento especial só se aplica aos crimes funcionais propriamente ditos. Está correto o que se afirma em:',
  alternativas: [
    'A) I e II, apenas.',
    'B) I e III, apenas.',
    'C) I, II e IV, apenas.',
    'D) II, III e IV, apenas.',
    'E) I, II, III e IV.'
  ],
  indiceCorreto: 0,
  explicacao: 'A) Correta. I e II estão corretas conforme comentário ao art. 514. III está incorreta - a prisão preventiva ainda é cabível. IV está incorreta - o procedimento aplica-se a crimes de responsabilidade.'
}
  

];

export const CORES_TEMA = {
  madeira: '#B58863',
  bege: '#F0D9B5',
  claro: '#F7F7F7',
  oliva: '#556B2F'
};
