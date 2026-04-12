"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { ThemeToggle } from "./ThemeToggle";

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
    <nav className="w-full bg-background border-b-[3px] border-foreground transition-colors duration-500">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between py-2 border-b border-foreground/20 gap-1 md:gap-0">
          <span className="font-['Playfair_Display'] font-black text-sm italic hidden md:block text-foreground/40">The Ashwin Jauhary</span>
          
          <div className="flex items-center flex-wrap justify-center gap-x-5 gap-y-1">
            {links.map((link) => {
              const isActive = pathname === link.path;
              return (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`font-['Playfair_Display'] text-sm font-bold uppercase tracking-wider px-1 py-1 transition-colors border-b-2 whitespace-nowrap ${
                    isActive
                      ? "border-foreground text-foreground"
                      : "border-transparent text-foreground/50 hover:text-foreground hover:border-foreground/40"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold text-foreground/40 hidden lg:block">
              {new Date().toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
            </span>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </nav>
  );
}
