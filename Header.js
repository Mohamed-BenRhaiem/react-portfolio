import React from 'react'
import NavItems from '../../components/NavItems/NavItems';
import './Header.css';
function Header() {
  return (
    <>
    <nav className="container navbar navbar-expand-lg navbar-light bg-white ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"><img src="https://www.free-css.com/assets/files/free-css-templates/preview/page287/steller/assets/imgs/logo.svg"/></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">

      <ul className="navbar-nav ms-auto">


        <NavItems  className='active'>
        <a className="nav-link active" aria-current="page" href="#hero">Home</a>
        </NavItems>

        <NavItems id='about'>
        <a  className="nav-link" href="#about">About</a>
        </NavItems>

        <NavItems id='service'>
        <a className="nav-link" href="#service">Service</a>
        </NavItems>

        <NavItems id='portfolio'>
        <a className="nav-link" href="#portfolio">Portfolio</a>
        </NavItems>

        <NavItems id='contact'>
        <a className="nav-link" href="#contact">Contact</a>
        </NavItems>

           
       
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Header;