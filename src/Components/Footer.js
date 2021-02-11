import React from 'react'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <footer className="footer-wrapper">
      <div className="footer-section">
        <h5>Om oss</h5>
        <p className="footer-text">
          Detta är ett projekt skapat för Technigo Bootcamp.
        </p>
      </div>
      <div className="footer-section">
        <h5>Kontakta oss</h5>
        <p className="footer-info">Kundservice</p>
        <p className="footer-info">Press</p>
        <p className="footer-info">Jobba hos oss</p>
      </div>
      <div className="footer-section">
        <h5>Följ oss</h5>
        <span className="footer-icons">
          <i className="far fa-envelope"></i>
        </span>
        <span className="footer-icons">
          <i className="fab fa-instagram"></i>
        </span>
        <span className="footer-icons">
          <i className="fab fa-facebook-square"></i>
        </span>
        <Link to="/info" className="footer-button-link">
          <button className="footer-button">Mer information</button>
        </Link>
      </div>
    </footer>
  )
}