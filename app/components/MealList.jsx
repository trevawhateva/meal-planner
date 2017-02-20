var React = require('react');
var {connect} = require('react-redux');
import Meal from 'Meal';

export var MealList = React.createClass({
  render(){
    var { meals } = this.props;
    var renderMeals = () => {
      if (meals.length === 0) {
        return (
          <div className='row meal'>
            <div className='column large-8'>
              <p className="container__message">No meals added yet!</p>
            </div>
          </div>
        );
      } else {
        return meals.map((meal) => {
          return (
            <Meal key={meal.id} {...meal}/>
          );
        });
      }
    }

    return (
      <div>
        {renderMeals()}
      </div>
    )
  }
})

export default connect(
  (state) => {
    return state;
  }
)(MealList);
