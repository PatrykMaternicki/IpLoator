
import { connect } from 'react-redux'
import CardLocation from '../../../../components/location/Card'
import Preloader from '../../../../components/Preloader';
import CardLayout from '../../../../Layouts/Card';

const InformationContainer = ({searchedLocation, stage}) => (
  <CardLayout>
    {stage !== 'loaded' ? <Preloader state={stage} /> : <CardLocation information={searchedLocation}/>}
  </CardLayout>
)

const mapStateToProps = (state) => ({
  searchedLocation: state.location.searchedLocation,
  stage: state.app.stages.location.searched
})

export default connect(mapStateToProps, null)(InformationContainer)