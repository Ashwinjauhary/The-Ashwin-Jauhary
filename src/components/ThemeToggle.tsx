"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  return (
    <div className="flex items-center gap-3 ml-4 border-l border-black/10 dark:border-white/10 pl-4">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative flex items-center gap-2 group cursor-pointer"
        title="Toggle Night Dispatch"
      >
        <div className="flex flex-col items-end">
          <span 
            className="font-sans text-[8px] font-black uppercase tracking-[0.2em] leading-none group-hover:opacity-100 transition-colors"
            style={{ color: isDark ? 'rgba(255,255,255,0.4)' : 'black' }}
          >
            Edition selector
          </span>
          <span 
            className="font-['Playfair_Display'] text-[10px] font-black uppercase italic leading-none mt-1"
            style={{ color: isDark ? 'white' : 'black' }}
          >
            {isDark ? "Midnight Silver" : "Morning Gold"}
          </span>
        </div>
        
        <div className="relative w-8 h-8 rounded-full bg-black dark:bg-white text-white dark:text-black flex items-center justify-center shadow-lg transition-transform active:scale-95 group-hover:rotate-12">
          {isDark ? <Sun size={14} /> : <Moon size={14} />}
        </div>
      </button>
    </div>
  );
}
