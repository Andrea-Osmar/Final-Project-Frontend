import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Login } from './Pages/Login'
export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
      <Route path="/login">
        <Login />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
