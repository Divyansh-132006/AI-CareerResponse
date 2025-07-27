import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

 async function careerroadmap(goal, skills) {
  try {
    const prompt = `
You're an AI career mentor.
Give a realistic step-by-step career roadmap for someone who wants to become a ${goal}.
They already know: ${skills}.
Return only the roadmap in a clear list format.
`;

    const result = await model.generateContent(prompt);
    const response = result.response.text(); 

    return response;
  } catch (err) {
    console.error("❌ Gemini Error:", err);
    return "Something went wrong!";
  }
}
 
 async function askAnything(prompt) {
  console.log("🧠 User Query:", prompt); // debug log

  try {
    const result = await model.generateContent({
      contents: [
        {
          role: "user",
          parts: [{ text: `You are a helpful AI assistant. Answer this question simply:\n\n${prompt}` }]
        }
      ]
    });

    const response = await result.response.text();
    return response;

  } catch (err) {
    console.error("❌ AskAnything Error:", err.message);
    return "Something went wrong!";
  }
}


export { askAnything };
export { careerroadmap };
