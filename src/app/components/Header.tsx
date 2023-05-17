'use client'
import React from 'react'
import '../styles/header.css'
import '../styles/burger.css'
import { CldImage } from 'next-cloudinary'

export default function Header() {
  return (
    <header className='header' id='home'>
      <div className='header__container'>
        <a className='header__logo' href='#'>
          <CldImage
            src='/portfolio/logo-name_nfek09.svg'
            alt='logo'
            width={125}
            height={45}
          />
        </a>
        <button className='mobile-btn'>
          <div className='menu-btn'>
            <div className='menu-btn__burger'></div>
          </div>
        </button>
        <nav className='header__nav mobile-nav'>
          <ul className='header__btns-container'>
            <li className='header__btn'>
              <a className='' href='#projects'>
                Projects
              </a>
            </li>
            <li className='header__btn'>
              <a className='' href='#about-me'>
                About me
              </a>
            </li>
            <li className='header__btn'>
              <a className='' href='#contact'>
                Contact me
              </a>
            </li>
            <li className='header__btn'>
              <a
                className=''
                href='https://drive.google.com/file/d/1EMBeUyMgYrPjrUDgH9scYJID-McecOck/view?usp=sharing'
                target='_blank'
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
