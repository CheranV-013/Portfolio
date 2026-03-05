import { FiX } from 'react-icons/fi'

const AchievementModal = ({ achievement, onClose }) => {
  if (!achievement) return null

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
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">
              {achievement.event}
            </p>
            <h3 className="mt-3 text-2xl font-display font-semibold text-ink-900">
              {achievement.title}
            </h3>
            <p className="mt-4 text-sm text-ink-500">{achievement.description}</p>

            <div className="mt-6 grid gap-4 md:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h4 className="text-sm font-semibold text-ink-900">Technologies Used</h4>
                <div className="mt-3 flex flex-wrap gap-2">
                  {achievement.technologies.map((tech) => (
                    <span key={tech} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-ink-900">Role & Contribution</h4>
                <p className="mt-3 text-sm text-ink-500">{achievement.role}</p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-sm font-semibold text-ink-900">Gallery</h4>
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {achievement.images.map((img) => (
                  <div key={img} className="overflow-hidden rounded-xl">
                    <img
                      src={img}
                      alt={achievement.title}
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

export default AchievementModal
