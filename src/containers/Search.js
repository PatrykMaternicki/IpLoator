import Search from '../components/Search';
import { connect } from 'react-redux';
import {searchForQuery } from '../store/location/operations';
import { LocationActions } from '../store/location';
import { AppActions } from '../store/app';

const SearchContainer = ({searchForQuery, errorMsg, clearError}) => (
  <Search 
    errorMsg={errorMsg} 
    clearError={clearError}
    searchForQuery={searchForQuery}
  />
)

const mapStateToProps = (state) => ({
  errorMsg: state.location.errorMsg
})

const mapDispatchToProps = (dispatch) => ({
  searchForQuery: (query) => {
    dispatch(AppActions.setAppStageLocationSearch('loading'))
    dispatch(searchForQuery(query))
  },
  clearError: () => {
    dispatch(LocationActions.setLocationErrorType(undefined))
    dispatch(LocationActions.setLocationErrorMsg(undefined))
  }
})
export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer)

