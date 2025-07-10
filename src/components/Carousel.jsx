// Minimal, dependency-free carousel for React
// Usage: <Carousel images={[...]} />
import { useState } from 'react';
import { createPortal } from 'react-dom';

// Added imgClassName prop for custom image sizing
export default function Carousel({ images, altPrefix = '', className = '', imgClassName, onAnyModalOpen }) {
  const [idx, setIdx] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const total = images.length;
  if (!images || images.length === 0) return null;

  const prev = () => setIdx(i => (i - 1 + total) % total);
  const next = () => setIdx(i => (i + 1) % total);

  // Helper to check if item is a video object
  const isVideo = (item) => typeof item === 'object' && item.type === 'video';

  // เมื่อจะเปิด modal ให้แจ้ง parent (App) เพื่อปิด modal อื่นก่อน
  const openModal = () => {
    if (onAnyModalOpen) onAnyModalOpen();
    setModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.overflow = '';
  };

  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-0 z-10 p-2 bg-[#181824]/80 hover:bg-yellow-400/80 text-yellow-400 hover:text-[#181824] rounded-full shadow transition disabled:opacity-40 disabled:pointer-events-none"
          disabled={total <= 1}
          type="button"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
        </button>
        {/* Render video or image as a button to open modal */}
        <button
          type="button"
          onClick={openModal}
          className="focus:outline-none"
          style={{background: 'none', border: 'none', padding: 0, margin: 0}}
          aria-label={isVideo(images[idx]) ? "View full video" : "View full image"}
        >
          {isVideo(images[idx]) ? (
            <video
              src={images[idx].src}
              controls
              className={imgClassName ? imgClassName + " select-none" : "w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-lg shadow-md select-none"}
              style={{ background: '#181824', cursor: 'zoom-in' }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={images[idx].src}
              alt={images[idx].alt || ''}
              loading="lazy"
              decoding="async"
              className={imgClassName ? imgClassName + " select-none" : "w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-lg shadow-md select-none"}
              draggable="false"
              style={{cursor: 'zoom-in'}}
            />
          )}
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-0 z-10 p-2 bg-[#181824]/80 hover:bg-yellow-400/80 text-yellow-400 hover:text-[#181824] rounded-full shadow transition disabled:opacity-40 disabled:pointer-events-none"
          disabled={total <= 1}
          type="button"
        >
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 6l6 6-6 6"/></svg>
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to image ${i+1}`}
            className={`w-3 h-3 rounded-full border-2 ${i === idx ? 'bg-yellow-400 border-yellow-400' : 'bg-[#232336] border-gray-500'} transition`}
            type="button"
          />
        ))}
      </div>

      {/* Modal Popup for full image or video (rendered with portal) */}
      {modalOpen && createPortal(
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-transparent animate-fadein"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-2xl w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-[#232336] text-gray-200 hover:text-yellow-400 rounded-full p-2 shadow-lg focus:outline-none z-10"
              aria-label="Close"
              type="button"
            >
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {isVideo(images[idx]) ? (
              <video
                src={images[idx].src}
                controls
                autoPlay
                className="rounded-lg shadow-2xl w-full h-auto object-contain max-h-[80vh] bg-[#181824]"
                style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)'}}
              >
                Your browser does not support the video tag.
              </video>
            ) : (
              <img
                src={images[idx].src}
                alt={images[idx].alt || ''}
                loading="lazy"
                decoding="async"
                className="rounded-lg shadow-2xl w-full h-auto object-contain max-h-[80vh] bg-[#181824]"
                style={{boxShadow: '0 8px 32px 0 rgba(0,0,0,0.5)'}}
              />
            )}
            <div className="mt-4 text-center text-white text-base font-semibold max-w-lg w-full truncate">{images[idx].alt || ''}</div>
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}