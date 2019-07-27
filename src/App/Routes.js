import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
// import { Home, About, Services, Contact } from '../components'
import Home from '../Home/Home'
import About from '../About/About'
import Services from '../Services/Services'
import Contact from '../Contact/Contact'

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
