import React, { useState } from 'react';
import { ProjectMediaViewer } from './ProjectMediaViewer';
import { ProjectMediaModal } from './ProjectMediaModal';

export interface ProjectData {
  number: string;
  name: string;
  tagline: string;
  description: string;
  bullets: string[];
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
  isPrivate?: boolean;
  images: string[];
  accentType?: string;
}

export function ProjectCard({ project }: { project: ProjectData }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <article className="border-t border-black/15 pt-12 pb-16 lg:pt-16 lg:pb-24 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-start group">
        {/* Column 1: Editorial Number & Category */}
        <div className="lg:col-span-2 flex lg:flex-col items-baseline justify-between lg:justify-start gap-2">
          <span
            className="text-4xl sm:text-5xl lg:text-6xl font-light text-black/40 group-hover:text-black transition-colors tabular-nums"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            {project.number}
          </span>
          <span className="text-xs uppercase tracking-widest font-mono text-black/50">
            Selected Case
          </span>
        </div>

        {/* Column 2: Content & Details */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <h3
              className="text-2xl sm:text-3xl lg:text-4xl font-normal text-black tracking-tight leading-tight mb-3"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              {project.name}
            </h3>
            <p className="text-base sm:text-lg text-black/80 font-normal leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Fact bullets from Resume */}
          <ul className="space-y-2 text-sm text-black/75">
            {project.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="text-black/40 font-mono text-xs mt-1 shrink-0">·</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Zero-Pill Typography Discipline for Tech Tags */}
          <div className="pt-2">
            <div className="text-xs font-mono uppercase tracking-wider text-black/40 mb-2">
              Technologies
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs sm:text-sm text-black/70">
              {project.technologies.map((tech, idx) => (
                <React.Fragment key={idx}>
                  <span className="font-medium text-black/90">{tech}</span>
                  {idx < project.technologies.length - 1 && (
                    <span className="text-black/30 font-mono" aria-hidden="true">
                      /
                    </span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Actions / Links */}
          <div className="pt-4 flex flex-wrap items-center gap-3">
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-black text-white text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-800 transition-colors shadow-sm group/btn cursor-pointer"
              >
                <span>Live Platform</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform"
                >
                  <path d="M7 17L17 7M17 7H7M17 7V17" />
                </svg>
              </a>
            )}

            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black border border-black/20 text-xs sm:text-sm font-medium rounded-full hover:bg-neutral-100 transition-colors shadow-sm group/btn cursor-pointer"
              >
                <span>GitHub Repository</span>
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-3.5 h-3.5 opacity-80"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  />
                </svg>
              </a>
            )}

            {project.isPrivate && (
              <span className="inline-flex items-center gap-1.5 px-4 py-2 bg-neutral-100 text-black/60 text-xs font-mono rounded-full border border-black/5">
                <span className="w-1.5 h-1.5 rounded-full bg-neutral-400" />
                Private Deployment / Institutional Platform
              </span>
            )}
          </div>
        </div>

        {/* Column 3: Real Project Media Viewer inside the Dark Terminal Panel */}
        <div className="lg:col-span-5 w-full">
          <ProjectMediaViewer
            project={project}
            onOpenFullscreen={() => setModalOpen(true)}
          />
        </div>
      </article>

      {/* Fullscreen Media Modal */}
      <ProjectMediaModal
        project={project}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </>
  );
}
