
import { connect } from 'react-redux'
import Card from '../../../../components/location/Card'

const InformationContainer = ({searchedLocation}) => {
  return (
   <div>
      <Card information={searchedLocation} />
   </div>
  )
}

const mapStateToProps = (state) => ({
  searchedLocation: state.location.searchedLocation
})

export default connect(mapStateToProps, null)(InformationContainer)