'use client'
import '../styles/about-me.css'
import { CldImage } from 'next-cloudinary'

export default function AboutMe({ about }) {
  return (
    <section id='about-me' className='about-me'>
      <div className='container about-me__container'>
        <h1 className='section-title'>About me</h1>
        <div className='about-me__content'>
          <div className='about-me__copy'>
            <div dangerouslySetInnerHTML={{ __html: about.description }} />
            <div className='about-me__skills'>
              <ul className='about-me__tech-skills about-me__list'>
                <h3 className='about-me__skills-title'>Technical Skills</h3>
                {about.tech_skills.map((skill) => (
                  <li className='about-me__item' key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
              <ul className='about-me__soft-skills about-me__list'>
                <h3 className='about-me__skills-title'>Soft Skills</h3>
                {about.soft_skills.map((skill) => (
                  <li className='about-me__item' key={skill}>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <figure className='about-me__photo'>
            <CldImage
              src='/portfolio/pic_434_wmez59.jpg'
              alt='Profile pic'
              className='img'
              width={434}
              height={550}
            />
          </figure>
        </div>
      </div>
    </section>
  )
}
