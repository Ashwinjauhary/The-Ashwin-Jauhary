import { about, skills, certificates, profile } from "@/data";
import Image from "next/image";

export default function About() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-[#1a1a1a]">
      
      <div className="text-center border-b-[6px] border-double border-black pb-4 mb-10">
        <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold mb-1">Special Supplement — Section B</p>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black uppercase tracking-tight">The Reporter</h1>
        <p className="font-['Lora'] italic text-base mt-2 text-black/60">An exclusive biography at the intersection of code, craft, and ambition.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

        {/* Main Feature Story */}
        <article className="lg:col-span-7 border-r-0 lg:border-r-[1.5px] border-black/40 pr-0 lg:pr-10">
          <div className="flex items-center gap-4 mb-4 border-b border-black/20 pb-2">
            <span className="bg-[#C0392B] text-[#f5f0e8] text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 select-none">EXCLUSIVE</span>
            <span className="font-['Lora'] italic text-sm">A Dispatch From The Digital Frontier</span>
          </div>

          <h2 className="font-['Playfair_Display'] text-4xl md:text-5xl font-black uppercase mb-4 leading-tight">
            Meet The Architect Behind The Systems
          </h2>

          <div className="columns-1 md:columns-2 gap-6 font-['Lora'] text-[0.95rem] leading-relaxed text-justify-news">
            <p className="drop-cap">
              A<span className="tracking-tight">shwin Jauhary was not always</span> a developer of complex systems. Originally a student of broad academic philosophy, the engineer rapidly pivoted from theoretical study to hands-on execution — producing high-fidelity software products with the urgency of a seasoned press operator setting the final edition.
            </p>
            {about.intro.split('\n\n').map((para, i) => (
              <p key={i} className="mt-4">{para}</p>
            ))}

            <blockquote className="my-6 border-y-2 border-black py-4 font-['Playfair_Display'] text-xl leading-snug italic text-center px-4 bg-black/5 break-inside-avoid">
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
          <div className="mt-10 border-t-4 border-black pt-6">
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase mb-6">Complete Technical Arsenal</h3>
            <div className="space-y-5">
              {skills.map((group, idx) => (
                <div key={idx}>
                  <div className="flex items-center gap-3 mb-2">
                    <p className="font-sans font-bold text-[10px] uppercase tracking-widest border-b border-black pb-0.5">{group.category}</p>
                    {group.tag && <span className="font-sans text-[9px] font-bold uppercase tracking-widest border border-black px-1 text-black/60">{group.tag}</span>}
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
        </article>

        {/* Sidebar */}
        <aside className="lg:col-span-5 space-y-8">

          {/* Portrait Photo — Newspaper Style */}
          <div className="border-4 border-black shadow-[8px_8px_0_#1a1a1a] bg-[#e5e0d0]">
            <div className="relative overflow-hidden border-b-[3px] border-black">
              <Image
                src="/Avatar.png"
                alt="Ashwin Jauhary — Chief Correspondent"
                width={600}
                height={800}
                className="w-full h-auto grayscale contrast-150 brightness-95"
                priority
              />
            </div>
            <div className="bg-black text-[#f5f0e8] py-4 px-4 text-center">
              <p className="font-sans font-black uppercase tracking-[0.3em] text-sm">Ashwin Jauhary</p>
              <p className="font-['Lora'] italic text-xs opacity-80 mt-1">Chief Correspondent · Systems Architect · Full-Stack Developer</p>
            </div>
          </div>

          {/* Identity Card */}
          <div className="border-[3px] border-black p-5 shadow-[4px_4px_0_#1a1a1a] bg-[#f0ebd9]">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase border-b-2 border-black pb-2 mb-4 text-center">Who&#39;s Who</h3>
            <div className="space-y-3 font-['Lora'] text-sm">
              {about.quick.map((item, idx) => (
                <div key={idx} className="flex gap-3 items-start border-b border-black/20 pb-3 last:border-0 last:pb-0">
                  <span className="text-2xl leading-none">{item.icon}</span>
                  <div>
                    <p className="font-sans font-bold uppercase text-[10px] tracking-widest text-black/60">{item.label}</p>
                    <p className="font-semibold text-base">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="border-t-4 border-black pt-4">
            <h3 className="font-['Playfair_Display'] text-2xl font-black uppercase mb-3">Certifications Gazette</h3>
            <div className="divide-y divide-black/20 border-y-2 border-black">
              {certificates.map((cert, idx) => (
                <div key={idx} className="flex justify-between items-start py-2.5 font-['Lora'] text-sm gap-4">
                  <div>
                    <p className="font-bold">{cert.title}</p>
                    <p className="text-xs text-black/60 italic">{cert.org} · <span className="font-sans font-bold uppercase tracking-widest text-[9px]">{cert.level}</span></p>
                  </div>
                  <span className="font-sans font-black text-[#C0392B] shrink-0">{cert.year}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Contact Block */}
          <div className="border-[3px] border-black p-5 bg-black text-[#f5f0e8]">
            <h4 className="font-['Playfair_Display'] text-xl font-black uppercase border-b border-[#f5f0e8]/30 pb-2 mb-4">Reach The Author</h4>
            <div className="space-y-3 font-['Lora'] text-sm">
              <a href={`mailto:${profile.email}`} className="flex gap-2 items-center hover:opacity-70 transition-opacity"><span>✉</span> {profile.email}</a>
              <a href={`tel:${profile.phone}`} className="flex gap-2 items-center hover:opacity-70 transition-opacity"><span>📞</span> {profile.phone}</a>
              <a href={profile.github} target="_blank" className="flex gap-2 items-center hover:opacity-70 transition-opacity"><span>⌥</span> github.com/Ashwinjauhary</a>
              <a href={profile.linkedin} target="_blank" className="flex gap-2 items-center hover:opacity-70 transition-opacity"><span>☎</span> linkedin.com/in/ashwin-jauhary</a>
            </div>
          </div>

        </aside>
      </div>
    </div>
  );
}
