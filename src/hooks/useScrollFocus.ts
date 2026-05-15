import { useEffect, useRef } from "react";

export function useScrollFocus<T extends HTMLElement = HTMLDivElement>(options: {
  isActive?: boolean;
  delay?: number;
  dependencies?: unknown[];
} = {}) {
  const { isActive = true, delay = 400, dependencies = [] } = options;
  const cardRef = useRef<T>(null);
  const scrollRef = useRef<T>(null);

  useEffect(() => {
    if (isActive) {
      // Focus early without jumping the view
      cardRef.current?.focus({ preventScroll: true });
      
      const timer = setTimeout(() => {
        const target = scrollRef.current || cardRef.current;
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [isActive, delay, ...dependencies]);

  return { cardRef, scrollRef };
}
