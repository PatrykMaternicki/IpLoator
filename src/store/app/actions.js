import { default as TYPES } from './types';

const setAppStageLocationCurrent = (item) => ({
  type: TYPES.APP_STAGE_SET_CURRENT_LOCATION, item
})

const setAppStageLocationSearch = (item) => ({
  type: TYPES.APP_STAGE_SET_SEARCH_LOCATION, item
})

const toggleDrawer = () => ({
  type: TYPES.APP_DRAWER_TOGGLE
})

export default {
  setAppStageLocationCurrent,
  setAppStageLocationSearch,
  toggleDrawer
}