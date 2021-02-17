import { combineReducers } from 'redux';
import LocationReducer from './location';
import AppReducer from './app';

const createReducer = () => combineReducers({
  location: LocationReducer,
  app: AppReducer
})

export default createReducer;