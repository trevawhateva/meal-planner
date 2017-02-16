import * as redux from 'redux'
import thunk from 'redux-thunk'

//import reducers here when they are made
// import {searchTextReducer, showCompletedReducer, todosReducer, authReducer} from 'reducers';
import {mealsReducer} from 'reducers';

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    meals: mealsReducer
    // searchText: searchTextReducer,
    // showCompleted: showCompletedReducer,
    // todos: todosReducer,
    // auth: authReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
}
