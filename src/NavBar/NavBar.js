import React from 'react'
import './_navBar.scss'



function NavBar () {
  return (
    <div className="toolbar">
      <div className="logo"><img id="logo" src="main_logo.png" /></div> 
      <div className="spacer" /> 
      <ul className="nav-items">
        <li className="nav-item"><a href='/'>HOME</a></li>
        <li className="nav-item"><a href='/about'>ABOUT</a></li>
        <li className="nav-item"><a href='/services'>SERVICE</a></li>
        <li className="nav-item"><a href='/contact'>CONTACT</a></li>
      </ul>
    </div>
  )
}

export default NavBar
