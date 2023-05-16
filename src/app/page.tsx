import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

const API = 'https://staging--heclopz.com'

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
  const aboutData = await fetchData(`/api/content/about`)
  const heroData = await fetchData(`/api/content/hero`)
  const projectsData = await fetchData(`/api/content/projects`)

  return (
    <>
      <Hero hero={heroData} />
      <AboutMe about={aboutData} />
      <Projects projects={projectsData} />
      <Contact />
    </>
  )
}
