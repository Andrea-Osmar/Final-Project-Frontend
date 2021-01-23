import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import { Users } from './Pages/Users'

export const App = () => {
  return (
  <BrowserRouter>
    <Switch>
  
        <Route path="/" exact>
        <Users />
      </Route>
    </Switch>
  </BrowserRouter>
  )
}
