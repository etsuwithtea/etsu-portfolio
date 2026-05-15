import { ZoomIn } from "lucide-react";
import type { ProjectImage } from "@/types";

interface ProjectGalleryProps {
  images: ProjectImage[];
  onSelectImage: (src: string) => void;
}

export function ProjectGallery({ images, onSelectImage }: ProjectGalleryProps) {
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
        {images.map((img, idx) => (
          <div
            key={idx}
            onClick={() => img.type !== "video" && onSelectImage(img.src)}
            className="snap-start shrink-0 h-40 md:h-56 rounded-2xl overflow-hidden opacity-50 hover:opacity-100 transition-all hover:scale-[1.02] cursor-pointer relative group/gallery"
            style={{
              border: "1px solid var(--alpha-light-10)",
              backgroundColor: "var(--alpha-dark-40)",
            }}
          >
            {img.type === "video" ? (
              <video
                src={img.src}
                className="h-full aspect-video object-cover"
                autoPlay
                muted
                loop
                playsInline
              />
            ) : (
              <>
                <img
                  src={img.src}
                  alt={img.alt}
                  className="h-full w-auto object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://via.placeholder.com/400x225?text=Image+Not+Found";
                  }}
                />
                <div
                  className="absolute inset-0 opacity-0 group-hover/gallery:opacity-100 transition-opacity flex items-center justify-center"
                  style={{ backgroundColor: "var(--alpha-dark-60)" }}
                >
                  <ZoomIn className="text-white" size={32} />
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
