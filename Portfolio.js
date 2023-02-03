import React from 'react'
import './Portfolio.css'
import Title, { SubTitle } from '../title/Title'
import Work from '../work/Work'
import memoryGame from '../../assets/imgs/memoryGame.png'
import Bondi from '../../assets/imgs/Bondi.png'
import Conge from '../../assets/imgs/Congé.png'
function Portfolio() {
  return (
    <div className='container portfolio-wrapper' id='portfolio'>
      <div className='text-center '>
        <SubTitle>Portfolio</SubTitle>
        <Title>Check My Wonderful works</Title>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. In alias dignissimos.
        rerum commodi corrupti, temporibus non quam.</p>
      </div>
      <div className='my-work '>
        <Work   className='card-work' src={memoryGame} />
        <Work  className='card-work' src={Bondi} />
        <Work  className='card-work' src={Conge} />
        
      </div>
    </div>
  )
}

export default Portfolio