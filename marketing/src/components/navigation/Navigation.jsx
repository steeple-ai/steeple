import React, { Component } from 'react';

import {
  NavigationContainer,
  LogoStyled,
} from './styles';

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <LogoStyled />
      </NavigationContainer>
    );
  }
}

export default Navigation;
