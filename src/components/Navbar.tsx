"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Front Page", path: "/" },
  { name: "The Reporter", path: "/about" },
  { name: "The Registry", path: "/portfolio" },
  { name: "The Dossier", path: "/resume" },
  { name: "Link Registry", path: "/links" },
  { name: "Correspond", path: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="w-full bg-[#f5f0e8] border-b-[3px] border-black sticky top-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 border-b border-black/20 gap-1 md:gap-0">
          <span className="font-['Playfair_Display'] font-black text-sm italic hidden md:block text-black/40">The Ashwin Jauhary</span>
          
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-['Playfair_Display'] text-sm font-bold uppercase tracking-wider px-1 py-1 transition-colors border-b-2 whitespace-nowrap ${
                    isActive
                      ? "border-black text-black"
                      : "border-transparent text-black/50 hover:text-black hover:border-black/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-black/40 hidden md:block">
            {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
          </span>
        </div>
      </div>
    </nav>
  );
}
