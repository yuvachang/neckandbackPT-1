import React from 'react'

class SubscribeForm extends React.Component {
  render() {
    return (
      <form>
        <input type='email' required={true} placeholder='Enter your email' />
        <button>Subscribe</button>
      </form>
    )
  }
}

export default SubscribeForm
