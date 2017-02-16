import React from 'react'

var MealSearch = React.createClass({
  render(){
    return (
      <div className='container__header'>
        <div>
          <input type='search' ref='searchText' placeholder='Search Meals'/>
        </div>
      </div>
    )
  }
})

module.exports = MealSearch;
