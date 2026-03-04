import profileImg from '../assets/profile.jpg'
import { FiDownload, FiMail } from 'react-icons/fi'

const Hero = () => {
  return (
    <section id="home" className="gradient-bg">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-4 py-16 md:flex-row md:gap-16 md:px-6 md:py-24">
        <div className="relative animate-fadeUp">
          <div className="absolute -left-8 -top-8 h-24 w-24 rounded-full bg-accent-100 blur-2xl" />
          <div className="absolute -right-6 -bottom-6 h-20 w-20 rounded-full bg-sand-200 blur-2xl" />
          <img
            src={profileImg}
            alt="Profile"
            className="relative h-48 w-48 rounded-full border-4 border-white object-cover shadow-soft md:h-64 md:w-64"
          />
        </div>

        <div className="max-w-xl text-center md:text-left animate-fadeUp">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent-600">
            Hello, I'm
          </p>
          <h1 className="mt-3 text-3xl font-display font-semibold text-ink-900 md:text-5xl">
            Cheran V
          </h1>
          <p className="mt-4 text-lg font-medium text-ink-600">
            AIML Student | Developer
          </p>
          <p className="mt-4 text-base text-ink-500">
            Building intelligent, user-focused applications by blending machine learning, clean code, and modern
            interfaces.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="/resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full bg-accent-600 px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-accent-700"
            >
              <FiDownload />
              Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-ink-200 bg-white px-6 py-3 text-sm font-semibold text-ink-700 shadow-sm transition hover:border-ink-300 hover:text-ink-900"
            >
              <FiMail />
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
