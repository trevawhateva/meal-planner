import React from 'react';
var {connect} = require('react-redux');
var moment = require('moment');
import * as actions from 'actions';
import firebase, {firebaseRef} from 'app/firebase/';
import Meal from 'Meal';

export var Today = React.createClass({
  render() {
    var { meals, id } = this.props;
    var today = moment().format('MMM DD, YYYY');
    var scheduledForToday = meals.filter((meal) => {
      return meal.scheduledFor === today;
    });

    var renderToday = () => {
      if (scheduledForToday.length > 0) {
        return scheduledForToday.map((meal) => {
          return <Meal key={meal.id} {...meal}/>
        })
      } else {
        return <h3>No meals scheduled for today!</h3>
      }
    }
    
    return (
      <div>
        <h1 className="page-title">Today's Meals</h1>
        <div className="row">
          <div className="column small-centered small-11 medium-8 large-7">
            <div className="container">
              {renderToday()}
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
)(Today);
