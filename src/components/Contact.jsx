import { useRef, useState } from 'react'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const formRef = useRef(null)
  const [status, setStatus] = useState({ type: '', message: '' })
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (serviceId == null || templateId == null || publicKey == null) {
      setStatus({
        type: 'error',
        message: 'Email service is not configured yet. Add your EmailJS keys in the .env file.'
      })
      return
    }

    setIsSending(true)
    setStatus({ type: '', message: '' })

    try {
      await emailjs.sendForm(serviceId, templateId, formRef.current, { publicKey })
      setStatus({ type: 'success', message: 'Message sent successfully. I will get back to you soon.' })
      formRef.current.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Something went wrong while sending. Please try again in a moment.'
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section id="contact" className="section bg-sand-100/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Contact</h2>
        <p className="section-subtitle">Let’s connect for collaborations, internships, and projects.</p>

        <div className="mt-10 grid gap-10 md:grid-cols-[1.1fr_0.9fr]">
          <form ref={formRef} onSubmit={handleSubmit} className="card p-6">
            <div className="grid gap-4">
              <label className="text-sm font-medium text-ink-700">
                Name
                <input
                  type="text"
                  name="user_name"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                  required
                />
              </label>
              <label className="text-sm font-medium text-ink-700">
                Email
                <input
                  type="email"
                  name="user_email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                  required
                />
              </label>
              <label className="text-sm font-medium text-ink-700">
                Message
                <textarea
                  rows="4"
                  name="message"
                  placeholder="Tell me about your idea..."
                  className="mt-2 w-full rounded-xl border border-ink-200 bg-white px-4 py-3 text-sm text-ink-700 focus:border-accent-400 focus:outline-none"
                  required
                />
              </label>
            </div>
            <button
              type="submit"
              className="mt-6 inline-flex items-center justify-center rounded-full bg-ink-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-ink-800 disabled:cursor-not-allowed disabled:opacity-70"
              disabled={isSending}
            >
              {isSending ? 'Sending...' : 'Send Message'}
            </button>
            {status.message && (
              <p className={`mt-4 text-sm ${status.type === 'success' ? 'text-green-600' : 'text-red-600'}`}>
                {status.message}
              </p>
            )}
          </form>

          <div className="flex flex-col justify-between gap-6">
            <div className="card p-6">
              <h3 className="text-lg font-semibold text-ink-900">Social Links</h3>
              <p className="mt-3 text-sm text-ink-500">
                Follow my latest projects and connect with me on professional platforms.
              </p>
              <div className="mt-4 flex flex-col gap-3 text-sm font-medium text-ink-700">
                <a
                  href="https://github.com/YOUR_GITHUB_USERNAME"
                  className="inline-flex items-center gap-3 rounded-lg bg-ink-50 px-4 py-3 hover:text-ink-900"
                >
                  <FiGithub /> GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/YOUR_LINKEDIN_USERNAME/"
                  className="inline-flex items-center gap-3 rounded-lg bg-ink-50 px-4 py-3 hover:text-ink-900"
                >
                  <FiLinkedin /> LinkedIn
                </a>
                <a
                  href="mailto:hello@example.com"
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
