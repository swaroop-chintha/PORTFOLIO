export function Achievements() {
  const achievements = [
    {
      metric: '600+',
      label: 'Problems Solved',
      source: 'CodeChef Algorithmic Problem Solving',
    },
    {
      metric: '1800+',
      label: 'Peak Rating',
      source: 'CodeChef Competitive Platform',
    },
    {
      metric: 'Top 10%',
      label: 'Contest Standing',
      source: 'Ranked in competitive programming contests',
    },
    {
      metric: 'Shortlisted',
      label: 'Smart India Hackathon',
      source: 'Selected through institutional SIH internal round',
    },
    {
      metric: 'Selected',
      label: 'JPMorgan Code for Good 2026',
      source: 'Participant · Hyderabad Hackathon for Social Good',
    },
  ];

  return (
    <section
      id="achievements"
      className="relative z-[2] bg-white text-black px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 border-t border-black/10"
      aria-label="Achievements and competitive benchmarks"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-black/60 uppercase mb-8 sm:mb-12">
          <span>04</span>
          <span className="w-8 h-[1px] bg-black/30" />
          <span>Competitive Metrics & Milestones</span>
        </div>

        <div className="mb-12">
          <h2
            className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-black mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Algorithmic Rigor & Hackathons
          </h2>
          <p className="text-base sm:text-lg text-black/70 max-w-2xl">
            A consistent record of data structures, algorithmic problem solving, and collaborative hackathon execution.
          </p>
        </div>

        {/* Minimal Editorial Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8 border-y border-black/10 py-10">
          {achievements.map((item, idx) => (
            <div key={idx} className="space-y-2">
              <div
                className="text-3xl sm:text-4xl lg:text-5xl font-light text-black tracking-tight tabular-nums"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                {item.metric}
              </div>
              <div className="text-sm font-medium text-black">
                {item.label}
              </div>
              <div className="text-xs text-black/60 leading-normal">
                {item.source}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
