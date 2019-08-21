import React from 'react'
import { Routes, NavBar, Footer } from '../components'
import SubscribeForm from '../Components/SubscribeForm'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div id='routes'>
        <Routes />
        <Footer /> 
      </div>
      <section id='newsletter'>
        <h3>subscribe to our newsletter</h3>
        <SubscribeForm />
      </section>

    </div>
  )
}

export default App
