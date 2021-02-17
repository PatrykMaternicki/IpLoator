import { connect } from 'react-redux';
import Map from '../../../../components/location/Map';
import Preloader from '../../../../components/Preloader';
import CardLayout from '../../../../Layouts/Card';

const MapLocationCaontainer = ({searchedLocation, stage}) => {
  return (
    <CardLayout>
      { stage !== 'loaded' ? <Preloader state={stage} /> : <Map location={searchedLocation}/>}
    </CardLayout>
  )
}

const mapStateToProps = (state) => ({
  searchedLocation: state.location.searchedLocation,
  stage: state.app.stages.location.searched
})

export default connect(mapStateToProps, null)(MapLocationCaontainer)