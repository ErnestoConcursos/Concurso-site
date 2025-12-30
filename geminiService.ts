
import { GoogleGenAI, Type } from "@google/genai";
import { SessaoResposta, Questao } from "./types";
import { TOPICOS_POR_MATERIA } from "./constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export async function obterDiagnostico(
  sessoes: SessaoResposta[], 
  questoes: Questao[]
) {
  const resumoSessao = sessoes.map(s => {
    const q = questoes.find(q => q.id === s.idQuestao);
    return {
      materia: q?.materia,
      assunto: q?.assunto,
      estaCorreta: s.estaCorreta
    };
  });

  const prompt = `Analise o seguinte desempenho de um estudante de concursos jurídicos de alto nível (Magistratura/MP) e forneça um diagnóstico estratégico.
  
  Dados da Sessão:
  ${JSON.stringify(resumoSessao, null, 2)}
  
  Forneça uma análise em JSON com:
  1. "pontosFortes": array de strings
  2. "pontosFracos": array de strings
  3. "direcaoEstudo": string (conselho prático de onde focar agora)
  4. "proximaMateria": string (sugestão da próxima matéria a atacar baseada nos erros)`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            pontosFortes: { type: Type.ARRAY, items: { type: Type.STRING } },
            pontosFracos: { type: Type.ARRAY, items: { type: Type.STRING } },
            direcaoEstudo: { type: Type.STRING },
            proximaMateria: { type: Type.STRING }
          },
          required: ["pontosFortes", "pontosFracos", "direcaoEstudo", "proximaMateria"]
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Resposta vazia da IA");
    }
    return JSON.parse(responseText);
  } catch (error) {
    console.error("Erro no Gemini:", error);
    return null;
  }
}

export async function processarQuestoesLote(textoBruto: string): Promise<Questao[]> {
  const materiasDisponiveis = Object.keys(TOPICOS_POR_MATERIA).join(", ");
  
  const prompt = `Você é um especialista em estruturação de dados para concursos jurídicos de alto nível. 
  Extraia TODAS as questões do texto abaixo.
  
  DIRETRIZES DE MATÉRIA E ASSUNTO:
  - Use EXATAMENTE um destes nomes para "materia": ${materiasDisponiveis}.
  - Para o campo "assunto", tente enquadrar no tópico mais relevante da disciplina.
  
  REGRAS DE ESTRUTURA:
  1. Cada questão DEVE ter EXATAMENTE 5 alternativas (A, B, C, D, E).
  2. O campo "indiceCorreto" deve ser um número de 0 a 4 (0=A, 4=E).

  TEXTO BRUTO:
  ${textoBruto}`;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              materia: { type: Type.STRING },
              assunto: { type: Type.STRING },
              enunciado: { type: Type.STRING },
              alternativas: { type: Type.ARRAY, items: { type: Type.STRING }, minItems: 5, maxItems: 5 },
              indiceCorreto: { type: Type.INTEGER },
              explicacao: { type: Type.STRING }
            },
            required: ["materia", "assunto", "enunciado", "alternativas", "indiceCorreto", "explicacao"]
          }
        }
      }
    });

    const responseText = response.text;
    if (!responseText) {
      throw new Error("Resposta vazia da IA");
    }
    const parsed = JSON.parse(responseText);
    return parsed.map((q: any) => ({
      ...q,
      id: Math.random().toString(36).substr(2, 9) + Date.now().toString()
    }));
  } catch (error) {
    console.error("Erro no processamento de lote:", error);
    throw new Error("Não foi possível processar o texto.");
  }
}
