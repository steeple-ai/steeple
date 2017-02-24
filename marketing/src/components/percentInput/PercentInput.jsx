import React, { Component, PropTypes } from 'react';

import {
  InputLabel,
  PercentStyled,
  Row,
  TithePercentContainer,
} from './styles';

class PercentInput extends Component {
  render() {
    const {
      children,
      label,
    } = this.props;

    return (
      <TithePercentContainer>
        <PercentStyled />

        <Row>
          <InputLabel>
            {label}
          </InputLabel>
          {children}
        </Row>
      </TithePercentContainer>
    );
  }
}

PercentInput.propTypes = {
  children: PropTypes.node,
  label: PropTypes.node,
};

export default PercentInput;
