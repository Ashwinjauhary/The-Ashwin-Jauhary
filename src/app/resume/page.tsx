import { skills, certificates, profile, experience, clientWork } from "@/data";

export default function Resume() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-foreground transition-colors duration-500 overflow-x-hidden md:overflow-x-visible">

      {/* Section Header */}
      <div className="text-center border-b-[6px] border-double border-foreground pb-4 mb-10">
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold mb-1 text-foreground/60">Career & Capabilities — Section D</p>
        <h1 className="font-['Playfair_Display'] text-4xl xs:text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">The Dossier</h1>
        <p className="font-['Lora'] italic text-sm sm:text-base mt-2 text-foreground/60 px-4">Complete professional record. Verified, filed, and ready for inspection.</p>
      </div>

      {/* Identity + Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y-2 border-foreground mb-10 divide-x-2 divide-foreground text-center bg-foreground/5 transition-colors duration-500">
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">7.0</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">GPA / 10.0</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">828+</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">GitHub Contributions</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">31</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">Public Repos</p>
        </div>
        <div className="py-4 px-1 xs:px-2">
          <p className="font-['Playfair_Display'] text-2xl xs:text-3xl font-black text-foreground">12</p>
          <p className="font-sans text-[8px] xs:text-[10px] uppercase tracking-widest font-bold text-foreground/60">Certifications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left column */}
        <div className="lg:col-span-7 pr-0 lg:pr-10 border-r-0 lg:border-r-[1.5px] border-foreground/40 space-y-10">

          {/* Experience */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Professional Record</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-foreground pl-5 relative">
                  <div className="absolute -left-[9px] top-1 w-3.5 h-3.5 bg-foreground rounded-full" />
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="font-['Playfair_Display'] font-black text-xl uppercase leading-tight text-foreground">{exp.role}</h3>
                      <p className="font-['Lora'] italic text-base text-foreground/80">{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-foreground px-2 py-0.5 text-foreground">{exp.type}</span>
                      <p className="font-mono text-xs text-foreground/60 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm text-justify-news mt-2 mb-3 text-foreground/80">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="font-sans text-[10px] font-bold border border-foreground/40 px-2 py-0.5 bg-foreground/5 text-foreground/70">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Work */}
          <div className="border-t-4 border-foreground pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Client Commissions</h2>
            <div className="space-y-4">
              {clientWork.map((work, idx) => (
                <div key={idx} className="border border-foreground/40 p-4 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-black text-xl text-foreground">{work.project}</h4>
                      <p className="font-['Lora'] italic text-sm text-foreground/70">Client: <strong className="text-foreground">{work.client}</strong> · via {work.via}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm mb-3 text-foreground/80">{work.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tech.map((t, i) => <span key={i} className="font-mono text-[10px] border border-foreground/40 px-1.5 py-0.5 text-foreground/60">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="border-t-4 border-foreground pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-foreground pb-2 mb-6 text-foreground">Technical Clearances</h2>
            <div className="space-y-5">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest border-b border-foreground pb-0.5 text-foreground">{group.category}</p>
                    {group.tag && <span className="font-sans text-[9px] font-bold uppercase tracking-widest border border-foreground px-1 text-foreground/60">{group.tag}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span key={i} className="font-['Lora'] text-sm border border-foreground px-2 py-0.5 bg-foreground/5 hover:bg-foreground hover:text-background transition-colors cursor-default text-foreground duration-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right sidebar */}
        <div className="lg:col-span-5 space-y-8">

          {/* Identity Card */}
          <div className="border-[3px] border-foreground p-5 shadow-[5px_5px_0_#000] dark:shadow-[5px_5px_0_#333] bg-foreground/5 transition-colors duration-500">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase border-b-2 border-foreground pb-2 mb-4 text-center text-foreground">Identity Clearance</h3>
            <div className="grid grid-cols-2 gap-4 font-['Lora'] text-sm">
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Designation</p><p className="font-semibold text-foreground">Systems Architect & Developer</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Clearance</p><p className="font-semibold text-foreground">Full-Stack / Root Access</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Institution</p><p className="font-semibold text-foreground">PSIT Kanpur</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">GPA</p><p className="font-semibold text-foreground">7.0 / 10.0</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Term</p><p className="font-semibold text-foreground">2023–2026</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-foreground/50 mb-1">Phone</p><p className="font-semibold text-foreground">{profile.phone}</p></div>
            </div>
            <div className="mt-4 pt-4 border-t border-foreground space-y-2">
              <a href={`mailto:${profile.email}`} className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 hover:bg-foreground hover:text-background transition-colors text-foreground">{profile.email}</a>
              <a href={profile.linkedin} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 hover:bg-foreground hover:text-background transition-colors text-foreground">LinkedIn: /in/ashwin-jauhary</a>
              <a href={profile.github} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-foreground py-2 bg-foreground text-background">GitHub · 828+ Contributions</a>
            </div>
          </div>

          {/* All Certifications */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase border-b-2 border-foreground pb-2 mb-4 text-foreground">Certified Merits ({certificates.length})</h3>
            <div className="space-y-2">
              {certificates.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start border border-foreground/40 p-3 bg-foreground/5 hover:bg-foreground/10 transition-colors duration-500 group">
                  <div>
                    <p className="font-['Playfair_Display'] font-bold text-base leading-snug group-hover:underline text-foreground">{cert.title}</p>
                    <p className="font-['Lora'] italic text-xs mt-0.5 text-foreground/60">{cert.org} · <span className="font-sans uppercase tracking-wider text-[9px] font-bold">{cert.level}</span></p>
                  </div>
                  <span className="font-sans font-black text-accent text-sm shrink-0 ml-4">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Market Index */}
          <div className="border-t-4 border-foreground pt-4">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase mb-3 text-foreground">Today&#39;s Tech Barometer</h3>
            <div className="border-y-2 border-foreground divide-y divide-foreground/20 bg-foreground/5 transition-all duration-300">
              {[
                { name: "React / Next.js", change: "+5.4%", dir: "▲", note: "Record Highs" },
                { name: "TypeScript", change: "+2.1%", dir: "▲", note: "Strongly Adopted" },
                { name: "Python & AI Libs", change: "+8.9%", dir: "▲", note: "Breakout" },
                { name: "Node.js", change: "-0.1%", dir: "▼", note: "Minor Correction", red: true },
                { name: "Groq / SambaNova AI", change: "+12.3%", dir: "▲", note: "Surging Fast" },
                { name: "Flutter / Dart", change: "+1.8%", dir: "▲", note: "Steady Growth" },
                { name: "Docker", change: "STEADY", dir: "▬", note: "Industry Standard" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 gap-2 px-2">
                  <span className="font-['Lora'] font-bold text-sm text-foreground">{item.name}</span>
                  <span className="font-sans text-[9px] hidden md:block text-foreground/40 italic">{item.note}</span>
                  <span className={`font-mono font-black text-sm shrink-0 ${item.red ? 'text-accent' : 'text-foreground'}`}>{item.dir} {item.change}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] uppercase font-sans mt-1 text-foreground/40">Source: Internal Compiler Statistics. Not financial advice.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
