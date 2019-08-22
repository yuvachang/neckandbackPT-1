import React from 'react'
import { Link } from 'react-router-dom'

function NavBar() {
  return (
    <div className='toolbar'>
      <img id='logo' alt='logo' src='main_logo.png' />
      <div className='nav-links'>
        <Link to='/' className='nav-link'>
          Home
        </Link>

        <Link to='/about' className='nav-link'>
          about
        </Link>

        <Link to='/services' className='nav-link'>
          services
        </Link>

        <Link to='/contact' className='nav-link'>
          contact
        </Link>
      </div>
    </div>
  )
}

export default NavBar
