import { default as TYPES } from './types';

const INIT_STATE = {
  current: {}
}

const locationReducers = (state = INIT_STATE, action) => {
    switch(action.type) {
      case TYPES.LOCATION_GET: {
        console.log(action.item)
        return {
          ...state, current: action.item
        }
      }
      default: 
        return state  
    }
}

export default locationReducers