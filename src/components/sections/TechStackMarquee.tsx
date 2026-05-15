import { useState } from "react";
import { Maximize2 } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { SkillType } from "@/types";

interface TechStackMarqueeProps {
  skills: SkillType[];
  onShowAllSkills?: () => void;
  className?: string;
}

export function TechStackMarquee({ skills, onShowAllSkills, className }: TechStackMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className={cn("mt-10 flex flex-col h-full gap-8", className)}
    >
      <div
        className="flex flex-col gap-4 w-[calc(100vw-4rem)] md:w-[700px] overflow-hidden relative group cursor-pointer"
        style={{ maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)" }}
        onClick={(e) => {
          e.stopPropagation();
          setIsPaused(!isPaused);
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-2 pl-4 mb-2">
          <div className="w-8 h-[1px] bg-white/30" />
          <h3 className="text-xs uppercase tracking-[0.2em] font-bold text-white/60">Tech Stack</h3>
          {onShowAllSkills && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onShowAllSkills();
              }}
              className="ml-4 flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider transition-all duration-300 group/btn"
              style={{
                backgroundColor: "var(--alpha-light-10)",
                color: "var(--alpha-light-80)",
                border: "1px solid var(--alpha-light-10)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "var(--alpha-light-20)";
                e.currentTarget.style.color = "var(--color-primary-glow)";
                e.currentTarget.style.borderColor = "var(--color-primary-glow)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "var(--alpha-light-10)";
                e.currentTarget.style.color = "var(--alpha-light-80)";
                e.currentTarget.style.borderColor = "var(--alpha-light-10)";
              }}
            >
              <Maximize2 size={12} className="group-hover/btn:scale-110 transition-transform" />
              View All
            </button>
          )}
          <span className="text-[10px] text-white/40 uppercase tracking-widest ml-auto pr-8 opacity-0 group-hover:opacity-100 transition-opacity font-medium">
            {isPaused ? "Click to resume" : "Hover or click to pause"}
          </span>
        </div>

        {/* Marquee rows */}
        {[0, 1, 2].map((rowIndex) => {
          const rowSkills = skills.slice(rowIndex * 5, (rowIndex + 1) * 5);
          const repeatedSkills = [...rowSkills, ...rowSkills, ...rowSkills, ...rowSkills];
          return (
            <div
              key={rowIndex}
              className={cn(
                "flex w-max animate-marquee group-hover:paused",
                isPaused && "paused"
              )}
              style={{
                animationDuration: `${30 + rowIndex * 5}s`,
                animationDirection: rowIndex % 2 === 1 ? "reverse" : "normal",
              }}
            >
              {repeatedSkills.map((skill, i) => {
                const Icon = skill.icon;
                return (
                  <div
                    key={`${skill.name}-${i}`}
                    className="flex items-center gap-3 px-6 py-3 mx-3 bg-white rounded-full shadow-lg hover:scale-105 transition-transform duration-300"
                    title={skill.category}
                  >
                    {Icon && <Icon size={24} color={skill.color || "#000"} />}
                    <span className="text-base font-bold text-black whitespace-nowrap">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </motion.div>
  );
}
