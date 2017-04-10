import moment from 'moment';

import firebase, {firebaseRef, githubProvider} from 'app/firebase/';

export var addMeal = (meal) => {
  return {
    type: 'ADD_MEAL',
    meal
  };
};

export var startAddMeal = (title, ingredients) => {
  return (dispatch, getState) => {
    var meal = {
      title,
      ingredients,
      scheduledFor: null
    };
    var mealRef = firebaseRef.child('meals').push(meal);

    return mealRef.then(() => {
      dispatch(addMeal({
        ...meal,
        id: mealRef.key
      }));
    });
  };
};

export var addMeals = (meals) => {
  return {
    type: 'ADD_MEALS',
    meals
  };
};

export var startAddMeals = () => {
  return (dispatch, getState) => {
    var mealsRef = firebaseRef.child('meals');

    return mealsRef.once('value').then((snapshot) => {
      var meals = snapshot.val() || {};
      var parsedMeals = [];

      Object.keys(meals).forEach((mealId) => {
        parsedMeals.push({
          id: mealId,
          ...meals[mealId]
        });
      });

      dispatch(addMeals(parsedMeals));
    });
  };
};

export var addToCalendar = (id, updates) => {
  return {
    type: 'ADD_TO_CALENDAR',
    id,
    updates
  };
};

export var startAddToCalendar = (id,date) => {
  return (dispatch, getState) => {
    var mealRef = firebaseRef.child(`meals/${id}`);
    var updates = {
      scheduledFor: date
    };

    return mealRef.update(updates).then(() => {
      dispatch(addToCalendar(id,updates));
    });
  };
};

export var deleteMeal = () => {
  return {
    type: 'DELETE_MEAL'
  };
};

export var startDeleteMeal = (id) => {
  return (dispatch, getState) => {
    var mealRef = firebaseRef.child(`meals/${id}`);

    return mealRef.remove().then(() => {
      dispatch(deleteMeal(id));
    });
  };
};
