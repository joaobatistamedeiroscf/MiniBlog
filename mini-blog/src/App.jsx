import React from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import About from './pages/About/About.jsx'
import NavBar from './components/NavBar.jsx'


function App() {
  return (
    <div className='App'>
      
      <div className='navbarApp'>
        <NavBar />
      </div>
      
      <div className='rotas'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      
   
    </div>
   
  )
}

export default App
