import React from 'react'
import Title from '../title/Title'
import { SubTitle } from '../title/Title'
import './About.css'
import myImage from '../../assets/imgs/myimage.png'
import  { HireButton } from '../button/Button'
function About() {
  return (
    <>
    <div className='container personal-data' id='#about'>
      <div className='image'>

      <img className='image-fluid my-image' src={myImage}></img>
     </div>
    <div className='personal-info'>

    <Title>James Smith</Title>
    <SubTitle>Web Developer</SubTitle>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident, pariatur, aperiam aut autem voluptas odit. Odio ducimus delectus totam sed aliquam sequi praesentium mollitia, illum repudiandae quidem quod, magni magnam.
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, eius, nam. Quo praesentium qui temporibus voluptatum, facilis aliquid eligendi fugiat beatae neque inventore non. Laborum repellendus consequatur ullam voluptatum asperiores.
    </p>
    <HireButton>DOWNLOAD CV</HireButton>
      </div>
     
    </div>
    </>
  )
}

export default About