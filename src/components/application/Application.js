import React, { PureComponent, PropTypes } from 'react';

import Navigation from '../navigation/Navigation';

import {
  ApplicationContainer,
} from './styles';

class Application extends PureComponent {
  static propTypes = {
    children: PropTypes.any,
    ...Navigation.propTypes,
  };

  render() {
    const {
      Component,
      location,
      router,
    } = this.props;

    return (
      <ApplicationContainer>
        <Navigation
          location={location}
          router={router}
        />

        <Component />
      </ApplicationContainer>
    );
  }
}

export default Application;
