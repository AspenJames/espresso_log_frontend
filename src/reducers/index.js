import { combineReducers } from 'redux';

import cafesReducer from './cafesReducer';
import coffeesReducer from './coffeesReducer';
import espressosReducer from './espressosReducer';
import userReducer from './userReducer';

export const rootReducer = combineReducers({
  cafes: cafesReducer,
  coffees: coffeesReducer,
  espressos: espressosReducer,
  user: userReducer
});