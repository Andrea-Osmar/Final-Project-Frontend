import React from 'react'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <section className='start-container'>
      <h1>Lägenheter i Stockholm</h1>
    <div className='start-wrapper'>
      <div className='start-image'>
        </div>
        <div className='start-text'>
          <h3>Sidan om lägenheter</h3>
          En Bostad är en sida där det finns lägenheter.
          Det finns massa lägenheter, både stora och små. 
          En lägenhet här och en lägenhet där. 
          Sign up, och logga in, här kan du hitta en lägenhet som passar
          både dig och familjen. 
          Hej och Hå ett och två 
          <button className="start-button">
          <Link to='/home'>
            Hem
            </Link> 
        </button>
        </div>
      </div>
    </section>
  )
}

