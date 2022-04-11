import React from 'react';

import { NavLink } from 'react-router-dom';

import { Toolbar, AppBar, makeStyles, Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  grow: {
    flexGrow: 1,
  },
  navMenu: {
    color: '#fff',
    textDecoration: 'none',
  },
}));

const NavMenu = () => {
  const classes = useStyles();

  return (
    <AppBar>
      <Toolbar>
        <NavLink className={classes.navMenu} exact to="/" color="inherit">
          Company Logo
        </NavLink>
        <Box className={classes.grow}></Box>
        <NavLink className={classes.navMenu} to="/users" color="inherit">
          Users
        </NavLink>
      </Toolbar>
    </AppBar>
  );
};

export default NavMenu;
