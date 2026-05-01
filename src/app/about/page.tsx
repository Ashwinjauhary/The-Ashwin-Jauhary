import { about, skills, certificates, profile } from "@/data";

import InvestigativeLens from "@/components/InvestigativeLens";

export default function About() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-foreground overflow-x-hidden md:overflow-x-visible">
      
      <div className="text-center border-b-[6px] border-double border-foreground pb-4 mb-10">
        <p className="font-sans text-[10px] sm:text-xs tracking-[0.2em] sm:tracking-[0.3em] uppercase font-bold mb-1">Special Supplement — Section B</p>
        <h1 className="font-['Playfair_Display'] text-4xl xs:text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground leading-none">The Reporter</h1>
        <p className="font-['Lora'] italic text-sm sm:text-base mt-2 text-foreground/60 px-4">An exclusive biography at the intersection of code, craft, and ambition.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">

        {/* Main Feature Story */}
        <article className="lg:col-span-7 border-r-0 lg:border-r-[1.5px] border-foreground/40 pr-0 lg:pr-10">
          <div className="flex items-center gap-4 mb-4 border-b border-foreground/20 pb-2">
            <span className="bg-accent text-background text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 select-none">EXCLUSIVE</span>
            <span className="font-['Lora'] italic text-xs sm:text-sm">A Dispatch From The Digital Frontier</span>
          </div>

          <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-black uppercase mb-4 leading-tight text-foreground">
            Meet The Architect Behind The Systems
          </h2>

          <div className="columns-1 md:columns-2 gap-6 font-['Lora'] text-[0.95rem] leading-relaxed text-justify-news">
            <p className="drop-cap">
              A<span className="tracking-tight">shwin Jauhary was not always</span> a developer of complex systems. Originally a student of broad academic philosophy, the engineer rapidly pivoted from theoretical study to hands-on execution — producing high-fidelity software products with the urgency of a seasoned press operator setting the final edition.
            </p>
            {about.intro.split('\n\n').map((para, i) => (
              <p key={i} className="mt-4">{para}</p>
            ))}

            <blockquote className="my-6 border-y-2 border-foreground py-4 font-['Playfair_Display'] text-xl leading-snug italic text-center px-4 bg-foreground/5 break-inside-avoid text-foreground">
              &quot;Never settle for just working code. A system should be a piece of art from the indices up to the CSS curves.&quot;
            </blockquote>

            <p>
              Working across a spectrum ranging from custom compilers (KanpScript) to fully encrypted social applications (BondSpace), Jauhary embeds professional-grade logic into every deliverable.
            </p>
            <p className="mt-4">
              Sources indicate that further systems are currently in active development. Details remain strictly classified pending a public production release. Citizens of the web are advised to follow the GitHub repository for advance notice of forthcoming dispatches.
            </p>
          </div>

          {/* Skills Arsenal — full width below the bio */}
          <div className="mt-10 border-t-4 border-foreground pt-6">
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase mb-6 text-foreground">Complete Technical Arsenal</h3>
            <div className="space-y-5">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest border-b border-foreground pb-0.5 text-foreground">{group.category}</p>
                    {group.tag && <span className="font-sans text-[9px] font-bold uppercase tracking-widest border border-foreground px-1 text-foreground/60">{group.tag}</span>}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((skill, i) => (
                      <span key={i} className="font-['Lora'] text-sm border border-foreground px-2 py-0.5 bg-foreground/5 hover:bg-foreground hover:text-background transition-colors cursor-default text-foreground">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-8">

          {/* Portrait Photo — Newspaper Style */}
          <div className="border-4 border-foreground shadow-[8px_8px_0_#000] dark:shadow-[8px_8px_0_#333] bg-foreground/5">
            <div className="relative overflow-hidden border-b-[3px] border-foreground">
              <InvestigativeLens
                src="/Avatar.webp"
                alt="Ashwin Jauhary — Chief Correspondent"
                grayscale={true}
              />
            </div>
            <div className="bg-foreground text-background py-4 px-4 text-center">
              <p className="font-sans font-black uppercase tracking-[0.3em] text-sm">Ashwin Jauhary</p>
              <p className="font-['Lora'] italic text-xs opacity-80 mt-1">Chief Correspondent · Systems Architect · Full-Stack Developer</p>
            </div>
          </div>

          {/* Identity Card */}
          <div className="border-[3px] border-foreground p-5 shadow-[4px_4px_0_#000] dark:shadow-[4px_4px_0_#333] bg-foreground/5">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase border-b-2 border-foreground pb-2 mb-4 text-center text-foreground">Who&#39;s Who</h3>
            <div className="space-y-3 font-['Lora'] text-sm">
              {about.quick.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-foreground/20 pb-3 last:border-0 last:pb-0">
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <div>
                    <p className="font-sans font-bold uppercase text-[10px] tracking-widest text-foreground/60">{item.label}</p>
                    <p className="font-semibold text-base text-foreground">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t-4 border-foreground pt-4">
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase mb-3 text-foreground">Certifications Gazette</h3>
            <div className="divide-y divide-foreground/20 border-y-2 border-foreground">
              {certificates.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start py-2.5 font-['Lora'] text-sm gap-4">
                  <div>
                    <p className="font-bold text-foreground">{cert.title}</p>
                    <p className="text-xs text-foreground/60 italic">{cert.org} · <span className="font-sans font-bold uppercase tracking-widest text-[9px]">{cert.level}</span></p>
                  </div>
                  <span className="font-sans font-black text-accent shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Block */}
          <div className="border-[3px] border-foreground p-5 bg-foreground text-background shadow-[4px_4px_0_#ccc]">
            <h4 className="font-['Playfair_Display'] text-xl font-black uppercase border-b border-background/30 pb-2 mb-4">Reach The Author</h4>
            <div className="space-y-4 font-['Lora'] text-xs sm:text-sm">
              <a href={`mailto:${profile.email}`} className="flex gap-3 items-center hover:opacity-70 transition-opacity break-all sm:break-normal">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                <span>{profile.email}</span>
              </a>
              <a href={`tel:${profile.phone}`} className="flex gap-3 items-center hover:opacity-70 transition-opacity">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
                <span>{profile.phone}</span>
              </a>
              <a href={profile.github} target="_blank" className="flex gap-3 items-center hover:opacity-70 transition-opacity break-all sm:break-normal">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                <span>github.com/Ashwinjauhary</span>
              </a>
              <a href={profile.linkedin} target="_blank" className="flex gap-3 items-center hover:opacity-70 transition-opacity break-all sm:break-normal">
                <svg className="shrink-0" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                <span>linkedin.com/in/ashwin-jauhary</span>
              </a>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}

