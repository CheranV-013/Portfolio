import {
  FiCode,
  FiLayout,
  FiServer,
  FiDatabase,
  FiTool,
  FiBookOpen
} from 'react-icons/fi'

const skills = {
  'Programming Languages': ['C', 'C++', 'Java', 'Python', 'JavaScript'],
  'Frontend Development': ['React.js', 'Bootstrap', 'HTML', 'CSS', 'JavaScript'],
  'Backend Development': ['Node.js', 'Express.js', 'Django'],
  Databases: ['MySQL', 'MongoDB'],
  'Tools & Platforms': ['Git', 'GitHub'],
  'Core Concepts': ['DSA', 'OOPS']
}

const categoryIcons = {
  'Programming Languages': FiCode,
  'Frontend Development': FiLayout,
  'Backend Development': FiServer,
  Databases: FiDatabase,
  'Tools & Platforms': FiTool,
  'Core Concepts': FiBookOpen
}

const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fadeUp">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle">
            A structured overview of the technical stack and core concepts I work with.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {Object.entries(skills).map(([category, items]) => {
            const Icon = categoryIcons[category]
            return (
              <div key={category} className="card p-6">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-ink-50 text-ink-700">
                    <Icon />
                  </span>
                  <h3 className="text-lg font-semibold text-ink-900">{category}</h3>
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                  {items.map((skill) => (
                    <span key={skill} className="badge">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills
