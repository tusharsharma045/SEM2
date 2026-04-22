import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/">Home</Link>
        <Link to="/bollywood">Bollywood</Link>
        <Link to="/hollywood">Hollywood</Link>
        <Link to="/technology">Technology</Link>
        <Link to="/food">Food</Link>
        <Link to="/fitness">Fitness</Link>
        
    </nav>
  )
}

export default Navbar