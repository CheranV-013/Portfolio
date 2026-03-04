const achievements = [
  {
    title: 'Smart India Hackathon Finalist',
    detail: 'Built an AI-powered campus navigation assistant for inclusive accessibility.'
  },
  {
    title: 'Top 5 - National ML Challenge',
    detail: 'Developed a predictive model for energy consumption optimization.'
  },
  {
    title: 'Campus Tech Fest Winner',
    detail: 'Led a team to deliver a real-time quiz platform with live analytics.'
  }
]

const Achievements = () => {
  return (
    <section id="achievements" className="section bg-sand-100/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Achievements</h2>
        <p className="section-subtitle">Highlights from competitions, hackathons, and events.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {achievements.map((item) => (
            <div key={item.title} className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">{item.title}</h3>
              <p className="mt-3 text-sm text-ink-500">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Achievements
