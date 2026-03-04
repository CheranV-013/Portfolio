const certifications = [
  {
    title: 'Python for Data Science',
    issuer: 'NPTEL',
    year: '2024'
  },
  {
    title: 'Machine Learning Foundations',
    issuer: 'Coursera',
    year: '2023'
  },
  {
    title: 'React Front-End Development',
    issuer: 'Udemy',
    year: '2024'
  }
]

const Certifications = () => {
  return (
    <section id="certifications" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Continuous learning through industry-recognized courses.</p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {certifications.map((cert) => (
            <div key={cert.title} className="card p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-600">{cert.year}</p>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">{cert.title}</h3>
              <p className="mt-2 text-sm text-ink-500">{cert.issuer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Certifications
