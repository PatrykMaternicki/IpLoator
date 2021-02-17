import { connect } from 'react-redux';
import Map from '../../../components/location/Map';
import Preloader from '../../../components/Preloader';
import CardLayout from '../../../Layouts/Card';

const UserLocation = ({currentLocation, stage}) => {
  return (
    <CardLayout>
      {stage !== 'loaded' ? <Preloader state={stage} /> : <Map location={currentLocation}/>}
    </CardLayout>
  )
}

const mapStateToProps = (state) => ({
  currentLocation: state.location.current,
  stage: state.app.stages.location.current
})

export default connect(mapStateToProps, null)(UserLocation)