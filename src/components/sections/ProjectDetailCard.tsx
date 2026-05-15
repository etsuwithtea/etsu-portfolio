import { useState } from "react";
import { X, ExternalLink, Code, ZoomIn } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { ImageLightbox } from "@/components/ui/ImageLightbox";
import { motion, type HTMLMotionProps, type Variants, AnimatePresence } from "framer-motion";
import type { ProjectType } from "@/types";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { ProjectGallery } from "./ProjectGallery";

interface ProjectDetailCardProps extends Omit<HTMLMotionProps<"div">, "onClick"> {
  project: ProjectType;
  onClose: () => void;
  onClick?: () => void;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } }
};

export function ProjectDetailCard({ project, onClose, onClick, ...props }: ProjectDetailCardProps) {
  const { cardRef, scrollRef } = useScrollFocus({ dependencies: [project.id] });
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [hoveredAction, setHoveredAction] = useState<string | null>(null);

  return (
    <BentoCard
      ref={cardRef}
      onClick={onClick}
      className="md:col-span-3 h-max flex flex-col overflow-hidden relative"
      style={{
        backgroundColor: "var(--color-canvas)",
        color: "var(--color-canvas-fg)",
        border: "1px solid var(--alpha-light-10)",
      }}
      initial={{ opacity: 0, scale: 0.98, y: 40 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.98, y: 40 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] }}
      {...props}
    >
      {/* Background Decorative Text */}
      <div className="absolute top-0 right-0 p-8 text-[12rem] font-black opacity-[0.03] select-none pointer-events-none leading-none">
        {project.id.toString().padStart(2, '0')}
      </div>

      <motion.div 
        ref={scrollRef} 
        className="flex flex-col w-full relative z-10"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        {/* Header Action */}
        <motion.div variants={fadeInUp} className="flex justify-between items-center mb-12">
          <button
            onClick={onClose}
            className="group flex items-center gap-3 px-6 py-3 rounded-full transition-all border border-white/10 bg-white/5 hover:bg-white/10"
            style={{ color: "var(--alpha-light-80)" }}
          >
            <X size={20} className="group-hover:rotate-90 transition-transform" />
            <span className="text-sm font-bold uppercase tracking-widest">Back to Gallery</span>
          </button>
        </motion.div>

        {/* Hero Section */}
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-16 items-end">
          <motion.div variants={fadeInUp} className="md:col-span-8">
            <h2 className="text-5xl md:text-8xl font-black font-display tracking-tighter leading-[0.85] mb-6">
              {project.title}
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-primary-glow" style={{ backgroundColor: "var(--color-primary-glow)" }} />
              <p className="text-xl md:text-2xl font-medium tracking-tight" style={{ color: "var(--color-primary-glow)" }}>
                {project.role}
              </p>
            </div>
          </motion.div>
          
          <motion.div variants={fadeInUp} className="md:col-span-4 flex md:justify-end gap-3">
             {project.link && (
               <div className="relative group/action-btn">
                 <AnimatePresence>
                   {hoveredAction === "visit" && (
                     <motion.div
                       initial={{ opacity: 0, y: 10, scale: 0.8 }}
                       animate={{ opacity: 1, y: -50, scale: 1 }}
                       exit={{ opacity: 0, y: 10, scale: 0.8 }}
                       className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-md pointer-events-none z-20 whitespace-nowrap shadow-xl"
                     >
                       Visit Project
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                     </motion.div>
                   )}
                 </AnimatePresence>
                 <a
                   href={project.link}
                   target="_blank"
                   rel="noopener noreferrer"
                   onMouseEnter={() => setHoveredAction("visit")}
                   onMouseLeave={() => setHoveredAction(null)}
                   className="flex p-4 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-2xl"
                 >
                   <ExternalLink size={24} />
                 </a>
               </div>
             )}
             {project.github && (
               <div className="relative group/action-btn">
                 <AnimatePresence>
                   {hoveredAction === "github" && (
                     <motion.div
                       initial={{ opacity: 0, y: 10, scale: 0.8 }}
                       animate={{ opacity: 1, y: -50, scale: 1 }}
                       exit={{ opacity: 0, y: 10, scale: 0.8 }}
                       className="absolute left-1/2 -translate-x-1/2 px-3 py-1 bg-white text-black text-xs font-bold rounded-md pointer-events-none z-20 whitespace-nowrap shadow-xl"
                     >
                       View Source
                       <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-white rotate-45" />
                     </motion.div>
                   )}
                 </AnimatePresence>
                 <a
                   href={project.github}
                   target="_blank"
                   rel="noopener noreferrer"
                   onMouseEnter={() => setHoveredAction("github")}
                   onMouseLeave={() => setHoveredAction(null)}
                   className="flex p-4 rounded-full border border-white/20 bg-white/5 hover:bg-white/10 transition-colors"
                 >
                   <Code size={24} />
                 </a>
               </div>
             )}
          </motion.div>
        </motion.div>

        {/* Main Visual */}
        <motion.div
          variants={fadeInUp}
          onClick={() => project.images[0]?.type !== "video" && setSelectedImage(project.coverImage)}
          className="w-full aspect-video md:aspect-[21/8] rounded-[3rem] overflow-hidden mb-20 shadow-[0_0_100px_rgba(0,0,0,0.5)] relative group cursor-zoom-in"
          style={{ border: "1px solid var(--alpha-light-10)" }}
        >
          {project.images[0]?.type === "video" ? (
            <video
              src={project.images[0].src}
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          ) : (
            <img src={project.coverImage} alt={project.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
          {project.images[0]?.type !== "video" && (
            <div className="absolute top-8 right-8 p-4 rounded-full bg-black/40 backdrop-blur-xl border border-white/20 opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
              <ZoomIn size={28} />
            </div>
          )}
        </motion.div>

        {/* Content Body */}
        <motion.div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20">
          {/* Main Content */}
          <div className="md:col-span-8 space-y-16">
            <motion.div variants={fadeInUp}>
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-6 opacity-30">Overview</h3>
              <p className="text-xl md:text-2xl leading-relaxed font-light opacity-80 whitespace-pre-wrap">
                {project.desc}
              </p>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <ProjectGallery images={project.images} onSelectImage={setSelectedImage} />
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 space-y-12">
            <motion.div variants={fadeInUp}>
              <h3 className="text-xs uppercase tracking-[0.4em] font-bold mb-8 opacity-30">Technology Stack</h3>
              <div className="flex flex-wrap gap-3">
                {project.tools.map((tool, idx) => (
                  <span
                    key={idx}
                    className="px-5 py-2.5 rounded-2xl text-sm font-medium bg-white/5 border border-white/10 hover:border-primary-glow/50 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </motion.div>

            {project.link && (
               <motion.div variants={fadeInUp}>
                 <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between group p-6 rounded-[2rem] bg-primary-glow/10 border border-primary-glow/20 hover:bg-primary-glow/20 transition-all"
                    style={{ 
                      backgroundColor: "rgba(var(--color-primary-glow-rgb), 0.1)",
                      borderColor: "rgba(var(--color-primary-glow-rgb), 0.2)"
                    }}
                 >
                    <span className="font-bold uppercase tracking-widest text-sm" style={{ color: "var(--color-primary-glow)" }}>Launch Live Site</span>
                    <ExternalLink size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" style={{ color: "var(--color-primary-glow)" }} />
                 </a>
               </motion.div>
            )}
          </div>
        </motion.div>
      </motion.div>

      {/* Lightbox */}
      <ImageLightbox src={selectedImage} onClose={() => setSelectedImage(null)} />
    </BentoCard>
  );
}
