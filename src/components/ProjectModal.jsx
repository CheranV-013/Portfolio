import { useEffect } from 'react'
import { FiExternalLink, FiGithub, FiX } from 'react-icons/fi'

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return undefined
    const original = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = original || 'auto'
    }
  }, [project])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink-900/60 p-4"
      role="dialog"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-soft animate-fadeUp"
        onClick={(event) => event.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-ink-200 bg-white text-ink-700 shadow-sm hover:text-ink-900"
          aria-label="Close"
        >
          <FiX />
        </button>
        <div className="max-h-[80vh] overflow-auto">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-display font-semibold text-ink-900">{project.title}</h3>
            <p className="mt-4 text-sm text-ink-500">{project.description}</p>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="badge">
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href={project.github}
                className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:text-ink-900"
              >
                <FiGithub />
                GitHub
              </a>
              <a
                href={project.demo}
                className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-accent-700"
              >
                <FiExternalLink />
                Live Demo
              </a>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-ink-900">Gallery</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {project.images.map((img) => (
                  <div key={img} className="overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={project.title}
                      className="h-40 w-full object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectModal
