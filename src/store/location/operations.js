import { LocationActions } from './index.js'
import { AppActions } from '../app/index.js'
import Client from '../../helpers/client';
import IpValidator from '../../helpers/ipValidator';
import UrlValidator from '../../helpers/urlValidator';
import uuidGenerator from '../../helpers/uuidGenerator';
import KeyGenerator from '../../helpers/keyGenerator';
import SessionService from '../../helpers/sessionService';

const runActionError = (dispatch) => {
  dispatch(LocationActions.setLocationErrorType('invalid'))
  dispatch(LocationActions.setLocationErrorMsg())
  dispatch(AppActions.setAppStageLocationSearch('noData'))
}

export const getCurrentLocation = () =>
async (dispatch) => {
  dispatch(AppActions.setAppStageLocationCurrent('loading'))
  const data = await Client.getCurrentLocation()
  dispatch(LocationActions.getCurrentLocation(data))
  dispatch(AppActions.setAppStageLocationCurrent('loaded'))
} 

export const searchForQuery = (query) =>
async (dispatch) => {
  if(!IpValidator.validIp(query) && !UrlValidator.validUrl(query)) {
    runActionError(dispatch)
    return
  }
  
  const data = await Client.getLocationWithQuery(query)
  if(data.status === "fail") {
    runActionError(dispatch)
  } else {
    data.searchedQuery = query
    dispatch(LocationActions.getLocationWithIp(data))
    dispatch(LocationActions.setLocationToHistory(data))
    dispatch(AppActions.setAppStageLocationSearch('loaded'))
    const keyGenerator = new KeyGenerator(uuidGenerator.generate(), data)
    SessionService.setValue(keyGenerator.getKey(), keyGenerator.getValues())
  }
}
