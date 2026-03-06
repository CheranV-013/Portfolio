import { useState } from 'react'
import AchievementCard from './AchievementCard.jsx'
import AchievementModal from './AchievementModal.jsx'
import techfusion1 from '../assets/achievements/techfusion1.jpg'
import techfusion2 from '../assets/achievements/techfusion2.jpg'
import techfusion3 from '../assets/achievements/techfusion3.jpg'
import techfusion4 from '../assets/achievements/techfusion4.jpg'
import hackathon1 from '../assets/achievements/hackathon1.jpg'
import reversecoding1 from '../assets/achievements/reversecoding1.jpg'
import reversecoding2 from '../assets/achievements/reversecoding2.jpg'
import reversecoding3 from '../assets/achievements/reversecoding3.jpg'    

const achievements = [
  {
    title: 'Runner-Up - Coding Hackathon 2025',
    shortDescription: '2nd place in a coding hackathon, conducted by United Institute of Technology.',
    event: 'Coding Hackathon 2025',
    coverImage: hackathon1,
    description:
      'Collaborated with a team to build and solve problems related to Cybersecurity.',
    technologies: ['C++'],
    role: 'Collaborated with team members to identify and mitigate security vulnerabilities.',
    images: [hackathon1]
  },
  {
    title: 'Finalist - Reverse Coding 2026',
    shortDescription: 'Participated in a reverse coding challenge as a finalist.',
    event: 'Shaastra Reverse Coding - 2026',
    coverImage: reversecoding2,
    description:
      'We participated in a reverse coding challenge, as solo participants, where we had to debug and fix issues in a given codebase within a limited timeframe.',
    technologies: ['C++'],
    role: 'Collaborated with team members to identify and mitigate security vulnerabilities.',
    images: [reversecoding1, reversecoding2, reversecoding3]
  },
  {
    title: 'TECH FUSION QUEST – Quiz Platform',
    shortDescription: 'Developed a real-time quiz platform used in an intercollegiate event.',
    event: 'UDHAYAM Intercollegiate Event 2026',
    coverImage: techfusion1,
    description:
      'Built and deployed a real-time quiz hosting platform with live participant joining, quiz code access, and a continuously updating leaderboard. Collaborated with event coordinators to ensure a seamless on-stage experience and reliable performance throughout the competition.',
    technologies: ['React', 'Node.js', 'Socket.io'],
    role: 'Led front-end development, integrated Socket.io live updates, and coordinated deployment on event day.',
    images: [techfusion1, techfusion2, techfusion3, techfusion4]
  }
]



const Achievements = () => {
  const [activeAchievement, setActiveAchievement] = useState(null)

  return (
    <section id="achievements" className="section bg-sand-100/60">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fadeUp">
          <h2 className="section-title">Achievements</h2>
          <p className="section-subtitle">Showcasing milestones, competitions, and real-world deployments.</p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((achievement) => (
            <AchievementCard
              key={achievement.title}
              achievement={achievement}
              onView={setActiveAchievement}
            />
          ))}
        </div>
      </div>

      <AchievementModal achievement={activeAchievement} onClose={() => setActiveAchievement(null)} />
    </section>
  )
}

export default Achievements
