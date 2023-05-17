'use client'
import React, { useRef } from 'react'
import '../styles/header.css'
import '../styles/burger.css'
import { CldImage } from 'next-cloudinary'
import { toggleMenu } from '../../lib/toggleMenu'

export default function Header() {
  const mobileNavRef = useRef<any>()
  const menuBtnRef = useRef<any>()

  const handleClick = () => {
    if (!mobileNavRef.current) return
    const button = menuBtnRef.current
    const menu = mobileNavRef.current
    button.classList.toggle('menu-btn--open')
    menu.classList.toggle('header__nav--open')
  }

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
        <button className='mobile-btn' ref={menuBtnRef} onClick={handleClick}>
          <div className='menu-btn'>
            <div className='menu-btn__burger'></div>
          </div>
        </button>
        <nav className='header__nav mobile-nav' ref={mobileNavRef}>
          <ul className='header__btns-container' onClick={handleClick}>
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
