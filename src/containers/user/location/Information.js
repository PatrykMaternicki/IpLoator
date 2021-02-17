import Preloader from '../../../components/Preloader';
import CardLocation from '../../../components/location/Card';
import { connect } from 'react-redux';
import CardLayout from '../../../Layouts/Card';

const Information = ({currentLocation, stage}) => {
  return (
    <CardLayout>
      { stage !== 'loaded' ? <Preloader state={stage}/> : <CardLocation information={currentLocation} />}
    </CardLayout>
  )
}

const mapStateToProps = (state) => ({
  currentLocation: state.location.current,
  stage: state.app.stages.location.current
})

export default connect(mapStateToProps, null)(Information)