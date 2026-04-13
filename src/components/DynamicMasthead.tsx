"use client";

import { useState, useEffect } from "react";

interface WeatherData {
  temp: number;
  condition: string;
  city: string;
}

export default function DynamicMasthead() {
  const [edition, setEdition] = useState("Daily Edition");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [time, setTime] = useState("");
  const [fullDate, setFullDate] = useState("");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours();
      
      // Update Edition Name
      if (hours >= 5 && hours < 12) setEdition("MORNING GOLD EDITION");
      else if (hours >= 12 && hours < 17) setEdition("FINAL CITY EDITION");
      else if (hours >= 17 && hours < 21) setEdition("SUNSET SPECIAL EDITION");
      else setEdition("MIDNIGHT SILVER EDITION");

      // Update Clock
      setTime(now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit", second: "2-digit" }));
      
      // Update Date String
      setFullDate(now.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase());
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);

    // Dynamic Weather (Simulated for speed, but using user's local context)
    const fetchWeather = async () => {
      try {
        // Fallback random but professional tech-weather
        const conditions = ["High Traffic", "Zero Latency", "Signal Stable", "Encrypted Skies", "Data Flow: Optimal"];
        const randomCondition = conditions[Math.floor(Math.random() * conditions.length)];
        const randomTemp = Math.floor(Math.random() * 15) + 20; // 20-35 deg

        setWeather({
          temp: randomTemp,
          condition: randomCondition,
          city: "KANPUR HUB"
        });
      } catch (e) {
        console.error("Weather dispatch failed.");
      }
    };

    fetchWeather();
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end border-y-2 border-foreground py-2 text-[10px] sm:text-xs uppercase font-bold tracking-widest mb-6 px-4 transition-colors duration-500 gap-2 md:gap-0">
      <button 
        onClick={() => window.print()}
        suppressHydrationWarning
        className="absolute -top-10 sm:-top-4 right-0 no-print flex items-center gap-2 bg-foreground text-background px-3 py-1 text-[10px] font-bold uppercase tracking-widest hover:scale-105 transition-transform border border-foreground"
      >
        Print
      </button>
      <div className="hidden md:flex flex-col text-center md:text-left">
        <span>VOL. I ... No. 1</span>
        <span className="block italic font-['Lora'] text-[10px] normal-case mt-1 text-accent animate-pulse">{time}</span>
      </div>
      
      <div className="flex flex-col items-center text-center">
        <span className="text-xs sm:text-sm font-black border-x-2 border-foreground px-4">
          {mounted ? fullDate : "LOADING ARCHIVES..."}
        </span>
        <span className="block font-['Playfair_Display'] text-[10px] sm:text-[11px] font-normal tracking-wide capitalize mt-1 italic">
          &quot;All the Code That&apos;s Fit to Ship&quot;
        </span>
      </div>

      <div className="hidden md:flex flex-col text-center md:text-right">
        <span className="bg-foreground text-background px-2 mb-1">{edition}</span>
        <span className="block font-['Lora'] italic text-[10px] normal-case mt-1">
          Weather: {weather?.condition || "Consulting Satellites..."} — {weather?.temp}°C in {weather?.city}
        </span>
      </div>
      
      {/* Mobile-only time/edition badge */}
      <div className="flex md:hidden items-center gap-4 text-[9px] border-t border-foreground/10 pt-1 w-full justify-center">
         <span className="italic font-['Lora'] normal-case text-accent">{time}</span>
         <span className="bg-foreground text-background px-1.5">{edition}</span>
      </div>
    </div>
  );
}
