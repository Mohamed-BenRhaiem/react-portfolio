import React from 'react'
import CvButton, { HireButton } from '../button/Button';
import MediaIcons from '../mediaIcons/MediaIcons';
import './Hero.css'
function Hero() {
  return (
    <>
    <div className='container hero-container ' id='hero'>
      <div className='info '>
          <h5>hello, I'm</h5>
          <h1>James Smith</h1>
          <h5>Web Developer</h5>
          <div className='d-flex btnGroup'>

          <CvButton>HIRE ME</CvButton>
          <HireButton>DOWNLOAD CV</HireButton>
          
          </div>
          <MediaIcons />
      </div>
      <img src='https://www.free-css.com/assets/files/free-css-templates/preview/page287/steller/assets/imgs/man.svg' alt='image2'/>
    </div>
    </>
  )
}

export default Hero