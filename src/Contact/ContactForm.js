import React from 'react'

class ContactForm extends React.Component{
  state = {
    name: '',
    email: '' ,
    tel: '',
    comment: '',
    interest: '',
  }

  render () {
    return (
    <div className='contact-form'>
      <form name="contact" action="" onsubmit="">
        <p>Name:<input type="text" size="20" name="name"></input></p>
        <p>Email:<input type="text" size="20" name="email"></input></p>
        <p>Tel:<input type="text" size="20" name="tel"></input></p>
        <p>Comment:<textarea type="text" size="20" name="comment"></textarea></p>
        <p>Interest Level:<input type="text" size="20" name="interest"></input></p>
      </form>
    </div>
    )
  }
}

export default ContactForm