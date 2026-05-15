import { useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface ImageLightboxProps {
  src: string | null;
  onClose: () => void;
}

export function ImageLightbox({ src, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {src && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[999] flex items-center justify-center p-4 md:p-12 cursor-zoom-out"
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
              onClick={(e) => { e.stopPropagation(); onClose(); }}
              className="absolute top-0 right-0 md:-top-12 md:-right-12 p-2 transition-colors"
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
