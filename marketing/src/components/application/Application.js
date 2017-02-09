import React, { Component } from 'react';

import Navigation from '../navigation/Navigation';
import Hero from '../hero/Hero';

import {
  ApplicationContainer,
  MainContent,
} from './styles';

class Application extends Component {
  render() {
    return (
      <ApplicationContainer>
        <Navigation />
        <MainContent>
          <Hero />
        </MainContent>
      </ApplicationContainer>
    );
  }
}

export default Application;
