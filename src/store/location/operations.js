import { LocationActions } from './index.js'
import Client from '../../helpers/client';

export const getCurrentLocation = () =>
async (dispatch) => {
  const data = await Client.getCurrentLocation()
  dispatch(LocationActions.getCurrentLocation(data))
} 