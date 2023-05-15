'use client'
import { CldImage } from 'next-cloudinary'
import { ProjectData } from '../../models/Markdown.model'
import '../styles/_card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core'

const icons = {
  javascript: 'fa-js-square',
  css: 'fa-css3-alt',
  html5: 'fa-html5',
  html: 'fa-html5',
  grunt: 'fa-grunt',
  react: 'fa-react',
}

const convertMonthToName = (monthNum) => {
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ]

  return months[monthNum]
}

const processDate = (timestamp) => {
  const date = timestamp.toDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const monthName = convertMonthToName(month)

  return `${monthName}, ${year}`
}

const Project = ({ project }: { project: ProjectData }) => {
  const { title, body, tech, img_name, published_date, live_url, github_url } =
    project

  return (
    <article className='card'>
      <div className='card__header'>
        <h2 className='card__title'>{title}</h2>
        <div className='technologies card__technologies'>
          <ul className='technologies__list'>
            {tech.map(({ label, icon: iconDefinition }, i) => (
              <li key={i} className='technologies__item'>
                <span className='technologies__tooltip'>{label}</span>
                <FontAwesomeIcon icon={icon(iconDefinition)} />
              </li>
            ))}
          </ul>
          <span className='technologies__date'>{published_date}</span>
        </div>
      </div>
      <figure className='card__fig'>
        <CldImage
          src={`/portfolio/${img_name}`}
          alt={`Vista previa de ${title}`}
          width={350}
          height={250}
          className='card__img img'
        />
      </figure>
      <div className='card__body'>
        <div dangerouslySetInnerHTML={{ __html: body }} />
        <div className='card__links'>
          <a
            target='blank'
            href={live_url}
            className='button card__btn card__btn--project'
          >
            View project
          </a>
          <a
            target='blank'
            href={github_url}
            className='button card__btn card__btn--git'
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>
    </article>
  )
}

export default Project
