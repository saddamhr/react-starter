import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import NavMenu from './components/NavMenu/NavMenu';

import { Toolbar, CssBaseline, Container } from '@material-ui/core';

import './App.css';
import RouterConfig from './navigation/RouterConfig';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';

function App(props) {
  return (
    <Router>
      <React.Fragment>
        <CssBaseline />
        <NavMenu />
        <Toolbar id="back-to-top-anchor" />
        <Container>
          <RouterConfig />
        </Container>
        <ScrollToTop props={props} />
      </React.Fragment>
    </Router>
  );
}

export default App;
