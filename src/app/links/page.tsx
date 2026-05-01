import { links, profile } from "@/data";
import Image from "next/image";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect x="2" y="9" width="4" height="12"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const StudioIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <rect x="2" y="10" width="20" height="12" rx="2" ry="2" />
    <path d="M7 10V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v5" />
    <line x1="12" y1="14" x2="12" y2="18" />
    <line x1="9" y1="16" x2="15" y2="16" />
  </svg>
);

const DevtoIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const HypeIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 15l-2 5h4l-2-5z" />
    <path d="M12 2l3 6h6l-5 4 2 6-6-4-6 4 2-6-5-4h6z" />
  </svg>
);

const LeetCodeIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16.102 17.93l-2.697 2.607c-.466.45-1.185.45-1.651 0l-1.441-1.394c-.466-.45-.466-1.18 0-1.63L12 15.825" />
    <path d="M5 7.966L9.5 3.5a1.5 1.5 0 0 1 2.121 0L13 4.879" />
    <path d="M3 12h7" />
    <path d="M11.5 6.5l5 5" />
    <path d="M14.5 9.5L19 5" />
    <rect x="3" y="9" width="7" height="6" rx="1" />
  </svg>
);

const FileTextIcon = ({ className }: { className?: string }) => (
  <svg 
    className={className}
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2.5" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <line x1="16" y1="13" x2="8" y2="13" />
    <line x1="16" y1="17" x2="8" y2="17" />
    <polyline points="10 9 9 9 8 9" />
  </svg>
);

const getIcon = (label: string, fallback: string) => {
  const iconClass = "w-8 h-8 group-hover:scale-110 transition-transform duration-300";
  if (label.toLowerCase().includes('ledger') || label.toLowerCase().includes('yhype')) return <HypeIcon className={iconClass} />;
  if (label.toLowerCase().includes('github')) return <GithubIcon className={iconClass} />;
  if (label.toLowerCase().includes('linkedin')) return <LinkedinIcon className={iconClass} />;
  if (label.toLowerCase().includes('leetcode')) return <LeetCodeIcon className={iconClass} />;
  if (label.toLowerCase().includes('dispatch') || label.toLowerCase().includes('resume')) return <FileTextIcon className={iconClass} />;
  if (label.toLowerCase().includes('dev.to')) return <DevtoIcon className={iconClass} />;
  if (label.toLowerCase().includes('catalyst crew')) return <StudioIcon className={iconClass} />;
  return <span className="text-3xl leading-none mt-0.5 group-hover:scale-110 transition-transform inline-block">{fallback}</span>;
};

// Group links by category
const grouped = links.reduce<Record<string, typeof links>>((acc, link) => {
  if (!acc[link.category]) acc[link.category] = [];
  acc[link.category].push(link);
  return acc;
}, {});

export default function LinksPage() {
  return (
    <div className="max-w-[1400px] mx-auto px-4 py-8 min-h-screen font-sans text-foreground transition-colors duration-500">

      {/* Header */}
      <div className="text-center border-b-[6px] border-double border-foreground pb-4 mb-10">
        <p className="font-sans text-xs tracking-[0.3em] uppercase font-bold mb-1 text-foreground/60">Verified Dispatch — Section E</p>
        <h1 className="font-['Playfair_Display'] text-5xl md:text-7xl font-black uppercase tracking-tight text-foreground">
          The Link Registry
        </h1>
        <p className="font-['Lora'] italic text-base mt-2 text-foreground/60">
          Official directory of all public-facing dispatches, deployments, and connections.
        </p>
      </div>

      {/* Masthead Address Card */}
      <aside className="border-4 border-foreground p-6 mb-10 shadow-[6px_6px_0_#000] dark:shadow-[6px_6px_0_#333] bg-foreground/5 max-w-2xl mx-auto text-center transition-colors duration-500">
        <p className="font-sans font-bold text-[10px] uppercase tracking-[0.3em] mb-3 border-b border-foreground pb-2 text-foreground">Correspondent In Chief</p>
        <div className="flex justify-center mb-3">
          <div className="border-2 border-foreground shadow-[3px_3px_0_#000] dark:shadow-[3px_3px_0_#333] overflow-hidden rounded-full w-20 h-20">
            <Image src="/Avatar.webp" alt="Ashwin Jauhary" width={80} height={80} className="grayscale contrast-125 object-cover w-full h-full" />
          </div>
        </div>
        <h2 className="font-['Playfair_Display'] text-3xl font-black mb-1 text-foreground">{profile.name}</h2>
        <p className="font-['Lora'] italic text-base mb-4 text-foreground/80">{profile.title}</p>
        <div className="flex flex-wrap justify-center gap-6 text-sm font-bold text-foreground">
          <a href={`mailto:${profile.email}`} className="border-b-2 border-foreground hover:bg-foreground hover:text-background transition-colors px-1">{profile.email}</a>
          <span className="text-foreground/30">|</span>
          <span className="font-['Lora'] italic">{profile.phone}</span>
          <span className="text-foreground/30">|</span>
          <span className="font-['Lora'] italic">{profile.location}</span>
        </div>
      </aside>

      {/* Links by Category in Classified Ad Style */}
      {Object.entries(grouped).map(([category, items]) => (
        <section key={category} className="mb-10 border-t-4 border-foreground pt-4">
          <div className="flex items-baseline gap-4 mb-4">
            <h2 className="font-['Playfair_Display'] text-2xl font-black uppercase text-foreground">{category}</h2>
            <div className="flex-1 border-t border-dotted border-foreground/40" />
            <span className="font-sans text-[10px] font-bold uppercase tracking-widest text-foreground/60">{items.length} Listing{items.length > 1 ? 's' : ''}</span>
          </div>

          <div className={`grid gap-4 ${items.length > 1 ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' : 'grid-cols-1 max-w-lg'}`}>
            {items.map((link, i) => (
              <a
                key={i}
                href={link.url}
                target={link.url.startsWith('mailto') ? '_self' : '_blank'}
                download={link.url.endsWith('.pdf') ? "Ashwin_Jauhary_Resume.pdf" : undefined}
                className="group block border border-foreground/40 p-4 bg-foreground/5 hover:bg-foreground hover:text-background transition-all duration-300 shadow-[2px_2px_0_#000] dark:shadow-[2px_2px_0_#333] hover:shadow-[4px_4px_0_#000] dark:hover:shadow-[4px_4px_0_#333]"
              >
                <div className="flex items-start gap-4">
                  {getIcon(link.label, link.icon)}
                  <div className="flex-1 min-w-0">
                    <p className="font-['Playfair_Display'] font-bold text-lg leading-tight group-hover:underline">{link.label}</p>
                    <p className="font-['Lora'] italic text-sm mt-1 opacity-70 group-hover:opacity-90">{link.description}</p>
                    <p className="font-mono text-[10px] mt-2 truncate opacity-50 group-hover:opacity-70">{link.url}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </section>
      ))}

      {/* Bottom notice */}
      <div className="border-t-4 border-double border-foreground mt-12 pt-4 text-center">
        <p className="font-['Lora'] italic text-sm text-foreground/60">
          All links are verified and maintained. Last verified: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}. 
          For corrections or additions, contact the editor directly.
        </p>
      </div>
    </div>
  );
}

