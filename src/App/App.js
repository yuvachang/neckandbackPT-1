import React from 'react'
import { Routes, NavBar } from '../components'
import SubscribeForm from '../Components/SubscribeForm'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div id='routes'>
        <Routes />
      </div>
      <section id='newsletter'>
        <h3>subscribe to our newsletter</h3>
        <SubscribeForm />
      </section>

    </div>
  )
}

export default App
