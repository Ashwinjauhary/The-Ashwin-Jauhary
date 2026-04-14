"use client";

import { useState, useRef, ReactNode, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface InvestigativeLensProps {
  src?: string;
  alt?: string;
  className?: string;
  zoomLevel?: number;
  children?: ReactNode;
  lensSize?: number;
  grayscale?: boolean;
}

export default function InvestigativeLens({ 
  src, 
  alt, 
  className = "", 
  zoomLevel = 2.5, 
  children,
  lensSize = 200,
  grayscale = false
}: InvestigativeLensProps) {
  const [showLens, setShowLens] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0, cursorX: 0, cursorY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);

  const [isTouch, setIsTouch] = useState(false);

  const updatePosition = (clientX: number, clientY: number) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = ((clientX - left) / width) * 100;
    const y = ((clientY - top) / height) * 100;

    setPosition({
      x: Math.max(0, Math.min(100, x)),
      y: Math.max(0, Math.min(100, y)),
      cursorX: clientX - left,
      cursorY: clientY - top,
    });
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsTouch(false);
    updatePosition(e.clientX, e.clientY);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsTouch(true);
    if (e.touches.length > 0) {
      updatePosition(e.touches[0].clientX, e.touches[0].clientY);
    }
  };

  useEffect(() => {
    // Only prevent scrolling on mobile touch to avoid scrollbar disappearing on desktop
    if (active && isTouch) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [active, isTouch]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden group select-none ${className}`}
      onMouseEnter={() => { setShowLens(true); setActive(true); }}
      onMouseLeave={() => { setShowLens(false); setActive(false); }}
      onMouseMove={handleMouseMove}
      onTouchStart={() => { setShowLens(true); setActive(true); }}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => { setShowLens(false); setActive(false); }}
      style={{ cursor: "none" }}
    >
      {children ? (
        <div className={`w-full h-full transition-all duration-700 ${grayscale ? 'grayscale group-hover:grayscale-0' : ''}`}>
          {children}
        </div>
      ) : (
        <div className="relative">
          <img 
            src={src} 
            alt={alt} 
            className={`w-full h-auto transition-all duration-700 ${grayscale ? 'grayscale group-hover:grayscale-0 contrast-125' : ''}`} 
          />
        </div>
      )}

      <AnimatePresence>
        {showLens && (
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="absolute pointer-events-none z-60 rounded-full overflow-hidden"
            style={{
              width: lensSize,
              height: lensSize,
              left: position.cursorX - lensSize/2,
              top: position.cursorY - lensSize/2,
              border: "8px solid #333",
              boxShadow: `
                0 25px 50px -12px rgba(0, 0, 0, 0.7),
                inset 0 0 20px rgba(0,0,0,0.4),
                inset 0 0 50px rgba(0,0,0,0.2)
              `,
              background: "white",
            }}
          >
            {/* The Lens Surface (Reflections) */}
            <div className="absolute inset-0 z-20 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-full bg-linear-to-br from-white/30 via-transparent to-black/20 opacity-40"></div>
              <div className="absolute top-4 left-6 w-1/3 h-1/3 bg-white/20 rounded-full blur-xl"></div>
              <div className="absolute bottom-4 right-6 w-1/4 h-1/4 bg-black/10 rounded-full blur-lg"></div>
            </div>

            {/* Content Container */}
            <div 
              className="absolute inset-0 z-10"
              style={{
                backgroundImage: `url(${src})`,
                backgroundPosition: `${position.x}% ${position.y}%`,
                backgroundSize: `${zoomLevel * 100}% auto`,
                backgroundRepeat: 'no-repeat',
                filter: "contrast(1.1) brightness(1.1)",
              }}
            ></div>

            {/* Chromatic Aberration Edge (Subtle) */}
            <div className="absolute inset-0 rounded-full border-10 border-red-500/5 mix-blend-screen pointer-events-none"></div>
            <div className="absolute inset-[-2px] rounded-full border-10 border-blue-500/5 mix-blend-screen pointer-events-none"></div>

            {/* Tactical UI */}
            <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none opacity-30">
               <div className="w-full h-px bg-foreground"></div>
               <div className="h-full w-px bg-foreground absolute"></div>
               <div className="w-12 h-12 border border-foreground rounded-full"></div>
            </div>
            
            <div className="absolute top-2 right-2 z-40 bg-black text-white text-[8px] px-1 font-mono uppercase tracking-tighter">
               REC ●
            </div>

             <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-40 bg-black/80 backdrop-blur-sm text-white text-[9px] px-2 py-0.5 font-mono uppercase tracking-[0.2em] font-black border border-white/20">
                X{zoomLevel.toFixed(1)} FOCUS
             </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Mobile Hint */}
      {!showLens && (
        <div className="absolute top-2 right-2 md:hidden bg-foreground/20 backdrop-blur-md px-2 py-1 rounded text-[8px] animate-pulse uppercase tracking-widest text-foreground font-bold">
          Touch to inspect
        </div>
      )}
    </div>
  );
}
