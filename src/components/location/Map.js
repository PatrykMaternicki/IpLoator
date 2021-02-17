import { GoogleApiWrapper, Map, Marker } from 'google-maps-react';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    position: 'absolute',
    boxShadow: 'inherit',
    width: '100%',
    height: '100%',
    top: 0,
    left: 0,
    padding: 0
  },
});

const GoogleMap = (props) => {
  const classes = useStyles()
  return (
    <CardContent className={classes.card}>
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
    </CardContent>
  )
}

export default GoogleApiWrapper({
    api: null
})(GoogleMap)
