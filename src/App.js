import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { SignIn } from './Pages/SignIn'
import { Users } from './Pages/Users'
import { Navbar } from './Components/Navbar'
import { Home } from './Pages/Home'
import { Profile } from './Pages/Profile'
import { StartPage } from './Pages/StartPage'
import { Error } from './Components/Error'
import { Info } from './Pages/Info'

export const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Switch>
				<Route path='/' component={StartPage} exact />
				<Route path='/home' component={Home} exact />
				<Route path='/users' component={Users} exakt />
				<Route path='/signIn' component={SignIn} exakt />
				<Route path='/profile' component={Profile} exakt />
				<Route path='/info' component={Info} exakt />
				<Route path='/404' component={Error} exakt />
				<Redirect to='/404'/>
			</Switch>
		</BrowserRouter>
	)
}