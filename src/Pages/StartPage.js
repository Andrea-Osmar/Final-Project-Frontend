import React from 'react'
import { Link } from 'react-router-dom'

export const StartPage = () => {
  return (
    <section className='start-container'>
        <div className='start-text'>
          <h3 className="start-logo">En Bostad</h3>
          Sidan där du hittar lediga hyres lägenheter i Stockholm.<br/> 
          En Bostad är platsen där alla kan hitta hem. <br/>
          Vare sig du letar efter din första lägenhet eller 
          ett hem till din stora familj. 
          <button className="start-button">
          <Link to='/home' className='start-button-link'>
            Hitta Hem
            </Link> 
        </button>
        </div>
    </section>
  )
}



/*
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
*/