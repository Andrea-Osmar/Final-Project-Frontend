import React from 'react'
import { Link } from 'react-router-dom'

export const Info = () => {
	return (
		<section className='info-wrapper'>
			<div className='info-container'>
				<h1 className='info-header'>About En Bostad</h1>
				<p className='info-text'>
					En Bostad is the final project for{' '}
					<a
						href='https://www.technigo.io/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Technigo Front End Bootcamp.
					</a>{' '}
					The project was created during the last sprint of 4 weeks. The idea
					for the project came to mind after a talk with my tech mentor. The
					housing situation in Stockholm has been a problem for years, there are
					not enough rental apartments and they are usually hard to find. The
					idea for the project was to make it easier for the user to find out
					what apartments that are available and also what they are entitled to
					apply for. The future of this project is to connect apartments from
					more places then Bostadsförmedlingen and maybe expand the page to
					different cities as well.
				</p>
				<p className='info-details'>
					All images are from{' '}
					<a
						href='https://unsplash.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Unsplash
					</a>
				</p>
				<p className='info-details'>
					Icons are from{' '}
					<a
						href='https://fontawesome.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Font Awesome
					</a>
				</p>
				<p className='info-details'>
					Fonts are from{' '}
					<a
						href='https://fonts.google.com/'
						target='_blank'
						rel='noopener noreferrer'
					>
						{' '}
						Google Fonts
					</a>
				</p>
			</div>
			<div className='info-container'>
				<h1 className='info-header'> Developed by: Andrea Osmar</h1>
				<p className='info-text'>
					Hi, I'm Andrea. I am a newly graduated Frontend developer with a
					background in the Hospitality industry. I enjoy creating and designing
					websites mainly in React. Check out my{' '}
					<a
						href='https://andreaosmar.netlify.app/'
						target='_blank'
						rel='noopener noreferrer'
					>
						Portfolio
					</a>{' '}
					here.
				</p>
				<div className='info-icons-wrapper'>
					<span className='info-icons'>
						<a
							href='https://www.linkedin.com/in/andrea-osmar-9855b6b1/'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-linkedin' />
						</a>
					</span>
					<span className='info-icons'>
						<a
							href='mailto:andrea88@live.se'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='far fa-envelope' />
						</a>
					</span>
					<span className='info-icons'>
						<a
							href='https://github.com/Andrea-Osmar'
							target='_blank'
							rel='noopener noreferrer'
						>
							<i className='fab fa-github-square' />
						</a>
					</span>
				</div>
			</div>
			<Link to='/home' className='start-button-link'>
				<button className='start-button'>Back Home</button>
			</Link>
		</section>
	)
}