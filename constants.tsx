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
  }
];

export const CORES_TEMA = {
  madeira: '#B58863',
  bege: '#F0D9B5',
  claro: '#F7F7F7',
  oliva: '#556B2F'
};
