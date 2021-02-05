import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { SignIn } from "./Pages/SignIn"
import { Users } from "./Pages/Users"
import { Navbar } from "./Components/Navbar"
import { List } from "./Pages/List"

import { Profile } from './Pages/Profile'
import { StartPage } from './Pages/StartPage'
export const App = () => {

  return (
    <main>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <StartPage />
        </Route>
        <Route path="/home" exact>
          <List />
        </Route>
        <Route path="/users" exakt>
          <Users />
        </Route>
        <Route path="/signIn" exakt>
          <SignIn />
        </Route>
        <Route path="/profile" exakt>
          <Profile />
        </Route>
      </Switch>
    </BrowserRouter>
    </main>
  )
}


//TODO:
// Import Google Map - Connect to list
// Fix Personal Page
// Fix sign in component - DONE
// Create save function for list
// Create Search function for list
// Fix Navbar
// Add Loader
// Add page not found