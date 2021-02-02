import React, { useState} from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [click, setClick] = useState(false)

  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)


  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to="/" className="navbar-logo" >
            En Bostad
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/users' className='nav-links' onClick={closeMobileMenu}>
              Logga In
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='/profile' className='nav-links' onClick={closeMobileMenu}>
            Min Sida
            </Link>
          </li>
          </ul>
        </div>
      </nav>
    </>
  )
}