import React from 'react'
import HeroGraphic from '/public/assets/dev-graphic.svg'
import Image from 'next/image'
import '../styles/hero.css'
import { getAboutData } from '../../lib/getData'

export default function Hero() {
  const matterResult = getAboutData()
  console.log(matterResult)
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__headline'>
          <h1 className='hero__title'></h1>

          <p className='hero__copy'></p>
        </div>
        <figure className='hero__photo'>
          <Image src={HeroGraphic} alt='dev' />
        </figure>
      </div>
    </section>
  )
}
