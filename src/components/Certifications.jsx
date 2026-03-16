import { useState } from 'react'
import CertificateCard from './CertificateCard.jsx'
import CertificateModal from './CertificateModal.jsx'
import pythonCert from '../assets/certificates/python.jpg'
import mlCert from '../assets/certificates/ml.jpg'
import primer from '../assets/certificates/primer.jpg'
import cisco1 from '../assets/certificates/cisco1.jpg'
import cisco2 from '../assets/certificates/cisco2.jpg'
import cisco3 from '../assets/certificates/cisco3.jpg'
import cisco4 from '../assets/certificates/cisco4.jpg'
import cisco5 from '../assets/certificates/cisco5.jpg'
import cisco6 from '../assets/certificates/cisco6.jpg'
import cisco from '../assets/certificates/cisco.jpg'
import fullstack from '../assets/certificates/fullstack.jpg'
import hindi from '../assets/certificates/hindi.jpg'

const certifications = [
  {
    title: "Honours Diploma in Full Stack Development",
    organization: "Computer Software College",
    year: "2025",
    cover: fullstack,   // title / card image
    image: pythonCert,       // actual certificate
    description:
      "Comprehensive training in MERN stack, backend APIs, and modern web development."
  },
  {
    title: "B.A. in Hindi Language",
    organization: "Dhaksina Bharat Hindi Prachar Sabha",
    year: "2021",
    cover: hindi,
    image: mlCert,
    description:
      "Certification demonstrating proficiency in Hindi language and literature."
  },
  {
    title: "CISCO Certifications",
    organization: "Infosys Springboard",
    year: "2026",
    image: cisco,
    certificates: [
      {
        image: primer,
        description: "Networking basics including protocols, devices, and internet architecture."
      },
      {
        image: cisco1,
        description: "Introduction to Cybersecurity and threat protection concepts."
      },
      {
        image: cisco2,
        description: "Network security fundamentals and secure communication principles."
      },
      {
        image: cisco3,
        description: "Packet Tracer simulations and practical networking configuration."
      },
      {
        image: cisco4,
        description: "IoT fundamentals and smart device networking concepts."
      },
      {
        image: cisco5,
        description: "Advanced networking concepts and troubleshooting."
      },
      {
        image: cisco6,
        description: "Cloud networking and virtualization technologies."
      }
    ]
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
