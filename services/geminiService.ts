import { GoogleGenAI } from "@google/genai";
import { Pillar, Channel, GeneratedContent } from '../types';

const apiKey = process.env.API_KEY || '';
const ai = new GoogleGenAI({ apiKey });

export const generateMarketingContent = async (
  pillar: Pillar,
  productOrTopic: string,
  channel: Channel
): Promise<GeneratedContent> => {
  if (!apiKey) {
    throw new Error("API Key is missing. Please select a key.");
  }

  const systemInstruction = `
    Você é um estrategista de Marketing Digital Sênior atuando para a 'Lojas MM Assis Chateaubriand'.
    
    Perfil da Marca:
    - Tom de voz: Próximo, popular, energético e confiável.
    - Mascote: Xicória.
    - Público: Família Chateaubriandense (Classe C/D, valorizam atendimento olho no olho e parcelas que cabem no bolso).
    - Foco: Levar o cliente para a loja ou para o WhatsApp (Omnichannel).
    
    Objetivo:
    Criar um conteúdo altamente engajador e focado em vendas ou relacionamento.
  `;

  const prompt = `
    Crie um conteúdo para o canal: ${channel}.
    Pilar de Conteúdo: ${pillar}.
    Produto ou Tema Foco: ${productOrTopic}.

    Retorne APENAS um objeto JSON com a seguinte estrutura (sem markdown code blocks):
    {
      "caption": "O texto da legenda ou script do vídeo/mensagem. Use emojis. Mencione 'Corre pra MM' ou 'Chama no Zap'.",
      "hashtags": ["lista", "de", "hashtags", "relevantes", "local", "assis"],
      "tips": "Uma dica visual curta para a foto ou vídeo (ex: 'Mostre o preço bem grande', 'Use música animada')."
    }
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
      config: {
        systemInstruction: systemInstruction,
        responseMimeType: "application/json"
      }
    });

    const text = response.text;
    if (!text) throw new Error("No response from AI");

    return JSON.parse(text) as GeneratedContent;
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};