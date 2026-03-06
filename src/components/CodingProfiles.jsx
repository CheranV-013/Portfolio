import CodingProfileCard from './CodingProfileCard.jsx'
import leetcodeLogo from '../assets/platforms/leetcode.png'
import codechefLogo from '../assets/platforms/codechef.png'
import codeforcesLogo from '../assets/platforms/codeforces.png'

const codingProfiles = [
  {
    platform: 'LeetCode',
    username: 'kit2824bam013',
    rating: '1519',
    problemsSolved: '250+',
    profile: 'https://leetcode.com/u/kit2824bam013/',
    logo: leetcodeLogo
  },
  {
    platform: 'CodeChef',
    username: 'kit28aiml013 ',
    rating: '1303',
    problemsSolved: '500+',
    profile: 'https://www.codechef.com/users/kit28aiml013',
    logo: codechefLogo
  },
  {
    platform: 'Codeforces',
    username: 'kit2824bam013',
    rating: '1118',
    problemsSolved: '180+',
    profile: 'https://codeforces.com/profile/kit2824bam013',
    logo: codeforcesLogo
  }
]

const CodingProfiles = () => {
  return (
    <section id="coding-profiles" className="section">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="animate-fadeUp">
          <h2 className="section-title">Global Coding Platforms</h2>
          <p className="section-subtitle">Competitive programming profiles and performance highlights.</p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {codingProfiles.map((profile) => (
            <CodingProfileCard key={profile.platform} profile={profile} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default CodingProfiles
