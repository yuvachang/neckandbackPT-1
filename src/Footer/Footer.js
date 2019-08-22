import React from 'react'

function Footer() {
  return (
    <div id='footer'>
      <h3>subscribe to our newsletter</h3>
      
      <form>
        <input type='email' required={true} placeholder='Enter your email' />
        <button>Subscribe</button>
      </form>
    </div>
  )
}

export default Footer
