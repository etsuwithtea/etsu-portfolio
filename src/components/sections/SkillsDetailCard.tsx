import { X } from "lucide-react";
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
      className="md:col-span-3 h-max flex flex-col overflow-hidden relative p-10 md:p-14 pt-16 md:pt-24 mt-12"
      style={{
        backgroundColor: "var(--color-canvas)",
        color: "var(--color-canvas-fg)",
        border: "1px solid var(--alpha-light-10)",
        backdropFilter: "blur(20px)",
      }}
      initial={{ opacity: 0, scale: 0.95, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95, y: 20 }}
      transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
    >
      <motion.div ref={scrollRef} className="flex flex-col w-full pb-8">
        {/* Header */}
        <div className="flex justify-between items-center mb-10 md:mb-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tighter leading-none mt-10">Technical <br /><span className="opacity-40">Mastery.</span></h2>
            <p className="text-sm opacity-40 uppercase tracking-[0.2em] font-bold">Full Stack & AI Ecosystem</p>
          </div>
          <button
            onClick={onClose}
            className="flex items-center gap-2 px-6 py-3 rounded-full transition-all font-semibold"
            style={{
              color: "var(--alpha-light-50)",
              border: "1px solid var(--alpha-light-10)",
              backgroundColor: "transparent",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "var(--alpha-light-10)";
              e.currentTarget.style.color = "var(--color-canvas-fg)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = "var(--alpha-light-50)";
            }}
          >
            <X size={20} /> Close Detail
          </button>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12">
          {SKILL_CATEGORIES.map((category) => {
            const categorySkills = SKILLS.filter((s) => s.category === category);
            if (categorySkills.length === 0) return null;

            return (
              <div
                key={category}
                className="flex flex-col gap-6 p-6 md:p-8 rounded-[2rem] transition-all duration-300"
                style={{
                  backgroundColor: "var(--alpha-light-5)",
                  border: "1px solid var(--alpha-light-10)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-1 h-5 rounded-full" style={{ backgroundColor: "var(--color-primary-glow)" }} />
                  <h3 className="text-sm font-black font-display tracking-[0.2em] uppercase opacity-60">{category}</h3>
                </div>

                <div className="flex flex-wrap gap-3">
                  {categorySkills.map((skill) => {
                    const Icon = skill.icon;
                    return (
                      <motion.div
                        key={skill.name}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-3 px-4 py-2.5 rounded-xl shadow-sm transition-all border group/skill"
                        style={{
                          backgroundColor: "var(--alpha-light-5)",
                          color: "var(--color-canvas-fg)",
                          borderColor: "var(--alpha-light-10)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.borderColor = skill.color || "var(--color-primary-glow)";
                          e.currentTarget.style.backgroundColor = "var(--alpha-light-10)";
                          e.currentTarget.style.boxShadow = `0 0 20px -5px ${skill.color}88`;
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.borderColor = "var(--alpha-light-10)";
                          e.currentTarget.style.backgroundColor = "var(--alpha-light-5)";
                          e.currentTarget.style.boxShadow = "none";
                        }}
                      >
                        {Icon && (
                          <div className="transition-transform group-hover/skill:scale-110">
                            <Icon size={20} style={{ color: skill.color || "inherit" }} />
                          </div>
                        )}
                        <span className="font-bold text-xs md:text-sm tracking-wider">{skill.name}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Decorative background glows */}
      <div
        className="absolute -top-24 -left-24 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--color-primary-glow)" }}
      />
      <div
        className="absolute -bottom-24 -right-24 w-96 h-96 rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ backgroundColor: "var(--color-accent)" }}
      />
    </BentoCard>
  );
}
