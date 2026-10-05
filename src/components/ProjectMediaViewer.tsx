import { useState, useRef, useEffect, useCallback } from 'react';
import { ProjectData } from './ProjectCard';

interface ProjectMediaViewerProps {
  project: ProjectData;
  onOpenFullscreen?: () => void;
}

export function ProjectMediaViewer({ project, onOpenFullscreen }: ProjectMediaViewerProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const images = project.images || [];
  const hasMultiple = images.length > 1;

  const handlePrev = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [hasMultiple, images.length]);

  const handleNext = useCallback(() => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [hasMultiple, images.length]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) return;
    const distance = touchStartXRef.current - touchEndXRef.current;
    const minSwipeDistance = 45;
    if (distance > minSwipeDistance) {
      handleNext();
    } else if (distance < -minSwipeDistance) {
      handlePrev();
    }
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Keyboard navigation when focused
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      handlePrev();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      handleNext();
    }
  };

  // Extract clean filename for footer tag
  const currentImageSrc = images[currentIndex] || '';
  const currentFilename = currentImageSrc.split('/').pop() || '';

  return (
    <div
      ref={containerRef}
      tabIndex={0}
      onKeyDown={handleKeyDown}
      className="bg-neutral-950 text-white rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col font-sans transition-all duration-300 hover:border-neutral-700 outline-none focus-visible:ring-1 focus-visible:ring-white/30"
      aria-label={`${project.name} media terminal viewer`}
    >
      {/* Top Terminal System Bar */}
      <div className="bg-neutral-900/95 px-4 py-3 border-b border-neutral-800 flex items-center justify-between text-xs font-mono select-none">
        <div className="flex items-center gap-2">
          {/* Traffic light window controls */}
          <div className="flex items-center gap-1.5 mr-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
          </div>
          <span className="text-neutral-400 font-semibold">SYS_{project.number}</span>
          <span className="text-neutral-600">/</span>
          <span className="text-emerald-400 font-medium">MEDIA_VIEWER</span>
        </div>

        <div className="flex items-center gap-3">
          {hasMultiple && (
            <span className="text-[11px] font-mono text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
              {currentIndex + 1} / {images.length}
            </span>
          )}

          {images.length === 1 && (
            <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
              Screenshot
            </span>
          )}

          {/* Fullscreen Expand Action */}
          {onOpenFullscreen && images.length > 0 && (
            <button
              type="button"
              onClick={onOpenFullscreen}
              className="text-neutral-400 hover:text-white transition-colors p-1 rounded hover:bg-neutral-800 cursor-pointer"
              title="Expand screenshot"
              aria-label="Expand screenshot"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
              </svg>
            </button>
          )}
        </div>
      </div>

      {/* Main Terminal Viewport / Carousel */}
      <div
        className="relative p-2 sm:p-3 bg-neutral-950 flex flex-col justify-center items-center min-h-[260px] sm:min-h-[300px]"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {images.length > 0 ? (
          <div className="relative w-full h-[240px] sm:h-[300px] flex items-center justify-center overflow-hidden rounded-lg bg-neutral-900/50">
            {/* Real Uploaded Project Screenshot */}
            <img
              key={currentImageSrc}
              src={currentImageSrc}
              alt={`${project.name} verified screenshot ${currentIndex + 1}`}
              className="w-full h-full object-contain select-none transition-opacity duration-200"
              loading="lazy"
            />

            {/* Carousel Previous Button */}
            {hasMultiple && (
              <button
                type="button"
                onClick={handlePrev}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                aria-label="Previous image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
            )}

            {/* Carousel Next Button */}
            {hasMultiple && (
              <button
                type="button"
                onClick={handleNext}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/10 cursor-pointer shadow-lg hover:scale-105 active:scale-95"
                aria-label="Next image"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            )}

            {/* Carousel Pagination Dots */}
            {hasMultiple && (
              <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/10">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => setCurrentIndex(idx)}
                    className={`transition-all rounded-full cursor-pointer ${
                      currentIndex === idx
                        ? 'w-5 h-1.5 bg-white'
                        : 'w-1.5 h-1.5 bg-white/40 hover:bg-white/70'
                    }`}
                    aria-label={`Go to image ${idx + 1}`}
                  />
                ))}
              </div>
            )}
          </div>
        ) : (
          /* Project 05 fallback: No fabricated screenshot, clean repository card */
          <div className="w-full h-[240px] sm:h-[300px] flex flex-col justify-center items-center text-center p-6 bg-neutral-900/40 rounded-lg border border-neutral-800/80 space-y-4">
            <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center text-neutral-300">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                />
              </svg>
            </div>
            <div className="space-y-1">
              <div className="font-mono text-sm text-neutral-200">
                swaroop-chintha / Java-Rag-ChatBot
              </div>
              <p className="text-xs text-neutral-400 font-mono">
                Source Code Repository · Java RAG Architecture
              </p>
            </div>
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-neutral-800 hover:bg-neutral-700 text-white rounded-lg text-xs font-mono transition-colors"
              >
                <span>Inspect Repository</span>
                <span>↗</span>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Bottom Terminal Status Bar */}
      <div className="px-4 py-2.5 bg-neutral-900/90 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400 select-none">
        <div className="flex items-center gap-2 truncate">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span className="truncate">
            {currentFilename ? `ASSET: ${currentFilename}` : 'SOURCE REPOSITORY'}
          </span>
        </div>

        <div className="flex items-center gap-3 shrink-0 ml-2">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              Live App ↗
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-400 hover:text-white transition-colors underline"
            >
              GitHub ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
