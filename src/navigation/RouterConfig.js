import React from 'react';

import {  Switch, Route } from 'react-router-dom';

import Users from './../pages/Users/Users'
import Home from './../pages/Home/Home'


const RouterConfig = () => {
  return (
    <div style={{ minHeight: '75vh' }}>
      <Switch>
        <Route path="/users" component={Users} />
        <Route exact path="/" component={Home} />
      </Switch>
    </div>
  );
};

export default RouterConfig;
