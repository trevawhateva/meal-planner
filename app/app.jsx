import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'

import AppContainer from 'AppContainer'
import Grocery from 'Grocery'
import Meals from 'Meals'
import Today from 'Today'
import Week from 'Week'

// load foundation
$(document).foundation();

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path='/' component={AppContainer}>
      <IndexRoute component={Today}/>
      <Route path='today' component={Today}/>
      <Route path='week' component={Week}/>
      <Route path='meals' component={Meals}/>
      <Route path='grocery' component={Grocery}/>
    </Route>
  </Router>
), document.getElementById('app'))
