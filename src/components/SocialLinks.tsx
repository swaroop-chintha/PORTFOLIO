export interface SocialProfile {
  name: string;
  url: string;
  handle: string;
  category: string;
}

export const SOCIAL_PROFILES: SocialProfile[] = [
  {
    name: 'GitHub',
    url: 'https://github.com/swaroop-chintha',
    handle: '@swaroop-chintha',
    category: 'Source Code & Repositories',
  },
  {
    name: 'LinkedIn',
    url: 'https://www.linkedin.com/in/vybhav-swaroop-chintha-020865367/',
    handle: 'vybhav-swaroop-chintha',
    category: 'Professional Network',
  },
  {
    name: 'LeetCode',
    url: 'https://leetcode.com/u/kl2400031936/',
    handle: 'kl2400031936',
    category: 'Data Structures & Algorithms',
  },
  {
    name: 'CodeChef',
    url: 'https://www.codechef.com/users/kl_2400031936',
    handle: 'kl_2400031936 (1800+ rating)',
    category: 'Competitive Programming',
  },
];

export function SocialLinks() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-6">
      {SOCIAL_PROFILES.map((profile) => (
        <a
          key={profile.name}
          href={profile.url}
          target="_blank"
          rel="noopener noreferrer"
          className="group block p-6 bg-neutral-900 border border-neutral-800 rounded-xl hover:border-neutral-700 transition-colors shadow-sm"
        >
          <div className="flex items-center justify-between mb-3 text-xs font-mono text-neutral-400">
            <span>{profile.name}</span>
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
            >
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </div>
          <div className="text-base font-medium text-white group-hover:text-neutral-200 tracking-tight">
            {profile.handle}
          </div>
          <div className="text-xs text-neutral-500 mt-1">
            {profile.category}
          </div>
        </a>
      ))}
    </div>
  );
}
