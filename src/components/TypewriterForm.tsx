"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export default function TypewriterForm() {
  const [text, setText] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [isTyping, setIsTyping] = useState(false);
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
    
    // Resume if suspended (browser policy)
    if (ctx.state === 'suspended') ctx.resume();

    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    // Short percussive noise-like pulse
    osc.type = 'square';
    osc.frequency.setValueAtTime(100 + Math.random() * 50, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(10, ctx.currentTime + 0.05);
    
    gain.gain.setValueAtTime(0.3, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.05);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.05);

    // Subtle physical shake
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 50);
  };

  const handleKeyDown = () => {
    playClack();
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto mt-12 mb-20 overflow-visible">
      
      {/* Typewriter Body */}
      <div className="relative bg-[#2c2c2c] rounded-t-[40px] p-6 pt-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-x-[10px] border-t-[10px] border-[#1a1a1a]">
        
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
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
                onKeyDown={handleKeyDown}
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full bg-transparent border-none outline-none font-serif text-base md:text-lg leading-loose italic placeholder:text-black/10 resize-none min-h-[300px]"
                style={{ backgroundImage: 'linear-gradient(transparent, transparent 33px, #00000010 33px, #00000010 34px, transparent 34px)', backgroundSize: '100% 34px' }}
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

        {/* Typewriter Keys (Decorative Footer) */}
        <div className="mt-12 px-10 grid grid-cols-10 gap-3">
          {Array.from({length: 20}).map((_, i) => (
            <motion.div 
              key={i}
              whileTap={{ scale: 0.9, backgroundColor: "#000" }}
              className="aspect-square bg-[#333] rounded-full border-b-4 border-black shadow-lg flex items-center justify-center cursor-pointer hover:bg-[#444]"
            >
              <div className="w-[80%] h-[80%] rounded-full border border-white/10"></div>
            </motion.div>
          ))}
        </div>

        {/* Send Button - "The Space Bar" */}
        <div className="mt-10 px-10 flex justify-center">
          <motion.button 
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              playClack();
              alert("Message Encrypted and Dispatched!");
            }}
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
