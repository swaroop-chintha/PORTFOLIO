import { useState, useEffect } from 'react';
import { useTypewriter } from '../hooks/useTypewriter';
import { WhitePill, ContactPill } from './PillButton';
import { HeroCharacter } from '../assets/hero-character/HeroCharacter';

interface HeroProps {
  onOpenResume?: () => void;
}

export function Hero({ onOpenResume }: HeroProps) {
  const [showPills, setShowPills] = useState(false);

  // Typewriter effect
  const introBio =
    'Glad you stopped in. I build software, data systems, and AI-powered products that turn ideas into something people can actually use.';
  const { displayed, done } = useTypewriter(introBio, 38, 600);

  // Hero pills appear 400ms after page load, independently of typewriter
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPills(true);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      id="hero"
      className="h-screen w-full relative z-[1] overflow-hidden flex flex-col justify-end pb-12 sm:justify-center sm:pb-0 px-5 sm:px-8 md:px-10"
      aria-label="Hero section"
    >
      <div className="max-w-xl relative z-10">
        {/* Section 11: Hero Intro (Crisp & Sharp) */}
        <div
          className="mb-5 sm:mb-6 text-black select-text"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.3,
            fontWeight: 400,
          }}
        >
          Hey there, I&apos;m VYBHAV,
          <br />
          a Full-Stack Developer & Data Engineering Enthusiast
        </div>

        {/* Section 12: Hero Typewriter */}
        <p
          className="text-black mb-5 sm:mb-6 select-text"
          style={{
            fontSize: 'clamp(18px, 4vw, 26px)',
            lineHeight: 1.35,
            fontWeight: 400,
            minHeight: '54px',
          }}
        >
          {displayed}
          {!done && (
            <span
              className="inline-block w-[2px] h-[1.1em] bg-black align-middle ml-[2px] animate-blink"
              aria-hidden="true"
            />
          )}
        </p>

        {/* Section 13 & 14: Hero Pills */}
        <div
          className="flex flex-wrap gap-y-1 transition-all duration-400 ease-out"
          style={{
            opacity: showPills ? 1 : 0,
            transform: showPills ? 'translateY(0)' : 'translateY(8px)',
          }}
        >
          <WhitePill label="View my work" href="#projects" />
          <WhitePill label="About me" href="#about" />
          <WhitePill label="My tech stack" href="#skills" />
          {onOpenResume && (
            <WhitePill label="Resume" onClick={onOpenResume} />
          )}
          <WhitePill
            label="GitHub"
            href="https://github.com/swaroop-chintha"
            target="_blank"
            rel="noopener noreferrer"
          />
          <ContactPill />
        </div>
      </div>

      {/* 3D CRT Character Asset telemetry / slot */}
      <HeroCharacter />
    </section>
  );
}
