import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo">
            En Bostad
          </Link>
          <div className="navbar-button-wrapper">
          <Link to="/users">
            <button className='navbar-button'>Logga In</button>
          </Link>
          <Link to="/getData">
            <button className="navbar-button">Sparade</button>
          </Link>
          </div>
        </div>
      </nav>
    </>
  )
}