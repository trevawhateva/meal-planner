import React from 'react'

var MealSearch = require('MealSearch');
import MealList from 'MealList';
var AddMeal = require('AddMeal');

var MealsContainer = React.createClass({
  render(){
    return (
      <div>
        <h1 className="page-title">Manage Meals</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-7 large-7">
            <div className="container">
              <MealSearch/>
              <MealList/>
              <AddMeal/>
            </div>
          </div>
        </div>
      </div>
    )
  }
})

module.exports = MealsContainer;
