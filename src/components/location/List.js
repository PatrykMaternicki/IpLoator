import Typography from '@material-ui/core/Typography';
import RoomIcon from '@material-ui/icons/Room';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocalPostOfficeIcon from '@material-ui/icons/LocalPostOffice';
import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import PersonIcon from '@material-ui/icons/Person';
import LanguageIcon from '@material-ui/icons/Language';
import MapIcon from '@material-ui/icons/Map';
import React from 'react';

const LocationList = ({information}) => (
  <React.Fragment>
    <Typography variant="h5" component="h2">
    <LanguageIcon />
      {information.searchedQuery ? information.searchedQuery : information.query}
    </Typography>
    <Typography>
      <RoomIcon />
        Country: {information.country}, Region: {information.regionName}
    </Typography>
    <List component="nav" aria-label="main mailbox folders">
      <ListItem>
        <ListItemIcon>
          <LocationCityIcon />
        </ListItemIcon>
        <ListItemText primary={`City: ${information.city}`} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <LocalPostOfficeIcon />
        </ListItemIcon>
        <ListItemText primary={`Zip Code: ${information.zip}`} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <QueryBuilderIcon />
        </ListItemIcon>
        <ListItemText primary={`Timezone: ${information.timezone}`} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <PersonIcon />
        </ListItemIcon>
        <ListItemText primary={`ISP: ${information.isp}`} />
      </ListItem>
      <ListItem>
        <ListItemIcon>
          <MapIcon />
        </ListItemIcon>
        <ListItemText primary={`lat: ${information.lat} lon:${information.lon}`} />
      </ListItem>
    </List>
  </React.Fragment>
)

export default LocationList