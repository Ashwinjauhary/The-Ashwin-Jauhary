"use client";

import { useState, useRef, ReactNode } from "react";
import { motion } from "framer-motion";

interface InvestigativeLensProps {
  src?: string;
  alt?: string;
  className?: string;
  zoomLevel?: number;
  children?: ReactNode;
}

export default function InvestigativeLens({ src, alt, className = "", zoomLevel = 2.5, children }: InvestigativeLensProps) {
  const [showLens, setShowLens] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, cursorX: 0, cursorY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((e.pageX - left - window.scrollX) / width) * 100;
    const y = ((e.pageY - top - window.scrollY) / height) * 100;

    setPosition({
      x,
      y,
      cursorX: e.pageX - left - window.scrollX,
      cursorY: e.pageY - top - window.scrollY,
    });
  };

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden cursor-none ${className}`}
      onMouseEnter={() => setShowLens(true)}
      onMouseLeave={() => setShowLens(false)}
      onMouseMove={handleMouseMove}
    >
      {children ? (
        children
      ) : (
        <>
          <img src={src} alt={alt} className="w-full h-auto grayscale contrast-125 brightness-90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/halftone.png')] opacity-20 pointer-events-none"></div>
        </>
      )}

      {showLens && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="absolute pointer-events-none z-50 rounded-full border-[6px] border-[#5d4037] shadow-[0_10px_40px_rgba(0,0,0,0.5)] bg-white overflow-hidden"
          style={{
            width: "180px",
            height: "180px",
            left: position.cursorX - 90,
            top: position.cursorY - 90,
            boxShadow: "inset 0 0 30px rgba(0,0,0,0.4), 0 10px 40px rgba(0,0,0,0.5)",
          }}
        >
          {/* Zoomed Content */}
          <div
            className="absolute inset-0"
            style={{
              width: "100%",
              height: "100%",
            }}
          >
             <div 
               style={{
                 transform: `scale(${zoomLevel}) translate(${-position.x + 50 / zoomLevel}%, ${-position.y + 50 / zoomLevel}%)`,
                 transformOrigin: "top left",
                 width: `${100 / zoomLevel}%`,
                 height: `${100 / zoomLevel}%`,
                 position: "absolute",
                 top: 0,
                 left: 0,
               }}
             >
                {/* Fallback to Image if no children, or re-render children for zoom (might be complex) */}
                {/* For simplicity with children, we'll just support Image src for now for high-quality zoom, 
                    OR clones. For now, let's keep the IMAGE zoom functionality as it's most performant. */}
                <img 
                  src={src} 
                  alt={alt} 
                  className="max-w-none" 
                  style={{ 
                    width: `${zoomLevel * 100}%`,
                    marginLeft: `-${position.x * (zoomLevel - 1)}%`,
                    marginTop: `-${position.y * (zoomLevel - 1)}%`
                  }} 
                />
             </div>
          </div>

           {/* Crosshair */}
           <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-40">
              <div className="w-full h-px bg-[#5d4037]"></div>
              <div className="h-full w-px bg-[#5d4037] absolute"></div>
           </div>
           
           <div className="absolute top-4 left-4 w-10 h-10 bg-white/20 rounded-full blur-md"></div>
           
           <div className="absolute -bottom-2 -left-2 bg-[#5d4037] text-white text-[9px] px-2 py-0.5 font-mono uppercase tracking-[0.2em] font-black rotate-12">
              X{zoomLevel.toFixed(1)} FOCUS
           </div>
        </motion.div>
      )}
    </div>
  );
}
