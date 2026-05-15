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
        "grid grid-cols-1 md:grid-cols-3 gap-4 max-w-6xl mx-auto w-full p-4",
        className
      )}
      style={{ gridAutoRows: "minmax(300px, auto)" }}
    >
      {children}
    </div>
  );
}
