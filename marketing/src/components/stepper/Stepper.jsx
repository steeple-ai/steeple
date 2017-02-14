import React, { Children, Component, PropTypes } from 'react';

import {
  StepperContainer,
} from './styles';

class Stepper extends Component {
  constructor (props) {
    super(props);

    this.renderChildren = () => {
      const {
        children,
        stepIndex,
      } = this.props;

      return Children.map(children, (child, key) => {
        const stepNumber = key + 1;

        return React.cloneElement(child, {
          stepNumber,
          isActive: stepNumber === stepIndex,
          isComplete: stepNumber < stepIndex,
        });
      });
    }
  };

  render() {
    return (
      <StepperContainer>
        {this.renderChildren()}
      </StepperContainer>
    );
  }
}

Stepper.propTypes = {
  children: PropTypes.node,
  stepIndex: PropTypes.number,
};

export default Stepper;
