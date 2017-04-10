var $ = require('jQuery');

module.exports = {
  parseIngredients: (meals) => {
    var parsedIngredients;

    // result will look like ["list, of, ingredients", "list, of, ingredients", etc...]
    parsedIngredients = meals.map((meal) => {
      return meal.ingredients.toLowerCase();
    })

    // This takes an array of multiple lists, makes it all one list, deduplicates the list,
    // and joins it back as an array of individual ingredients.
    parsedIngredients = parsedIngredients.join(', ')
                                         .split(', ')
                                         .filter((el,i,arr) => {
                                           return arr.indexOf(el) === i;
                                         });

    return parsedIngredients;

  }
}
