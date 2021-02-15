import { combineReducers } from 'redux';
import LocationReducer from './location';

const createReducer = () => combineReducers({
  location: LocationReducer
})

export default createReducer;