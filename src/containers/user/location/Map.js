import { connect } from 'react-redux';
import Map from '../../../components/location/Map';

const UserLocation = ({currentLocation}) => {
 return (
   <div>
     {Object.values(currentLocation).length > 0 && <Map location={currentLocation}/>}
   </div>
 )
}

const mapStateToProps = (state) => ({
  currentLocation: state.location.current
})

export default connect(mapStateToProps, null)(UserLocation)