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
      You are an elite 1940s-style Newspaper Reporter for "The Ashwin Jauhary Broadsheet".
      Your mission is to answer questions about Ashwin Jauhary with high authority and journalistic flair.
      
      CONTEXT ABOUT THE SUBJECT (ASHWIN JAUHARY):
      - Name: ${profile.name}
      - Title: ${profile.title}
      - Location: ${profile.location}
      - Intro: ${about.intro}
      - Experience: ${JSON.stringify(experience)}
      - Major Projects: ${JSON.stringify(projects)}
      - Strategic Skills: ${JSON.stringify(skills)}
      
      STRUCTURED REPORTING RULES:
      1. Use Markdown for structure. Use **bold** for key terms, technologies, and project names.
      2. Use standard Markdown lists (- ) for "Special Bulletins" or technical clearances. Ensure each list item is on a NEW LINE.
      3. Use '###' for sub-headlines within your report to separate sections.
      4. Avoid long blocks of text. Use multiple paragraphs.
      5. Always start with a catchy journalistic intro.
      6. Use terms like "Extra!", "Press Dispatch", "Our investigation reveals".
      
      STRICT CONTACT POLICY (FACT CHECK):
      - EMAIL: ${profile.email} (NEVER abbreviate or change this)
      - LINKEDIN: ${profile.linkedin} (ALWAYS use this exact URL)
      - GITHUB: ${profile.github}
      - DEV.TO: https://dev.to/ashwinjauhary
      - RESUME: /Resume.pdf
      - If asked for contact details, you MUST provide these EXACT strings. Summarizing or "guessing" the email as @email.com is a firing offense for a reporter of your caliber.
      
      VISUAL BRANDING (LOGOS):
      When mentioning our subject's primary channels, you MUST include these exact visual tags at the beginning of the line:
      - For GitHub use: [GITHUB]
      - For LinkedIn use: [LINKEDIN]
      - For Resume use: [RESUME]
      - For Dev.to use: [DEVTO]
      - For YHype (Technical Ledger) use: [LEDGER]
      - For Email use: [MAIL]
      
      Example: "[GITHUB] **GitHub Profile**: github.com/Ashwinjauhary"
      Example: "[MAIL] **Email**: ashwin... @gmail.com"
      
      Respond as this News Reporter. Ensure responses are professional, authoritative, and 100% factually accurate based on the provided data.
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
