import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { log } from "console";

const API_KEY = process.env.GEMINI_API_KEY as string;
const GEMINI_MODEL = "gemini-1.5-flash"; // Modèle Gemini spécifique.

export const runtime = "edge"; // Spécifie l'utilisation d'Edge Runtime.

export async function POST(req: Request) {
  if (!API_KEY) {
    return NextResponse.json(
      {
        error:
          "Missing GEMINI_API_KEY. Make sure to define it in your .env file.",
      },
      { status: 500 },
    );
  }

  try {
    const body = await req.json();
    const { image, prompt } = body;
    if (!image || !prompt) {
      return NextResponse.json(
        { error: "Both 'image' and 'prompt' are required." },
        { status: 400 },
      );
    }
    // console.log("image", image);
    console.log("prompt", prompt);

    // Initialisez GoogleGenerativeAI avec la clé API.
    const genAI = new GoogleGenerativeAI(API_KEY);

    // Récupérez le modèle génératif Gemini.
    const model = genAI.getGenerativeModel({
      model: GEMINI_MODEL,
    });

    // Appelez l'API Gemini pour générer du contenu.
    const cleanBase64 = image.replace(/^data:image\/\w+;base64,/, "");
    const result = await model.generateContent([
      {
        inlineData: {
          mimeType: "image/jpeg",
          data: cleanBase64,
        },
      },
      { text: prompt },
    ]);
    if (result?.response?.candidates && result.response.candidates.length > 0) {
      console.log("result", result.response.candidates[0].content.parts[0].text);
      return NextResponse.json({ generatedText: result.response.candidates[0].content.parts[0].text });
    } else {
      console.log("No candidates found in the response.");
    }
    // Retournez le texte généré.
  } catch (error) {
    console.error("Error calling Gemini API:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
