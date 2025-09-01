import dotenv from 'dotenv';
import { GoogleGenerativeAI } from "@google/generative-ai";

dotenv.config();


const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

 async function careerroadmap(goal, skills) {
  try {
    const prompt = `
You are an experienced AI career mentor specializing in personalized guidance.

Your task is to create a detailed, realistic, and actionable step-by-step career roadmap for someone who wants to become a ${goal}. 
The person already has the following skills:${skills}.

Instructions:
1. Provide the roadmap in plain text only (no Markdown, no special characters like *, #, or -).
2. Number each step explicitly in this format: Step 1:, Step 2:, Step 3:, etc.
3. Each step should be clear, concise, and actionable (avoid vague suggestions).
4. Cover essential phases such as foundational knowledge, advanced skills, practical projects, certifications, portfolio building, networking, and job preparation.
5. If applicable, include estimated timeframes for each step (e.g., 2-3 months).
6. Use simple and professional language, suitable for direct display in a text interface.

Return only the roadmap, nothing else.;
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
  parts: [
    {
      text: `You are a highly knowledgeable and helpful AI career mentor.

Your task:
1. Understand the user's request and context carefully.
2. Provide a clear, accurate, and practical response in simple, easy-to-understand language.
3. Avoid unnecessary jargon or overly complex explanations.
4. Structure the answer logically and concisely so that it is actionable and helpful.

Question:
${prompt}

Important:
- Do not include any irrelevant information.
- Keep the tone friendly, professional, and supportive.
- If the response involves steps or a process, number them clearly (Step 1:, Step 2:, etc.).
- Return the response in plain text without special characters, Markdown, or extra formatting.

Now provide the best possible response.
`
    }
  ]
}
);

    const response = await result.response.text();
    return response;

  } catch (err) {
    console.error("❌ AskAnything Error:", err.message);
    return "Something went wrong!";
  }
}


export { askAnything };
export { careerroadmap };
