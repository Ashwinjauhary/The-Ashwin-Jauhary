"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function TypewriterForm() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [activeField, setActiveField] = useState<"name" | "email" | "text" | null>(null);
  const audioContext = useRef<AudioContext | null>(null);

  // Initialize AudioContext
  useEffect(() => {
    const initAudio = () => {
      if (!audioContext.current) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
        audioContext.current = new AudioCtx();
      }
    };
    window.addEventListener('click', initAudio, { once: true });
    window.addEventListener('keydown', initAudio, { once: true });
    return () => {
      audioContext.current?.close();
    };
  }, []);

  const playClack = () => {
    if (!audioContext.current) return;
    const ctx = audioContext.current;
    if (ctx.state === 'suspended') ctx.resume();

    // 1. The "Click" (Sharp Attack - Snappy)
    const noise = ctx.createBufferSource();
    const bufferSize = ctx.sampleRate * 0.01;
    const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < bufferSize; i++) data[i] = Math.random() * 2 - 1;
    noise.buffer = buffer;

    const filter = ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.setValueAtTime(2000, ctx.currentTime);

    const noiseGain = ctx.createGain();
    noiseGain.gain.setValueAtTime(0.3, ctx.currentTime);
    noiseGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.01);

    // 2. The "Thump" (Body - Deep)
    const osc = ctx.createOscillator();
    const oscGain = ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(120, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(30, ctx.currentTime + 0.04);
    oscGain.gain.setValueAtTime(0.15, ctx.currentTime);
    oscGain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.04);

    noise.connect(filter);
    filter.connect(noiseGain);
    noiseGain.connect(ctx.destination);
    osc.connect(oscGain);
    oscGain.connect(ctx.destination);

    noise.start();
    osc.start();
    osc.stop(ctx.currentTime + 0.05);

    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 50);
  };

  const handleKeyTap = (char: string) => {
    playClack();
    if (!activeField) return;

    const setFunc = {
      name: setName,
      email: setEmail,
      text: setText
    }[activeField];

    if (char === "DEL") {
      setFunc(prev => prev.slice(0, -1));
    } else {
      setFunc(prev => prev + char);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text || !email) {
      alert("FIELD ERROR: Message and Signal (Email) are required for dispatch.");
      return;
    }
    
    playClack();
    console.log("Dispatching Signal to Archive...");
    
    try {
      // Direct integration with Formspree (User just needs to replace ID)
      // I'll use a placeholder that they can see works
      const response = await fetch("https://formspree.io/f/xvgzlowy", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message: text, _subject: "New Portfolio Dispatch" })
      });

      if (response.ok) {
         alert("DISPATCH SUCCESSFUL: Your telegram has reached the Bureau of Records.");
         setText("");
         setName("");
         setEmail("");
      } else {
         alert("TRANSMISSION FAILED: Direct connection to Bureau lost. Please use conventional email.");
      }
    } catch (err) {
      alert("LINE ERROR: Check your connection and re-transmit.");
    }
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-20 overflow-visible">
      
      {/* Typewriter Body */}
      <div className="relative bg-[#2c2c2c] rounded-t-[40px] p-6 pt-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-x-10 border-t-10 border-[#1a1a1a]">
        
        {/* The Paper Roller (Platen) */}
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[90%] h-20 bg-[#1a1a1a] rounded-full border-4 border-[#333] flex items-center justify-between px-10 shadow-inner z-0">
          <div className="w-10 h-10 bg-[#444] rounded-full border-2 border-black"></div>
          <div className="w-10 h-10 bg-[#444] rounded-full border-2 border-black"></div>
        </div>

        {/* The Paper Container */}
        <div className="relative z-10 bg-[#f5f0e8] mx-auto w-[90%] md:w-[85%] min-h-[550px] shadow-2xl p-6 md:p-12 border border-black/10 overflow-hidden group">
          
          {/* Paper Texture Overlay */}
          <div className="absolute inset-0 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/notebook.png')] opacity-30"></div>
          <div className="absolute inset-0 pointer-events-none border-l-2 border-red-500/20 ml-8 md:ml-12"></div>

          {/* Paper Header */}
          <div className="text-center mb-12 border-b-2 border-dashed border-black/20 pb-6">
            <h3 className="font-['Playfair_Display'] text-3xl font-black uppercase tracking-tight">The Dispatch</h3>
            <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-black/40 mt-1">To: Ashwin Jauhary · Correspondence Bureau</p>
          </div>

          {/* Form Fields as Typed Lines */}
          <div className="space-y-6 relative px-4 md:px-8">
            
            {/* Ink Ribbon Effect (Subtle red line on focus) */}
            <motion.div 
               animate={{ x: isTyping ? [0, -1, 1, 0] : 0 }}
               className="absolute -left-2 top-0 w-0.5 h-full bg-red-600/5"
            />

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-black/10 pb-2">
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-black/40 min-w-[80px]">From:</span>
              <input 
                type="text" 
                placeholder="TYPE NAME HERE..."
                onKeyDown={playClack}
                onFocus={() => setActiveField("name")}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="flex-1 bg-transparent outline-none font-sans font-bold uppercase text-xs tracking-widest placeholder:text-black/10"
              />
            </div>

            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 border-b border-black/10 pb-2">
              <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-black/40 min-w-[80px]">Signal:</span>
              <input 
                type="email" 
                placeholder="YOUR.EMAIL@COMMMS.GOV"
                onKeyDown={playClack}
                onFocus={() => setActiveField("email")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-transparent outline-none font-sans font-bold uppercase text-xs tracking-widest placeholder:text-black/10"
              />
            </div>

            <div className="pt-2">
              <div className="flex items-center gap-4 mb-2">
                <span className="font-sans text-[10px] font-black uppercase tracking-[0.2em] text-black/40">Body:</span>
              </div>
              <textarea 
                rows={12}
                placeholder="START TYPING YOUR MESSAGE... KLAK KLAK KLAK..."
                onKeyDown={playClack}
                onFocus={() => setActiveField("text")}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-serif text-base md:text-lg italic placeholder:text-black/10 resize-none min-h-[400px]"
                style={{ 
                  backgroundImage: 'linear-gradient(transparent, transparent 33px, #00000010 33px, #00000010 34px, transparent 34px)', 
                  backgroundSize: '100% 34px',
                  lineHeight: '34px'
                }}
              />
            </div>
          </div>

          {/* Stamp/Seal Effect */}
          <div className="mt-12 flex justify-end opacity-20 group-hover:opacity-40 transition-opacity">
             <div className="border-4 border-red-800 p-2 rounded-lg -rotate-12">
               <span className="text-red-800 font-black text-xs uppercase tracking-tighter">Verified Dispatch</span>
             </div>
          </div>
        </div>

        {/* Typewriter Keys (Functional) */}
        <div className="mt-12 px-10 grid grid-cols-7 sm:grid-cols-10 gap-3">
          {"QWERTYUIOPASDFGHJKLZXCVBNM".split("").map((char, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.9, backgroundColor: "#000" }}
              onClick={() => handleKeyTap(char)}
              className="aspect-square bg-[#333] rounded-full border-b-4 border-black shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#444] text-[10px] font-black text-white/40"
            >
              <div className="w-[80%] h-[80%] rounded-full border border-white/10 flex items-center justify-center">
                {char}
              </div>
            </motion.div>
          ))}
          <motion.div 
              whileTap={{ scale: 0.9, backgroundColor: "#c0392b" }}
              onClick={() => handleKeyTap("DEL")}
              className="col-span-2 aspect-2/1 bg-[#442222] rounded-full border-b-4 border-black shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#663333] text-[8px] font-black text-white/60 uppercase tracking-tighter"
            >
              Delete
          </motion.div>
        </div>

        {/* Send Button - "The Space Bar" */}
        <div className="mt-10 px-10 flex flex-col gap-6 items-center">
          <motion.div 
              whileTap={{ scale: 0.98 }}
              onClick={() => handleKeyTap(" ")}
              className="w-1/2 h-8 bg-[#333] border-b-4 border-black rounded-lg cursor-pointer flex items-center justify-center text-[8px] font-black text-white/20 uppercase tracking-widest"
          >
            Space Bar
          </motion.div>

          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleSubmit}
            className="w-full h-12 bg-[#1a1a1a] border-4 border-[#333] rounded-sm shadow-[0_8px_0_#000] flex items-center justify-center gap-3 text-white font-sans font-black uppercase tracking-[0.5em] text-xs hover:bg-black transition-all active:shadow-none translate-y-0 active:translate-y-2"
          >
            <Send size={14} className="animate-pulse" />
            Send Dispatch
          </motion.button>
        </div>
      </div>

      {/* Aesthetic Feet */}
      <div className="flex justify-between px-20">
        <div className="w-10 h-6 bg-[#1a1a1a] rounded-b-xl"></div>
        <div className="w-10 h-6 bg-[#1a1a1a] rounded-b-xl"></div>
      </div>
    </div>
  );
}
