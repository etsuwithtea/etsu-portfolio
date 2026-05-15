import { Award, X, ExternalLink } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { CERTIFICATES } from "@/data/certificates";
import { motion, AnimatePresence, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";
import { useScrollFocus } from "@/hooks/useScrollFocus";

interface CertificatesCardProps extends HTMLMotionProps<"div"> {
  isActive?: boolean;
  onClick?: () => void;
}

export function CertificatesCard({ isActive, onClick, ...props }: CertificatesCardProps) {
  const { cardRef, scrollRef } = useScrollFocus({ isActive });

  return (
    <BentoCard
      ref={cardRef}
      onClick={isActive ? undefined : onClick}
      style={{
        backgroundColor: "var(--color-card-dark)", 
        color: "var(--color-surface)",
      }}
      className={cn(
        "flex flex-col group overflow-hidden relative transition-all duration-500",
        isActive 
          ? "col-span-1 sm:col-span-2 lg:col-span-3 h-max cursor-default p-6 md:p-12 lg:p-16" 
          : "col-span-1 sm:col-span-1 md:row-span-1 min-h-[240px] p-6 md:p-8"
      )}
      {...props}
    >
      <motion.div layout className="flex-1 flex flex-col z-10 relative h-full">
        <AnimatePresence mode="wait">
          {isActive ? (
            <motion.div
              key="active-content"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="flex flex-col gap-12"
            >
              {/* Simple Header */}
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
                <div className="flex flex-col gap-2">
                  <h2 className="text-4xl md:text-5xl font-black font-display tracking-tight">
                    Certificates
                  </h2>
                 </div>
                
                <button
                  onClick={onClick}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all text-xs font-bold uppercase tracking-widest"
                >
                  <X size={16} /> Close
                </button>
              </div>

              {/* Clean Grid */}
              <div ref={scrollRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {CERTIFICATES.map((cert, index) => (
                  <motion.div
                    key={cert.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex flex-col bg-white/[0.03] rounded-[1.5rem] overflow-hidden border border-white/5 group/cert transition-colors hover:bg-white/[0.05]"
                  >
                    <div className="aspect-[16/10] overflow-hidden relative">
                      <img 
                        src={cert.image} 
                        alt={cert.title} 
                        className="w-full h-full object-cover md:grayscale md:opacity-80 md:group-hover/cert:grayscale-0 md:group-hover/cert:opacity-100 transition-all duration-700" 
                      />
                      {cert.link && (
                        <a 
                          href={cert.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 group-hover/cert:opacity-100 transition-opacity backdrop-blur-[2px]"
                        >
                          <div className="p-3 bg-white text-black rounded-full">
                            <ExternalLink size={18} />
                          </div>
                        </a>
                      )}
                    </div>
                    <div className="p-6 flex flex-col gap-2">
                      <h3 className="text-lg font-bold leading-tight">{cert.title}</h3>
                      <p className="text-xs opacity-40 font-medium leading-relaxed">{cert.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="inactive-content"
              className="flex flex-col justify-between h-full"
            >
              <div className="flex flex-col gap-2">
                <h3 className="text-3xl font-black font-display leading-tight mt-2">
                  Certificates <br /> 
                  <span className="opacity-40">& Badges</span>
                </h3>
              </div>

              <div className="flex justify-between items-end">
                <span className="text-[10px] font-bold opacity-30 tracking-widest uppercase">
                  {CERTIFICATES.length} Credentials
                </span>
                <div className="p-2 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-white/40">
                  <Award size={20} />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </BentoCard>
  );
}
