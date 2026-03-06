const Education = () => {
  return (
    <section id="education" className="section bg-sand-100/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Education</h2>
        <p className="section-subtitle">Academic journey and specialization.</p>

        <div className="mt-10 relative">
          <div className="absolute left-4 top-0 h-full w-0.5 bg-ink-200" />
          <div className="relative flex flex-col gap-8 pl-12">
            <div className="card relative p-6">
              <div className="absolute -left-7 top-6 h-4 w-4 rounded-full bg-accent-500" />
              <h3 className="text-lg font-semibold text-ink-900">
                KIT – KalaignarKarunanidhi Institute of Technology
              </h3>
              <p className="mt-2 text-sm font-medium text-ink-600">Artificial Intelligence and Machine Learning</p>
              <p className="mt-3 text-sm text-ink-500">2nd Year Undergraduate</p>
              <p className="mt-3 text-sm text-ink-500">CGPA : 8.08</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education
