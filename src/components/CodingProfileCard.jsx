import { FiExternalLink } from 'react-icons/fi'

const CodingProfileCard = ({ profile }) => {
  return (
    <div className="card flex h-full flex-col items-center p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-ink-50">
        <img
          src={profile.logo}
          alt={`${profile.platform} logo`}
          className="h-12 w-12 object-contain"
        />
      </div>

      <h3 className="mt-4 text-lg font-semibold text-ink-900">{profile.platform}</h3>
      <p className="text-sm text-ink-500">Username: {profile.username}</p>

      <div className="mt-5 w-full space-y-3 text-sm text-ink-600">
        <div className="flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
          <span className="font-medium">Highest Rating</span>
          <span className="font-semibold text-ink-900">{profile.rating}</span>
        </div>
        <div className="flex items-center justify-between rounded-xl bg-ink-50 px-4 py-3">
          <span className="font-medium">Problems Solved</span>
          <span className="font-semibold text-ink-900">{profile.problemsSolved}</span>
        </div>
      </div>

      <a
        href={profile.profile}
        className="mt-5 inline-flex items-center justify-center gap-2 rounded-full border border-ink-200 bg-white px-4 py-2 text-sm font-semibold text-ink-700 transition hover:border-ink-300 hover:text-ink-900"
      >
        View Profile
        <FiExternalLink />
      </a>
    </div>
  )
}

export default CodingProfileCard
