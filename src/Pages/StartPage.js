import React from 'react'
import { Link } from 'react-router-dom'

import { Footer } from '../Components/Footer'

export const StartPage = () => {
	return (
		<>
			<section className='start-container'>
				<div className='start-text'>
					<h3 className='header'>En Bostad</h3>
					Sidan där du hittar lediga hyreslägenheter i Stockholm.
					<br />
					En Bostad är platsen där alla kan hitta hem. Vare sig du letar efter
					din första lägenhet eller ett hem till din stora familj.
					<Link to='/home' className='start-button-link'>
						<button className='start-button'>Hitta Hem</button>
					</Link>
				</div>
			</section>
			<Footer />
		</>
	)
}