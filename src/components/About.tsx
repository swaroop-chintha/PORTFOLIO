import { Education } from './Education';

interface AboutProps {
  onOpenResume?: () => void;
}

export function About({ onOpenResume }: AboutProps) {
  return (
    <section
      id="about"
      className="relative z-[2] bg-white text-black px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 border-t border-black/10"
      aria-label="About section"
    >
      <div className="max-w-6xl mx-auto">
        {/* Editorial Subtitle / Kicker */}
        <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-black/60 uppercase mb-8 sm:mb-12">
          <span>01</span>
          <span className="w-8 h-[1px] bg-black/30" />
          <span>Profile & Philosophy</span>
        </div>

        {/* Large Editorial Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="lg:col-span-8">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-black leading-[1.15] mb-8 sm:mb-10 text-balance"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Building across the entire stack — from real-time streaming engines to intelligent AI systems.
            </h2>

            <div className="space-y-6 text-lg sm:text-xl text-black/80 font-normal leading-relaxed max-w-3xl">
              <p>
                Hey, I&apos;m <span className="text-black font-medium">VYBHAV</span> — a
                Computer Science student and developer focused on building full-stack applications,
                backend systems, data platforms and AI-powered experiences.
              </p>
              <p>
                I enjoy working across the stack — from interfaces and APIs to data pipelines,
                real-time systems and RAG-based AI applications. Whether it&apos;s architecting low-latency
                ingestion with Kafka, optimizing queries with dbt and DuckDB, or deploying resilient
                Spring Boot & React web apps, I prioritize high-throughput engineering and practical usability.
              </p>
            </div>

            {/* Resume button */}
            <div className="mt-10 pt-8 border-t border-black/10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                onClick={onOpenResume}
                className="inline-flex items-center gap-3 px-6 py-3 bg-black text-white text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors cursor-pointer group shadow-sm"
              >
                <span>View Full Resume</span>
                <span className="text-xs group-hover:translate-x-0.5 transition-transform">→</span>
              </button>
              <span className="text-xs text-black/50">
                Factual reference: B.Tech CSE · KL University (9.5 CGPA)
              </span>
            </div>
          </div>

          {/* Right Column: Key Focus Areas & Education */}
          <div className="lg:col-span-4 space-y-12">
            <div className="bg-neutral-50 p-6 sm:p-8 rounded-2xl border border-black/5 space-y-4">
              <h3 className="text-xs uppercase tracking-widest text-black/50 font-mono">
                Core Domains
              </h3>
              <ul className="space-y-3 text-sm text-black/90">
                <li className="flex items-start justify-between border-b border-black/5 pb-2">
                  <span className="font-medium">Full-Stack Engineering</span>
                  <span className="text-black/50">React · Spring · Node</span>
                </li>
                <li className="flex items-start justify-between border-b border-black/5 pb-2">
                  <span className="font-medium">Data Engineering</span>
                  <span className="text-black/50">Kafka · DuckDB · dbt</span>
                </li>
                <li className="flex items-start justify-between border-b border-black/5 pb-2">
                  <span className="font-medium">Applied AI & RAG</span>
                  <span className="text-black/50">Vector DBs · LLM APIs</span>
                </li>
                <li className="flex items-start justify-between">
                  <span className="font-medium">Orchestration & DevOps</span>
                  <span className="text-black/50">Airflow · Docker · AWS</span>
                </li>
              </ul>
            </div>

            {/* Minimal Education Component */}
            <Education />
          </div>
        </div>
      </div>
    </section>
  );
}
