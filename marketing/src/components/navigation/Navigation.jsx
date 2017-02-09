import React, { Component } from 'react';

import Logo from '../logo/Logo';

import {
  NavigationContainer,
  LogoStyles,
} from './styles';

class Navigation extends Component {
  render() {
    return (
      <NavigationContainer>
        <Logo style={LogoStyles} />
      </NavigationContainer>
    );
  }
}

export default Navigation;
