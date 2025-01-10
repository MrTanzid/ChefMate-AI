import { GoogleGenerativeAI } from "@google/generative-ai";
import type { PreparationMethod } from "../types/Recipe";

const genAI = new GoogleGenerativeAI("AIzaSyCVkkK2AST6hcnp-Yg-MnlME41DmS9pKqw");

export async function generateRecipe(
  ingredients: string[], 
  restrictions: string[],
  preparationMethod: PreparationMethod
) {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });

    const prompt = `Create a detailed recipe using these ingredients: ${ingredients.join(", ")}
    ${restrictions.length > 0 ? `\nDietary restrictions: ${restrictions.join(", ")}` : ""}
    ${preparationMethod !== 'any' ? `\nPreparation method: ${preparationMethod}` : ""}
    
    Please provide:
    1. Recipe name
    2. Total preparation and cooking time
    3. Detailed list of ingredients with measurements
    4. Step-by-step cooking instructions
    5. Nutritional information (calories, protein, carbs, fat)
    6. Number of servings`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw new Error("Failed to generate recipe. Please try again.");
  }
}