import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { SocialInfo, IconComponent } from "@/types";
import { cn } from "@/utils/cn";

interface SocialLinksProps {
  socials: SocialInfo[];
  iconMap: Record<string, IconComponent>;
  className?: string;
}

export function SocialLinks({ socials, iconMap, className }: SocialLinksProps) {
  const [hoveredSocial, setHoveredSocial] = useState<string | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      className={cn("flex gap-2", className)}
    >
      {socials.map((social) => {
        const Icon = iconMap[social.icon];
        return (
          <div key={social.name} className="relative group/badge-container">
            <AnimatePresence>
              {hoveredSocial === social.name && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 45, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-md pointer-events-none z-20 whitespace-nowrap shadow-xl"
                  style={{
                    backgroundColor: "var(--color-surface)",
                    color: "var(--color-base)",
                  }}
                >
                  {social.name}
                  <div
                    className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 rotate-45"
                    style={{ backgroundColor: "var(--color-surface)" }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              onMouseEnter={() => setHoveredSocial(social.name)}
              onMouseLeave={() => setHoveredSocial(null)}
              className="flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
              style={{
                backgroundColor: "var(--color-surface)",
                color: "var(--color-base)",
              }}
            >
              {Icon && <Icon size={20} />}
            </a>
          </div>
        );
      })}
    </motion.div>
  );
}
