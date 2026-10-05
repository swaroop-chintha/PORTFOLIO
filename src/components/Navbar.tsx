import { useState, useEffect } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-10 px-5 sm:px-8 py-4 sm:py-5 flex justify-between items-center bg-transparent backdrop-blur-[2px]">
        {/* Left Side: Brand Logo */}
        <a
          href="#"
          className="group inline-flex items-baseline select-none focus-visible:outline-2 focus-visible:outline-black"
          aria-label="VYBHAV SWAROOP CHINTHA — Home"
        >
          <span
            className="text-[21px] sm:text-[26px] tracking-tight text-black transition-opacity group-hover:opacity-75"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            VYBHAV SWAROOP CHINTHA
          </span>
          <span className="text-[25px] sm:text-[30px] text-black select-none ml-1.5 leading-none">
            ✳︎
          </span>
        </a>

        {/* Center Navigation (Desktop: hidden below md) */}
        <nav
          className="hidden md:flex items-center text-[23px] text-black"
          aria-label="Primary Navigation"
        >
          <a
            href="#about"
            className="hover:opacity-60 transition-opacity focus-visible:outline-1 focus-visible:outline-black"
          >
            About
          </a>
          <span className="mr-2">,</span>
          <a
            href="#projects"
            className="hover:opacity-60 transition-opacity focus-visible:outline-1 focus-visible:outline-black"
          >
            Projects
          </a>
          <span className="mr-2">,</span>
          <a
            href="#skills"
            className="hover:opacity-60 transition-opacity focus-visible:outline-1 focus-visible:outline-black"
          >
            Skills
          </a>
          <span className="mr-2">,</span>
          <a
            href="#experience"
            className="hover:opacity-60 transition-opacity focus-visible:outline-1 focus-visible:outline-black"
          >
            Experience
          </a>
        </nav>

        {/* Right Side: Let's connect (Desktop: hidden below md) */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="text-[23px] text-black underline underline-offset-2 hover:opacity-60 transition-opacity focus-visible:outline-1 focus-visible:outline-black"
          >
            Let's connect
          </a>
        </div>

        {/* Mobile Hamburger Button (below md) */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex flex-col justify-center items-center gap-[5px] p-2 focus:outline-none z-20 cursor-pointer"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform origin-center ${
              isOpen ? 'rotate-45 translate-y-[7px]' : ''
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 ${
              isOpen ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <span
            className={`w-6 h-[2px] bg-black transition-all duration-300 transform origin-center ${
              isOpen ? '-rotate-45 -translate-y-[7px]' : ''
            }`}
          />
        </button>
      </header>

      {/* Mobile Navigation Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-white/95 backdrop-blur-sm z-[9] flex flex-col justify-center px-8 gap-8 transition-opacity duration-300 ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="flex flex-col gap-6 text-[32px] font-medium text-black">
          <a
            href="#about"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            About
          </a>
          <a
            href="#projects"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Projects
          </a>
          <a
            href="#skills"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Skills
          </a>
          <a
            href="#experience"
            onClick={closeMenu}
            className="hover:opacity-60 transition-opacity"
          >
            Experience
          </a>
          <a
            href="#contact"
            onClick={closeMenu}
            className="underline underline-offset-4 hover:opacity-60 transition-opacity mt-4"
          >
            Let's connect
          </a>
        </div>

        <div className="pt-8 border-t border-black/10 flex flex-col gap-2 text-sm text-black/60">
          <span>Full-Stack Developer | Data Engineering | AI</span>
          <span className="font-mono text-xs">vybhavswaroop.chintha@gmail.com</span>
        </div>
      </div>
    </>
  );
}
