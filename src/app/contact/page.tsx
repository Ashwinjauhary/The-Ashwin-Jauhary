import { profile } from "@/data";

export default function ContactPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-[#1a1a1a]">
      
      {/* Section Header */}
      <div className="text-center border-b-[6px] border-double border-black pb-4 mb-10">
        <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold mb-1">Public Correspondence — Section F</p>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black uppercase tracking-tight">
          The Correspondence Desk
        </h1>
        <p className="font-['Lora'] italic text-base mt-2 text-black/60">Recruitment, collaboration, and inquiry offices. Open during all business hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left: Big Ad */}
        <div className="border-[5px] border-black p-8 shadow-[8px_8px_0_#1a1a1a] bg-[#f0ebd9] flex flex-col justify-between">
          <div>
            <p className="font-sans font-bold text-xs uppercase tracking-[0.3em] border-b border-black pb-2 mb-6">Position Available</p>
            <h2 className="font-['Playfair_Display'] text-5xl font-black uppercase leading-none mb-4">
              Hiring For:<br />Challenging Problems
            </h2>
            <p className="font-['Lora'] text-lg italic mb-8 leading-relaxed">
              Actively seeking positions and collaborations involving ambitious software, AI products, and high-fidelity digital experiences. Placement, freelance, or founding-team roles considered with equal enthusiasm.
            </p>
            <div className="space-y-4 font-['Lora'] text-base mt-6">
              <div className="flex gap-4 items-center border-b border-black/20 pb-3 group">
                <span className="bg-black text-[#f5f0e8] p-2 rounded-sm group-hover:bg-[#C0392B] transition-colors">
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
                </span>
                <a href={`mailto:${profile.email}`} className="font-bold hover:underline decoration-2">{profile.email}</a>
              </div>
              <div className="flex gap-4 items-center border-b border-black/20 pb-3 group">
                <span className="bg-black text-[#f5f0e8] p-2 rounded-sm group-hover:bg-[#C0392B] transition-colors">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-2.2 2.2a15.045 15.045 0 01-6.59-6.59l2.2-2.21a.96.96 0 00.25-1.01c-.36-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z"/></svg>
                </span>
                <a href={`tel:${profile.phone}`} className="font-bold hover:underline decoration-2">{profile.phone}</a>
              </div>
              <div className="flex gap-4 items-center border-b border-black/20 pb-3 group">
                <span className="bg-[#0077B5] text-white p-2 rounded-sm hover:scale-105 transition-transform">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                </span>
                <a href={profile.linkedin} target="_blank" className="font-bold hover:underline decoration-2">LinkedIn Profile</a>
              </div>
              <div className="flex gap-4 items-center group">
                <span className="bg-black text-white p-2 rounded-sm group-hover:scale-105 transition-transform">
                   <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.041-1.552-4.041-1.552-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.003-.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                </span>
                <a href={profile.github} target="_blank" className="font-bold hover:underline decoration-2">GitHub Repository</a>
              </div>
            </div>
          </div>
          <div className="mt-8 border-t-2 border-black pt-4">
            <p className="font-sans font-bold text-[10px] uppercase tracking-widest text-black/60">Response Time: Under 24 Hours · Location: {profile.location}</p>
          </div>
        </div>

        {/* Right: Editorial block */}
        <div className="space-y-8">
          {/* About what I offer */}
          <div className="border-t-4 border-black pt-4">
            <h3 className="font-['Playfair_Display'] text-3xl font-black uppercase mb-4">What This Office Delivers</h3>
            <div className="font-['Lora'] text-base space-y-3 text-justify-news">
              <p>Seasoned in the complete development cycle from concept through design, engineering, and deployment. Experienced shipping production-grad applications across AI, web, mobile, and embedded systems categories.</p>
              <p>Each engagement receives the same treatment as a flagship product: rigorous planning, clean architecture, zero-compromise implementation, and documentation that survives the original developer.</p>
            </div>
          </div>

          {/* Categories of Work */}
          <div className="border-t-2 border-black pt-4">
            <h4 className="font-['Playfair_Display'] text-xl font-black uppercase mb-3">Categories of Available Work</h4>
            <div className="grid grid-cols-2 gap-3">
              {[
                "Full-Stack Web Apps",
                "AI-Integrated Systems",
                "SaaS Product Development",
                "Mobile Applications (Flutter)",
                "Computer Vision & ML",
                "API Design & Architecture",
                "UI/UX Engineering",
                "Technical Consulting",
              ].map((item, i) => (
                <div key={i} className="border border-black px-3 py-2 font-['Lora'] text-sm flex items-center gap-2 hover:bg-black hover:text-[#f5f0e8] transition-colors cursor-default">
                  <span className="w-1.5 h-1.5 bg-black rounded-full shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          {/* Notice */}
          <div className="border border-black p-4 bg-[#e8e3d5]">
            <p className="font-sans font-bold text-[10px] uppercase tracking-widest mb-2 border-b border-black pb-1">Editorial Notice</p>
            <p className="font-['Lora'] text-sm italic">
              The editor reserves the right to decline assignments that conflict with engineering standards, product quality, or ethical considerations. All other inquiries are welcomed without reservation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
