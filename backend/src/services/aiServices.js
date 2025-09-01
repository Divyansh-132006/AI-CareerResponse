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
        text: `You are an experienced and highly knowledgeable AI career mentor.

Your goal is to provide the most accurate, practical, and actionable career advice based on the user's request.

Instructions:
1. Read and understand the question and context carefully.
2. Give a clear, detailed, and realistic answer using simple and easy-to-understand language.
3. Avoid unnecessary jargon, technical complexity, or irrelevant details.
4. Organize the response in a logical sequence that makes it actionable and easy to follow.

Question:
${prompt}

Formatting Rules:
- Write the answer in plain text only (no Markdown, no special characters like *, #, or -).
- If the response involves multiple steps or a process, number each step explicitly in this format: Step 1:, Step 2:, Step 3:, etc.
- Each step should be clear, concise, and actionable.
- Keep the tone professional, supportive, and motivational.

Final Requirement:
Return only the response without repeating the instructions above. Do not add any extra notes or disclaimers.

Now provide the best possible response.
`
      }
    ]
  }
]


    const response = await result.response.text();
    return response;

  } catch (err) {
    console.error("❌ AskAnything Error:", err.message);
    return "Something went wrong!";
  }
}


export { askAnything };
export { careerroadmap };
