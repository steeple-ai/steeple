import React, { Component, PropTypes } from 'react';

import {
  StepperContainer,
} from './styles';

class Stepper extends Component {
  render() {
    const {
      children,
    } = this.props;

    return (
      <StepperContainer>
        {children}
      </StepperContainer>
    );
  }
}

Stepper.propTypes = {
  children: PropTypes.node,
};

export default Stepper;
