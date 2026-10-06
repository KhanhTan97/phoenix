import { GoogleGenAI } from "@google/genai";

const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_API_KEY });

const model = async (userPrompt: string) => {
  const maxRetries = 3;

  for (let attempt = 0; attempt < maxRetries; attempt++) {
    try {
      const interaction = await ai.interactions.create({
        model: "gemini-3.8-flash",
        input: userPrompt,
      });

      return interaction.output_text ?? "";
    } catch (error: any) {
      const status = error?.status ?? error?.response?.status;

      if (status !== 503) {
        throw error;
      }

      if (attempt === maxRetries - 1) {
        throw new Error("Gemini đang quá tải. Vui lòng thử lại sau ít phút.");
      }

      const delay = 1000 * 2 ** attempt;

      console.log(
        `Gemini 503. Retry ${attempt + 1}/${maxRetries} after ${delay}ms`,
      );

      await sleep(delay);
    }
  }
};

export default model;
