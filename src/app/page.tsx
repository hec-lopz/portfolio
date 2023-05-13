import { Metadata } from 'next'
import Hero from './components/Hero'
import AboutMe from './components/AboutMe'
import Projects from './components/Projects'
import Contact from './components/Contact'

export const metadata: Metadata = {
  title: 'Web Portfolio',
}

export default function Page() {
  return (
    <>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}
