export function Footer() {
  return (
    <footer className="relative z-[2] bg-neutral-950 text-white border-t border-neutral-900 px-5 sm:px-8 py-8 sm:py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-xs sm:text-sm">
        {/* Left: Brand Logo Lockup */}
        <div className="flex items-baseline select-none">
          <span
            className="tracking-tight text-white font-medium text-base sm:text-lg"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            VYBHAV SWAROOP CHINTHA
          </span>
          <span className="text-white text-lg ml-1 select-none leading-none">
            ✳︎
          </span>
        </div>

        {/* Center / Right: Clean Copyright */}
        <div className="text-neutral-500 font-mono text-xs text-center sm:text-right">
          © 2026 VYBHAV SWAROOP CHINTHA · ALL RIGHTS RESERVED
        </div>
      </div>
    </footer>
  );
}
