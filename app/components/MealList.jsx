var React = require('react');
var {connect} = require('react-redux');
var Meal = require('Meal');

export var MealList = React.createClass({
  render(){
    var {meals} = this.props;
    var renderMeals = () => {
      if (meals.length === 0) {
        return (
          <p className="container__message">No meals added yet!</p>
        );
      } else {
        console.log(meals[0]);
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
