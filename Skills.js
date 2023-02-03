import React from 'react'

import './Skill.css'

function Skills(props) {
  return (
    <div className='container card-wrapper mt-5'>
        <div className='card shadow'>
          <span className='fs-1 ' >{props.icon }</span>
            <span className='fs-4'>{props.title}</span>
        </div>

        
       
    </div>
    
  )
}

export default Skills