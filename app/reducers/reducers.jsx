export var mealsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [
        ...state,
        action.meal
      ];
    case 'ADD_MEALS':
      return [
        ...state,
        ...action.meals
      ];
    case 'ADD_TO_CALENDAR':
      return [
        ...state,
        action.meal.scheduledFor
      ];
    default:
      return state;
  }
}
