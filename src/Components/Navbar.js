import React from 'react'

import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
            En Bostad
          <ul>
            <li className='nav-item'>
              <Link to='/' className='nav-links'>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/Users'
                className='nav-links'
              >
                Sign In/Sign Up
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/list'
                className='nav-links'
              >
                List
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}