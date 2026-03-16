const skills = ['Java', 'Python', 'C++', 'React', 'Machine Learning']

const About = () => {
  return (
    <section id="about" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="grid gap-10 md:grid-cols-[1.2fr_1fr]">
          <div>
            <h2 className="section-title">About Me</h2>
            <p className="section-subtitle">
              Passionate AI/ML student focused on building data-driven products and delightful user experiences.
            </p>
            <p className="mt-6 text-base text-ink-600">
              Second-year student specializing in Artificial Intelligence and Machine Learning.
            </p>
          </div>

          <div className="card p-6">
            <h3 className="text-lg font-semibold text-ink-900">Core Skills</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-xl bg-ink-50 px-4 py-3 text-sm font-medium text-ink-700"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
