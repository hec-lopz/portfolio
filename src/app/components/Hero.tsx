'use client'
import React from 'react'
import HeroGraphic from '/public/assets/dev-graphic.svg'
import { CldImage } from 'next-cloudinary'
import '../styles/hero.css'
import { getAboutData } from '../../lib/getData'

export default function Hero() {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__headline'>
          <h1 className='hero__title'></h1>

          <p className='hero__copy'></p>
        </div>
        <figure className='hero__photo'>
          <CldImage
            src='/portfolio/dev-graphic_s1bhns.svg'
            alt='dev'
            className='hero__img'
            width={1114}
            height={617}
          />
        </figure>
      </div>
    </section>
  )
}
