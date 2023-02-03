import React, { useState } from 'react'


import './Card.css'

function Card(props) {
    const [color,setColor] = useState('var(--primary-color)');
    const [textColor,setTextColor] = useState('var(--dark-color)');
    const changeColor = (e)=>{
      setColor('white');
      setTextColor('white');
       e.target.style.transition='.3s ease-in-out';
    };
    const getBackColor = (e)=>{
      setColor('var(--primary-color)');
      setTextColor('var(--dark-color)');
      
      e.target.style.transition='.3s ease-in-out';

    };
  return (
    <>
    <div className='container card-wrapper mt-5'>
        <div onMouseOver={changeColor} onMouseOut={getBackColor}  className='card shadow'>
          <span className='fs-1 'style={{color:color}}>{props.icon }</span>
            <span className='fs-4' style={{color:textColor}}>{props.title}</span>
        </div>

        
       
    </div>

    </>
  )
}

export default Card