import { default as TYPES } from './types';
import produce from 'immer';

const INIT_STATE = {
  showDrawer: true,
  stages: {
    location: {
      current: 'noData',
      searched: 'noData'
    }
  }
}

const appReducers = (state = INIT_STATE, action) => {
    switch(action.type) {
      case TYPES.APP_STAGE_SET_SEARCH_LOCATION: 
        return produce(state, draft => {
          draft.stages.location.searched = action.item;
        })
      case TYPES.APP_STAGE_SET_CURRENT_LOCATION: 
        return produce(state, draft => {
          draft.stages.location.current = action.item;
        })
      case TYPES.APP_DRAWER_TOGGLE: 
        return {
          ...state, showDrawer: !state.showDrawer
        }
      default: 
        return state  
    }
}

export default appReducers