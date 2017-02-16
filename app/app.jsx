import React from 'react'
import ReactDOM from 'react-dom'
import { Route, Router, IndexRoute, hashHistory } from 'react-router'
import * as actions from 'actions'
var {Provider} = require('react-redux');
var store = require('configureStore').configure();

var Main = require('Main');
var MealsContainer = require('MealsContainer');
import Grocery from 'Grocery'
import Today from 'Today'
import Week from 'Week'

// load foundation
$(document).foundation();

// fetches meals from firebase to populate MealList
store.dispatch(actions.startAddMeals());

// app css
require('style!css!sass!applicationStyles');

ReactDOM.render((
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path='/' component={Main}>
        <IndexRoute component={Today}/>
        <Route path='/today' component={Today}/>
        <Route path='/week' component={Week}/>
        <Route path='/meals' component={MealsContainer}/>
        <Route path='/grocery' component={Grocery}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'))
