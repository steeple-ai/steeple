import React, { PureComponent, PropTypes } from 'react';

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
        {children}
      </ApplicationContainer>
    );
  }
}

export default Application;
