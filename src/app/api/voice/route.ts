import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { text } = await req.json();
  const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;
  const VOICE_ID = "s3H0HLwbIJKGFMkkoctw"; // The voice ID provided by the user

  if (!ELEVENLABS_API_KEY) {
    return NextResponse.json({ error: "API Key missing" }, { status: 500 });
  }

  try {
    const response = await fetch(
      `https://api.elevenlabs.io/v1/text-to-speech/${VOICE_ID}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "xi-api-key": ELEVENLABS_API_KEY,
        },
        body: JSON.stringify({
          text,
          model_id: "eleven_multilingual_v2",
          voice_settings: {
            stability: 0.5,
            similarity_boost: 0.75,
          },
        }),
      }
    );

    if (!response.ok) {
      throw new Error("ElevenLabs API failed");
    }

    const audioBuffer = await response.arrayBuffer();
    return new NextResponse(audioBuffer, {
      headers: {
        "Content-Type": "audio/mpeg",
      },
    });
  } catch (error) {
    console.error("ElevenLabs Error:", error);
    return NextResponse.json({ error: "Speech generation failed" }, { status: 500 });
  }
}
