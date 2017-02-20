var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
var DatePicker = require('react-datepicker');
import * as actions from 'actions';

export var Meal = React.createClass({
  render(){
    var { id, title, ingredients, scheduledFor, dispatch } = this.props;
    var renderDate = () => {
      if (!scheduledFor) {
        return <DatePicker placeholderText='Add to calendar' onChange={(date) => {
            dispatch(actions.startAddToCalendar(id, date.format('MMM DD, YYYY')));
        }}/>;
      } else {
        return <p>{scheduledFor}</p>;
      }
    };

    return (
      <div className='row meal'>
        <div className='column large-8'>
          <p>{title}</p>
          <p className='meal__subtext'>{ingredients}</p>
        </div>
        <div className='column large-4 date-picker'>
          {renderDate()}
        </div>
      </div>
    )
  }
});

export default connect()(Meal);
