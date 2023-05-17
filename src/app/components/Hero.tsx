'use client'
import { CldImage } from 'next-cloudinary'
import '../styles/hero.css'
import { HeroData } from '../../models/Markdown.model'

export default function Hero({ hero }: { hero: HeroData }) {
  return (
    <section className='hero'>
      <div className='hero__container container'>
        <div
          className='hero__headline'
          dangerouslySetInnerHTML={{ __html: hero.body }}
        ></div>
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
