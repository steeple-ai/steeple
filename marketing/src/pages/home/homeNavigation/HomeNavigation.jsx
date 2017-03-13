import React, { Component } from 'react';

import {
  HeroNavigationContainer,
  LogoStyled,
} from './styles';

class HeroNavigation extends Component {
  render() {
    return (
      <HeroNavigationContainer>
        <LogoStyled />
      </HeroNavigationContainer>
    );
  }
}

export default HeroNavigation;
