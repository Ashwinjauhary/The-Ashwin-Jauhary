"use client";

import { useState, useRef, useEffect } from "react";
import { Send, Newspaper, ChevronDown, Volume2, Square } from "lucide-react";
import ReactMarkdown from "react-markdown";

const getChildrenText = (children: React.ReactNode): string => {
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(getChildrenText).join('');
  if (children && typeof children === 'object' && 'props' in (children as object)) {
    const component = children as React.ReactElement<{ children?: React.ReactNode }>;
    if (component.props && component.props.children) {
      return getChildrenText(component.props.children);
    }
  }
  return '';
};

const PlatformBadge = ({ type }: { type: string }) => {
  const baseClass = "inline-flex items-center px-1.5 py-0.5 rounded text-[10px] gap-1 font-bold shrink-0 align-middle mb-0.5";

  if (type === '[GITHUB]') return (
    <span className={`${baseClass} bg-black text-white p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.552-4.041-1.552-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
    </span>
  );
  if (type === '[LINKEDIN]') return (
    <span className={`${baseClass} bg-[#0077B5] text-white p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
    </span>
  );
  if (type === '[RESUME]') return (
    <span className={`${baseClass} bg-[#C0392B] text-white p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-none stroke-current stroke-[2.5]"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /></svg>
    </span>
  );
  if (type === '[DEVTO]') return (
    <span className={`${baseClass} bg-black text-white p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M0 0v24h24V0H0zm17.844 18.333h-2.534l.215-6.046-2.193 6.046H11.05l-2.001-6.046.215 6.046H6.731l-.226-9.11h3.333l1.832 5.556 1.833-5.556h3.333l-.21 9.11z" /></svg>
    </span>
  );
  if (type === '[LEDGER]') return (
    <span className={`${baseClass} bg-[#F1C40F] text-black p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" /></svg>
    </span>
  );
  if (type === '[MAIL]') return (
    <span className={`${baseClass} bg-gray-600 text-white p-1.5`}>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" /></svg>
    </span>
  );
  return null;
};

const renderWithLogos = (text: string) => {
  const parts = text.split(/(\[GITHUB\]|\[LINKEDIN\]|\[RESUME\]|\[DEVTO\]|\[LEDGER\]|\[MAIL\])/g);
  return parts.map((part, i) => {
    if (part.startsWith('[') && part.endsWith(']')) {
      return <PlatformBadge key={i} type={part} />;
    }

    // Split text further for links, emails, and bold markdown
    const textParts = part.split(/(https?:\/\/[^\s\][)]+|mailto:[^\s\][)]+|\/[^\s]+\.pdf|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}|\*\*[^*]+\*\*)/g);
    return textParts.map((subPart, j) => {
      // Handle Bold
      if (subPart.startsWith('**') && subPart.endsWith('**')) {
        return <strong key={`${i}-${j}`} className="font-bold">{subPart.slice(2, -2)}</strong>;
      }

      // Check if it's a URL or Email
      if (subPart.match(/https?:\/\/[^\s\][)]+|mailto:[^\s\][)]+|\/[^\s]+\.pdf|[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/)) {
        const isEmail = subPart.match(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/);
        return (
          <a
            key={`${i}-${j}`}
            href={isEmail ? `mailto:${subPart}` : subPart}
            target={isEmail ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="text-[#C0392B] underline hover:text-black transition-colors font-bold wrap-break-word"
          >
            {subPart}
          </a>
        );
      }
      return <span key={`${i}-${j}`} className="inline align-middle wrap-break-word">{subPart}</span>;
    });
  });
};

const setupRadioNoise = () => {
  if (typeof window === "undefined") return null;
  const AudioContext = window.AudioContext || (window as any).webkitAudioContext; // eslint-disable-line @typescript-eslint/no-explicit-any
  const ctx = new AudioContext();

  // Create white noise
  const bufferSize = 2 * ctx.sampleRate;
  const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
  const output = noiseBuffer.getChannelData(0);
  for (let i = 0; i < bufferSize; i++) {
    output[i] = Math.random() * 2 - 1;
  }

  const whiteNoise = ctx.createBufferSource();
  whiteNoise.buffer = noiseBuffer;
  whiteNoise.loop = true;

  // Bandpass filter for that "thin" radio sound
  const filter = ctx.createBiquadFilter();
  filter.type = "bandpass";
  filter.frequency.value = 1500;
  filter.Q.value = 1;

  // Gain for volume
  const gainNode = ctx.createGain();
  gainNode.gain.value = 0.05; // Subtle crackle

  whiteNoise.connect(filter);
  filter.connect(gainNode);
  gainNode.connect(ctx.destination);

  return { ctx, whiteNoise, gainNode };
};

export default function NewsChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([
    { role: "assistant", content: "Extra! Extra! Correspondent Ashwin's official AI Dispatcher here. What's the scoop? Need the lowdown on his latest projects or technical clearances?" }
  ]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isPlayingIdx, setIsPlayingIdx] = useState<number | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const radioRef = useRef<{ ctx: AudioContext; whiteNoise: AudioBufferSourceNode; gainNode: GainNode } | null>(null);

  const stopRadio = () => {
    window.speechSynthesis.cancel();
    if (radioRef.current) {
      radioRef.current.gainNode.gain.exponentialRampToValueAtTime(0.0001, radioRef.current.ctx.currentTime + 0.5);
      setTimeout(() => {
        radioRef.current?.whiteNoise.stop();
        radioRef.current = null;
      }, 600);
    }
    setIsPlayingIdx(null);
  };

  const playRadio = (text: string, idx: number) => {
    if (isPlayingIdx !== null) {
      stopRadio();
      if (isPlayingIdx === idx) return;
    }

    // Clean text for speech
    let cleanText = text.replace(/\[GITHUB\]|\[LINKEDIN\]|\[RESUME\]|\[DEVTO\]|\[LEDGER\]|\[MAIL\]/g, '')
      .replace(/\*\*/g, '');

    // Phonetic corrections for better pronunciation
    cleanText = cleanText.replace(/Jauhary/gi, 'Jau-ha-ree');

    const radio = setupRadioNoise();
    if (radio) {
      radio.whiteNoise.start();
      radioRef.current = radio;
    }

    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.rate = 0.92;
    utterance.pitch = 0.85; // Lower pitch for mature men feel

    // Prioritize Mature Male Indian English voices
    const voices = window.speechSynthesis.getVoices();
    const targetVoice = voices.find(v => (v.lang.includes("en-IN") || v.name.includes("India")) && (v.name.includes("Male") || v.name.includes("Ravi")))
      || voices.find(v => v.lang.includes("en-IN") || v.name.includes("India"))
      || voices.find(v => (v.name.includes("Google UK English Male") || v.name.includes("Male")))
      || voices[0];

    if (targetVoice) utterance.voice = targetVoice;

    utterance.onend = () => {
      stopRadio();
    };

    setIsPlayingIdx(idx);
    window.speechSynthesis.speak(utterance);
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;

    const userMsg = { role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsLoading(true);

    try {
      const resp = await fetch("/api/chat", {
        method: "POST",
        body: JSON.stringify({ messages: [...messages, userMsg] }),
      });
      const data = await resp.json();

      if (data.content) {
        setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: "The telegraph lines are down! (Server error)" }]);
      }
    } catch {
      setMessages((prev) => [...prev, { role: "assistant", content: "Signal lost in the paper archives. Please try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 font-sans">
      {/* NewsChat updates */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-foreground text-background p-4 rounded-full shadow-[6px_6px_0_rgba(0,0,0,0.3)] dark:shadow-[6px_6px_0_rgba(255,255,255,0.1)] hover:scale-110 hover:-translate-y-1 transition-all border-2 border-foreground group"
        >
          <Newspaper className="w-8 h-8 group-hover:rotate-12 transition-transform" />
          <span className="absolute -top-1 -right-1 bg-accent text-[10px] px-1.5 py-0.5 rounded-full animate-pulse text-white">LATEST</span>
        </button>
      )}

      {isOpen && (
        <div className="bg-background border-[3px] border-foreground w-[320px] sm:w-[400px] h-[500px] flex flex-col shadow-[12px_12px_0_rgba(0,0,0,0.2)] dark:shadow-[12px_12px_0_rgba(0,0,0,0.5)] transition-colors duration-500">
          <div className="bg-foreground text-background p-4 flex justify-between items-center border-b-2 border-foreground uppercase tracking-widest font-black text-sm">
            <div className="flex items-center gap-2">
              <span className="bg-accent p-1 rounded-sm text-white"><Newspaper size={14} /></span>
              <span>The Dispatcher</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:text-accent transition-colors">
              <ChevronDown />
            </button>
          </div>

          <div
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-4 space-y-4 font-['Lora'] text-[15px] bg-background bg-[url('https://www.transparenttextures.com/patterns/old-paper.png')] dark:opacity-90"
          >
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'} w-full`}>
                <div className={`max-w-[85%] p-3 border-2 border-foreground shadow-[4px_4px_0_rgba(0,0,0,1)] dark:shadow-[4px_4px_0_rgba(255,255,255,0.1)] overflow-hidden relative ${m.role === 'user' ? 'bg-foreground text-background' : 'bg-background text-foreground'
                  }`}>
                  {m.role === 'assistant' && (
                    <button
                      onClick={() => playRadio(m.content, i)}
                      className={`absolute top-1 right-1 p-1 hover:bg-black/5 transition-colors ${isPlayingIdx === i ? 'text-[#C0392B] animate-pulse' : 'text-black/30'}`}
                      title="Radio Broadcast"
                    >
                      {isPlayingIdx === i ? <Square size={14} fill="currentColor" /> : <Volume2 size={14} />}
                    </button>
                  )}
                  <div className="prose prose-sm prose-stone max-w-none wrap-break-word">
                    <ReactMarkdown
                      components={{
                        h3: ({ ...props }) => <h3 className="font-black text-sm uppercase mt-3 mb-1 border-b border-black/20" {...props} />,
                        ul: ({ ...props }) => <ul className="list-disc pl-4 space-y-1 my-2" {...props} />,
                        li: ({ ...props }) => {
                          const content = getChildrenText(props.children);
                          return (
                            <li className="leading-tight mb-2 list-none flex items-start gap-2 overflow-hidden w-full">
                              <span className="mt-1 text-black shrink-0 text-[10px]">•</span>
                              <div className="flex-1 min-w-0">
                                {renderWithLogos(content)}
                              </div>
                            </li>
                          );
                        },
                        p: ({ ...props }) => {
                          const content = getChildrenText(props.children);
                          return (
                            <p className="mb-2 last:mb-0 block w-full font-['Lora'] wrap-break-word">
                              {renderWithLogos(content)}
                            </p>
                          );
                        },
                      }}
                    >
                      {m.content}
                    </ReactMarkdown>
                  </div>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 border-2 border-black shadow-[4px_4px_0_rgba(0,0,0,1)] animate-pulse font-bold italic">
                  Telegraphing...
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit} className="p-4 bg-white border-t-2 border-black flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask the Reporter..."
              className="flex-1 bg-transparent border-b-2 border-black px-2 py-1 text-sm focus:outline-none placeholder:italic placeholder:text-black/40 font-bold uppercase tracking-tight"
            />
            <button type="submit" disabled={isLoading} className="bg-black text-white p-2 hover:bg-[#C0392B] transition-colors">
              <Send size={18} />
            </button>
          </form>
          <div className="bg-black text-[#f5f0e8] text-[8px] uppercase tracking-widest py-1 text-center font-bold">
            Vol. I Issue No. 1 — Powered by Groq AI
          </div>
        </div>
      )}
    </div>
  );
}
