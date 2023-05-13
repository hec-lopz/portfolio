import '../styles/_card.css'
import webpackIcon from '../assets/webpack.svg'
import firebaseIcon from '../assets/Firebase_Logo2.svg'
import styledComponentsIcon from '../assets/styled-components-logo.svg'
import React, { useState, useEffect } from 'react'
import { getImgUrl } from '../js/dataFunctions'

const icons = {
  javascript: 'fa-js-square',
  css: 'fa-css3-alt',
  html5: 'fa-html5',
  html: 'fa-html5',
  grunt: 'fa-grunt',
  react: 'fa-react',
  firebase: firebaseIcon,
  webpack: webpackIcon,
  'styled-components': styledComponentsIcon,
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

const Card = ({ project }) => {
  const { title, description, technologies, screenshot, date } = project
  const [img, setImg] = useState('')
  useEffect(() => {
    getImgUrl(screenshot).then((res) => setImg(res))
  }, [])

  return (
    <article className='card'>
      <div className='card__header'>
        <h2 className='card__title'>{title}</h2>
        <div className='technologies card__technologies'>
          <ul className='technologies__list'>
            {technologies.map((item, i) => (
              <li key={i} className='technologies__item'>
                <span className='technologies__tooltip'>{item}</span>
                {/fa-/.test(icons[item.toLowerCase()]) ? (
                  <i
                    className={
                      'technologies__icon fab ' + icons[item.toLowerCase()]
                    }
                  ></i>
                ) : (
                  <img
                    src={icons[item.toLowerCase()]}
                    className='technologies__icon technologies__icon--img'
                  />
                )}
              </li>
            ))}
          </ul>
          <span className='technologies__date'>
            {date && processDate(date)}
          </span>
        </div>
      </div>
      <figure className='card__fig'>
        <img
          className='card__img img'
          src={img}
          alt={`Vista previa de ${title}`}
        />
      </figure>
      <div className='card__body'>
        <p className='card__description'>{description}</p>
        <div className='card__links'>
          <a
            target='blank'
            href={project['demo-url']}
            className='button card__btn card__btn--project'
          >
            View project
          </a>
          <a
            target='blank'
            href={project['gh-url']}
            className='button card__btn card__btn--git'
          >
            <i className='fab fa-github'></i>
          </a>
        </div>
      </div>
    </article>
  )
}

export default Card
