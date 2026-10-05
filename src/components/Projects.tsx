import { ProjectCard, ProjectData } from './ProjectCard';

const PROJECTS: ProjectData[] = [
  {
    number: '01',
    name: 'E-COMMERCE DATA ENGINEERING PLATFORM',
    tagline: 'End-to-End Streaming & Analytics Platform',
    description:
      'An end-to-end data engineering platform built around realistic e-commerce analytics workflows.',
    bullets: [
      'Architected an end-to-end ETL pipeline processing 10K+ transactions, simulating real-world e-commerce analytics workflows.',
      'Engineered real-time data ingestion using Python and Kafka, achieving low latency (<200ms).',
      'Optimized transformation workflows using dbt and DuckDB, improving query performance by 25%.',
      'Developed Streamlit dashboards for KPI tracking, customer analytics, and conversion funnel insights.',
      'Implemented orchestration and validation using Apache Airflow and Great Expectations.',
    ],
    technologies: [
      'Python',
      'Kafka',
      'dbt',
      'DuckDB',
      'Apache Airflow',
      'Great Expectations',
      'Streamlit',
      'ETL Pipelines',
      'Real-Time Ingestion',
      'Analytics Dashboards',
    ],
    liveUrl: 'https://ecommerce-dashboard-vskm.onrender.com/',
    images: ['/assets/projects/ecommerce/eccommerce-analysis.png'],
    accentType: 'stream',
  },
  {
    number: '02',
    name: 'EDU SUB',
    tagline: 'Assignment Management Platform',
    description:
      'An assignment management platform designed around structured student and teacher workflows.',
    bullets: [
      'Developed a scalable full-stack application using React.js, Spring Boot, and Hibernate.',
      'Designed and implemented RBAC system improving security and user access control.',
      'Managed structured data using PostgreSQL / MySQL, ensuring optimized query performance.',
      'Deployed application using Vercel and maintained CI/CD workflows with GitHub.',
    ],
    technologies: [
      'React.js',
      'Spring Boot',
      'Hibernate',
      'RBAC',
      'PostgreSQL',
      'MySQL',
      'Vercel',
      'GitHub CI/CD',
    ],
    liveUrl: 'https://edusubfron.vercel.app/login',
    images: [
      '/assets/projects/edusub/edusub1.png',
      '/assets/projects/edusub/edusub2.png',
    ],
    accentType: 'workflow',
  },
  {
    number: '03',
    name: 'BNHS NATURE ENGAGEMENT PLATFORM',
    tagline: 'AI/RAG Nature Engagement Platform',
    description:
      'An AI and RAG-oriented nature-engagement platform developed for the Bombay Natural History Society (BNHS).',
    bullets: [
      'Designed an AI/RAG-driven nature engagement experience connecting wildlife discovery and educational resources.',
      'Implemented interactive exploration workflows tailored for environmental awareness and research outreach.',
      'Structured technical architecture around scalable web endpoints and repository-backed open development.',
    ],
    technologies: [
      'React',
      'TypeScript',
      'AI / RAG',
      'Vector Search',
      'Tailwind CSS',
      'Node.js',
    ],
    githubUrl: 'https://github.com/GajjelaVasudev/Mock-Hackathon',
    images: [
      '/assets/projects/bnhs/bnhs1.png',
      '/assets/projects/bnhs/bnhs2.png',
      '/assets/projects/bnhs/bnhs3.png',
      '/assets/projects/bnhs/bnhs4.png',
    ],
    accentType: 'bnhs',
  },
  {
    number: '04',
    name: 'BIKIRAN FOUNDATION CAREER JOURNEY PLATFORM',
    tagline: 'AI-Assisted Educational Ecosystem',
    description:
      'A career journey platform connecting students, parents, volunteers, educators and mentors through AI-assisted workflows.',
    bullets: [
      'Engineered a comprehensive ecosystem connecting students, parents, volunteers, educators and mentors.',
      'Integrated AI-assisted workflows utilizing Model Context Protocol (MCP) and Sarvam AI.',
      'Implemented secure access and identity handling with Google OAuth and role-based dashboards.',
    ],
    technologies: [
      'React',
      'RAG',
      'MCP',
      'AI',
      'Google OAuth',
      'Sarvam AI',
      'Role-based Dashboards',
    ],
    isPrivate: true,
    images: [
      '/assets/projects/bikiran/bikiran1.png',
      '/assets/projects/bikiran/bikiran2.png',
      '/assets/projects/bikiran/bikiran3.png',
    ],
    accentType: 'platform',
  },
  {
    number: '05',
    name: 'RAG / AI PROJECT',
    tagline: 'Java RAG Conversational Assistant',
    description:
      'A retrieval-augmented generation (RAG) assistant leveraging LLM retrieval concepts, vector semantic search, and robust backend service integration.',
    bullets: [
      'Engineered retrieval-augmented generation pipelines connecting query embeddings with contextual document chunks.',
      'Designed Java-based backend services orchestrating retrieval, ranking, and response synthesis.',
      'Implemented vector search retrieval principles and contextual reasoning workflows.',
    ],
    technologies: [
      'Java',
      'Spring Boot',
      'RAG',
      'Vector Search',
      'Semantic Embeddings',
      'LLM APIs',
    ],
    githubUrl: 'https://github.com/swaroop-chintha/Java-Rag-ChatBot',
    images: [],
    accentType: 'rag',
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      className="relative z-[2] bg-white text-black px-5 sm:px-8 md:px-12 lg:px-20 py-24 sm:py-32 border-t border-black/10"
      aria-label="Selected Projects"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-16 sm:mb-20">
          <div>
            <div className="flex items-center gap-3 text-xs sm:text-sm tracking-widest text-black/60 uppercase mb-3">
              <span>02</span>
              <span className="w-8 h-[1px] bg-black/30" />
              <span>Selected Works</span>
            </div>
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-black"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Systems, Pipelines & AI Applications
            </h2>
          </div>

          <p className="text-sm text-black/60 max-w-xs sm:text-right">
            Verified production architectures, low-latency streaming pipelines, and live deployments.
          </p>
        </div>

        {/* Project Cards List */}
        <div className="space-y-4">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.number} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
