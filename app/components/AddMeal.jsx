import React from 'react'
var {connect} = require('react-redux');
import * as actions from 'actions';

export var AddMeal = React.createClass({
  handleSubmit(e){
    e.preventDefault();
    var {dispatch} = this.props;
    var mealTitle = this.refs.mealTitle.value;
    var ingredients = this.refs.ingredients.value;

    if (mealTitle.length > 0 && ingredients.length > 0) {
      //dispatch action
      this.refs.mealTitle.value = '';
      this.refs.ingredients.value = '';
      dispatch(actions.startAddMeal(mealTitle, ingredients));
    } else {
      alert('Please enter both a meal title and ingredients list.')
    }
  },
  render(){
    return (
      <div className="container__footer">
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="mealTitle" placeholder="Enter meal name"/>
          <input type="text" ref="ingredients" placeholder="Enter ingredients separated by commas"/>
          <button className="button expanded">Add Meal</button>
        </form>
      </div>
    )
  }
})

module.exports = connect()(AddMeal);
