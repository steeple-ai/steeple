import React, { PureComponent, PropTypes } from 'react';

import {
  NotFoundPageContainer,
} from './styles';

class NotFoundPage extends PureComponent {
  static propTypes = {
    children: PropTypes.node,
  };

  render() {
    const {
      children,
    } = this.props;

    return (
      <NotFoundPageContainer>
        {children}
      </NotFoundPageContainer>
    );
  }
}

export default NotFoundPage;
