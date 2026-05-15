import { motion } from "framer-motion";
import { cn } from "@/utils/cn";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  highlight?: string;
  className?: string;
  align?: "left" | "center" | "right";
}

export function SectionHeader({ title, subtitle, highlight, className, align = "left" }: SectionHeaderProps) {
  return (
    <div className={cn(
      "mb-12 space-y-4 pt-8",
      align === "center" && "text-center",
      align === "right" && "text-right",
      className
    )}>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 0.4, y: 0 }}
          className="text-sm uppercase tracking-[0.3em] font-bold"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.h4
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-8xl font-black tracking-tighter leading-none"
      >
        {title} {highlight && <><br /> <span className="opacity-40">{highlight}.</span></>}
      </motion.h4>
    </div>
  );
}
