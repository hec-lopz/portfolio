import { ProjectData } from '../../models/Markdown.model'
import Project from './Project'
import '../styles/_projects.css'

export default function Projects({ projects }: { projects: ProjectData[] }) {
  return (
    <section className='projects' id='projects'>
      <div className='projects__container container'>
        <h1 className='section-title'>Projects</h1>
        <div className='grid-container'>
          {projects.map((project) => (
            <Project project={project} key={project.id}></Project>
          ))}
        </div>
      </div>
    </section>
  )
}
