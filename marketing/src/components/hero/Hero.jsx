import React, { Component } from 'react';

import Logotype from '../logotype/Logotype';

import {
  HeroContainer,
  Title,
} from './styles';

class Hero extends Component {
  render() {
    return (
      <HeroContainer>
        <Logotype />
        <Title>
          Offerings Powered by the future.
        </Title>
      </HeroContainer>
    );
  }
}

export default Hero;
