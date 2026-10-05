import { useState } from 'react';
import { ProjectData } from './ProjectCard';

interface ProjectMediaModalProps {
  project: ProjectData | null;
  isOpen: boolean;
  onClose: () => void;
}

export function ProjectMediaModal({ project, isOpen, onClose }: ProjectMediaModalProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!isOpen || !project) return null;

  const images = project.images || [];
  const hasMultiple = images.length > 1;

  const handlePrev = () => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = () => {
    if (!hasMultiple) return;
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const currentSrc = images[currentIndex] || '';

  return (
    <div
      className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-neutral-900 px-5 py-3.5 border-b border-neutral-800 flex items-center justify-between text-xs font-mono select-none">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block" />
            <span className="text-neutral-400 font-semibold ml-2">
              SYS_{project.number} // HIGH-RESOLUTION PREVIEW
            </span>
            <span className="text-neutral-600">/</span>
            <span className="text-white truncate max-w-xs sm:max-w-md">
              {project.name}
            </span>
          </div>

          <div className="flex items-center gap-3">
            {hasMultiple && (
              <span className="text-neutral-400 bg-neutral-950 px-2 py-0.5 rounded border border-neutral-800">
                {currentIndex + 1} / {images.length}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Content Viewer Body */}
        <div className="relative p-4 sm:p-6 bg-neutral-950 flex flex-col items-center justify-center min-h-[350px] sm:min-h-[500px] overflow-hidden">
          {images.length > 0 ? (
            <div className="relative w-full h-[340px] sm:h-[480px] lg:h-[560px] flex items-center justify-center">
              <img
                src={currentSrc}
                alt={`${project.name} high-resolution screenshot`}
                className="w-full h-full object-contain rounded-lg"
              />

              {hasMultiple && (
                <>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 cursor-pointer shadow-xl hover:scale-105"
                    aria-label="Previous image"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M15 18l-6-6 6-6" />
                    </svg>
                  </button>

                  <button
                    type="button"
                    onClick={handleNext}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-white flex items-center justify-center transition-all backdrop-blur-sm border border-white/20 cursor-pointer shadow-xl hover:scale-105"
                    aria-label="Next image"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M9 18l6-6-6-6" />
                    </svg>
                  </button>

                  <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 backdrop-blur-md border border-white/20">
                    {images.map((_, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setCurrentIndex(idx)}
                        className={`transition-all rounded-full cursor-pointer ${
                          currentIndex === idx
                            ? 'w-6 h-2 bg-white'
                            : 'w-2 h-2 bg-white/40 hover:bg-white/70'
                        }`}
                        aria-label={`Go to slide ${idx + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
          ) : (
            <div className="text-center p-8 space-y-4 font-mono text-sm text-neutral-400">
              <p>Repository Documentation: {project.name}</p>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="bg-neutral-900 px-5 py-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs">
          <div className="flex items-center gap-2 font-mono text-neutral-400 truncate">
            <span className="text-emerald-400 font-medium">AUTHENTIC ASSET:</span>
            <span className="truncate">{currentSrc.split('/').pop()}</span>
          </div>

          <div className="flex items-center gap-3 font-mono">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-white text-black font-medium rounded-full hover:bg-neutral-200 transition-colors"
              >
                Open Live Platform ↗
              </a>
            )}
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 bg-neutral-800 text-white font-medium rounded-full hover:bg-neutral-700 transition-colors"
              >
                Open GitHub Repo ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
