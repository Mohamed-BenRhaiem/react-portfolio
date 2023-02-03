import React from 'react'
import ContactForm from '../../../components/contactForm/ContactForm'
import Title, { SubTitle } from '../../../components/title/Title'

function Contact() {
  return (
    <div className='text-center mt-5' id='contact'>
        <SubTitle>Contact</SubTitle>
        <Title>Get In Touch With Me</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
            rerum commodi corrupti, temporibus non quam.</p>
        <ContactForm />
    </div>
  )
}

export default Contact