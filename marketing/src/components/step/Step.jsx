import React, { Component, PropTypes } from 'react';

import {
  StepContainer,
} from './styles';

class Step extends Component {
  constructor(props) {
    super(props);

    this.onClickNext = () => {
      const {
        onClickNext,
      } = props;

      onClickNext();
    }
  }

  render() {
    const {
      children,
      isActive,
      isFirstStep,
      isLastStep,
    } = this.props;

    return (
      <StepContainer
        isActive={isActive}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      >
        {children}
      </StepContainer>
    );
  }
}

Step.defaultProps = {
  children: 'Step Children',
  title: 'Step Title',
};


Step.propTypes = {
  canChangeStep: PropTypes.bool,
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool,
  isFirstStep: PropTypes.bool,
  isLastStep: PropTypes.bool,
  isOptional: PropTypes.bool,
  onClickBack: PropTypes.func,
  onClickNext: PropTypes.func,
  stepNumber: PropTypes.number,
  title: PropTypes.string,
};

export default Step;
