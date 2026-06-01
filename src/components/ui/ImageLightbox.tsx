import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!src) return;

    // Remember what had focus, move focus into the dialog, restore on close.
    previouslyFocused.current = document.activeElement as HTMLElement | null;
    closeRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
      // Single focusable element: trap Tab on the close button.
      if (e.key === "Tab") {
        e.preventDefault();
        closeRef.current?.focus();
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => {
      window.removeEventListener("keydown", handleKey);
      previouslyFocused.current?.focus?.();
    };
  }, [src, onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[var(--z-modal)] flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
          style={{
            backgroundColor: "var(--alpha-dark-70)",
            backdropFilter: "blur(8px)",
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="relative max-w-7xl w-full h-full flex items-center justify-center"
          >
            <img
              src={src}
              alt="Enlarged view"
              className="max-w-full max-h-full object-contain shadow-2xl rounded-lg"
            />
            <button
              ref={closeRef}
              type="button"
              aria-label="Close image preview"
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-0 right-0 md:-top-12 md:-right-12 p-2 rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
              style={{ color: "var(--alpha-light-50)" }}
              onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-surface)")}
              onMouseLeave={(e) => (e.currentTarget.style.color = "var(--alpha-light-50)")}
            >
              <X size={40} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
