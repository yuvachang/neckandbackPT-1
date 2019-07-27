import React from 'react'
import './_navBar.scss'



function NavBar () {
  return (
    <div className="toolbar">
      <div className="logo"><a href='/'>NECK & BACK PT</a></div> 
      <div className="spacer" /> 
      <ul className="nav-items">
        <li className="nav-item"><a href='/'>HOME</a></li>
        <li className="nav-item"><a href='/about'>ABOUT</a></li>
        <li className="nav-item"><a href='/service'>SERVICE</a></li>
        <li className="nav-item"><a href='/contact'>CONTACT</a></li>
      </ul>
    </div>
  )
}

export default NavBar
