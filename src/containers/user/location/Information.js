import { connect } from 'react-redux';
import Card from '../../../components/location/Card'

const Information = ({currentLocation}) => {
 return (
   <div>
      {Object.values(currentLocation).length > 0 && <Card information={currentLocation} />}
   </div>
 )
}

const mapStateToProps = (state) => ({
  currentLocation: state.location.current
})

export default connect(mapStateToProps, null)(Information)