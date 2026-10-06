import model from "@/lib/googleAi";

const getAiResponse = async (userPrompt: string): Promise<string> => {
  try {
    return await model(userPrompt);
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
};

const getConversationTitle = async (userPrompt: string): Promise<string> => {
  try {
    const input = `Given a user prompt, generate a concise and informative title that accurately describes the conversation. Consider keywords, topics, and the overal intent of the prompt. Response in plain text format, not markdown.
        
      Prompt: ${userPrompt}
      `;

    return await model(input);
  } catch (error) {
    console.error("Gemini API error:", error);
    throw error;
  }
};

export { getConversationTitle, getAiResponse };
