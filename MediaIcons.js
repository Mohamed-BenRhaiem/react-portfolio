import React from 'react'
import { Facebook,Twitter,GitHub,Linkedin } from 'react-feather';
import './mediaIcons.css'
function MediaIcons() {
  return (
    <>
    <div id='socialIcons'>
        <a className='social-link' href='https://www.facebook.com/profile.php?id=100009527520303'><Facebook className='social-icon'/></a>
        <a className='social-link' href='https://twitter.com/Mohamed_BRhaiem'><Twitter className='social-icon'/></a>
        <a className='social-link' href='https://github.com/Mohamed-BenRhaiem'> <GitHub className='social-icon'/></a>
        <a className='social-link' href='https://www.linkedin.com/in/mohamed-ben-rhaiem'><Linkedin className='social-icon'/></a>
    </div>
    </>
    
  )
}

export default MediaIcons
