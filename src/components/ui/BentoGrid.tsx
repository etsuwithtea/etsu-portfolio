import { type ReactNode } from "react";
import { cn } from "@/utils/cn";

interface BentoGridProps {
  children: ReactNode;
  className?: string;
}

export function BentoGrid({ children, className }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-7xl mx-auto w-full p-4 md:p-8",
        className
      )}
      style={{ gridAutoRows: "minmax(280px, auto)" }}
    >
      {children}
    </div>
  );
}
