'use client'
import React from 'react'
import '../styles/about-me.css'
import ProfilePic from '/public/assets/pic@434.jpg'
import Image from 'next/image'
import { CldImage } from 'next-cloudinary'

export default function AboutMe({ about }) {
  return (
    <section id='about-me' className='about-me'>
      <div className='container about-me__container'>
        <h1 className='section-title'>About me</h1>
        <div className='about-me__content'>
          <div className='about-me__copy'>
            {about.description}
            <div className='about-me__skills'>
              <ul className='about-me__tech-skills about-me__list'>
                <h3 className='about-me__skills-title'>Technical Skills</h3>
                <li className='about-me__item'>ReactJS</li>
                <li className='about-me__item'>Javascript</li>
                <li className='about-me__item'>Webpack</li>
                <li className='about-me__item'>Stylus</li>
                <li className='about-me__item'>Sass</li>
                <li className='about-me__item'>BEM</li>
                <li className='about-me__item'>HTML</li>
                <li className='about-me__item'>CSS</li>
              </ul>
              <ul className='about-me__soft-skills about-me__list'>
                <h3 className='about-me__skills-title'>Soft Skills</h3>
                <li className='about-me__item'>Assertive Communication</li>
                <li className='about-me__item'>Problem-solving</li>
                <li className='about-me__item'>Adaptability</li>
                <li className='about-me__item'>English - B2</li>
                <li className='about-me__item'>Spanish - Native</li>
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
