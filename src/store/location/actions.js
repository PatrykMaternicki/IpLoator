import { default as TYPES } from './types';

const getCurrentLocation = (item) => ({
  type: TYPES.LOCATION_GET, item
})

export default {
  getCurrentLocation
}