import React from 'react';

interface TechCategory {
  title: string;
  items: string[];
}

const TECH_CATEGORIES: TechCategory[] = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C', 'JavaScript'],
  },
  {
    title: 'Data Engineering',
    items: ['Kafka', 'dbt', 'DuckDB', 'Airflow', 'Great Expectations'],
  },
  {
    title: 'Applied AI',
    items: ['RAG', 'ChromaDB', 'MCP', 'LLM APIs'],
  },
  {
    title: 'Backend Systems',
    items: ['Spring Boot', 'Hibernate', 'Express', 'FastAPI', 'REST APIs'],
  },
  {
    title: 'Frontend Development',
    items: ['React.js', 'Vite', 'Tailwind CSS'],
  },
  {
    title: 'Databases & Storage',
    items: ['PostgreSQL', 'MySQL', 'MongoDB'],
  },
  {
    title: 'Tools & Cloud',
    items: ['AWS', 'Docker', 'Git', 'GitHub'],
  },
];

export function TechStack() {
  return (
    <section
      id="skills"
      className="relative z-[2] bg-white text-black px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 border-t border-black/10"
      aria-label="Technical stack and skills"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-black/60 uppercase mb-8 sm:mb-12">
          <span>03</span>
          <span className="w-8 h-[1px] bg-black/30" />
          <span>Technical Toolkit</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-4">
            <h2
              className="text-3xl sm:text-4xl lg:text-5xl font-normal tracking-tight text-black leading-tight mb-6"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Engineered for throughput, scale, and clarity.
            </h2>
            <p className="text-base text-black/70 leading-relaxed">
              A balanced foundation spanning real-time data streaming, robust backend architectures, modern web interfaces, and applied AI systems.
            </p>
          </div>

          <div className="lg:col-span-8">
            <div className="divide-y divide-black/10">
              {TECH_CATEGORIES.map((cat, idx) => (
                <div
                  key={idx}
                  className="py-6 sm:py-8 grid grid-cols-1 sm:grid-cols-12 gap-4 items-baseline group hover:bg-neutral-50/50 transition-colors px-2 -mx-2 rounded-lg"
                >
                  <div className="sm:col-span-4 text-xs font-mono uppercase tracking-wider text-black/50">
                    {cat.title}
                  </div>
                  <div className="sm:col-span-8 flex flex-wrap items-center gap-x-3 gap-y-2 text-base sm:text-lg text-black font-normal">
                    {cat.items.map((item, itemIdx) => (
                      <React.Fragment key={itemIdx}>
                        <span className="hover:text-black font-medium transition-colors">
                          {item}
                        </span>
                        {itemIdx < cat.items.length - 1 && (
                          <span className="text-black/30 font-mono text-sm" aria-hidden="true">
                            ·
                          </span>
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
