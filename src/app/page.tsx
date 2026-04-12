import { ExternalLink, Printer } from "lucide-react";
import Image from "next/image";
import { profile, projects } from "@/data";

// Stable reference numbers per project (not random on each render)
const refNumbers = projects.map(() => String(Math.floor(Math.random() * 9000) + 1000));

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

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
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
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

export default function Home() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }).toUpperCase();

  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen relative font-sans text-[#1a1a1a]">
      {/* ===== MASTHEAD ===== */}
      <header className="flex flex-col items-center mb-6 pb-2 border-b-[6px] border-black border-double">
        {/* Top Info Bar */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center md:items-end border-y-2 border-black py-2 px-2 text-xs uppercase font-bold tracking-widest mb-6">
          <div className="hidden md:flex flex-col text-center md:text-left mb-2 md:mb-0">
            <span>VOL. I ... No. 1</span>
            <span className="block italic font-['Lora'] text-[10px] normal-case mt-1">Established 2026</span>
          </div>
          <div className="flex flex-col items-center text-center">
            <span className="text-sm font-black">{today}</span>
            <span className="block font-['Playfair_Display'] text-[11px] font-normal tracking-wide capitalize mt-1">
              &quot;All the Code That&apos;s Fit to Ship&quot;
            </span>
          </div>
          <div className="hidden md:flex flex-col text-center md:text-right">
            <span>LATE CITY EDITION</span>
            <span className="block font-['Lora'] italic text-[10px] normal-case mt-1">Weather: High Traffic, Zero Latency</span>
          </div>
        </div>

        {/* Newspaper Title - Forced Single Line */}
        <div className="relative w-full text-center">
          <button 
            onClick={() => window.print()}
            className="absolute -top-4 right-0 no-print flex items-center gap-2 bg-black text-[#f5f0e8] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] hover:bg-[#C0392B] transition-all cursor-pointer shadow-[4px_4px_0_rgba(0,0,0,0.2)] active:translate-y-0.5 active:shadow-none"
          >
            <Printer size={12} />
            <span>Clip to PDF</span>
          </button>
          <h1 className="text-[2.5rem] sm:text-[4.5rem] md:text-[6.5rem] lg:text-[7.8rem] leading-none mb-2 tracking-tighter font-['Playfair_Display'] font-black uppercase antialiased whitespace-nowrap" style={{ textShadow: "1px 1px 0px rgba(0,0,0,0.15)"}}>
            The Ashwin Jauhary
          </h1>
        </div>
      </header>

      {/* ===== MAIN EDITORIAL GRID ===== */}
      <main className="grid grid-cols-1 md:grid-cols-12 gap-8 gap-y-12">

        {/* LEAD STORY (Cols 1-8) */}
        <article className="md:col-span-8 pr-0 md:pr-8 md:border-r-[1.5px] border-black/40">

          <h2 className="font-['Playfair_Display'] text-4xl sm:text-5xl md:text-[4rem] font-black leading-[0.9] mb-6 tracking-tight uppercase text-center border-b-[3px] border-black pb-6">
            Architect Unleashes Premium Web Infrastructure
          </h2>

          <div className="flex items-center justify-between mb-6 border-b border-black/20 pb-2 italic font-['Lora'] text-sm">
            <span className="flex items-center gap-3">
              <Image
                src="/Avatar.png"
                alt="Ashwin Jauhary"
                width={40}
                height={40}
                className="rounded-full grayscale contrast-125 border-2 border-black object-cover"
                style={{ width: 40, height: 40 }}
              />
              By <strong className="font-sans uppercase tracking-widest text-xs not-italic">ASHWIN JAUHARY</strong>
            </span>
            <span className="uppercase text-xs font-bold font-sans tracking-widest not-italic">{profile.location}</span>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 text-justify-news font-['Lora'] text-[0.95rem] leading-relaxed">
            <p className="drop-cap">
              I<span className="tracking-tight">n an unprecedented move that</span> has rippled across the digital landscape, a local developer is redefining what it means to build software. Specializing in frontend architectures and AI-integrated systems, the focus has shifted entirely to crafting <i>high-fidelity</i> interfaces.
            </p>
            <p className="mt-4">
              &quot;Never settle for just &apos;working code&apos;,&quot; the architect declared in a recent manifesto. &quot;A system should be a piece of art, from the database indices up to the CSS transition curves.&quot; Observers note that this methodology is quickly setting a new standard for modern application development.
            </p>
            <p className="mt-4">
              Armed with technologies such as Next.js and React, combined with aggressive AI deployment, the resulting platforms are reportedly executing instructions at blistering speeds.
            </p>

            {/* Inline Image Callout */}
            <div className="my-6 border-[3px] border-black p-2 bg-[#f0ebd9] inline-block w-full break-inside-avoid shadow-[4px_4px_0_#1a1a1a]">
              <div className="border border-black p-1 halftone-image bg-black/10 flex justify-center">
                <Image src="/logo.png" alt="Architect Graphic" width={250} height={250} className="w-full h-auto mix-blend-multiply opacity-90 filter contrast-150 grayscale" />
              </div>
              <p className="text-[10px] uppercase font-sans font-bold text-center mt-2 tracking-widest px-2">Fig 1. Abstract System Schematic.</p>
            </div>

            <h3 className="font-['Playfair_Display'] font-black text-xl uppercase mt-6 mb-2 break-after-avoid">The Shift to Autonomy</h3>
            <p className="mt-2">
              Early tests of the <a href="https://dev-roast-ai-sand.vercel.app" target="_blank" className="font-bold border-b border-black hover:bg-black/10 transition-colors">DevRoast-Ai</a> protocol indicate that machines are now fully capable of interrogating GitHub repositories with remarkable wit and precision. The integration of the Gemini API and robust backend endpoints signals a departure from purely static applications to fully autonomous digital agents.
            </p>
            <p className="mt-4">
              Citizens of the web are advised to prepare for increasingly interactive and sophisticated digital experiences. The current trajectory suggests that the line between artificial logic and premium human-centered design is permanently blurred. Sources close to the developer indicate that new, undocumented systems are already being prototyped in secret.
            </p>
            <p className="mt-4 mb-4">
              When asked for further comment regarding the timeline of these unprecedented deployments, the development team offered only a single, cryptic response: &quot;We push to production on Fridays.&quot;
            </p>

            <div className="w-8 h-px bg-black mx-auto my-6 break-inside-avoid"></div>
          </div>
        </article>

        {/* SECONDARY COLUMN - COL 9-12 */}
        <aside className="md:col-span-4 space-y-8">

          {/* ABOUT ADVERT */}
          <div className="border-[3px] border-black p-4 relative bg-white/40 shadow-[4px_4px_0_#1a1a1a]">
            <h3 className="font-['Playfair_Display'] text-2xl font-black text-center mb-3 uppercase border-b-2 border-black pb-2">
              About The Author
            </h3>
            <div className="font-['Lora'] text-justify-news space-y-3 text-sm">
              <p>
                <strong>ASHWIN JAUHARY</strong> is a Full-Stack Developer and current BCA scholar at PSIT Kanpur (Class of 2027). He is known exclusively for blending extreme deep-tech infrastructure with an impeccable eye for print and digital design.
              </p>

              <blockquote className="my-4 border-y-2 border-black py-3 font-['Playfair_Display'] text-xl leading-snug italic text-center px-4 bg-black/5">
                &quot;Designing the deep-tech infrastructure that powers our impending future.&quot;
              </blockquote>

              <p>
                When not architecting custom compilers or engineering secure systems, the author focuses entirely on the rapid scaling of digital platforms.
              </p>
            </div>
          </div>

          {/* STOCK TICKER / SKILLS */}
          <div className="border-t-4 border-black pt-4">
            <h3 className="font-['Playfair_Display'] text-xl font-black uppercase mb-3 text-center">Tech Index & Barometer</h3>
            <table className="w-full font-mono text-[11px] uppercase tracking-tighter border-y-2 border-black">
              <tbody>
                <tr className="border-b border-black/20"><td className="py-1.5 font-bold">React / Next.js</td><td className="text-right">+5.4 ▲</td></tr>
                <tr className="border-b border-black/20"><td className="py-1.5 font-bold">Node.js (Core)</td><td className="text-right text-[#C0392B]">-0.1 ▼</td></tr>
                <tr className="border-b border-black/20"><td className="py-1.5 font-bold">TypeScript</td><td className="text-right">+2.1 ▲</td></tr>
                <tr className="border-b border-black/20"><td className="py-1.5 font-bold">Python / AI</td><td className="text-right">+8.9 ▲</td></tr>
                <tr><td className="py-1.5 font-bold">Tailwind CSS</td><td className="text-right">STEADY ▬</td></tr>
              </tbody>
            </table>
            <p className="text-[9px] uppercase font-sans mt-2 text-center text-black/60">Source: Internal Compiler Statistics.</p>
          </div>

          {/* WEATHER / NOTICES */}
          <div className="border border-black p-3 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] bg-opacity-20">
            <h4 className="font-sans font-bold text-xs uppercase tracking-widest border-b border-black mb-2 pb-1">Public Notice</h4>
            <p className="font-['Lora'] text-xs text-justify-news">
              By order of the central routing committee, all incoming HTTP requests must be securely encrypted. Violators will be redirected.
            </p>
          </div>
        </aside>

        {/* BOTTOM SECTION: PROJECTS AS CLASSIFIEDS */}
        <section className="col-span-full border-t-[6px] border-double border-black pt-6">
          <div className="flex justify-between items-end border-b-2 border-black pb-2 mb-6">
            <h2 className="font-['Playfair_Display'] text-3xl md:text-5xl font-black tracking-widest uppercase">
              Classified Implementations
            </h2>
            <span className="font-sans text-xs font-bold uppercase tracking-widest hidden sm:block">Section C</span>
          </div>

          <div className="columns-1 sm:columns-2 lg:columns-4 gap-8 space-y-8">
            {projects.map((project, idx) => (
              <div key={idx} className="break-inside-avoid font-['Lora'] border-b border-black/30 pb-6 mb-6">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[10px] uppercase font-sans font-bold tracking-widest border border-black px-1.5 bg-black text-[#f5f0e8]">{project.status}</span>
                  <span className="text-[10px] uppercase font-sans font-bold">Ref: {refNumbers[idx]}</span>
                </div>
                <h4 className="font-['Playfair_Display'] text-2xl font-black uppercase mt-1 mb-2 leading-none">
                  <a href={project.live} target="_blank" className="hover:underline decoration-2">{project.title}</a>
                </h4>
                <p className="text-xs font-sans font-bold mb-2 tracking-wide uppercase">Dateline: Localhost —</p>
                <p className="text-[13px] text-justify-news mb-4">
                  {project.description} Engineered using an advanced stack comprising <strong>{project.tech.join(", ")}</strong>.
                </p>
                <div className="flex gap-4 items-center">
                  <a href={project.live} target="_blank" className="hover:bg-black hover:text-[#f5f0e8] transition-colors p-1" title="Live Preview">
                    <ExternalLink size={16} />
                  </a>
                  <a href={project.github} target="_blank" className="hover:bg-black hover:text-[#f5f0e8] transition-colors p-1" title="Source Code">
                    <GithubIcon size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT ADVERTISEMENT */}
        <section className="col-span-full my-8 border-[5px] border-black p-2 bg-[#f0ebd9]">
          <div className="border border-black p-8 sm:p-12 text-center bg-[url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')] bg-opacity-20 flex flex-col items-center justify-center">
            <div className="bg-[#f5f0e8] p-6 sm:p-10 w-full max-w-4xl border-2 border-black shadow-[8px_8px_0px_#1a1a1a]">
              <p className="font-sans font-bold text-sm tracking-widest uppercase mb-4 border-b border-black pb-2 inline-block">Employment Opportunity</p>
              <h2 className="font-['Playfair_Display'] text-4xl sm:text-6xl font-black uppercase mb-4 leading-none">Wanted: Visionaries</h2>
              <p className="font-['Playfair_Display'] text-xl sm:text-2xl italic mb-8 max-w-2xl mx-auto">
                Currently accepting inquiries for high-stakes engineering & premium frontend design positions.
              </p>
              <div className="font-sans font-bold uppercase tracking-widest text-lg sm:text-xl border-y-2 border-black py-4 mb-8">
                Send Telegrams To: <a href="mailto:ashwin2431333@gmail.com" className="bg-black text-[#f5f0e8] px-3 py-1 ml-2 hover:opacity-80 transition-opacity">ashwin2431333@gmail.com</a>
              </div>
              <div className="flex justify-center gap-12 text-[#1a1a1a]">
                <a href={profile.github} target="_blank" className="hover:scale-110 transition-transform p-2 border-2 border-black rounded-full" title="Github">
                  <GithubIcon size={24} />
                </a>
                <a href={profile.linkedin} target="_blank" className="hover:scale-110 transition-transform p-2 border-2 border-black rounded-full" title="LinkedIn">
                  <LinkedinIcon size={24} />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  );
}
