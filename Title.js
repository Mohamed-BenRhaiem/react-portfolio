import React from 'react'
import './Title.css'
function Title(props) {
  return (
    <>
    <h4>
        {props.children}
    </h4>
    </>
  )
}
function SubTitle(props) {
  return (
    <>
    <h5>
        {props.children}
    </h5>
    </>
  )
}

export default Title;
export {SubTitle}