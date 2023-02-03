import React from 'react'

function NavItems(props) {
  return (
    
    <li className="nav-item">
          {props.children}
    </li>

  )
}

export default NavItems