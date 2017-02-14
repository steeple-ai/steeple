import React, { Component } from 'react';

// Import Router
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';

// Import core components.
import Navigation from '../navigation/Navigation';

// Import Route components.
import Hero from '../hero/Hero';

import {
  ApplicationContainer,
  MainContent,
} from './styles';

class Application extends Component {
  render() {
    return (
      <Router>
        <ApplicationContainer>
          <Navigation />
          <MainContent>
            <Route exact path="/" component={Hero} />
          </MainContent>
        </ApplicationContainer>
      </Router>
    );
  }
}

export default Application;
