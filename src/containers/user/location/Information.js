import { connect } from 'react-redux';

const Information = ({currentLocation}) => {
 return (
   <div>{Object.values(currentLocation).map(item => <p>{item}</p>)}</div>
 )
}

const mapStateToProps = (state) => ({
  currentLocation: state.location.current
})

export default connect(mapStateToProps, null)(Information)