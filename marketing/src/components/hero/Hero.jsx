import React, { Component } from 'react';

import Logotype from '../logotype/Logotype';
import HeroNavigation from './heroNavigation/HeroNavigation';

import {
  HeroContainer,
  MainContent,
  Title,
} from './styles';

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <HeroNavigation />

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
