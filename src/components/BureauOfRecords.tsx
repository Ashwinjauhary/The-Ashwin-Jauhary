"use client";

import { useState, useMemo, useRef, useEffect } from "react";
import { Search, Folder, X, ExternalLink, Hash, Award, ChevronUp } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, skills, certificates } from "@/data";

export default function BureauOfRecords() {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close drawer when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();

    const filteredProjects = projects.filter(p => 
      p.title.toLowerCase().includes(q) || 
      p.tech.some(t => t.toLowerCase().includes(q))
    ).slice(0, 3).map(p => ({ title: p.title, description: p.description, type: 'Project' as const, href: p.live }));

    const filteredSkills = skills.flatMap(s => s.items).filter(s => 
      s.toLowerCase().includes(q)
    ).slice(0, 3).map(s => ({ title: s, description: 'Strategic Technical Skill', type: 'Skill' as const, href: '/portfolio' }));

    const filteredCerts = certificates.filter(c => 
      c.title.toLowerCase().includes(q) || 
      c.org.toLowerCase().includes(q)
    ).slice(0, 2).map(c => ({ title: c.title, description: c.org, type: 'Certificate' as const, href: '/resume' }));

    return [...filteredProjects, ...filteredSkills, ...filteredCerts];
  }, [query]);

  return (
    <div ref={containerRef} className="relative z-40 mb-8 border-[3px] border-foreground p-4 bg-background shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#333] transition-colors duration-500">
      {/* Search Header - The "Handle" */}
      <div className="flex items-center gap-3 border-b-2 border-foreground pb-3 mb-4">
        <div className="bg-foreground p-2 rounded-none">
          <Search className="text-background" size={18} />
        </div>
        <div className="flex-1">
          <h3 className="font-['Playfair_Display'] text-lg font-black uppercase tracking-tighter text-foreground">
            Bureau of Records
          </h3>
          <p className="text-[9px] uppercase font-sans font-bold text-foreground/40">
            Archive Search & Retrieval System v4.0
          </p>
        </div>
      </div>

      {/* Input Field - The "Label" */}
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          placeholder="Search Archives (e.g. Next.js, Catalyst)"
          className="w-full bg-foreground/5 border-2 border-foreground p-3 font-sans text-xs uppercase font-bold tracking-widest focus:outline-none focus:ring-0 placeholder:text-foreground/20 text-foreground"
        />
        {(query || isFocused) && (
          <button 
            onClick={() => {
              setQuery("");
              setIsFocused(false);
            }}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-foreground/40 hover:text-foreground transition-colors"
            title="Close Drawer"
          >
            <X size={14} />
          </button>
        )}
      </div>

      {/* The Drawer - Results Section */}
      <AnimatePresence>
        {(isFocused || query) && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
            className="overflow-hidden mt-4"
          >
            <div className="bg-foreground/5 border-2 border-foreground p-4 min-h-[100px]">
              {results.length > 0 ? (
                <div className="space-y-3">
                  {results.slice(0, 5).map((res, i) => (
                    <motion.a 
                      key={i}
                      href={res.href}
                      target={res.type === 'Project' ? "_blank" : "_self"}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-start gap-3 p-2 bg-background border border-foreground/40 hover:border-foreground hover:bg-foreground/5 transition-all cursor-pointer"
                    >
                      <div className="mt-0.5">
                        {res.type === 'Project' && <Folder size={14} className="text-foreground/60" />}
                        {res.type === 'Skill' && <Hash size={14} className="text-foreground/60" />}
                        {res.type === 'Certificate' && <Award size={14} className="text-foreground/60" />}
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between items-center mb-0.5">
                          <span className="text-[8px] uppercase font-black bg-foreground text-background px-1">{res.type}</span>
                          <ExternalLink size={10} className="text-foreground/40 group-hover:text-foreground transition-colors" />
                        </div>
                        <h4 className="text-[11px] font-black uppercase tracking-tight leading-none mb-1 text-foreground">
                          {res.title}
                        </h4>
                        {res.description && (
                          <p className="text-[9px] text-foreground/60 font-serif leading-tight line-clamp-1">
                            {res.description}
                          </p>
                        )}
                      </div>
                    </motion.a>
                  ))}
                  {results.length > 5 && (
                    <p className="text-[8px] uppercase font-bold text-center text-black/40 pt-2 italic">
                      + {results.length - 5} more records found...
                    </p>
                  )}
                </div>
              ) : (
                <div className="h-full flex flex-col items-center justify-center py-6 text-center">
                  <p className="text-[10px] uppercase font-bold text-black/40 tracking-widest">
                    {query ? "No Records Matched Criteria" : "Input Retrieval Query Above"}
                  </p>
                  <p className="text-[8px] italic text-black/20 mt-1 uppercase">Enter keyword to pull archive drawer</p>
                </div>
              )}
            </div>

            {/* Cabinet Base Detail */}
            <div className="h-2 w-full bg-foreground/5 mt-2 flex justify-center gap-1">
              <div className="w-1/4 h-full border-x border-foreground/10"></div>
              <div className="w-1/4 h-full border-x border-foreground/10"></div>
              <div className="w-1/4 h-full border-x border-foreground/10"></div>
            </div>

            <button 
              onClick={() => setIsFocused(false)}
              className="w-full mt-2 py-1 text-[8px] uppercase font-bold text-foreground/40 hover:text-foreground transition-colors flex items-center justify-center gap-1 border-t border-foreground/5"
            >
              <ChevronUp size={10} />
              Close Archive Drawer
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
