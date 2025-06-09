
import { GoogleGenAI, GenerateContentResponse } from "@google/genai";

// Ensure API_KEY is sourced exclusively from process.env.API_KEY as per guidelines
const API_KEY = process.env.API_KEY;

let ai: GoogleGenAI | null = null;

if (API_KEY) {
  try {
    ai = new GoogleGenAI({ apiKey: API_KEY });
  } catch (error) {
    console.error("Failed to initialize GoogleGenAI:", error);
    // Potentially alert the user or disable AI features more gracefully
  }
} else {
  console.warn("API_KEY environment variable not found. AI Assistant will be disabled.");
}

const MODEL_NAME = "gemini-2.5-flash-preview-04-17";

export const generateText = async (prompt: string): Promise<string> => {
  if (!ai) {
    return "AI Assistant is currently unavailable (API key not configured or initialization failed).";
  }
  try {
    const response: GenerateContentResponse = await ai.models.generateContent({
      model: MODEL_NAME,
      contents: prompt,
      // Consider adding config for safety settings, etc., if needed
      // config: {
      //   temperature: 0.7,
      //   topK: 1,
      //   topP: 1,
      //   maxOutputTokens: 2048,
      // },
    });
    return response.text;
  } catch (error) {
    console.error("Error generating text from Gemini:", error);
    // Provide a more user-friendly error message
    if (error instanceof Error) {
      // Check for specific API error types if the SDK provides them
      return `AI Error: ${error.message}. Please ensure the API key is valid and the Gemini API is enabled for your project.`;
    }
    return "An unknown error occurred while communicating with the AI assistant.";
  }
};