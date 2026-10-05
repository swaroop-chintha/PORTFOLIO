import { Certifications } from './Certifications';

export function JPMCSection() {
  return (
    <section
      id="experience"
      className="relative z-[2] bg-white text-black px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 border-t border-black/10"
      aria-label="JPMorgan Code for Good and Experience"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-black/60 uppercase mb-8 sm:mb-12">
          <span>05</span>
          <span className="w-8 h-[1px] bg-black/30" />
          <span>Industry Engagement & Hackathons</span>
        </div>

        {/* Magazine-style Editorial Title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-widest text-black/50 mb-3">
              Hyderabad · September 19–20, 2026 · Tech for Social Good
            </div>
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-black leading-tight"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              JP MORGAN CODE FOR GOOD 2026
            </h2>
          </div>

          <div className="text-sm text-black/70 max-w-sm">
            Intensive 24-hour engineering hackathon collaborating on high-impact technology solutions for non-profit organizations alongside industry engineers.
          </div>
        </div>

        {/* Real Photographs Grid: Desktop LEFT: jpmc1.jpeg, RIGHT: jpmc2.jpeg; Stack vertically on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-20">
          {/* Left Column: Team Photo (jpmc1.jpeg) */}
          <div className="lg:col-span-6 space-y-4">
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-neutral-900 group">
              <img
                src="/assets/projects/jpmc/jpmc1.jpeg"
                alt="JPMorganChase Code for Good 2026 - Team 05 Cohort at Hyderabad Campus"
                className="w-full h-auto max-h-[580px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/50 px-1">
              <span>Figure 1.0 — Team 05 Hackathon Cohort</span>
              <span>Hyderabad Campus</span>
            </div>
          </div>

          {/* Right Column: Certificate & Memorabilia (jpmc2.jpeg) + Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="rounded-2xl overflow-hidden border border-black/10 shadow-xl bg-neutral-900 group">
              <img
                src="/assets/projects/jpmc/jpmc2.jpeg"
                alt="JPMorganChase Code for Good Official Certificate of Participation and Event Memorabilia"
                className="w-full h-auto max-h-[420px] object-contain mx-auto transition-transform duration-500 group-hover:scale-[1.01]"
                loading="lazy"
              />
            </div>
            <div className="flex items-center justify-between text-xs font-mono text-black/50 px-1">
              <span>Figure 1.1 — Official Certificate & Participation Artifacts</span>
              <span>September 2026</span>
            </div>

            <div className="space-y-4 pt-2">
              <h3
                className="text-xl sm:text-2xl font-normal text-black tracking-tight"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Collaborative Problem-Solving Under Real-World Constraints
              </h3>

              <p className="text-base text-black/75 leading-relaxed">
                Selected as a participant in JPMorgan Chase&apos;s flagship hackathon in Hyderabad. Collaborated closely in an agile team environment to architect, prototype, and pitch a social-good technology solution for non-profit organizations.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="border-l-2 border-black/20 pl-4 py-1">
                  <div className="text-xs font-mono text-black/50 uppercase">Focus</div>
                  <div className="text-sm font-medium text-black">Tech for Social Good</div>
                </div>
                <div className="border-l-2 border-black/20 pl-4 py-1">
                  <div className="text-xs font-mono text-black/50 uppercase">Outcome</div>
                  <div className="text-sm font-medium text-black">Working MVP & Pitch</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Verified Certifications Section (AWS, Copilot, Linguaskill) */}
        <Certifications />
      </div>
    </section>
  );
}
