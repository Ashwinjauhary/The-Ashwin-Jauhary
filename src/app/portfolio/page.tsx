import { projects } from "@/data";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import InvestigativeLens from "@/components/InvestigativeLens";

// Stable ref numbers at module level (avoids render purity issue)
// Deterministic reference numbers based on projects array
const refNumbers = projects.map((_, i) => String(2001 + i * 111).padStart(4, '0'));

const GithubIcon = ({ size = 16 }: { size?: number }) => (
  <svg 
    width={size} 
    height={size} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

export default function Portfolio() {
  const featured = projects.filter(p => p.status === "Featured");
  const advanced = projects.filter(p => p.status === "Advanced");
  const completed = projects.filter(p => p.status === "Completed");

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-foreground transition-colors duration-500 overflow-x-hidden md:overflow-x-visible">

      {/* Header */}
      <div className="text-center border-b-[6px] border-double border-foreground pb-4 mb-10">
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold mb-1">Classified Section — Section C</p>
        <h1 className="font-['Playfair_Display'] text-4xl xs:text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">The Registry</h1>
        <p className="font-['Lora'] italic text-sm sm:text-base mt-2 text-foreground/60 px-4">A definitive record of {projects.length} deployed implementations, filed for public review.</p>
      </div>

      {/* Stats Banner */}
      <div className="grid grid-cols-1 sm:grid-cols-3 border-y-2 border-foreground mb-10 divide-y-2 sm:divide-y-0 sm:divide-x-2 divide-foreground text-center bg-foreground/5">
        <div className="py-4">
          <p className="font-['Playfair_Display'] text-3xl sm:text-4xl font-black text-foreground">{projects.length}</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-foreground/60">Total Projects</p>
        </div>
        <div className="py-4">
          <p className="font-['Playfair_Display'] text-3xl sm:text-4xl font-black text-foreground">{featured.length}</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-foreground/60">Featured</p>
        </div>
        <div className="py-4">
          <p className="font-['Playfair_Display'] text-3xl sm:text-4xl font-black text-foreground">{[...new Set(projects.flatMap(p => p.tech))].length}+</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-foreground/60">Technologies</p>
        </div>
      </div>

      {/* Featured Section */}
      <section className="mb-12">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-foreground pb-2 mb-6 gap-2">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-black uppercase text-foreground">Feature Reports</h2>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground/60">{featured.length} Dispatches</span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featured.map((p, idx) => (
            <article key={idx} className="border-2 border-foreground p-5 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#333] bg-foreground/5 flex flex-col transition-colors duration-500">
              <div className="flex justify-between items-center mb-3">
                <span className="bg-foreground text-background font-sans text-[10px] font-bold uppercase tracking-widest px-2 py-0.5">{p.status}</span>
                <span className="font-sans text-[10px] font-bold uppercase text-foreground/50">{p.category} · Ref: {refNumbers[projects.indexOf(p)]}</span>
              </div>
              <h3 className="font-['Playfair_Display'] text-2xl sm:text-3xl font-black uppercase mb-2 leading-tight">
                <a href={p.live !== '#' ? p.live : p.github} target="_blank" className="hover:underline decoration-2 text-foreground">{p.title}</a>
              </h3>
              <p className="font-['Lora'] text-sm text-justify-news mb-4 grow text-foreground/80">{p.description}</p>
              <div className="space-y-3">
                <div className="flex flex-wrap gap-1.5">
                  {p.tech.map((t, i) => <span key={i} className="font-mono text-[10px] border border-foreground/40 px-1.5 py-0.5 bg-foreground/5 text-foreground">{t}</span>)}
                </div>
                {p.features && (
                  <div className="border-t border-foreground/30 pt-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest mb-1 text-foreground/60">Key Features</p>
                    <div className="flex flex-wrap gap-x-3 gap-y-1">
                      {p.features.map((f, i) => <span key={i} className="font-['Lora'] text-xs">· {f}</span>)}
                    </div>
                  </div>
                )}
                <div className="flex gap-4 pt-2 border-t border-black/30 items-center">
                  {p.live !== '#' && (
                    <a href={p.live} target="_blank" className="hover:bg-black hover:text-[#f5f0e8] transition-colors p-1" title="Live Deploy">
                      <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={p.github} target="_blank" className="hover:bg-black hover:text-[#f5f0e8] transition-colors p-1" title="View Source">
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Technical Performance Audit - Strategic Placement */}
      <section className="mb-12 border-t-[6px] border-double border-foreground pt-10">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-foreground pb-2 mb-8 gap-2">
          <h2 className="font-['Playfair_Display'] text-3xl sm:text-4xl font-black uppercase text-foreground">Infrastructure Activity Audit</h2>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-accent">Live Digital Feed</span>
        </div>

        <div className="space-y-12 overflow-x-hidden">
          {/* Continuity Matrix (Stable ghchart) */}
          <div className="border-4 border-black p-3 xs:p-5 bg-[#060c14] shadow-[6px_6px_0_#000] transition-colors duration-500 overflow-x-hidden">
             <div className="flex justify-between items-center border-b border-[#9b5de5]/30 mb-4 text-[#9b5de5]">
                <p className="font-sans font-bold text-[8px] sm:text-[10px] uppercase tracking-widest pb-1">Fig 1.3: Continuity Matrix (Annual Deployment Grid)</p>
                <span className="font-mono text-[8px] sm:text-[10px] font-bold text-green-400">STATUS: NOMINAL</span>
             </div>
             <div className="overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-[#9b5de5]/20 scrollbar-track-transparent">
                <div className="min-w-[600px] sm:min-w-0">
                  <InvestigativeLens 
                    src="https://ghchart.rshah.org/9b5de5/Ashwinjauhary" 
                    alt="Ashwin's Github Chart" 
                    className="w-full h-auto"
                  />
                </div>
             </div>
             <div className="mt-4 flex justify-between items-center text-[#9b5de5]/60 font-mono text-[8px]">
                <span>SOURCE: GHCHART.RSHAH.ORG</span>
                <span>(RE)VERIFIED PURPLE CORE</span>
             </div>
          </div>

          {/* Bottom Card: Streak & Velocity */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="border-4 border-black p-3 xs:p-5 bg-[#060c14] shadow-[6px_6px_0_#000] overflow-hidden">
                <p className="font-sans font-bold text-[8px] sm:text-[10px] uppercase tracking-widest mb-3 border-b border-[#9b5de5]/30 pb-1 text-[#9b5de5]">Fig 1.4: Persistence Streak Monitor</p>
                <div className="flex justify-center">
                  <InvestigativeLens 
                    src="https://github-readme-streak-stats.herokuapp.com?user=Ashwinjauhary&theme=tokyonight&hide_border=true&background=060c14&ring=9b5de5&fire=9b5de5&currStreakLabel=9b5de5&sideLabels=8899aa&dates=8899aa" 
                    alt="GitHub Streak" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
              <div className="border-4 border-black p-3 xs:p-5 bg-[#060c14] shadow-[6px_6px_0_#000] overflow-hidden">
                <p className="font-sans font-bold text-[8px] sm:text-[10px] uppercase tracking-widest mb-3 border-b border-[#9b5de5]/30 pb-1 text-[#9b5de5]">Fig 1.5: Production Velocity Graph</p>
                <div className="flex justify-center">
                  <InvestigativeLens 
                    src="https://github-readme-activity-graph.vercel.app/graph?username=Ashwinjauhary&bg_color=060c14&color=9b5de5&line=7b3fe4&point=c49bff&area=true&hide_border=true" 
                    alt="Activity Graph" 
                    className="max-w-full h-auto"
                  />
                </div>
              </div>
          </div>
        </div>
      </section>

      {/* Advanced Section */}
      <section className="mb-12 border-t-4 border-foreground pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-foreground pb-2 mb-6 gap-2">
          <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase text-foreground">Advanced Technology Dispatches</h2>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground/60">{advanced.length} Reports</span>
        </div>
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6">
          {advanced.map((p, idx) => (
            <div key={idx} className="break-inside-avoid border border-foreground/40 p-4 mb-6 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500">
              <div className="flex justify-between items-center mb-2">
                <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-foreground/60 px-1.5 py-0.5 text-foreground">{p.category}</span>
                <span className="font-sans text-[10px] text-foreground/40">#{refNumbers[projects.indexOf(p)]}</span>
              </div>
              <h4 className="font-['Playfair_Display'] text-xl font-black uppercase mb-2 leading-none">
                <a href={p.live !== '#' ? p.live : p.github} target="_blank" className="hover:underline text-foreground">{p.title}</a>
              </h4>
              <p className="font-['Lora'] text-sm mb-3 text-justify-news text-foreground/80">{p.description}</p>
              <div className="flex flex-wrap gap-1 mb-3">
                {p.tech.map((t, i) => <span key={i} className="font-mono text-[10px] border border-foreground/40 px-1.5 text-foreground/70">{t}</span>)}
              </div>
              <div className="flex gap-3 items-center">
                {p.live !== '#' && (
                  <a href={p.live} target="_blank" className="hover:bg-foreground hover:text-background transition-colors p-1" title="Live Deploy">
                    <ExternalLink size={14} />
                  </a>
                )}
                <a href={p.github} target="_blank" className="hover:bg-foreground hover:text-background transition-colors p-1" title="View Source">
                  <GithubIcon size={14} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Completed Section */}
      <section className="border-t-4 border-foreground pt-6">
        <div className="flex flex-col sm:flex-row justify-between items-center border-b-2 border-foreground pb-2 mb-6 gap-2">
          <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase text-foreground">Completed Works Archive</h2>
          <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground/60">{completed.length} On Record</span>
        </div>
        <div className="divide-y divide-foreground/20">
          {completed.map((p, idx) => (
            <div key={idx} className="py-4 grid grid-cols-1 sm:grid-cols-12 gap-4 items-start hover:bg-foreground/5 transition-colors -mx-2 px-2 duration-300">
              <div className="hidden sm:block sm:col-span-1 font-mono text-xs text-foreground/40 mt-1">#{refNumbers[projects.indexOf(p)]}</div>
              <div className="col-span-full sm:col-span-11 grid grid-cols-1 sm:grid-cols-11 gap-4">
                <div className="sm:col-span-5">
                  <h4 className="font-['Playfair_Display'] font-black text-xl uppercase mb-1 leading-none">
                    <a href={p.live} target="_blank" className="hover:underline text-foreground">{p.title}</a>
                  </h4>
                  <div className="flex items-center gap-2">
                    <span className="sm:hidden font-mono text-[8px] text-foreground/40">#{refNumbers[projects.indexOf(p)]}</span>
                    <p className="font-sans text-[10px] uppercase tracking-widest text-foreground/60">{p.category}</p>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <p className="font-['Lora'] text-sm sm:line-clamp-2 text-foreground/80">{p.description}</p>
                </div>
                <div className="sm:col-span-2 flex gap-2 items-center justify-end">
                  <a href={p.live} target="_blank" className="hover:bg-foreground hover:text-background transition-colors p-1" title="Live">
                    <ExternalLink size={14} />
                  </a>
                  <a href={p.github} target="_blank" className="hover:bg-foreground hover:text-background transition-colors p-1" title="Source">
                    <GithubIcon size={14} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>

  );
}
