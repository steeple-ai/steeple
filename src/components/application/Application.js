import React, { PureComponent, PropTypes } from 'react';

import Navigation from '../navigation/Navigation';

import {
  ApplicationContainer,
} from './styles';

class Application extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
    ...Navigation.propTypes,
  };

  render() {
    const {
      children,
      location,
    } = this.props;

    return (
      <ApplicationContainer>
        <Navigation
          location={location}
        />

        {children}
      </ApplicationContainer>
    );
  }
}

export default Application;
