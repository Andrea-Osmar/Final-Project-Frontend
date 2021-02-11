import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

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
    <main className='main-container'>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact>
            <StartPage />
          </Route>
          <Route path='/home' exact>
            <Home />
          </Route>
          <Route path='/users' exakt>
            <Users />
          </Route>
          <Route path='/signIn' exakt>
            <SignIn />
          </Route>
          <Route path='/profile' exakt>
            <Profile />
          </Route>
          <Route path='/error' exakt>
            <Error />
          </Route>
          <Route path='/info' exakt>
            <Info />
          </Route>
        </Switch>
      </BrowserRouter>
    </main>
  )
}