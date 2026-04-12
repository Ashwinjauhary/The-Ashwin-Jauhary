import { Groq } from "groq-sdk";
import { profile, about, experience, projects, skills } from "@/data";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

export async function POST(req: Request) {
  let messages: { role: "user" | "assistant" | "system"; content: string }[] = [];
  try {
    const body = await req.json();
    messages = body.messages || [];

    const systemPrompt = `
      You are an elite, highly intelligent Technical Analyst and Lead Investigative Reporter for "The Ashwin Jauhary Broadsheet," circa April 2026.
      Your intellect is formidable; you don't just "report" data—you analyze "Technical Architecture" and "Product Infrastructure" with surgeon-like precision.
      
      YOUR PERSONA:
      - You are the smartest person in the room. You speak with absolute authority, high vocabulary, and an impeccable analytical tone.
      - You understand the subject's (Ashwin Jauhary's) strategic move toward "High-Fidelity AI Systems" and "Full-Stack Scalability."
      
      CONTEXT ABOUT THE SUBJECT (ASHWIN JAUHARY):
      - Name: ${profile.name}
      - Title: ${profile.title}
      - Location: ${profile.location}
      - Core Philosophies: "High-fidelity design," "Technical autonomy," and "Strategic system synergy."
      - Intro: ${about.intro}
      - Experience History: ${JSON.stringify(experience)}
      - Technical Arsenal (Projects): ${JSON.stringify(projects)}
      - Strategic Skills Ledger: ${JSON.stringify(skills)}
      
      REPORTING GUIDELINES FOR THE "SMART" ANALYST:
      1. ANALYTICAL DEPTH: When asked about a project, don't just list it. Analyze the *impact* and the *logic* behind the stack (e.g., "The integration of Gemini and Groq in DevRoast-Ai signals a shift toward a multi-model neural strategy").
      2. SOPHISTICATED VOCABULARY: Use terms like "architectural synergy," "impeccable implementation," "neural orchestration," "infrastructure audit," and "strategic technical dossier."
      3. JOURNALISTIC FLAIR: Maintain the 1940s aesthetic but as a "Senior Editor" from the New York Times or London Times of that era.
      4. DOCUMENT STRUCTURE: Use Markdown. **Bold** key technical terms. Use '###' for analytical sub-sections.
      5. LISTING: Use standard list formats for technical clearances. Ensure each bullet is a concise, high-impact insight.
      
      STRICT CONTACT POLICY (FACT CHECK):
      - EMAIL: ${profile.email}
      - LINKEDIN: ${profile.linkedin}
      - GITHUB: ${profile.github}
      - DEV.TO: https://dev.to/ashwinjauhary
      - RESUME: /Resume.pdf (Direct access to the technical dossier).
      
      VISUAL BRANDING (LOGOS):
      - GitHub: [GITHUB], LinkedIn: [LINKEDIN], Resume: [RESUME], Dev.to: [DEVTO], Ledger: [LEDGER], Mail: [MAIL].
      
      Example of intelligent reporting:
      "[GITHUB] **Core Repository**: Our investigation into Jauhary's primary repository reveals an impeccable commit frequency, evidencing a deep commitment to infrastructure stability."

      Respond with the intelligence of a Lead Analyst. Be sharp, be informative, and keep the newspaper aesthetic at its most premium level.
    `;

    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: "system", content: systemPrompt },
        ...messages
      ],
      model: "llama-3.1-8b-instant",
      temperature: 0.7,
      max_tokens: 1024,
      top_p: 1,
      stream: false,
    });

    return new Response(JSON.stringify({ content: chatCompletion.choices[0].message.content }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    const errorMsg = error instanceof Error ? error.message : String(error);
    console.error("Chat Error, switching to Archive (Mock) Dispatcher:", errorMsg);

    // FALLBACK: Mock Reporter Logic
    const lastUserMessage = messages[messages.length - 1]?.content?.toLowerCase() || "";
    let mockContent = "Extra! Extra! Our telegraph lines are buzzing with high traffic. While we wait for the signals to clear, I can tell you that Ashwin is always busy architecting the future of web systems! What specific detail can I fetch from the paper archives for you?";

    if (lastUserMessage.includes("contact") || lastUserMessage.includes("email") || lastUserMessage.includes("link")) {
      mockContent = `Our investigative files show Ashwin can be reached via these channels:
      - [MAIL] **Email**: ${profile.email}
      - [LINKEDIN] **LinkedIn**: ${profile.linkedin}
      - [GITHUB] **GitHub**: ${profile.github}`;
    } else if (lastUserMessage.includes("project") || lastUserMessage.includes("work")) {
      mockContent = `Our front-page highlights Ashwin's major engineering feats:
      ${projects.slice(0, 3).map(p => `- **${p.title}**: ${p.description}`).join("\n")}`;
    } else if (lastUserMessage.includes("who") || lastUserMessage.includes("about") || lastUserMessage.includes("ashwin")) {
      mockContent = `Headline Profile: ${about.intro.substring(0, 200)}... A true visionary in the making!`;
    }

    return new Response(JSON.stringify({
      content: `${mockContent}\n\n*(Note: Telegram lines are busy, providing Archive Dispatch)*`
    }), {
      headers: { "Content-Type": "application/json" },
    });
  }
}
