import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { SignIn } from "./Pages/SignIn"
import { Users } from "./Pages/Users"
import { Navbar } from "./Components/Navbar"
import { List } from "./Pages/List"

import { GetData } from './Pages/GetData'
import { SaveData } from './Components/SaveData'

export const App = () => {

  return (
    <main>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <SaveData />
        </Route>
        <Route path="/users" exakt>
          <Users />
        </Route>
        <Route path="/signIn" exakt>
          <SignIn />
        </Route>
        <Route path="/GetData" exakt>
          <GetData />
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