import React from 'react'
import Card from '../card/Card'
import Title, { SubTitle } from '../title/Title'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faMobile,faDesktop,faDatabase } from '@fortawesome/free-solid-svg-icons'

import Skills from '../skills/Skills'

function Service(props) {
  return (
    <>
    <div className='container text-center mt-5' id='service'>

    <SubTitle>Service</SubTitle>
    <Title>What I do</Title>
    <p style={{maxWidth:'40vw',margin:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
       rerum commodi corrupti, temporibus non quam.</p>
       <div className='row '>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Card  icon = { <FontAwesomeIcon icon={faDesktop} />} title = 'Front End' />
          </div>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Card  icon = {<FontAwesomeIcon icon={faDatabase} />} title = 'Back End' />
          </div>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Card  icon = {<FontAwesomeIcon icon={faMobile} />} title = 'Mobile App' />
          </div>
          </div>
    </div>

    <div className='container text-center mt-5'>

    <SubTitle>Skills</SubTitle>
    <Title>Why Choose Me</Title>
    <p style={{maxWidth:'40vw',margin:'auto'}}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
       rerum commodi corrupti, temporibus non quam.</p>
       <div className='row '>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Skills  icon = { <FontAwesomeIcon icon={faDesktop} />} title = 'HTML' />
          </div>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Skills  icon = {<FontAwesomeIcon icon={faDatabase} />} title = 'CSS' />
          </div>
          <div style={{flex:'1 33%',flexWrap:'wrap'}}>

          <Skills  icon = {<FontAwesomeIcon icon={faMobile} />} title = 'Java Script' />
          </div>
          
          </div>
    </div>


    </>
  )
}

export default Service