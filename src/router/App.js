import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from '../pages/Home'
import Login from '../pages/Login'

export default function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
      </Switch>
    </BrowserRouter>
  )
}
