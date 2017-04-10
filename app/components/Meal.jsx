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
        return (
          <div className='row scheduled'>
            <div className='column'>
              <p>{scheduledFor}</p>
            </div>
            <div className='column'>
              <button aria-label="Close alert" type="button" onClick={() => {
                dispatch(actions.startAddToCalendar(id, null));
              }}>
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          </div>
        )
      }
    };

    return (
      <div className='row meal'>
        <div className='column large-7'>
          <p>{title} <a href='#' onClick={(e) => {
            e.preventDefault();
            dispatch(actions.startDeleteMeal(id));
          }}>delete</a></p>
          <p className='meal__subtext'>{ingredients}</p>
        </div>
        <div className='column large-5 date-picker'>
          {renderDate()}
        </div>
      </div>
    )
  }
});

export default connect()(Meal);
