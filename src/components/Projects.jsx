import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import esp1 from '../assets/projects/esp1.jpg'
import quiz1 from '../assets/projects/quiz1.jpg'
import quiz2 from '../assets/projects/quiz2.jpg'
import quiz3 from '../assets/projects/quiz3.jpg'  


const projects = [
  {
    title: 'Smart Accident and Intrusion Detection System',
    shortDescription: 'A smart system for detecting accidents and Intrusion.',
    coverImage: esp1,
    description:
      'A smart accident and tampering detection system that uses real-time data analysis to identify and respond to incidents. Features include automated alerts, incident tracking, and data visualization dashboards.',
    technologies: ['ArdinoIDE','React',],
    github: 'https://github.com/CheranV-013/Smart-Accident-and-Intruson-Detection-System',
    demo: 'not available',
    images: [esp1]
  },
  {
    title: 'Real-Time Quiz Platform',
    shortDescription: 'An interactive quiz platform with live leaderboard.',
    coverImage: quiz1,
    description:
      'A real-time quiz hosting platform that allows participants to join using a quiz code and compete with live leaderboard updates. Includes host controls, question scheduling, and admin insights.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/CheranV-013/Quiz',
    demo: 'https://quizzz-inky.vercel.app/',
    images: [quiz1, quiz2, quiz3]
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
