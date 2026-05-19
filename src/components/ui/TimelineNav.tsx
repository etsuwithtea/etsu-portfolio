import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Home, 
  FolderGit2, 
  Award, 
  User, 
  Send, 
  ChevronLeft, 
  ChevronRight, 
  X 
} from "lucide-react";
import { cn } from "@/utils/cn";

// Define section configuration matching the Bento Grid cards
const SECTIONS = [
  { id: "hero", label: "Intro", icon: Home, color: "var(--color-primary-glow)" },
  { id: "work", label: "Projects", icon: FolderGit2, color: "var(--color-primary-glow)" },
  { id: "certificates", label: "Certificates", icon: Award, color: "var(--color-primary-glow)" },
  { id: "about", label: "About Me", icon: User, color: "var(--color-primary-glow)" },
  { id: "contact", label: "Connect", icon: Send, color: "var(--color-accent)" },
] as const;

type CardId = "hero" | "work" | "about" | "contact" | "certificates" | null;

interface TimelineNavProps {
  activeCard: CardId;
  setActiveCard: (card: CardId) => void;
}

export function TimelineNav({ activeCard, setActiveCard }: TimelineNavProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleNavClick = (id: CardId) => {
    setActiveCard(activeCard === id ? null : id);
    setIsMobileOpen(false); // Close drawer on mobile
  };

  // Find index of the currently active card to render timeline progress
  const activeIndex = SECTIONS.findIndex((section) => section.id === activeCard);

  return (
    <>
      {/* ========================================================================= */}
      {/* DESKTOP SIDEBAR (md and up) */}
      {/* ========================================================================= */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col items-center",
          "bg-[#0A0A0A]/40 backdrop-blur-xl border border-white/5 shadow-[0_24px_80px_-20px_rgba(0,0,0,0.8)]",
          "rounded-[2.5rem] py-8 px-4 transition-all duration-500 ease-in-out select-none",
          isExpanded ? "w-56 items-start px-6" : "w-20"
        )}
      >
        {/* Decorative Grid Dot Pattern Background inside Navbar */}
        <div className="absolute inset-0 bg-[radial-gradient(var(--alpha-light-5)_1px,transparent_1px)] [background-size:16px_16px] rounded-[2.5rem] pointer-events-none" />

        {/* Timeline Path (Vertical Line) */}
        <div 
          className="absolute left-[39px] top-24 bottom-24 w-[2px] bg-white/10 rounded-full"
          style={{ left: isExpanded ? "47px" : "39px", transition: "left 0.5s ease-in-out" }}
        >
          {/* Animated Active Track Progress */}
          {activeIndex !== -1 && (
            <motion.div
              className="absolute top-0 w-full bg-gradient-to-b from-primary-glow to-accent rounded-full"
              initial={{ height: 0 }}
              animate={{ 
                height: `${(activeIndex / (SECTIONS.length - 1)) * 100}%` 
              }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            />
          )}
        </div>

        {/* Sidebar Header / Logo */}
        <div className="w-full flex items-center justify-between mb-8 z-10">
          <AnimatePresence mode="wait">
            {isExpanded ? (
              <motion.span
                key="expanded-logo"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                className="text-[10px] font-bold tracking-[0.3em] uppercase opacity-40 font-sans pl-2"
              >
                Navigation
              </motion.span>
            ) : (
              <motion.div
                key="collapsed-logo"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.3, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                className="w-full flex justify-center text-[10px] font-black font-display tracking-tight text-center"
              >
                ET
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Timeline Navigation Items */}
        <div className="flex flex-col gap-8 w-full z-10 my-4">
          {SECTIONS.map((section, idx) => {
            const Icon = section.icon;
            const isActive = activeCard === section.id;

            return (
              <div
                key={section.id}
                className="group relative flex items-center w-full cursor-pointer"
                onClick={() => handleNavClick(section.id)}
              >
                {/* Timeline node node indicator / icon container */}
                <motion.div
                  className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 border",
                    isActive
                      ? "bg-white text-black border-white shadow-[0_0_25px_rgba(255,255,255,0.2)]"
                      : "bg-[#111111]/80 text-white/50 border-white/5 hover:text-white hover:border-white/20 hover:scale-105"
                  )}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />

                  {/* Active glowing indicator light */}
                  {isActive && (
                    <span 
                      className="absolute -left-1.5 w-1 h-3 rounded-full bg-white"
                      style={{ 
                        filter: "drop-shadow(0 0 4px var(--color-primary-glow))",
                      }}
                    />
                  )}
                </motion.div>

                {/* Section Label */}
                <div className="overflow-hidden flex-1">
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3, delay: idx * 0.05 }}
                        className={cn(
                          "ml-4 text-sm font-semibold tracking-tight block whitespace-nowrap",
                          isActive ? "text-white" : "text-white/60 group-hover:text-white transition-colors"
                        )}
                      >
                        {section.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </div>

                {/* Collapsed Tooltip */}
                {!isExpanded && (
                  <div className="absolute left-20 pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0 z-50">
                    <div className="bg-[#0A0A0A] border border-white/10 text-white text-xs font-semibold px-4 py-2 rounded-xl shadow-2xl whitespace-nowrap font-sans">
                      {section.label}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Expand / Collapse Toggle Button at bottom */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={cn(
            "mt-8 p-3 rounded-2xl bg-white/5 border border-white/5 text-white/50 hover:text-white hover:bg-white/10 hover:border-white/10 transition-all z-10",
            isExpanded ? "self-end" : "self-center"
          )}
        >
          {isExpanded ? <ChevronLeft size={16} /> : <ChevronRight size={16} />}
        </button>
      </motion.div>

      {/* ========================================================================= */}
      {/* MOBILE TRIGGER & FLOATING INTERFACE */}
      {/* ========================================================================= */}
      {/* Floating Menu Button for Mobile */}
      <div className="fixed bottom-6 left-6 z-50 md:hidden">
        <motion.button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className={cn(
            "w-14 h-14 rounded-full flex items-center justify-center shadow-[0_12px_40px_rgba(0,0,0,0.5)] border transition-all duration-300 backdrop-blur-md",
            isMobileOpen 
              ? "bg-white text-black border-white"
              : "bg-[#0A0A0A]/85 text-white border-white/10"
          )}
          whileTap={{ scale: 0.9 }}
        >
          <AnimatePresence mode="wait">
            {isMobileOpen ? (
              <motion.div
                key="close-icon"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X size={20} />
              </motion.div>
            ) : (
              <motion.div
                key="menu-icon"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center gap-1.5"
              >
                {/* Timeline styled button indicator */}
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
                <div className="w-[1.5px] h-3 bg-white/40" />
                <div className="w-1.5 h-1.5 rounded-full bg-white" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Mobile Drawer Overlay Background */}
      <AnimatePresence>
        {isMobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Slide-out Mobile Timeline Navigation Drawer */}
            <motion.div
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 left-0 w-[280px] bg-[#0A0A0A]/95 border-r border-white/10 backdrop-blur-2xl z-50 p-8 flex flex-col justify-between md:hidden"
            >
              <div className="absolute inset-0 bg-[radial-gradient(var(--alpha-light-5)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />

              <div className="z-10 mt-8">
                {/* Title */}
                <div className="mb-12">
                  <span className="text-[10px] font-bold tracking-[0.4em] uppercase text-white/40 block mb-1">Portfolio</span>
                  <h3 className="text-2xl font-black font-display tracking-tight text-white">ETSUWITHTEA</h3>
                </div>

                {/* Vertical Timeline Path */}
                <div className="relative pl-8 space-y-8">
                  <div className="absolute left-[15px] top-3 bottom-3 w-[2px] bg-white/10">
                    {/* Glowing active path tracker for mobile */}
                    {activeIndex !== -1 && (
                      <motion.div
                        className="absolute top-0 w-full bg-gradient-to-b from-primary-glow to-accent rounded-full"
                        initial={{ height: 0 }}
                        animate={{ 
                          height: `${(activeIndex / (SECTIONS.length - 1)) * 100}%` 
                        }}
                        transition={{ duration: 0.4 }}
                      />
                    )}
                  </div>

                  {SECTIONS.map((section) => {
                    const Icon = section.icon;
                    const isActive = activeCard === section.id;

                    return (
                      <div
                        key={section.id}
                        onClick={() => handleNavClick(section.id)}
                        className="flex items-center gap-5 cursor-pointer group"
                      >
                        {/* Timeline Node */}
                        <div
                          className={cn(
                            "w-8 h-8 rounded-xl flex items-center justify-center z-10 transition-all border",
                            isActive
                              ? "bg-white text-black border-white shadow-[0_0_15px_rgba(255,255,255,0.3)]"
                              : "bg-[#111111] text-white/50 border-white/5"
                          )}
                        >
                          <Icon size={14} />
                        </div>

                        {/* Timeline Label */}
                        <span
                          className={cn(
                            "text-base font-semibold tracking-tight transition-colors",
                            isActive ? "text-white" : "text-white/60"
                          )}
                        >
                          {section.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Mobile Drawer Footer info */}
              <div className="z-10 text-[10px] uppercase font-mono tracking-widest text-white/30 border-t border-white/5 pt-4">
                © {new Date().getFullYear()} ETSUWITHTEA
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
