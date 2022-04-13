import React, { useEffect, useState } from 'react';

import axios from 'axios';

import { Box, CircularProgress } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/styles';

import User from '../../components/User/User';

const useStyles = makeStyles({
  usersContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill,minmax(200px,2fr))',
    gap: '1.5vw',
    margin: '1rem',
  },
  loaderContainer: {
    height: '75vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorContainer: {
    marginTop: '1rem',
  },
});

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}
const Users = () => {
  const classes = useStyles();

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    axios
      .get(url)
      .then((_res) => {
        setUsers(_res.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <React.Fragment>
      {loading && (
        <Box className={classes.loaderContainer}>
          <CircularProgress disableShrink />
        </Box>
      )}
      {error !== '' && (
        <Box className={classes.errorContainer}>
          <Alert severity="error">{error}</Alert>
        </Box>
      )}
      {error === '' && (
        <Box className={classes.usersContainer}>
          {users.map((user) => (
            <User user={user}></User>
          ))}
        </Box>
      )}
    </React.Fragment>
  );
};

export default Users;
