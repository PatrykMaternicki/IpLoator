import { GoogleApiWrapper, InfoWindow, Map, Marker } from 'google-maps-react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  card: {
    position: 'relative',
    boxShadow: 'inherit'
  },
});

const GoogleMap = (props) => {
  const setCardClasses = () => ({
    position: 'absolute',
    boxShadow: 'inherit',
    width: '100%',
    height: '100%'
  })
  console.log(props.location.lat)
  return(
    <Card
    style={setCardClasses()}
  >
    <div className='wraper'>
        <Map
        item
        xs = { 12 }
        google = { props.google }
        zoom = { 14 }
        initialCenter = {{ lat: `${props.location.lat}`, lng: props.location.lon }}
        >
        <Marker
          position = {{ lat: props.location.lat, lng: props.location.lon }}
        />
        </Map>
    </div>
  </Card>
  )
}

export default GoogleApiWrapper({
    api: 'AIzaSyCaqnLM1SVrvL3kQshw_XDulLz383P6vig'
})(GoogleMap)
