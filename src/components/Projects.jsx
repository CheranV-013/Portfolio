import { useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import esp1 from '../assets/projects/esp1.jpg'
import quiz1 from '../assets/projects/quiz1.jpg'
import quiz2 from '../assets/projects/quiz2.jpg'
import quiz3 from '../assets/projects/quiz3.jpg'  
import intelli1 from '../assets/projects/intelli1.jpg'
import intelli2 from '../assets/projects/intelli2.jpg'
import intelli3 from '../assets/projects/intelli3.jpg'
import intelli4 from "../assets/projects/intelli4.jpg"
import tamper1 from '../assets/projects/tamper1.jpg'

const projects = [
  {
    title: 'Smart Accident and Intrusion Detection System',
    status : 'completed',
    shortDescription: 'A smart system for detecting accidents and Intrusion.',
    coverImage: esp1,
    description:
      'A smart accident and tampering detection system that uses real-time data analysis to identify and respond to incidents. Features include automated alerts, incident tracking, and data visualization dashboards.',
    technologies: ['ArdinoIDE','React',],
    github: 'https://github.com/CheranV-013/Smart-Accident-and-Intruson-Detection-System',
    demo: 'not available',
    images: [esp1]
  },
  {
    title: 'Real-Time Quiz Platform',
    status : 'completed',
    shortDescription: 'An interactive quiz platform with live leaderboard.',
    coverImage: quiz1,
    description:
      'A real-time quiz hosting platform that allows participants to join using a quiz code and compete with live leaderboard updates. Includes host controls, question scheduling, and admin insights.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    github: 'https://github.com/CheranV-013/Quiz',
    demo: 'https://quizzz-inky.vercel.app/',
    images: [quiz1, quiz2, quiz3]
  },
  {
    title: 'Intelli-Credits',
    status : 'Ongoing',
    shortDescription: 'A smart credit management system.',
    coverImage: intelli1,
    description:
      'IntelliCredits is an AI-powered credit analysis system that evaluates a company’s financial data, documents, and external information to determine its creditworthiness. It uses NLP techniques like Named Entity Recognition and sentiment analysis to extract insights from financial reports, news, and legal documents. Machine learning algorithms such as Logistic Regression, Random Forest, and XGBoost predict credit risk and generate loan approval recommendations.',
    technologies: ['Python', 'NLP', 'Logistic Regression', 'Random Forest', 'XGBoost', 'Vercel','React', 'Tailwind CSS', 'Node.js', 'Express.js','Render'],
    github: 'https://github.com/CheranV-013/IntelliCredits',
    demo: 'https://intelli-credits.vercel.app/',
    images: [intelli1, intelli2, intelli3, intelli4]
  },
  {
    title: 'Tampering Detection System',
    status : 'Ongoing',
    shortDescription: 'A smart tampering detection system.',
    coverImage: tamper1,
    description:
      'This project detects device tampering using IoT sensors and AI-based anomaly detection. Sensor data such as motion and vibration is continuously monitored to track device activity. Isolation Forest and Autoencoder algorithms analyze the data and trigger alerts when abnormal behavior is detected.',
    technologies: ['IoT Sensors', 'ESP8266', 'Python', 'Machine Learning (Anomaly Detection)', 'MQTT', 'Cloud Dashboard','Vercel','Render'],
    github: 'https://github.com/CheranV-013/tamper_detection',
    demo: 'https://tamper-detection.vercel.app/',
    images: [tamper1]
  }
]

const Projects = () => {
  const [activeProject, setActiveProject] = useState(null)

  return (
    <section id="projects" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fadeUp">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">A selection of recent work showcasing AI/ML and full-stack skills.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} onView={setActiveProject} />
          ))}
        </div>
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  )
}

export default Projects
