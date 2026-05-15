import { Building2, X } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { PERSONAL_INFO } from "@/data/personal";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { EDUCATION, EXPERIENCE } from "@/data/education";

interface AboutCardProps extends HTMLMotionProps<"div"> {
  isActive?: boolean;
  onClick?: () => void;
}

export function AboutCard({ isActive, onClick, ...props }: AboutCardProps) {
  const { cardRef } = useScrollFocus({ isActive });

  return (
    <BentoCard
      ref={cardRef}
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-secondary)",
        color: "var(--color-secondary-fg)",
      }}
      className={cn(
        "flex flex-col justify-between overflow-hidden",
        isActive 
          ? "col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[400px] p-6 md:p-10 lg:p-12" 
          : "col-span-1 sm:col-span-1 p-6 md:p-8"
      )}
      {...props}
    >
      <motion.div layout className="flex-1 flex flex-col justify-center relative">
        {/* Background Decorative Element */}
        {isActive && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 0.05, scale: 1 }}
            className="absolute -right-20 -top-20 text-[20rem] font-black pointer-events-none select-none uppercase"
            style={{ color: "var(--color-secondary-fg)" }}
          >
            {PERSONAL_INFO.nickname[0]}
          </motion.div>
        )}

        <h2 className={cn(
          "font-display leading-[0.9] transition-all duration-500",
          isActive ? "text-5xl sm:text-6xl md:text-8xl mb-12 font-black tracking-tighter" : "text-3xl sm:text-4xl font-bold"
        )} style={{ color: "var(--color-neutral-400)" }}>
          {isActive ? (
            <>
              Hi, I'm <span style={{ color: "var(--color-secondary-fg)" }}>{PERSONAL_INFO.name}</span>
              <br />
              <span className="text-3xl opacity-60 font-sans tracking-normal block mt-4 font-medium">Creative Developer</span>
            </>
          ) : (
            <>Learn <span style={{ color: "var(--color-secondary-fg)" }}>more about me</span></>
          )}
        </h2>

        {isActive && (
          <motion.div
            variants={{
              hidden: { opacity: 0 },
              visible: { 
                opacity: 1,
                transition: { staggerChildren: 0.15 }
              }
            }}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-12 gap-12"
          >
            {/* Left Column: Bio & Quote */}
            <div className="md:col-span-7 space-y-12">
              <motion.div variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}>
                <p className="text-xl md:text-2xl leading-relaxed font-light" style={{ color: "var(--color-neutral-300)" }}>
                  {PERSONAL_INFO.bio}
                </p>
              </motion.div>

              <motion.div 
                variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}
                className="pl-8 border-l-4 italic text-2xl md:text-3xl leading-snug" 
                style={{ 
                  color: "var(--color-secondary-fg)",
                  borderColor: "var(--color-primary-glow)"
                }}
              >
                "{PERSONAL_INFO.quote}"
              </motion.div>

              {/* Personal Details as horizontal chips */}
              <motion.div 
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
                className="flex flex-wrap gap-4 pt-4"
              >
                {[
                  { label: "Age", value: PERSONAL_INFO.age },
                  { label: "Status", value: PERSONAL_INFO.status },
                  { label: "Interests", value: PERSONAL_INFO.interests },
                ].map((detail, idx) => (
                  <div key={idx} className="px-5 py-2 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
                    <span className="text-[10px] uppercase tracking-widest opacity-50 block mb-0.5">{detail.label}</span>
                    <span className="text-sm font-medium">{detail.value}</span>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: History */}
            <div className="md:col-span-5 space-y-10">
              {/* Experience */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">Work Experience</h4>
                <div className="space-y-8">
                  {EXPERIENCE.map((exp, i) => (
                    <div key={i} className="group cursor-default">
                      <p className="text-xs font-mono opacity-40 mb-2">{exp.period}</p>
                      <h5 className="text-xl font-bold group-hover:text-primary-glow transition-colors">{exp.company}</h5>
                      <p className="text-sm font-medium mb-3" style={{ color: "var(--color-primary-glow)" }}>{exp.role}</p>
                      <p className="text-xs opacity-60 whitespace-pre-line leading-relaxed max-w-sm">
                        {exp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Education */}
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
                <h4 className="text-xs uppercase tracking-[0.3em] font-bold mb-6 opacity-40">Education</h4>
                <div className="space-y-8">
                  {EDUCATION.map((edu, i) => (
                    <div key={i}>
                      <p className="text-xs font-mono opacity-40 mb-2">{edu.year}</p>
                      <h5 className="text-xl font-bold">{edu.degree}</h5>
                      <p className="text-sm opacity-80 mt-1">{edu.school}</p>
                      {edu.desc && <p className="text-xs opacity-50 mt-2 italic">{edu.desc}</p>}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </motion.div>

      <motion.div layout className="flex justify-between items-end mt-4">
        <p className="text-lg" style={{ color: "var(--color-neutral-300)" }}>{isActive ? "Close" : "About me"}</p>
        {isActive
          ? <X size={24} style={{ color: "var(--color-neutral-400)" }} />
          : <Building2 size={24} style={{ color: "var(--color-neutral-400)" }} />
        }
      </motion.div>
    </BentoCard>
  );
}
