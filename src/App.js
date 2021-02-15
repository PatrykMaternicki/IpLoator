
import Navbar from './containers/Navbar'
import Aside from './containers/Aside';
import Map from './containers/user/location/Map';
import Information from './containers/user/location/Information';
import Search from './containers/user/location/Search';
import LastMap from './containers/user/location/last/Map';
import LastInformation from './containers/user/location/Information'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import React, { useEffect } from 'react'
import CssBaseline from '@material-ui/core/CssBaseline';
import { getCurrentLocation } from './store/location/operations';
import { connect } from 'react-redux';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(12, 1fr)',
    gridGap: theme.spacing(3),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    whiteSpace: 'nowrap',
    marginBottom: theme.spacing(1),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const App = ({ getLocation })  => {
  const classes = useStyles();
  useEffect(() => getLocation(), [])
  return (
    <div className="App">
      <CssBaseline />
      <Navbar />
        <Aside />
        <Container>
                  <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Map />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Information />
          </Paper>
        </Grid>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <Search />
          </Paper>
        </Grid>
        <Grid item xs={6}>
        <Paper className={classes.paper}>
          <LastMap />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <LastInformation />
          </Paper>
        </Grid>
      </Grid>
        </Container>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getLocation: () => dispatch(getCurrentLocation())
})

export default connect(null, mapDispatchToProps)(App)
