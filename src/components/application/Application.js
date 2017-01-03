import React, { PureComponent, PropTypes } from 'react';

import Toolbar from '../toolbar/Toolbar';

import {
  ApplicationContainer,
} from './styles';

class Application extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <ApplicationContainer>
        <Toolbar/>

        {children}
      </ApplicationContainer>
    );
  }
}

export default Application;
