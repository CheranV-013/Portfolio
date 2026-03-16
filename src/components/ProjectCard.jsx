const ProjectCard = ({ project, onView }) => {
  return (
    <button
      type="button"
      onClick={() => onView(project)}
      className="card group flex h-full flex-col overflow-hidden text-left"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={project.coverImage}
          alt={project.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />

        {/* STATUS BADGE */}
        <span
          className={`absolute top-3 right-3 rounded-full px-3 py-1 text-xs font-semibold ${
            project.status === "completed"
              ? "bg-green-500 text-white"
              : "bg-yellow-400 text-black"
          }`}
        >
          {project.status === "completed" ? "Completed" : "Ongoing"}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink-900">{project.title}</h3>

        <p className="mt-2 text-sm text-ink-500">{project.shortDescription}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span key={tech} className="badge">
              {tech}
            </span>
          ))}
        </div>

        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition group-hover:border-ink-300 group-hover:text-ink-900">
          View Details
        </span>
      </div>
    </button>
  )
}

export default ProjectCard