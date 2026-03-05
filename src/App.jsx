import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Education from './components/Education.jsx'
import Certifications from './components/Certifications.jsx'
import Achievements from './components/Achievements.jsx'
import Projects from './components/Projects.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

const App = () => {
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme || 'light'
  })

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <div className={`min-h-screen ${theme === 'dark' ? 'dark-theme' : 'light-theme'}`}>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications />
        <Achievements />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
