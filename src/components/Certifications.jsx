import { useState } from 'react'
import CertificateCard from './CertificateCard.jsx'
import CertificateModal from './CertificateModal.jsx'
import pythonCert from '../assets/certificates/python.jpg'
import mlCert from '../assets/certificates/ml.jpg'
import primer from '../assets/certificates/primer.jpg'


const certifications = [
  {
    title: 'Honours Diploma in Full Stack Development',
    organization: 'Computer Software College',
    year: '2025',
    image: pythonCert
  },
  {
    title: 'B.A. in Hindi Language',
    organization: 'Dhaksina Bharat Hindi Prachar Sabha',
    year: '2021',
    image: mlCert
  },
  {
    title: 'Artificial Intelligence Primer Certification',
    organization: 'Infosys Springboard',
    year: '2026',
    image: primer
  }
]

const Certifications = () => {
  const [activeCert, setActiveCert] = useState(null)

  return (
    <section id="certifications" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">Recognitions that validate my AI/ML and development skills.</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert) => (
            <CertificateCard key={cert.title} cert={cert} onView={setActiveCert} />
          ))}
        </div>
      </div>

      <CertificateModal cert={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  )
}

export default Certifications
