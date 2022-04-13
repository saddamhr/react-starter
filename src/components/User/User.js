import React from 'react';

import { makeStyles, Card, CardContent, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  pos: {
    margin: '10px 0',
  },
});

const User = (props) => {
  const classes = useStyles();
  const { name, email, address } = props.user;

  const getFullAddress = (address) => {
    const { street, suite, city, zipcode } = address.address;

    return `${street}, ${suite}, ${city}, ${zipcode}`;
  };
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="h2">
          {name}
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          {email}
        </Typography>
        <Typography variant="body2" component="p">
          {getFullAddress({ address })}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default User;
