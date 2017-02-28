import React from 'react'
import {connect} from 'react-redux'
var MealAPI = require('MealAPI');

export var Grocery = React.createClass({
  render() {
    var {meals} = this.props;

    var ingredients = [];
    var renderGroceries = () => {
      if (meals.length === 0) {
        return (
          <div className='row meal'>
            <div className='column large-8'>
              <p className="container__message">No meals added yet!</p>
            </div>
          </div>
        )
      } else {
        ingredients = MealAPI.parseIngredients(meals);
        console.log(ingredients);
        return (
          <div className='row meal'>
            <div className='column large-8'>
              <p className="container__message">{ingredients}</p>
            </div>
          </div>
        )
      }
    }
    return (
      <div>
        <h1 className="page-title">Grocery List</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-7 large-6">
            <div className="container">
              {renderGroceries()}
            </div>
          </div>
        </div>
      </div>
    )
  }
})

export default connect(
  (state) => {
    return state;
  }
)(Grocery);
