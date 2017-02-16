import React from 'react';
import {Link} from 'react-router';

var Nav = React.createClass({
  render() {
    return (
      <div className='top-bar'>
        <div className='top-bar-left'>
          <ul className='menu'>
            <li className='menu-text'>Meal Planner</li>
            <li><Link to='/today'>Today</Link></li>
            <li><Link to='/week'>Week</Link></li>
            <li><Link to='/meals'>Manage Meals</Link></li>
            <li><Link to='/grocery'>Grocery List</Link></li>
          </ul>
        </div>
      </div>
    )
  }
})

module.exports = Nav;
