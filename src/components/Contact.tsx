import { useState } from 'react';
import { SocialLinks } from './SocialLinks';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = 'vybhavswaroop.chintha@gmail.com';

  const handleCopyEmail = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(email);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="contact"
      className="relative z-[2] bg-neutral-950 text-white px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-36 border-t border-neutral-800"
      aria-label="Contact and Connect"
    >
      <div className="max-w-6xl mx-auto space-y-16">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-neutral-400 uppercase">
          <span>06</span>
          <span className="w-8 h-[1px] bg-neutral-700" />
          <span>Get in Touch</span>
        </div>

        {/* Main Headline & Supporting Text */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-white leading-[1.1] mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Let&apos;s build something.
            </h2>
            <p className="text-lg sm:text-xl text-neutral-400 max-w-2xl font-light leading-relaxed">
              Have an idea, a problem worth solving, or just want to talk tech? Let&apos;s connect.
            </p>
          </div>

          {/* Direct Email Action Pill */}
          <div className="lg:col-span-4 flex flex-col sm:items-start lg:items-end gap-3">
            <button
              type="button"
              onClick={handleCopyEmail}
              className="inline-flex items-center gap-3 px-6 py-3.5 bg-white text-black text-sm font-medium rounded-full hover:bg-neutral-200 transition-colors shadow-lg cursor-pointer group"
              aria-label="Copy email address"
            >
              <span className="font-mono">{email}</span>
              <span className="text-xs text-neutral-600 group-hover:text-black">
                {copied ? '✓ Copied' : 'Copy'}
              </span>
            </button>
            <a
              href={`mailto:${email}`}
              className="text-xs text-neutral-400 hover:text-white underline underline-offset-4 transition-colors font-mono"
            >
              or open in default mail client ↗
            </a>
          </div>
        </div>

        {/* Social & Coding Profiles */}
        <div className="pt-10 border-t border-neutral-800">
          <div className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
            Verified External Profiles
          </div>
          <SocialLinks />
        </div>
      </div>
    </section>
  );
}
