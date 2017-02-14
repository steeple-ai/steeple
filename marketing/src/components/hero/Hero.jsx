import React, { Component } from 'react';

import Logotype from '../logotype/Logotype';
import Navigation from '../navigation/Navigation';


import {
  HeroContainer,
  MainContent,
  Title,
} from './styles';

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <Navigation />

        <MainContent>
          <Logotype />
          <Title>
            Offerings Powered by the future.
          </Title>
        </MainContent>
      </HeroContainer>
    );
  }
}

export default Hero;
