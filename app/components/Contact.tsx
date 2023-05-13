import React from 'react'
import '../styles/_contact.css'

export default function Contact() {
  return (
    <section className='contact' id='contact'>
      <div className='contact__container container'>
        <h1 className='section-title'>Contact me</h1>
        <div className='contact__content'>
          <div className='contact__social-media-container'>
            <p className='contact__cta'>
              Send me a message on my social media.
            </p>
            <ul className='contact__social-media social-media'>
              <li className='contact__link social-media__link'>
                <a
                  href='https://github.com/hec-lopz'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-github'></i>
                </a>
              </li>
              <li className='contact__link social-media__link'>
                <a
                  href='https://www.linkedin.com/in/hec-lopz/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-linkedin-in'></i>
                </a>
              </li>
              <li className='contact__link social-media__link'>
                <a
                  href='https://twitter.com/hec_lopz'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <i className='fab fa-twitter'></i>
                </a>
              </li>
            </ul>
          </div>
          <span className='contact__separator'>or</span>
          <div className='contact__form-container'>
            <p className='contact__cta'>
              Leave your info and I'll contact you back.
            </p>
            <form
              action=''
              name='contact'
              className='contact__form'
              method='POST'
              netlify
            >
              <div className='input-group'>
                <label className='input-group__label' for='name'>
                  Name
                </label>
                <input
                  className='input-group__input'
                  id='name'
                  name='name'
                  type='text'
                  autocomplete='name'
                  required
                />
              </div>
              <div className='input-group'>
                <label className='input-group__label' for='email'>
                  Email address
                </label>
                <input
                  className='input-group__input'
                  type='email'
                  name='email'
                  id='email'
                  autocomplete='email'
                  required
                />
              </div>
              <div className='input-group'>
                <label className='input-group__label' for='body'>
                  Message
                </label>
                <textarea
                  className='input-group__input input-group__input--text-area'
                  name='body'
                  id='body'
                  cols='30'
                  rows='10'
                  autocomplete='off'
                  required
                ></textarea>
              </div>
              <button type='submit' className='button contact__btn'>
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
