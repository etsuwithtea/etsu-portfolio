import { useRef, useEffect } from "react";
import { Info, ArrowDownRight, X } from "lucide-react";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { BentoCard } from "../ui/BentoCard";
import { PERSONAL_INFO, SOCIALS } from "../../data/personal";
import { SKILLS } from "../../data/skills";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "../../utils/cn";
import { SocialLinks } from "./SocialLinks";
import { TechStackMarquee } from "./TechStackMarquee";
import heroImg from "../../assets/hero.jpg";

const IconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  linkedin: CiLinkedin,
  facebook: CiFacebook,
  github: FaGithub,
};

interface HeroCardProps extends HTMLMotionProps<"div"> {
  isActive?: boolean;
  onClick?: () => void;
  onShowAllSkills?: () => void;
}

export function HeroCard({ isActive, onClick, onShowAllSkills, ...props }: HeroCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isActive) {
      cardRef.current?.focus();
      setTimeout(() => {
        cardRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 400);
    }
  }, [isActive]);

  return (
    <BentoCard
      ref={cardRef}
      onClick={onClick}
      style={{
        backgroundColor: "var(--color-primary)",
        color: "var(--color-primary-fg)",
      }}
      className={cn(
        "flex flex-col justify-between overflow-hidden relative group transition-all duration-700",
        isActive ? "md:col-span-3 md:row-span-3 min-h-[600px]" : "md:col-span-2 md:row-span-2"
      )}
      {...props}
    >
      <motion.div layout className="flex justify-between items-start z-10 relative">
        <h2 className="text-xl font-medium font-display">
          {PERSONAL_INFO.name} <span className="opacity-75 font-sans">({PERSONAL_INFO.nickname})</span>
        </h2>
        <div className="flex gap-2 items-center">
          {isActive && (
            <SocialLinks socials={SOCIALS} iconMap={IconMap} className="mr-2" />
          )}
          <div
            className="p-3 rounded-full shadow-lg group-hover:scale-110 transition-transform cursor-pointer"
            style={{
              backgroundColor: "var(--color-surface)",
              color: "var(--color-base)",
            }}
          >
            {isActive ? <X size={24} /> : <Info size={24} />}
          </div>
        </div>
      </motion.div>

      <div className="flex flex-col z-10 mt-12 md:mt-24">
        <motion.div layout className="relative w-full md:w-3/4">
          <h1 className={cn(
            "font-display font-black tracking-tighter leading-[0.9] transition-all duration-500",
            isActive ? "text-5xl md:text-8xl" : "text-5xl md:text-7xl"
          )}>
            Specialized in <br />
            <span style={{ color: "var(--color-primary-glow)" }}>{PERSONAL_INFO.role}</span>
          </h1>
        </motion.div>
        
        {isActive && (
          <TechStackMarquee 
            skills={SKILLS} 
            onShowAllSkills={onShowAllSkills}
            className="mt-12 md:mt-16"
          />
        )}
      </div>

      <motion.div layout className="flex justify-between items-end z-10 relative mt-auto pt-4">
        <p className="text-lg font-medium opacity-80">{isActive ? "Close details" : "See More."}</p>
        <ArrowDownRight size={28} className={cn("transition-all duration-500", isActive && "rotate-180")} />
      </motion.div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <motion.div
          animate={{ rotate: 360, scale: [1, 1.05, 1] }}
          transition={{ 
            rotate: { duration: 40, repeat: Infinity, ease: "linear" },
            scale: { duration: 15, repeat: Infinity, ease: "easeInOut" }
          }}
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-[40px] opacity-20"
          style={{ backgroundColor: "var(--color-primary-glow)" }}
        />
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-10 -left-10 w-64 h-64 rounded-full opacity-20"
          style={{ backgroundColor: "var(--color-accent)" }}
        />
      </div>

      {/* Hero Image */}
      <motion.div
        layout
        className={cn(
          "absolute transition-all duration-700 ease-in-out z-0 overflow-hidden rounded-full shadow-2xl top-1/2 -translate-y-1/2",
          isActive
            ? "right-[-20%] w-64 h-64 md:right-[-10%] md:w-[450px] md:h-[450px] opacity-100"
            : "right-[-20%] w-64 h-64 md:right-[-10%] md:w-80 md:h-80 opacity-100 group-hover:scale-105"
        )}
      >
        <img src={heroImg} alt="Hero" className="w-full h-full object-cover" />
      </motion.div>
    </BentoCard>
  );
}
