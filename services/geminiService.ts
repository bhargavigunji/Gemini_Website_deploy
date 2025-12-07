import { GoogleGenAI } from "@google/genai";
import { RESUME_DATA, EXPERIENCE, PROJECTS, SKILLS, EDUCATION, CERTIFICATIONS } from "../constants";

// Construct a system prompt based on the portfolio data
const SYSTEM_INSTRUCTION = `
You are an AI assistant for Bhargavi Gunji's portfolio website. 
Your goal is to answer questions about Bhargavi's professional background, skills, and projects in a friendly and professional manner.

Here is Bhargavi's Resume Context:
Name: ${RESUME_DATA.name}
Role: ${RESUME_DATA.role}
About: ${RESUME_DATA.about}
Contact: ${RESUME_DATA.email}
Location: ${RESUME_DATA.location}
LinkedIn: ${RESUME_DATA.linkedin}

Education:
${EDUCATION.map(e => `- ${e.degree} at ${e.school} (${e.duration})`).join('\n')}

Experience:
${EXPERIENCE.map(e => `- ${e.role} at ${e.company} (${e.duration}), ${e.location}: ${e.description.join(' ')}`).join('\n')}

Projects:
${PROJECTS.map(p => `- ${p.title}: ${p.description} (Tech: ${p.technologies.join(', ')})`).join('\n')}

Skills:
${SKILLS.map(s => `- ${s.category}: ${s.items.join(', ')}`).join('\n')}

Certifications:
${CERTIFICATIONS.map(c => `- ${c.name}`).join('\n')}

Rules:
1. Keep answers concise and relevant to the user's question.
2. If the user asks something outside the scope of this professional profile, politely steer them back to professional topics.
3. Be enthusiastic about Bhargavi's work!
`;

let aiClient: GoogleGenAI | null = null;

export const initGemini = () => {
  if (process.env.API_KEY) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
};

export const sendMessageToGemini = async (message: string): Promise<string> => {
  if (!aiClient) {
    initGemini();
    if (!aiClient) {
       return "I'm sorry, my AI brain isn't connected right now (Missing API Key).";
    }
  }

  try {
    const model = aiClient.models;
    const response = await model.generateContent({
      model: 'gemini-2.5-flash',
      contents: message,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });

    return response.text || "I didn't have a response for that.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I encountered a temporary error while thinking. Please try again.";
  }
};
