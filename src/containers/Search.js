import Search from '../components/Search';
import { connect } from 'react-redux';
import {searchForIp } from '../store/location/operations';
import { LocationActions } from '../store/location';
import { AppActions } from '../store/app';

const SearchContainer = ({searchForIp, errorMsg, clearError}) => {
  return (
    <div>
      <Search 
        errorMsg={errorMsg} 
        clearError={clearError}
        searchForIp={searchForIp}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({
  errorMsg: state.location.errorMsg
})

const mapDispatchToProps = (dispatch) => ({
  searchForIp: (ip) => {
    dispatch(AppActions.setAppStageLocationSearch('loading'))
    dispatch(searchForIp(ip))
  },
  clearError: () => {
    dispatch(LocationActions.setLocationErrorType(undefined))
    dispatch(LocationActions.setLocationErrorMsg(undefined))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

