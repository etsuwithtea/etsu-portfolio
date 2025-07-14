// Minimal, dependency-free carousel for React
// Usage: <Carousel images={        <button
import { useState } from 'react';
import { createPortal } from 'react-dom';

// Added imgClassName prop for custom image sizing
export default function Carousel({ images, altPrefix = '', className = '', imgClassName, onAnyModalOpen, onImageClick }) {
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
    if (onImageClick) {
      // ส่งข้อมูลของ image/video ปัจจุบันไปยัง parent
      onImageClick(images[idx], idx);
      return;
    }
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
          className="absolute left-2 z-10 p-3 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:scale-110"
          disabled={total <= 1}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M15 18l-6-6 6-6"/></svg>
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
              className={imgClassName ? imgClassName + " select-none" : "w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-xl shadow-sm select-none"}
              style={{ background: '#f9fafb', cursor: 'zoom-in' }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={images[idx].src}
              alt={images[idx].alt || ''}
              loading="lazy"
              decoding="async"
              className={imgClassName ? imgClassName + " select-none" : "w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-xl shadow-sm select-none"}
              draggable="false"
              style={{cursor: 'zoom-in'}}
            />
          )}
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className="absolute right-2 z-10 p-3 bg-gray-900/80 hover:bg-gray-900 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:scale-110"
          disabled={total <= 1}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M9 18l6-6-6-6"/></svg>
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setIdx(i)}
            aria-label={`Go to image ${i+1}`}
            className={`w-2 h-2 rounded-full ${i === idx ? 'bg-gray-600' : 'bg-gray-300'} transition`}
            type="button"
          />
        ))}
      </div>

      {/* Modal Popup for full image or video (rendered with portal) */}
      {modalOpen && createPortal(
        <div
          className="fixed inset-0 z-[120] flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
          aria-modal="true"
          role="dialog"
        >
          <div
            className="relative max-w-4xl w-[90vw] max-h-[90vh] flex flex-col items-center"
            onClick={e => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 bg-red-600/90 hover:bg-red-600 text-white rounded-full p-3 shadow-xl focus:outline-none z-10 border border-red-400/50 hover:border-red-300 transition-all duration-300 hover:scale-110"
              aria-label="Close"
              type="button"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 6L6 18M6 6l12 12"/></svg>
            </button>
            {isVideo(images[idx]) ? (
              <div className="rounded-xl overflow-hidden" style={{borderRadius: '0.75rem'}}>
                <video
                  src={images[idx].src}
                  controls
                  autoPlay
                  className="w-full h-auto object-contain max-h-[80vh]"
                  style={{maxWidth: '100%', display: 'block'}}
                >
                  Your browser does not support the video tag.
                </video>
              </div>
            ) : (
              <div className="rounded-xl overflow-hidden" style={{borderRadius: '0.75rem'}}>
                <img
                  src={images[idx].src}
                  alt={images[idx].alt || ''}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-contain max-h-[80vh]"
                  style={{display: 'block'}}
                />
              </div>
            )}
          </div>
        </div>,
        document.body
      )}
    </div>
  );
}