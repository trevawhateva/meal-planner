var React = require('react');
var {connect} = require('react-redux');
var moment = require('moment');
import * as actions from 'actions';

var Meal = React.createClass({
  render(){
    var { title, ingredients } = this.props;
    return (
      <div>
        <p>{title}</p>
        <p>{ingredients}</p>
      </div>
    )
  }
})

module.exports = Meal;
