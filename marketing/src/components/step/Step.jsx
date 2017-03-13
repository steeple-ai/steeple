import React, { Component, PropTypes } from 'react';

import {
  StepContainer,
  StepTitle,
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
      className,
      isActive,
      isFirstStep,
      isLastStep,
      title,
    } = this.props;

    return (
      <StepContainer
        className={className}
        isActive={isActive}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
      >
        <StepTitle>
          {title}
        </StepTitle>
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
  className: PropTypes.string,
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool,
  isFirstStep: PropTypes.bool,
  isLastStep: PropTypes.bool,
  isOptional: PropTypes.bool,
  onClickBack: PropTypes.func,
  onClickNext: PropTypes.func,
  stepNumber: PropTypes.number,
  title: PropTypes.node,
};

export default Step;
