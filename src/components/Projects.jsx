import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import quiz1 from '../assets/projects/quiz1.jpg'
import quiz2 from '../assets/projects/quiz2.jpg'
import quiz3 from '../assets/projects/quiz3.jpg'
import study1 from '../assets/projects/study1.jpg'
import study2 from '../assets/projects/study2.jpg'
import study3 from '../assets/projects/study3.jpg'

const projects = [
  {
    title: 'Real-Time Quiz Platform',
    shortDescription: 'Interactive quiz platform with live leaderboard.',
    coverImage: quiz1,
    description:
      'A real-time quiz hosting platform that allows participants to join using a quiz code and compete with live leaderboard updates. Includes host controls, question scheduling, and admin insights.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/username/quiz-platform',
    demo: 'https://quiz-platform.vercel.app',
    images: [quiz1, quiz2, quiz3]
  },
  {
    title: 'AI Study Planner',
    shortDescription: 'Smart scheduling assistant for personalized study plans.',
    coverImage: study1,
    description:
      'An AI-assisted study planner that recommends optimal study slots based on productivity patterns and course priorities. Includes analytics dashboards and schedule exports.',
    technologies: ['React', 'FastAPI', 'TensorFlow'],
    github: 'https://github.com/username/ai-study-planner',
    demo: 'https://ai-study-planner.vercel.app',
    images: [study1, study2, study3]
  }
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fadeUp">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A selection of recent work showcasing AI/ML and full-stack skills.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onView={setActiveProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

export default Projects
