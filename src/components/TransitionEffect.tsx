"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CaseFileOverlay from "./CaseFileOverlay";

export default function TransitionEffect({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [isTransitioning, setIsTransitioning] = useState(false);

  // Trigger transition only when pathname changes
  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setIsTransitioning(false);
    }, 1600); // Slightly longer than the 1.5s animation

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isTransitioning && (
          <CaseFileOverlay key="case-file-overlay" />
        )}
      </AnimatePresence>
      
      <motion.div
        key={pathname}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.6 }} // Reveal content when folder is sliding away
      >
        {children}
      </motion.div>
    </>
  );
}
