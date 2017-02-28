var $ = require('jQuery');

module.exports = {
  parseIngredients: (meals) => {
    var parsedIngredients;

    parsedIngredients = meals.map((meal) => {
      return meal.ingredients.toLowerCase();
    })

    parsedIngredients = parsedIngredients.join(', ');

    return parsedIngredients;

  }
}
