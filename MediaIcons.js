import React from 'react'
import { Facebook,Twitter,GitHub,Linkedin } from 'react-feather';
import './mediaIcons.css'
function MediaIcons() {
  return (
    <>
    <div id='socialIcons'>
        <Facebook className='social-icon'/>
        <Twitter className='social-icon'/>
        <GitHub className='social-icon'/>
        <Linkedin className='social-icon'/>
    </div>
    </>
    
  )
}

export default MediaIcons