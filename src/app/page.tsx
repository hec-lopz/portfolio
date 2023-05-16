import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

const API = process.env.NEXT_API_URL

export default async function Page() {
  let aboutData, heroData, projectsData
  try {
    aboutData = await fetch(`${API}/api/content/about`).then((res) =>
      res.json()
    )
    heroData = await fetch(`${API}/api/content/hero`).then((res) => res.json())
    projectsData = await fetch(`${API}/api/content/projects`).then((res) =>
      res.json()
    )
  } catch (err) {
    console.error(err)
    throw new Error('error on fetches')
  }

  return (
    <>
      <Hero hero={heroData} />
      <AboutMe about={aboutData} />
      <Projects projects={projectsData} />
      <Contact />
    </>
  )
}
