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
    explicacao: 'D) Correta. Condições objetivas de punibilidade são requisitos extrínsecos ao crime (ex: autorização para proceder, representação) cuja ausência impede a punição, mas não descaracteriza o crime em si. A) é condição de procedibilidade. B) há divergência (elemento normativo ou condição).
];

export const CORES_TEMA = {
  madeira: '#B58863',
  bege: '#F0D9B5',
  claro: '#F7F7F7',
  oliva: '#556B2F'
};
