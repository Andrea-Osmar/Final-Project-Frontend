import React from 'react'
import { Link } from 'react-router-dom'

export const Error = () => {
	return (
		<section className='error-container'>
			<h1>Något gick fel.. Gå tillbaka</h1>
			<img
				className='error-image'
				src='https://media1.giphy.com/media/3o6MbkBbeZx4QLOs4U/source.gif'
				alt='house gif'
			/>
			<Link to='/home'>
				<button className='error-button'>Hem</button>
			</Link>
		</section>
	)
}