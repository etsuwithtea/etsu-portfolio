import { useState } from 'react'
import { createPortal } from 'react-dom'

import { type CarouselMediaItem } from '../types/content'

type VideoItem = CarouselMediaItem & { type: 'video' }

export interface CarouselProps {
  images: CarouselMediaItem[]
  altPrefix?: string
  className?: string
  imgClassName?: string
  onAnyModalOpen?: () => void
  onImageClick?: (item: CarouselMediaItem, index: number, allItems: CarouselMediaItem[]) => void
  currentTheme?: 'light' | 'dark' | 'doodle'
}

const isVideoItem = (item: CarouselMediaItem): item is VideoItem => item.type === 'video'

export default function Carousel({
  images,
  altPrefix = '',
  className = '',
  imgClassName,
  onAnyModalOpen,
  onImageClick,
  currentTheme = 'light',
}: CarouselProps) {
  const isDoodleMode = currentTheme === 'doodle'
  const [idx, setIdx] = useState(0)
  const [modalOpen, setModalOpen] = useState(false)

  if (!images || images.length === 0) return null

  const total = images.length
  const prev = () => setIdx((value) => (value - 1 + total) % total)
  const next = () => setIdx((value) => (value + 1) % total)

  const openModal = () => {
    if (onImageClick) {
      onImageClick(images[idx], idx, images)
      return
    }

    onAnyModalOpen?.()
    setModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalOpen(false)
    document.body.style.overflow = ''
  }

  const activeItem = images[idx]
  const activeAlt = activeItem.alt ?? `${altPrefix} ${idx + 1}`.trim()
  const baseImageClasses =
    imgClassName ?? 'w-full h-56 sm:h-72 md:h-80 lg:h-96 object-cover object-top rounded-xl shadow-xs select-none'

  return (
    <div className={`relative w-full flex flex-col items-center ${className}`}>
      <div className="relative w-full flex items-center justify-center">
        <button
          onClick={prev}
          aria-label="Previous image"
          className={`absolute left-2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:scale-110 ${
            isDoodleMode ? 'bg-white text-black border-2 border-black shadow-doodle' : 'bg-gray-900/80 hover:bg-gray-900 text-white'
          }`}
          disabled={total <= 1}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={openModal}
          className="focus:outline-hidden"
          style={{ background: 'none', border: 'none', padding: 0, margin: 0 }}
          aria-label={isVideoItem(activeItem) ? 'View full video' : 'View full image'}
        >
          {isVideoItem(activeItem) ? (
            <video
              src={activeItem.src}
              controls
              className={`${baseImageClasses} cursor-zoom-in`}
              style={{ background: '#f9fafb' }}
            >
              Your browser does not support the video tag.
            </video>
          ) : (
            <img
              src={activeItem.src}
              alt={activeAlt}
              loading="lazy"
              decoding="async"
              className={`${baseImageClasses} cursor-zoom-in`}
              draggable={false}
            />
          )}
        </button>
        <button
          onClick={next}
          aria-label="Next image"
          className={`absolute right-2 z-10 p-3 rounded-full shadow-lg transition-all duration-300 disabled:opacity-40 disabled:pointer-events-none hover:scale-110 ${
            isDoodleMode ? 'bg-white text-black border-2 border-black shadow-doodle' : 'bg-gray-900/80 hover:bg-gray-900 text-white'
          }`}
          disabled={total <= 1}
          type="button"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M9 18l6-6-6-6" />
          </svg>
        </button>
      </div>
      <div className="flex gap-2 mt-4 justify-center">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setIdx(index)}
            aria-label={`Go to image ${index + 1}`}
            className={`w-2 h-2 rounded-full ${index === idx ? (isDoodleMode ? 'bg-black w-4' : 'bg-gray-600') : (isDoodleMode ? 'bg-black/30' : 'bg-gray-300')} transition-all duration-300`}
            type="button"
          />
        ))}
      </div>

      {modalOpen &&
        createPortal(
          <div
            className="fixed inset-0 z-120 flex items-center justify-center bg-black/50 backdrop-blur-sm animate-fade-in"
            onClick={closeModal}
            aria-modal="true"
            role="dialog"
          >
            <div
              className="relative max-w-4xl w-[90vw] max-h-[90vh] flex flex-col items-center"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className={`absolute top-2 right-2 rounded-full p-3 shadow-xl focus:outline-hidden z-10 transition-all duration-300 hover:scale-110 ${
                  isDoodleMode ? 'bg-doodle-coral text-black border-2 border-black shadow-doodle' : 'bg-red-600/90 hover:bg-red-600 text-white border border-red-400/50 hover:border-red-300'
                }`}
                aria-label="Close"
                type="button"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
                <div className={`overflow-hidden ${isDoodleMode ? 'rounded-doodle border-4 border-black shadow-doodle' : 'rounded-xl'}`} style={{ borderRadius: isDoodleMode ? '0' : '0.75rem' }}>
                  {isVideoItem(activeItem) ? (
                    <video
                      src={activeItem.src}
                      controls
                      autoPlay
                      className="w-full h-auto object-contain max-h-[80vh]"
                      style={{ maxWidth: '100%', display: 'block' }}
                    >
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img
                      src={activeItem.src}
                      alt={activeAlt}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-auto object-contain max-h-[80vh]"
                      style={{ display: 'block' }}
                    />
                  )}
                </div>
            </div>
          </div>,
          document.body,
        )}
    </div>
  )
}
