const AchievementCard = ({ achievement, onView }) => {
  return (
    <button
      type="button"
      onClick={() => onView(achievement)}
      className="card group flex h-full flex-col overflow-hidden text-left"
    >
      <div className="relative h-48 w-full overflow-hidden">
        <img
          src={achievement.coverImage}
          alt={achievement.title}
          className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-900/60 to-transparent" />
        <span className="absolute bottom-4 left-4 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink-700">
          {achievement.event}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h3 className="text-base font-semibold text-ink-900">{achievement.title}</h3>
        <p className="mt-2 text-sm text-ink-500">{achievement.shortDescription}</p>
        <span className="mt-4 inline-flex w-fit items-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition group-hover:border-ink-300 group-hover:text-ink-900">
          View Details
        </span>
      </div>
    </button>
  )
}

export default AchievementCard
