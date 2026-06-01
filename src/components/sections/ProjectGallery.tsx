import { ZoomIn } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import type { ProjectImage } from "@/types";

interface ProjectGalleryProps {
  images: ProjectImage[];
  onSelectImage: (src: string) => void;
}

export function ProjectGallery({ images, onSelectImage }: ProjectGalleryProps) {
  const shouldReduceMotion = useReducedMotion();
  if (images.length === 0) return null;

  return (
    <div className="w-full mb-12 px-2 md:px-6">
      <h3
        className="text-sm font-semibold uppercase tracking-widest mb-4"
        style={{ color: "var(--alpha-light-50)" }}
      >
        Project Gallery
      </h3>
      <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory custom-scrollbar">
        {images.map((img, idx) => {
          const tileClass =
            "snap-start shrink-0 h-40 md:h-56 rounded-2xl overflow-hidden opacity-100 transition-all md:hover:scale-[1.02] relative group/gallery block";
          const tileStyle = {
            border: "1px solid var(--alpha-light-10)",
            backgroundColor: "var(--alpha-dark-40)",
          };

          if (img.type === "video") {
            return (
              <div key={idx} className={tileClass} style={tileStyle}>
                <video
                  src={img.src}
                  className="h-full aspect-video object-cover"
                  autoPlay={!shouldReduceMotion}
                  controls={!!shouldReduceMotion}
                  muted
                  loop
                  playsInline
                />
              </div>
            );
          }

          return (
            <button
              key={idx}
              type="button"
              onClick={() => onSelectImage(img.src)}
              aria-label={`Enlarge image: ${img.alt}`}
              className={cn(tileClass, "cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-glow/60 focus-visible:ring-offset-2 focus-visible:ring-offset-canvas")}
              style={tileStyle}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                decoding="async"
                className="h-full w-auto object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = "none";
                }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover/gallery:opacity-100 transition-opacity flex items-center justify-center"
                style={{ backgroundColor: "var(--alpha-dark-60)" }}
              >
                <ZoomIn className="text-white" size={32} />
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
