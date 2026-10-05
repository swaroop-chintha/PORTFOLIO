import { useState, useEffect, useCallback } from 'react';

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  description: string;
  tag: string;
  imageUrl: string;
}

export function Certifications() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  const certifications: CertificateItem[] = [
    {
      id: 'aws',
      title: 'AWS Certified Cloud Practitioner',
      issuer: 'Amazon Web Services',
      description:
        'Foundational cloud computing, security models, AWS architectural principles, and cloud infrastructure management.',
      tag: 'Cloud & Infrastructure',
      imageUrl: '/assets/certificates/aws-cp.png',
    },
    {
      id: 'github-copilot',
      title: 'GitHub Copilot Certification',
      issuer: 'GitHub',
      description:
        'AI-assisted code development, pair programming workflows, prompt engineering for software engineering, and developer velocity.',
      tag: 'AI-Assisted Development',
      imageUrl: '/assets/certificates/github-copilot.png',
    },
    {
      id: 'linguaskill',
      title: 'Cambridge Linguaskill English — B2',
      issuer: 'Cambridge Assessment English',
      description:
        'Professional international English language proficiency across speaking, listening, reading, and business communication.',
      tag: 'Professional Communication',
      imageUrl: '/assets/certificates/linguaskill.png',
    },
  ];

  const handleClose = useCallback(() => {
    setSelectedCert(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    if (selectedCert) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedCert, handleClose]);

  return (
    <div className="py-12 border-b border-black/10">
      <div className="flex items-center justify-between text-xs tracking-widest text-black/50 uppercase font-mono mb-8">
        <span>Verified Credentials</span>
        <span>Authentic Documentation</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert) => (
          <div
            key={cert.id}
            onClick={() => setSelectedCert(cert)}
            className="space-y-3 group flex flex-col justify-between p-5 -m-2 rounded-xl transition-all duration-200 hover:bg-black/[0.03] cursor-pointer border border-transparent hover:border-black/5"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                setSelectedCert(cert);
              }
            }}
          >
            <div className="space-y-3">
              <div className="text-xs font-mono text-black/50 uppercase tracking-wider">
                {cert.tag}
              </div>
              <h4
                className="text-xl font-normal text-black tracking-tight leading-snug group-hover:opacity-75 transition-opacity"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {cert.title}
              </h4>
              <div className="text-xs font-medium text-black/80">
                {cert.issuer}
              </div>
              <p className="text-xs sm:text-sm text-black/65 leading-relaxed">
                {cert.description}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedCert(cert);
                }}
                className="inline-flex items-center gap-1.5 text-xs font-mono text-black underline underline-offset-4 hover:opacity-60 transition-opacity cursor-pointer"
              >
                <span>View Certificate</span>
                <span>↗</span>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Certificate Viewer Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 lg:p-8 animate-in fade-in duration-200"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cert-modal-title"
          onClick={handleClose}
        >
          <div
            className="relative w-full max-w-4xl bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden flex flex-col max-h-[92vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Top Bar */}
            <div className="bg-neutral-900 px-5 py-3.5 border-b border-neutral-800 flex items-center justify-between text-xs font-mono select-none">
              <div className="flex items-center gap-2 min-w-0">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80 inline-block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80 inline-block shrink-0" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/80 inline-block shrink-0" />
                <span className="text-neutral-400 font-semibold ml-2 shrink-0">
                  SYS_CERT // CREDENTIAL
                </span>
                <span className="text-neutral-600 shrink-0">/</span>
                <span id="cert-modal-title" className="text-white truncate font-medium">
                  {selectedCert.title}
                </span>
              </div>

              <div className="flex items-center gap-3 shrink-0 ml-4">
                <a
                  href={selectedCert.imageUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 text-xs text-neutral-400 hover:text-white bg-neutral-800 hover:bg-neutral-700 rounded transition-colors"
                >
                  <span>Open Full</span>
                  <span>↗</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body / Image Viewer */}
            <div className="relative p-3 sm:p-6 bg-neutral-950 flex flex-col items-center justify-center min-h-[300px] sm:min-h-[460px] max-h-[75vh] overflow-y-auto">
              <div className="w-full flex items-center justify-center">
                <img
                  key={selectedCert.imageUrl}
                  src={selectedCert.imageUrl}
                  alt={`${selectedCert.title} - Official Certificate`}
                  className="w-auto h-auto max-w-full max-h-[68vh] object-contain rounded-lg shadow-lg select-none"
                  loading="eager"
                />
              </div>
            </div>

            {/* Modal Footer */}
            <div className="bg-neutral-900 px-5 py-3 border-t border-neutral-800 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
              <div className="flex items-center gap-2 text-neutral-400 truncate">
                <span className="text-emerald-400 font-semibold">VERIFIED:</span>
                <span className="text-neutral-300 truncate">{selectedCert.issuer}</span>
                <span className="text-neutral-600 hidden sm:inline">•</span>
                <span className="text-neutral-400 hidden sm:inline">{selectedCert.tag}</span>
              </div>

              <div className="flex items-center gap-3">
                <a
                  href={selectedCert.imageUrl}
                  download={selectedCert.imageUrl.split('/').pop()}
                  className="px-3 py-1.5 bg-neutral-800 hover:bg-neutral-700 text-white font-medium rounded-lg transition-colors inline-flex items-center gap-1.5"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                    <polyline points="7 10 12 15 17 10" />
                    <line x1="12" y1="15" x2="12" y2="3" />
                  </svg>
                  <span>Save Image</span>
                </a>
                <button
                  type="button"
                  onClick={handleClose}
                  className="px-3 py-1.5 bg-white text-black font-medium rounded-lg hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
