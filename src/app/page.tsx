import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

const API = ''

export default async function Page() {
  const aboutRes = fetch(`${API}/api/content/about`).then((res) => res.json())
  const heroRes = fetch(`${API}/api/content/hero`).then((res) => res.json())
  const projectsRes = fetch(`${API}/api/content/projects`).then((res) =>
    res.json()
  )

  const [aboutData, heroData, projectsData] = await Promise.all([
    aboutRes,
    heroRes,
    projectsRes,
  ])

  return (
    <>
      <Hero hero={heroData} />
      <AboutMe about={aboutData} />
      <Projects projects={projectsData} />
      <Contact />
    </>
  )
}
