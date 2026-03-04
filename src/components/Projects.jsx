import { FiGithub, FiExternalLink } from 'react-icons/fi'

const projects = [
  {
    title: 'Real-time Quiz Platform',
    description:
      'Interactive quiz platform featuring live leaderboard updates, quiz code joining, and admin analytics dashboard.',
    tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/quiz-platform',
    demo: 'https://demo.example.com'
  },
  {
    title: 'AI Study Planner',
    description: 'Smart scheduling assistant that recommends study sessions based on productivity analytics.',
    tech: ['Python', 'FastAPI', 'TensorFlow'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/ai-study-planner',
    demo: 'https://demo.example.com'
  },
  {
    title: 'Campus Event Insights',
    description: 'Data visualization dashboard for student event participation and sentiment trends.',
    tech: ['React', 'D3.js', 'Firebase'],
    github: 'https://github.com/YOUR_GITHUB_USERNAME/event-insights',
    demo: 'https://demo.example.com'
  }
]

const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Projects</h2>
        <p className="section-subtitle">A selection of recent work showcasing AI/ML and full-stack skills.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div key={project.title} className="card flex h-full flex-col p-6">
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-ink-900">{project.title}</h3>
                <p className="mt-3 text-sm text-ink-500">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-ink-50 px-3 py-1 text-xs font-medium text-ink-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="mt-6 flex items-center gap-4 text-sm font-semibold text-ink-600">
                <a href={project.github} className="inline-flex items-center gap-2 hover:text-ink-900">
                  <FiGithub />
                  GitHub
                </a>
                <a href={project.demo} className="inline-flex items-center gap-2 hover:text-ink-900">
                  <FiExternalLink />
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
