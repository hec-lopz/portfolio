'use client'
import { CldImage } from 'next-cloudinary'
import '../styles/hero.css'

export default function Hero({ hero }) {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div className='hero__headline'>
          <h1 className='hero__title'>{hero.intro}</h1>

          <p className='hero__copy'>{hero.description}</p>
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
