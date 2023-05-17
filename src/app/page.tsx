import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { getAboutData, getHeroData, getProjectsData } from '../lib/getData'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

export default async function Page() {
  const aboutData = getAboutData()
  const heroData = getHeroData()
  const projectsData = getProjectsData()

  return (
    <>
      <Hero hero={heroData} />
      <AboutMe about={aboutData} />
      <Projects projects={projectsData} />
      <Contact />
    </>
  )
}
