import { Send, X, Phone, Mail, ArrowUpRight, Copy, Check } from "lucide-react";
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
      delayChildren: 0.2
    }
  }
};

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] as [number, number, number, number] } }
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
        "flex flex-col justify-between relative overflow-hidden",
        isActive ? "md:col-span-3 md:row-span-2 min-h-[500px]" : "md:col-span-2"
      )}
      {...props}
    >
      {/* Background Decorative Element */}
      {isActive && (
        <motion.div 
          initial={{ opacity: 0, x: 100, rotate: -45 }}
          animate={{ opacity: 0.05, x: 0, rotate: -45 }}
          className="absolute -right-20 top-1/2 -translate-y-1/2 text-[25rem] font-black pointer-events-none select-none uppercase leading-none"
          style={{ color: "var(--color-accent-fg)" }}
        >
          Talk
        </motion.div>
      )}

      <motion.div layout className="flex-1 flex flex-col justify-center relative z-10">
        <motion.h2 
          layout
          className={cn(
            "font-display font-black tracking-tighter leading-[0.9] transition-all duration-500",
            isActive ? "text-6xl md:text-9xl mb-16" : "text-4xl md:text-5xl"
          )}
        >
          Let's <br /> 
          <span className="opacity-40">connect.</span>
        </motion.h2>

        {isActive && (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl"
          >
            {/* Phone Card */}
            <motion.div 
              variants={fadeInUp}
              className="group relative p-8 rounded-[2.5rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-all cursor-pointer"
              onClick={() => handleCopy(contactInfo.phone, "phone")}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 rounded-2xl bg-black text-white">
                  <Phone size={24} />
                </div>
                <div className="flex gap-2">
                  <AnimatePresence mode="wait">
                    {copied === "phone" ? (
                      <motion.div 
                        key="check"
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        className="p-3 rounded-full bg-green-500 text-white"
                      >
                        <Check size={16} />
                      </motion.div>
                    ) : (
                      <motion.div 
                        key="copy"
                        className="p-3 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Copy size={16} />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-2">Phone Number</p>
                <p className="text-2xl md:text-3xl font-black tracking-tight">{contactInfo.phone}</p>
              </div>
            </motion.div>

            {/* Email Card */}
            <motion.div 
              variants={fadeInUp}
              className="group relative p-8 rounded-[2.5rem] bg-black/5 border border-black/5 hover:bg-black/10 transition-all cursor-pointer"
              onClick={() => window.location.href = `mailto:${contactInfo.email}`}
            >
              <div className="flex justify-between items-start mb-12">
                <div className="p-4 rounded-2xl bg-black text-white">
                  <Mail size={24} />
                </div>
                <div className="p-3 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowUpRight size={20} />
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] font-bold opacity-40 mb-2">Contacted Email</p>
                <p className="text-2xl md:text-3xl font-black tracking-tight break-all">{contactInfo.email}</p>
              </div>
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(contactInfo.email, "email");
                }}
                className="absolute top-8 right-8 p-3 rounded-full bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <AnimatePresence mode="wait">
                   {copied === "email" ? <Check size={16} key="c" /> : <Copy size={16} key="p" />}
                </AnimatePresence>
              </button>
            </motion.div>
          </motion.div>
        )}
      </motion.div>

      <motion.div layout className="flex justify-between items-end mt-8 relative z-10">
        <p className="text-lg font-bold uppercase tracking-widest opacity-40">
          {isActive ? "Close" : "Get in touch"}
        </p>
        <div className="p-3 rounded-full bg-black text-white">
          {isActive ? <X size={24} /> : <Send size={24} />}
        </div>
      </motion.div>
    </BentoCard>
  );
}
