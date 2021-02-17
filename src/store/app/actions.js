import { default as TYPES } from './types';

const setAppStageLocationCurrent = (item) => ({
  type: TYPES.APP_STAGE_SET_CURRENT_LOCATION, item
})

const setAppStageLocationSearch = (item) => ({
  type: TYPES.APP_STAGE_SET_SEARCH_LOCATION, item
})

export default {
  setAppStageLocationCurrent,
  setAppStageLocationSearch
}