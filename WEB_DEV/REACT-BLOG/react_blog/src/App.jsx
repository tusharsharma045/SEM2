
import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Bollywood from './components/Bollywood'
import Hollywood from './components/Hollywood'
import Technology from './components/Technology'
import Food from './components/Food'
import Fitness from './components/Fitness'
import Navbar from './components/Navbar'
import './App.css'


const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bollywood" element={<Bollywood />} />
        <Route path="/hollywood" element={<Hollywood />} />
        <Route path="/technology" element={<Technology />} />
        <Route path="/food" element={<Food />} />
        <Route path="/fitness" element={<Fitness />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App






