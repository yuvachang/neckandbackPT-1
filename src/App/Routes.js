import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { Home, About, Services, Contact } from '../components'

export default function Routes() {
  return (
    <Route
      render={() => (
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/services' component={Services} />
          <Route path='/contact' component={Contact} />
          <Redirect from='*' to='/' component={() => null} />
        </Switch>
      )}
    />
  )
}
