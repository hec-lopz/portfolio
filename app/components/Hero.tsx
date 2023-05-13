import React from 'react'
import HeroGraphic from '/public/dev-graphic.svg'
import Image from 'next/image'
import '../styles/hero.css'

export default function Hero(props: {}) {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__headline'>
          <h1 className='hero__title'>
            Hi there! My name is <em className='hero__em'>Héctor López.</em>
          </h1>

          <p className='hero__copy'>
            I'm a <em className='hero__em'>Frontend Developer</em> with
            experience building dynamic and static web pages.
          </p>
        </div>
        <figure className='hero__photo'>
          <Image src={HeroGraphic} alt='dev' />
        </figure>
      </div>
    </section>
  )
}
