import React from 'react';
var {connect} = require('react-redux');
var moment = require('moment');
import Meal from 'Meal';

export var Week = React.createClass({
  formatWeek() {
    var days = [];
    for (var i = 0; i < 7; i++) {
      days.push(moment().add(i, 'days').format('dddd, MMM DD, YYYY'));
    }
    return days;
  },
  render() {
    var {meals} = this.props;
    var weekMeals = [];
    for (var i = 0; i < 7; i++) {
      weekMeals[i] = meals.filter((meal) => {
        return meal.scheduledFor === moment().add(i,'days').format('MMM DD, YYYY');
      })
    }
    var newWeekMeals = [].concat.apply([],weekMeals);

    var renderMeals = () => {
      if (newWeekMeals.length > 0) {
        return newWeekMeals.map((meal) => {
          return <Meal key={meal.id} {...meal}/>
        })
      } else {
        return <h5 className='meal'>No meals scheduled for the week!</h5>
      }
    }

    return (
      <div>
        <h1 className="page-title">Meals for the Week</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-8 large-7">
            <div className="container">
              {renderMeals()}
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
)(Week);
