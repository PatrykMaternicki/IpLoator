import { default as TYPES } from './types';
import ErrorMsg from '../../dictonaries/error_message.json';

const INIT_STATE = {
  current: {},
  searchedLocation: {},
  history: [],
  errorType: undefined,
  errorMsg: undefined
}

const locationReducers = (state = INIT_STATE, action) => {
    switch(action.type) {
      case TYPES.LOCATION_GET: {
        return {
          ...state, current: action.item
        }
      }
      case TYPES.LOCATION_GET_IP: {
        return {
          ...state, searchedLocation: action.item
        }
      }
      case TYPES.LOCATION_SET_TO_HISTORY: {
        return {
          ...state, history: [...state.history, action.item]
        }
      }
      case TYPES.LOCATION_SET_ERROR_TYPE: {
        return {
          ...state, errorType: action.item
        }
      }
      case TYPES.LOCATION_SET_ERROR_MSG: {
        return {
          ...state, errorMsg: !action.item ? ErrorMsg[state.errorType] : undefined
        }
      }
      default: 
        return state  
    }
}

export default locationReducers