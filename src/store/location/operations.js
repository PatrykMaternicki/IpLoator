import { LocationActions } from './index.js'
import { AppActions } from '../app/index.js'
import Client from '../../helpers/client';
import IpValidator from '../../helpers/ipValidator';
import UrlValidator from '../../helpers/urlValidator';
import uuidGenerator from '../../helpers/uuidGenerator';
import KeyGenerator from '../../helpers/keyGenerator';
import SessionService from '../../helpers/sessionService';


export const getCurrentLocation = () =>
async (dispatch) => {
  dispatch(AppActions.setAppStageLocationCurrent('loading'))
  const data = await Client.getCurrentLocation()
  dispatch(LocationActions.getCurrentLocation(data))
  dispatch(AppActions.setAppStageLocationCurrent('loaded'))
} 

export const searchForIp = (ip) =>
async (dispatch) => {
  if(IpValidator.validIp() && UrlValidator.validUrl(ip)) {
    dispatch(LocationActions.setLocationErrorType('invalid'))
    dispatch(LocationActions.setLocationErrorMsg())
    dispatch(AppActions.setAppStageLocationSearch('noData'))
    return
  }
  
  const data = await Client.getLocationWithIp(ip)
  if(data.status === "fail") {
    dispatch(LocationActions.setLocationErrorType('invalid'))
    dispatch(LocationActions.setLocationErrorMsg())
    dispatch(AppActions.setAppStageLocationSearch('noData'))
  } else {
    dispatch(LocationActions.getLocationWithIp(data))
    dispatch(LocationActions.setLocationToHistory(data))
    dispatch(AppActions.setAppStageLocationSearch('loaded'))
    const keyGenerator = new KeyGenerator(uuidGenerator.generate(), data)
    SessionService.setValue(keyGenerator.getKey(), keyGenerator.getValues())
  }
}