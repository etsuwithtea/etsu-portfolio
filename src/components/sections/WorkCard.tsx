import { FolderGit2, X } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { motion, type HTMLMotionProps, AnimatePresence, type Variants } from "framer-motion";
import { cn } from "@/utils/cn";
import { PROJECTS } from "@/data/projects";
import type { ProjectType } from "@/types";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { useState, useMemo } from "react";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { ProjectCard } from "@/components/ui/ProjectCard";

interface WorkCardProps extends HTMLMotionProps<"div"> {
  isActive?: boolean;
  onClick?: () => void;
  onSelectProject?: (project: ProjectType) => void;
  selectedProjectId?: number | null;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.2
    }
  }
};

export function WorkCard({ isActive, onClick, onSelectProject, selectedProjectId, ...props }: WorkCardProps) {
  const { cardRef } = useScrollFocus({ isActive });
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = new Set(PROJECTS.map(p => p.category));
    return ["All", ...Array.from(cats)];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeCategory === "All") return PROJECTS;
    return PROJECTS.filter(p => p.category === activeCategory);
  }, [activeCategory]);

  return (
    <BentoCard
      id="work-card"
      ref={cardRef}
      onClick={isActive ? undefined : onClick}
      style={{
        backgroundColor: "var(--color-surface)",
        color: "var(--color-surface-fg)",
      }}
      className={cn(
        "flex flex-col justify-between group overflow-hidden relative transition-all duration-500",
        isActive 
          ? "col-span-1 sm:col-span-2 lg:col-span-3 h-max cursor-default p-6 md:p-10 lg:p-12" 
          : "col-span-1 sm:col-span-1 md:row-span-1 min-h-[240px] p-6 md:p-8"
      )}
      {...props}
    >
      {/* Background Image Marquee when inactive */}
      {!isActive && (
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div
            className="flex w-max animate-marquee h-full opacity-60 md:opacity-30 md:group-hover:opacity-60 md:group-hover:paused transition-all duration-700"
            style={{ animationDuration: "60s" }}
          >
            {[...PROJECTS, ...PROJECTS].map((project, index) => (
              <img
                key={`${project.id}-${index}`}
                src={project.coverImage}
                alt={project.title}
                className="h-full object-cover min-w-[300px] flex-shrink-0 -mr-[1px]"
              />
            ))}
          </div>
          <div
            className="absolute inset-0 bg-gradient-to-t to-transparent"
            style={{
              backgroundImage: `linear-gradient(to top, var(--alpha-dark-80), var(--alpha-dark-20), transparent)`,
            }}
          />
        </div>
      )}

      {/* Content */}
      <motion.div layout className="flex-1 flex flex-col z-10 relative">
        {isActive && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col"
          >
            {/* Header Section */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <SectionHeader 
                title="Selected" 
                highlight="Works" 
                subtitle={`${filteredProjects.length} Projects in ${activeCategory}`}
                className="mb-0 pt-8"
              />

              {/* Tag Filters */}
              <div className="flex flex-wrap gap-2 md:justify-end max-w-xl mb-12">
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all duration-300 border",
                      activeCategory === cat
                        ? "bg-black text-white border-black shadow-xl scale-105"
                        : "bg-black/5 text-black/40 border-black/10 hover:bg-black/10 hover:text-black"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            {/* Projects Grid */}
            <motion.div 
              layout
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                    onClick={onSelectProject!} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      {/* Bottom Bar */}
      <motion.div
        layout
        className={cn(
          "flex justify-between items-end z-10 relative mt-auto flex-shrink-0",
          isActive ? "cursor-pointer group/close pt-4" : "pt-8"
        )}
        onClick={isActive ? onClick : undefined}
      >
        <h3
          className={cn(
            "font-display font-bold transition-all duration-500",
            isActive ? "text-2xl opacity-40 uppercase tracking-[0.2em]" : "text-2xl"
          )}
          style={isActive ? {} : { color: "var(--color-surface)", filter: "drop-shadow(0 1px 2px rgba(0,0,0,0.5))" }}
        >
          {isActive ? "Close section" : "Projects"}
        </h3>
        <div
          className="p-3 rounded-full backdrop-blur-md transition-all duration-300"
          style={{ backgroundColor: isActive ? "var(--alpha-light-10)" : "var(--alpha-light-20)" }}
        >
          {isActive
            ? <X size={24} className="group-hover/close:rotate-90 transition-transform" />
            : <FolderGit2 size={24} className="text-white" />
          }
        </div>
      </motion.div>
    </BentoCard>
  );
}
