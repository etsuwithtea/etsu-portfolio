import { Send, X, Phone, Mail, ArrowUpRight, Copy } from "lucide-react";
import { BentoCard } from "@/components/ui/BentoCard";
import { motion, type HTMLMotionProps, type Variants, AnimatePresence } from "framer-motion";
import { cn } from "@/utils/cn";
import { useScrollFocus } from "@/hooks/useScrollFocus";
import { useState } from "react";

interface ContactCardProps extends HTMLMotionProps<"div"> {
  isActive?: boolean;
  onClick?: () => void;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" } 
  }
};

export function ContactCard({ isActive, onClick, ...props }: ContactCardProps) {
  const { cardRef } = useScrollFocus({ isActive });
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactInfo = {
    phone: "096-015-9077",
    email: "navapan.suthon@gmail.com"
  };

  return (
    <BentoCard
      ref={cardRef}
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-accent)",
        color: "var(--color-accent-fg)",
      }}
      className={cn(
        "flex flex-col group relative overflow-hidden transition-all duration-500",
        isActive 
          ? "col-span-1 sm:col-span-2 lg:col-span-3 lg:row-span-2 min-h-[500px] p-6 md:p-12 lg:p-16" 
          : "col-span-1 sm:col-span-2 lg:col-span-2 p-6 md:p-8"
      )}
      {...props}
    >
      <motion.div layout className="flex-1 flex flex-col relative z-10">
        <div className="flex flex-col gap-2">
          <p className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">Get in touch</p>
          <motion.h2 
            layout
            className={cn(
              "font-display font-black tracking-tighter leading-[0.85] transition-all duration-500",
              isActive ? "text-6xl sm:text-7xl md:text-9xl lg:text-[12rem] mb-8" : "text-4xl sm:text-5xl md:text-6xl"
            )}
          >
            Connect.
          </motion.h2>
        </div>

        <AnimatePresence>
          {isActive && (
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit="hidden"
              className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8"
            >
              {/* Phone Method */}
              <motion.div 
                variants={fadeInUp}
                className="group/item relative p-8 rounded-3xl bg-black/[0.04] border border-black/5 hover:bg-black/[0.08] transition-all cursor-pointer flex flex-col justify-between min-h-[160px]"
                onClick={() => handleCopy(contactInfo.phone, "phone")}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black/60">
                    <Phone size={18} />
                  </div>
                  <AnimatePresence mode="wait">
                    {copied === "phone" ? (
                      <motion.div 
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[10px] font-bold uppercase tracking-widest text-black"
                      >
                        Copied
                      </motion.div>
                    ) : (
                      <Copy size={14} className="opacity-20 group-hover/item:opacity-40 transition-opacity" />
                    )}
                  </AnimatePresence>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-20 mb-1">Phone</p>
                  <p className="text-xl font-bold tracking-tight">{contactInfo.phone}</p>
                </div>
              </motion.div>

              {/* Email Method */}
              <motion.div 
                variants={fadeInUp}
                className="group/item relative p-8 rounded-3xl bg-black/[0.04] border border-black/5 hover:bg-black/[0.08] transition-all cursor-pointer flex flex-col justify-between min-h-[160px]"
                onClick={() => window.location.href = `mailto:${contactInfo.email}`}
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 rounded-xl bg-black/5 flex items-center justify-center text-black/60">
                    <Mail size={18} />
                  </div>
                  <ArrowUpRight size={16} className="opacity-20 group-hover/item:opacity-40 transition-opacity" />
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest font-bold opacity-20 mb-1">Email</p>
                  <p className="text-lg md:text-xl font-bold tracking-tight break-all">{contactInfo.email}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      <motion.div layout className="flex justify-between items-center mt-8 relative z-10">
        <div /> {/* Spacer */}
        
        <div className="flex items-center gap-4">
          <div className="p-3 rounded-full bg-black/5 border border-black/5 text-black/40">
            {isActive ? <X size={20} /> : <Send size={20} />}
          </div>
        </div>
      </motion.div>
    </BentoCard>
  );
}
