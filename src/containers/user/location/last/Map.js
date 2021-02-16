import { connect } from 'react-redux';
import Map from '../../../../components/location/Map';

const MapLocationCaontainer = ({searchedLocation}) => {
 return (
   <div>
     {Object.values(searchedLocation).length > 0 && <Map location={searchedLocation}/>}
   </div>
 )
}

const mapStateToProps = (state) => ({
  searchedLocation: state.location.searchedLocation
})

export default connect(mapStateToProps, null)(MapLocationCaontainer)