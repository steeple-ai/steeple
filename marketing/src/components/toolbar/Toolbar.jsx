import React, { Component, PropTypes } from 'react';

import {
  ToolbarContainer,
  LogoStyled,
  ToolbarTitle,
} from './styles';

class Toolbar extends Component {
  render() {
    const {
      title,
    } = this.props;

    return (
      <ToolbarContainer>
        <LogoStyled />

        <ToolbarTitle>
          {title}
        </ToolbarTitle>
      </ToolbarContainer>
    );
  }
}

Toolbar.defaultProps = {
  title: '',
};

Toolbar.propTypes = {
  title: PropTypes.string,
};

export default Toolbar;
