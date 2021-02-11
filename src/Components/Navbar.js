import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMobileMenu = () => setClick(false)
  const tokenFromStorage = () => window.localStorage.getItem('tokenAuth') || ''
  const [token] = useState(tokenFromStorage)

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link to="/home" className="navbar-logo">
            <h1 className="navbar-head">En Bostad </h1>
            <p className="navbar-header">Lägenheter i Stockholm</p>
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Startsida
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/home" className="nav-links" onClick={closeMobileMenu}>
                Hem
              </Link>
            </li>
            {token && (
              <li className="nav-item">
                <Link
                  to="/profile"
                  token={token}
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Min Sida
                </Link>
              </li>
            )}
            {token && (
              <li className="nav-item">
                <Link
                  to="/users"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Logga Ut
                </Link>
              </li>
            )}
            {!token && (
              <li className="nav-item">
                <Link
                  to="/users"
                  className="nav-links"
                  onClick={closeMobileMenu}
                >
                  Logga In
                </Link>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}