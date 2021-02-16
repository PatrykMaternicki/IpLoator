import { default as TYPES } from './types';

const getCurrentLocation = (item) => ({
  type: TYPES.LOCATION_GET, item
})

const getLocationWithIp = (item) => ({
  type: TYPES.LOCATION_GET_IP, item
})

const setLocationToHistory = (item) => ({
  type: TYPES.LOCATION_SET_TO_HISTORY, item
})

const setLocationErrorType = (item) => ({
  type: TYPES.LOCATION_SET_ERROR_TYPE, item
})

const setLocationErrorMsg = (item) => ({
  type: TYPES.LOCATION_SET_ERROR_MSG, item
})

export default {
  getCurrentLocation,
  getLocationWithIp,
  setLocationToHistory,
  setLocationErrorType,
  setLocationErrorMsg
}