import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

//import { SignIn } from './Pages/SignIn'
import { Users } from "./Pages/Users"
import { Navbar } from "./Components/Navbar"
import { List } from "./Pages/List"

export const App = () => {
  return (
  <BrowserRouter>
	<Navbar />
    <Switch>
      <Route path="/">
        <List />
      </Route>
      <Route path="/users" component={Users}>
        <Users />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}

//TODO: 
// Import Google Map - Connect to list
// Fix Personal Page
// Fix sign in component
// Create save function for list
// Create Search function for list
// Fix Navbar 
// Add Loader
// Add page not found