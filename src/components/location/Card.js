import CardContent from '@material-ui/core/CardContent';
import LocationList from './List'

const LocationCard = ({information}) => (
  <CardContent>
    <LocationList information={information} />
  </CardContent>
)

export default LocationCard