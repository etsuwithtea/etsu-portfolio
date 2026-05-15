import { motion, type Variants } from "framer-motion";
import type { ProjectType } from "@/types";

interface ProjectCardProps {
  project: ProjectType;
  onClick: (project: ProjectType) => void;
}

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } 
  }
};

export function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <motion.div
      layout
      variants={fadeInUp}
      initial="hidden"
      animate="visible"
      exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
      onClick={(e) => {
        e.stopPropagation();
        onClick(project);
      }}
      className="group/item relative rounded-[2rem] overflow-hidden cursor-pointer shadow-2xl bg-black/5"
      style={{
        border: "1px solid var(--alpha-light-10)",
      }}
    >
      <img
        src={project.coverImage}
        alt={project.title}
        className="w-full h-auto block transition-transform duration-700 group-hover/item:scale-110"
      />
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/item:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <div className="translate-y-4 group-hover/item:translate-y-0 transition-transform duration-500">
          <p className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/60 mb-2">{project.category}</p>
          <h5 className="text-2xl font-black text-white mb-4 leading-none">{project.title}</h5>
          <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-[10px] font-bold uppercase tracking-wider">
            View Project
          </span>
        </div>
      </div>

      {/* Small floating tag */}
      <div className="absolute top-6 right-6 px-3 py-1 rounded-full bg-black/10 backdrop-blur-lg border border-white/20 text-[9px] font-bold uppercase tracking-widest text-black/60">
        {project.category}
      </div>
    </motion.div>
  );
}
