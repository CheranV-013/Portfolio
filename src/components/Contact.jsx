import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <section id="contact" className="section bg-sand-100/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let’s connect for collaborations, internships, and projects.</p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form className="card p-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-ink-700">
                Name
                <input
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-ink-700">
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                />
              </label>
              <label className="text-sm font-medium text-ink-700">
                Message
                <textarea
                  rows="4"
                  placeholder="Tell me about your idea..."
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                />
              </label>
            </div>
            <button
              type="button"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800"
            >
              Send Message
            </button>
          </form>

          <div className="flex flex-col justify-between gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">Social Links</h3>
              <p className="mt-3 text-sm text-ink-500">
                Follow my latest projects and connect with me on professional platforms.
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-ink-700">
                <a
                  href="https://github.com/CheranV-013"
                  className="inline-flex items-center gap-3 rounded-lg bg-ink-50 px-4 py-3 hover:text-ink-900"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/cheran-v-b6a413347/"
                  className="inline-flex items-center gap-3 rounded-lg bg-ink-50 px-4 py-3 hover:text-ink-900"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href="theche200699.com"
                  className="inline-flex items-center gap-3 rounded-lg bg-ink-50 px-4 py-3 hover:text-ink-900"
                >
                  <FiMail /> Email
                </a>
              </div>
            </div>

            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">Availability</h3>
              <p className="mt-3 text-sm text-ink-500">
                Open to internships, research collaborations, and freelance development work.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
