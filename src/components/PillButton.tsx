import React, { useState } from 'react';

interface WhitePillProps {
  label: string;
  href?: string;
  onClick?: () => void;
  target?: string;
  rel?: string;
}

export function WhitePill({ label, href, onClick, target, rel }: WhitePillProps) {
  const className =
    'inline-flex items-center justify-center bg-white text-black border border-black/10 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-black hover:text-white transition-colors duration-200 cursor-pointer shadow-sm';

  if (href) {
    return (
      <a href={href} onClick={onClick} target={target} rel={rel} className={className}>
        {label}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={className}>
      {label}
    </button>
  );
}

export function ContactPill() {
  const [copied, setCopied] = useState(false);
  const email = 'vybhavswaroop.chintha@gmail.com';

  const handleCopy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      title="Click to copy email address"
      aria-label="Copy email address to clipboard"
      className="inline-flex items-center justify-center text-white bg-black/80 backdrop-blur-md border border-white/90 rounded-full text-[13px] sm:text-[15px] px-4 sm:px-5 py-[0.3em] mx-[0.2em] mb-[0.4em] whitespace-nowrap hover:bg-white hover:text-black transition-colors duration-200 cursor-pointer gap-2 sm:gap-3 group shadow-md"
    >
      <span>
        Reach me:{' '}
        <span className="underline underline-offset-2">
          {email}
        </span>
      </span>

      {/* 12x12 copy icon using inline SVG consisting of two overlapping rectangles */}
      <span className="inline-flex items-center justify-center relative w-3 h-3 shrink-0">
        {copied ? (
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-400 group-hover:text-emerald-700">
            ✓
          </span>
        ) : (
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-3 h-3 shrink-0 stroke-current"
          >
            {/* Front rectangle */}
            <rect
              x="3.75"
              y="1.25"
              width="6.75"
              height="7.75"
              rx="1"
              strokeWidth="1.2"
              fill="none"
            />
            {/* Back rectangle */}
            <path
              d="M2.5 3.5H1.5C1.22386 3.5 1 3.72386 1 4V10C1 10.5523 1.44772 11 2 11H7C7.55228 11 8 10.5523 8 10V9"
              strokeWidth="1.2"
              strokeLinecap="round"
            />
          </svg>
        )}
      </span>

      {copied && (
        <span className="text-xs font-medium ml-1 text-emerald-300 group-hover:text-black">
          Copied!
        </span>
      )}
    </button>
  );
}
