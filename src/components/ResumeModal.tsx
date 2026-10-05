import { useEffect, useCallback } from 'react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const imageUrl = '/assets/resume/resume-img.png';

  const handleClose = useCallback(() => {
    onClose();
  }, [onClose]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen, handleClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    const printWindow = window.open(imageUrl, '_blank');
    if (printWindow) {
      printWindow.onload = () => {
        printWindow.focus();
        printWindow.print();
      };
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] overflow-y-auto bg-black/85 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
      onClick={handleClose}
    >
      {/* Modal Container */}
      <div
        className="relative w-full max-w-5xl bg-neutral-900 text-white rounded-2xl shadow-2xl overflow-hidden border border-neutral-800 my-4 flex flex-col h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Control Bar */}
        <div className="bg-neutral-950 px-5 py-3.5 flex items-center justify-between border-b border-neutral-800 shrink-0 select-none">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
            <span id="resume-title" className="text-xs font-mono text-neutral-300 ml-2 truncate">
              VYBHAV_SWAROOP_CHINTHA_RESUME.png
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <a
              href={imageUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono rounded-lg transition-colors cursor-pointer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              <span className="hidden sm:inline">Open in Tab</span>
            </a>

            <button
              type="button"
              onClick={handlePrint}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white text-xs font-mono rounded-lg transition-colors cursor-pointer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect x="6" y="14" width="12" height="8" />
              </svg>
              <span>Print</span>
            </button>

            <a
              href={imageUrl}
              download="VYBHAV_SWAROOP_CHINTHA_RESUME.png"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white text-black hover:bg-neutral-200 text-xs font-mono rounded-lg transition-colors cursor-pointer"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              <span>Download</span>
            </a>

            <button
              type="button"
              onClick={handleClose}
              className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer ml-1"
              aria-label="Close modal"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Embedded Resume Image Viewer */}
        <div className="flex-1 w-full bg-neutral-950 p-3 sm:p-6 overflow-y-auto flex items-center justify-center">
          <div className="w-full h-full flex items-center justify-center">
            <img
              src={imageUrl}
              alt="Vybhav Swaroop Chintha - Official Resume"
              className="w-auto h-auto max-w-full max-h-full object-contain rounded-lg shadow-xl"
              loading="eager"
            />
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="bg-neutral-950 px-5 py-2.5 border-t border-neutral-800 flex items-center justify-between text-[11px] font-mono text-neutral-400 shrink-0">
          <span>Official Verified Resume Document</span>
          <span>KL University · B.Tech CSE (9.5 CGPA)</span>
        </div>
      </div>
    </div>
  );
}
