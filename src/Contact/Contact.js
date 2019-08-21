import React from 'react'
import ContactForm from './ContactForm'

class Contact extends React.Component{

  render () {
    return (
    <div id='contact'>
      <ContactForm />
      <div class="contact-map"></div>
    </div>
    )
  }
}

export default Contact
