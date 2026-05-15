import { type ReactNode, forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";
import { cn } from "@/utils/cn";

interface BentoCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  layoutId?: string;
}

export const BentoCard = forwardRef<HTMLDivElement, BentoCardProps>(
  ({ children, className, onClick, layoutId, ...props }, ref) => {
    return (
      <motion.div
        ref={ref}
        layout
        layoutId={layoutId}
        tabIndex={0}
        whileHover={onClick ? { scale: 0.98 } : undefined}
        whileTap={onClick ? { scale: 0.95 } : undefined}
        onClick={onClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onClick?.();
          }
        }}
        className={cn(
          "relative overflow-hidden rounded-[var(--radius-bento)] p-6 md:p-8 transition-all duration-500 outline-none focus-visible:ring-2 focus-visible:ring-primary-glow/30 focus-visible:ring-offset-4 focus-visible:ring-offset-base",
          onClick && "cursor-pointer hover:shadow-[0_20px_50px_rgba(0,0,0,0.3)]",
          className
        )}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

BentoCard.displayName = "BentoCard";
