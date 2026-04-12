"use client";

import { motion } from "framer-motion";

export default function CaseFileOverlay() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.4, 0, 0.2, 1] 
      }}
      className="fixed inset-0 z-200 bg-[#d2b48c] shadow-[10px_0_50px_rgba(0,0,0,0.3)] flex flex-col items-center justify-center p-12 border-l-30 border-[#c19a6b] pointer-events-none"
    >
      {/* Folder Tab */}
      <div className="absolute top-10 -right-10 w-24 h-12 bg-[#c19a6b] rounded-r-xl flex items-center justify-center -rotate-90 origin-left">
        <span className="font-mono text-[10px] uppercase font-bold tracking-widest text-[#5d4037]">PRJ-2026-X</span>
      </div>

      <div className="w-full max-w-2xl border-4 border-[#5d4037] p-10 flex flex-col items-center text-[#5d4037]">
        <div className="border-[6px] border-[#5d4037] p-2 mb-8 rotate-3">
          <span className="text-6xl font-black uppercase tracking-tighter">Confidential</span>
        </div>

        <div className="w-full space-y-6">
          <div className="h-4 bg-[#5d4037]/20 w-3/4"></div>
          <div className="h-4 bg-[#5d4037]/20 w-full"></div>
          <div className="h-4 bg-[#5d4037]/20 w-5/6"></div>
        </div>

        <div className="mt-20 flex flex-col items-center">
          <div className="w-16 h-16 border-4 border-[#5d4037] rounded-full flex items-center justify-center mb-2">
            <span className="font-serif italic text-2xl font-black">AJ</span>
          </div>
          <p className="font-mono text-xs uppercase font-bold tracking-[0.5em]">Retrieving Records...</p>
        </div>
      </div>

      {/* Coffee Stain Aesthetic */}
      <div className="absolute bottom-20 right-20 w-40 h-40 border-8 border-[#5d4037]/5 rounded-full blur-[2px]"></div>
    </motion.div>
  );
}
