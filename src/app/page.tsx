import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { getAboutData, getHeroData, getProjectsData } from '../lib/getData'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

const API = process.env.VERCEL_URL || process.env.NEXT_API_URL

const fetchData = async (url: string) => {
  let fullUrl = API + url
  try {
    const res = await fetch(fullUrl)
    const data = await res.json()

    return data
  } catch (err) {
    console.error({ err })
    throw new Error(`Error fetching '${fullUrl}'`)
  }
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
