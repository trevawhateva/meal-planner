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
            dispatch(actions.startAddToCalendar(id,date.unix()));
        }}/>;
      } else {
        return <p>{moment.unix(scheduledFor).format('MMM DD, YYYY')}</p>;
      }
    };

    return (
      <div className='meal'>
        <div>
          <p>{title}</p>
          <p className='meal__subtext'>{ingredients}</p>
        </div>
        <div className='date-picker'>
          {renderDate()}
        </div>
      </div>
    )
  }
});

export default connect()(Meal);
