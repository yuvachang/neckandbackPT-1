import React from 'react'
import { Routes, NavBar } from '../components'

function App() {
  return (
    <div className='app'>
      <NavBar />
      <div id='routes'>
        <Routes />
      </div>
    </div>
  )
}

export default App
