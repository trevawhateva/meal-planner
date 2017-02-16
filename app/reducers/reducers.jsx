export var mealsReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_MEAL':
      return [
        ...state,
        action.todo
      ];
    case 'ADD_MEALS':
      console.log(action.meals);
      return [
        ...state,
        ...action.meals
      ];
    default:
      return state;
  }
}
