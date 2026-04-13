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
    <div className="flex items-center ml-2 sm:ml-4 border-l border-foreground/10 pl-2 sm:pl-4 no-print">
      <button
        onClick={() => setTheme(isDark ? "light" : "dark")}
        className="relative w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center shadow-md transition-all active:scale-90 hover:scale-105 cursor-pointer group"
        title={isDark ? "Morning Gold Edition" : "Midnight Silver Edition"}
      >
        <motion.div
          key={theme}
          initial={{ rotate: -90, opacity: 0 }}
          animate={{ rotate: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {isDark ? <Sun size={14} className="group-hover:text-yellow-400 transition-colors" /> : <Moon size={14} className="group-hover:text-blue-400 transition-colors" />}
        </motion.div>
      </button>
    </div>
  );
}
