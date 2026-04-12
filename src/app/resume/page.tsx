import { skills, certificates, profile, experience, clientWork } from "@/data";

export default function Resume() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-[#1a1a1a]">

      {/* Section Header */}
      <div className="text-center border-b-[6px] border-double border-black pb-4 mb-10">
        <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold mb-1">Career & Capabilities — Section D</p>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black uppercase tracking-tight">The Dossier</h1>
        <p className="font-['Lora'] italic text-base mt-2 text-black/60">Complete professional record. Verified, filed, and ready for inspection.</p>
      </div>

      {/* Identity + Stats Banner */}
      <div className="grid grid-cols-2 md:grid-cols-4 border-y-2 border-black mb-10 divide-x-2 divide-black text-center">
        <div className="py-4 px-2">
          <p className="font-['Playfair_Display'] text-3xl font-black">7.0</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/60">GPA / 10.0</p>
        </div>
        <div className="py-4 px-2">
          <p className="font-['Playfair_Display'] text-3xl font-black">828+</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/60">GitHub Contributions</p>
        </div>
        <div className="py-4 px-2">
          <p className="font-['Playfair_Display'] text-3xl font-black">31</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/60">Public Repos</p>
        </div>
        <div className="py-4 px-2">
          <p className="font-['Playfair_Display'] text-3xl font-black">12</p>
          <p className="font-sans text-[10px] uppercase tracking-widest font-bold text-black/60">Certifications</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Left column */}
        <div className="lg:col-span-7 pr-0 lg:pr-10 border-r-0 lg:border-r-[1.5px] border-black/40 space-y-10">

          {/* Experience */}
          <div>
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-black pb-2 mb-6">Professional Record</h2>
            <div className="space-y-6">
              {experience.map((exp, idx) => (
                <div key={idx} className="border-l-4 border-black pl-5 relative">
                  <div className="absolute -left-[9px] top-1 w-3.5 h-3.5 bg-black rounded-full" />
                  <div className="flex flex-wrap justify-between items-start gap-2 mb-1">
                    <div>
                      <h3 className="font-['Playfair_Display'] font-black text-xl uppercase leading-tight">{exp.role}</h3>
                      <p className="font-['Lora'] italic text-base">{exp.org}</p>
                    </div>
                    <div className="text-right">
                      <span className="font-sans text-[10px] font-bold uppercase tracking-widest border border-black px-2 py-0.5">{exp.type}</span>
                      <p className="font-mono text-xs text-black/60 mt-1">{exp.period}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm text-justify-news mt-2 mb-3">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((h, i) => (
                      <span key={i} className="font-sans text-[10px] font-bold border border-black/40 px-2 py-0.5 bg-black/5">{h}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Client Work */}
          <div className="border-t-4 border-black pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-black pb-2 mb-6">Client Commissions</h2>
            <div className="space-y-4">
              {clientWork.map((work, idx) => (
                <div key={idx} className="border border-black p-4 hover:bg-black/5 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h4 className="font-['Playfair_Display'] font-black text-xl">{work.project}</h4>
                      <p className="font-['Lora'] italic text-sm">Client: <strong>{work.client}</strong> · via {work.via}</p>
                    </div>
                  </div>
                  <p className="font-['Lora'] text-sm mb-3">{work.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {work.tech.map((t, i) => <span key={i} className="font-mono text-[10px] border border-black/40 px-1.5 py-0.5">{t}</span>)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="border-t-4 border-black pt-6">
            <h2 className="font-['Playfair_Display'] text-3xl font-black uppercase border-b-2 border-black pb-2 mb-6">Technical Clearances</h2>
            <div className="space-y-5">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest border-b border-black pb-0.5">{group.category}</p>
                    {group.tag && <span className="font-sans text-[9px] font-bold uppercase tracking-widest border border-black px-1">{group.tag}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span key={i} className="font-['Lora'] text-sm border border-black px-2 py-0.5 bg-[#f0ebd9] hover:bg-black hover:text-[#f5f0e8] transition-colors cursor-default">
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
          <div className="border-[3px] border-black p-5 shadow-[5px_5px_0_#1a1a1a] bg-[#f0ebd9]">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase border-b-2 border-black pb-2 mb-4 text-center">Identity Clearance</h3>
            <div className="grid grid-cols-2 gap-4 font-['Lora'] text-sm">
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">Designation</p><p className="font-semibold">Systems Architect & Developer</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">Clearance</p><p className="font-semibold">Full-Stack / Root Access</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">Institution</p><p className="font-semibold">PSIT Kanpur</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">GPA</p><p className="font-semibold">7.0 / 10.0</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">Term</p><p className="font-semibold">2023–2026</p></div>
              <div><p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/50 mb-1">Phone</p><p className="font-semibold">{profile.phone}</p></div>
            </div>
            <div className="mt-4 pt-4 border-t border-black space-y-2">
              <a href={`mailto:${profile.email}`} className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-black py-2 hover:bg-black hover:text-[#f5f0e8] transition-colors">{profile.email}</a>
              <a href={profile.linkedin} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-black py-2 hover:bg-black hover:text-[#f5f0e8] transition-colors">LinkedIn: /in/ashwin-jauhary</a>
              <a href={profile.github} target="_blank" className="block font-sans font-bold text-xs text-center uppercase tracking-widest border border-black py-2 bg-black text-[#f5f0e8]">GitHub · 828+ Contributions</a>
            </div>
          </div>

          {/* All Certifications */}
          <div>
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase border-b-2 border-black pb-2 mb-4">Certified Merits ({certificates.length})</h3>
            <div className="space-y-2">
              {certificates.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start border border-black p-3 hover:bg-black/5 transition-colors group">
                  <div>
                    <p className="font-['Playfair_Display'] font-bold text-base leading-snug group-hover:underline">{cert.title}</p>
                    <p className="font-['Lora'] italic text-xs mt-0.5 text-black/60">{cert.org} · <span className="font-sans uppercase tracking-wider text-[9px] font-bold">{cert.level}</span></p>
                  </div>
                  <span className="font-sans font-black text-[#C0392B] text-sm shrink-0 ml-4">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Market Index */}
          <div className="border-t-4 border-black pt-4">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase mb-3">Today&#39;s Tech Barometer</h3>
            <div className="border-y-2 border-black divide-y divide-black/20">
              {[
                { name: "React / Next.js", change: "+5.4%", dir: "▲", note: "Record Highs" },
                { name: "TypeScript", change: "+2.1%", dir: "▲", note: "Strongly Adopted" },
                { name: "Python & AI Libs", change: "+8.9%", dir: "▲", note: "Breakout" },
                { name: "Node.js", change: "-0.1%", dir: "▼", note: "Minor Correction", red: true },
                { name: "Groq / SambaNova AI", change: "+12.3%", dir: "▲", note: "Surging Fast" },
                { name: "Flutter / Dart", change: "+1.8%", dir: "▲", note: "Steady Growth" },
                { name: "Docker", change: "STEADY", dir: "▬", note: "Industry Standard" },
              ].map((item, i) => (
                <div key={i} className="flex items-center justify-between py-2 gap-2">
                  <span className="font-['Lora'] font-bold text-sm">{item.name}</span>
                  <span className="font-sans text-[9px] hidden md:block text-black/40 italic">{item.note}</span>
                  <span className={`font-mono font-black text-sm shrink-0 ${item.red ? 'text-[#C0392B]' : 'text-black'}`}>{item.dir} {item.change}</span>
                </div>
              ))}
            </div>
            <p className="text-[9px] uppercase font-sans mt-1 text-black/40">Source: Internal Compiler Statistics. Not financial advice.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
