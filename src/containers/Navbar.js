

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';
import { AppActions } from '../store/app';

const Navbar = ({toggleDrawer}) => (
  <AppBar position="sticky">
    <Toolbar variant="dense">
      <IconButton edge="start" onClick={toggleDrawer} color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" color="inherit">
        IpLocator
      </Typography>
    </Toolbar>
  </AppBar>
)

const mapDispatchToProps = (dispatch) => ({
  toggleDrawer: () => dispatch(AppActions.toggleDrawer())
})

export default connect(null, mapDispatchToProps)(Navbar)