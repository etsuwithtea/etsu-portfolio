import { createPortal } from 'react-dom';

import { type CarouselMediaItem } from '../types/content';

type ImageModalProps = {
  open: boolean;
  modalImg: string | null;
  modalAlt: string;
  modalImages: CarouselMediaItem[];
  currentModalIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
  currentTheme: 'light' | 'dark' | 'doodle';
};

const isVideo = (src?: string | null) => (src ?? '').toLowerCase().endsWith('.mp4');

export function ImageModal({
  open,
  modalImg,
  modalAlt,
  modalImages,
  currentModalIndex,
  onClose,
  onPrev,
  onNext,
  currentTheme,
}: ImageModalProps) {
  const isDoodleMode = currentTheme === 'doodle';
  if (!open) return null;

  const hasMultiple = modalImages.length > 1;

  return createPortal(
    <div
      className="fixed inset-0 z-9999 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative max-w-4xl w-[90vw] max-h-[90vh] flex flex-col items-center animate-fade-in-up"
        onClick={event => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className={`absolute top-2 right-2 rounded-full p-2 shadow-lg focus:outline-hidden z-20 transition-all duration-300 hover:scale-110 ${
            isDoodleMode ? 'bg-doodle-coral text-black border-2 border-black shadow-doodle' : 'bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border border-white/20'
          }`}
          aria-label="Close"
          type="button"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>

        {hasMultiple && (
          <button
            onClick={onPrev}
            className={`absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg focus:outline-hidden z-10 transition-all duration-300 hover:scale-110 ${
              isDoodleMode ? 'bg-white text-black border-2 border-black shadow-doodle' : 'bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border border-white/20'
            }`}
            aria-label="Previous image"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="15,18 9,12 15,6"></polyline>
            </svg>
          </button>
        )}

        {hasMultiple && (
          <button
            onClick={onNext}
            className={`absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full p-3 shadow-lg focus:outline-hidden z-10 transition-all duration-300 hover:scale-110 ${
              isDoodleMode ? 'bg-white text-black border-2 border-black shadow-doodle' : 'bg-black/20 backdrop-blur-sm text-white hover:bg-black/30 border border-white/20'
            }`}
            aria-label="Next image"
            type="button"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="9,18 15,12 9,6"></polyline>
            </svg>
          </button>
        )}

        {hasMultiple && (
          <div className={`absolute top-2 left-2 px-3 py-1 rounded-full text-sm transition-all duration-300 ${
            isDoodleMode ? 'bg-doodle-accent text-black border-2 border-black font-bold shadow-doodle' : 'bg-black/20 backdrop-blur-sm text-white border border-white/20'
          }`}>
            {currentModalIndex + 1} / {modalImages.length}
          </div>
        )}

        {isVideo(modalImg) ? (
          <div className={`overflow-hidden ${isDoodleMode ? 'border-4 border-black shadow-doodle' : 'rounded-xl'}`} style={{ borderRadius: isDoodleMode ? '0' : '0.75rem' }}>
            <video src={modalImg ?? ''} controls autoPlay className="w-full h-auto object-contain max-h-[80vh]" style={{ maxWidth: '100%', display: 'block' }}>
              Your browser does not support the video tag.
            </video>
          </div>
        ) : modalImg ? (
          <div className={`overflow-hidden ${isDoodleMode ? 'border-4 border-black shadow-doodle' : 'rounded-xl'}`} style={{ borderRadius: isDoodleMode ? '0' : '0.75rem' }}>
            <img
              src={modalImg}
              alt={modalAlt}
              loading="lazy"
              decoding="async"
              className="w-full h-auto object-contain max-h-[80vh]"
              style={{ display: 'block' }}
            />
          </div>
        ) : null}
      </div>
    </div>,
    document.body,
  );
}

export default ImageModal;
