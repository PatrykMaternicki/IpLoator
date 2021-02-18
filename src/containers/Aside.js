import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import LocationList from '../components/location/List';
import CardContent from '@material-ui/core/CardContent';
import List from '@material-ui/core/List';
import { connect } from 'react-redux'
import { Divider } from '@material-ui/core';

const useStyles = (showDrawer) => makeStyles((theme) => ({
  drawer: {
    width: showDrawer ? 320 : 1,
    transition: 'width .5s',
    flexShrink: 0,
  },
  drawerPaper: {
    width: 320,
    top: '48px'
  },
  content: {
    textAlign: 'center'
  }
}));

const AsideContainer = ({ history,showDrawer }) => {
  const classes = useStyles(showDrawer)();
  return (
    <Drawer
      className={classes.drawer}
      open={showDrawer}
      variant="persistent"
      classes={{
        paper: classes.drawerPaper,
      }}
      anchor="left"
    >
      <List>
        {history.map((item, index) => (
        <CardContent
          key={index}
          className={classes.content}
        >
          <LocationList information={item} />
          <Divider />
        </CardContent>
        ))}
      </List>
    </Drawer>
  );
}

const mapStateToProps = (state) => ({
  history: state.location.history,
  showDrawer: state.app.showDrawer
})

export default connect(mapStateToProps, null)(AsideContainer)
