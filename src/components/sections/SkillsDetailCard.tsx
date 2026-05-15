import { X, Sparkles } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { motion } from "framer-motion";
import { SKILLS } from "@/data/skills";
import type { SkillType } from "@/types";
import { useScrollFocus } from "@/hooks/useScrollFocus";

interface SkillsDetailCardProps {
  onClose: () => void;
}

const SKILL_CATEGORIES: SkillType["category"][] = ["Languages", "Frontend", "Backend", "Design", "AI", "Tools"];

export function SkillsDetailCard({ onClose }: SkillsDetailCardProps) {
  const { cardRef, scrollRef } = useScrollFocus();

  return (
    <BentoCard
      ref={cardRef}
      className="col-span-1 sm:col-span-2 lg:col-span-3 h-max flex flex-col overflow-hidden relative p-6 md:p-12 lg:p-20 bg-[var(--color-card-dark)]"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
    >
      <motion.div ref={scrollRef} className="flex flex-col w-full">
        {/* Simple Header */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2 text-primary-glow">
              <Sparkles size={14} />
              <span className="text-[10px] uppercase tracking-[0.4em] font-bold">Expertise</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-7xl font-black font-display tracking-tighter leading-none">
              Technical <span className="opacity-20 italic">Stack.</span>
            </h2>
          </div>
          
          <button
            onClick={onClose}
            className="group flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold uppercase tracking-widest"
          >
            <X size={16} className="group-hover:rotate-90 transition-transform" /> 
            Close Overview
          </button>
        </div>

        {/* Minimalist Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-20">
          {SKILL_CATEGORIES.map((category, catIdx) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: catIdx * 0.1 }}
                className="flex flex-col gap-8"
              >
                <div className="flex items-center gap-4">
                  <div className="h-px flex-1 bg-white/10" />
                  <h3 className="text-[10px] font-black font-display tracking-[0.3em] uppercase opacity-30 whitespace-nowrap">
                    {category}
                  </h3>
                </div>

                <div className="flex flex-col gap-2">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ x: 4 }}
                        className="group flex items-center justify-between p-3 rounded-2xl hover:bg-white/[0.03] transition-colors border border-transparent hover:border-white/5"
                      >
                        <div className="flex items-center gap-4">
                          {Icon && (
                            <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center transition-all group-hover:scale-110 group-hover:bg-white/10">
                              <Icon size={18} style={{ color: skill.color || "inherit" }} className="md:opacity-70 group-hover:opacity-100 transition-opacity" />
                            </div>
                          )}
                          <span className="font-bold text-sm tracking-tight md:opacity-60 group-hover:opacity-100 transition-opacity">
                            {skill.name}
                          </span>
                        </div>
                        
                        <div className="h-1 w-1 rounded-full bg-white/10 group-hover:bg-primary-glow group-hover:scale-150 transition-all" />
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      {/* Very Subtle Decorative Element */}
      <div className="absolute top-0 right-0 p-20 opacity-[0.02] pointer-events-none select-none">
        <Sparkles size={400} />
      </div>
    </BentoCard>
  );
}
