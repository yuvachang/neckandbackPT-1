import React from 'react'
import { Routes, NavBar, Footer } from '../components'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div id='routes'>
        <Routes />
      </div>

      <Footer />
    </div>
  )
}

export default App
