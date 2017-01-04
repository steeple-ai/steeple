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
      router,
    } = this.props;

    return (
      <ApplicationContainer>
        <Navigation
          location={location}
          router={router}
        />

        {children}
      </ApplicationContainer>
    );
  }
}

export default Application;
