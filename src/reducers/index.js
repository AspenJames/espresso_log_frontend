import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import cafesReducer from './cafesReducer';
import coffeesReducer from './coffeesReducer';
import espressosReducer from './espressosReducer';
import userReducer from './userReducer';

export default (history) => combineReducers({
  router: connectRouter(history),
  cafes: cafesReducer,
  coffees: coffeesReducer,
  espressos: espressosReducer,
  user: userReducer
});