import React, { Component, PropTypes } from 'react';

import {
  ActionBar,
  StepBody,
  StepContainer,
  StepContent,
  StepCount,
  StepHeader,
  StepTitle,
} from './styles';

class Step extends Component {
  render() {
    const {
      children,
      isActive,
      isComplete,
      stepNumber,
      title,
    } = this.props;

    return (
      <StepContainer
        isActive={isActive}
        isComplete={isComplete}
      >
        <StepHeader>
          <StepCount
            isActive={isActive}
            isComplete={isComplete}
          >
            {stepNumber}
          </StepCount>

          <StepTitle>{title}</StepTitle>
        </StepHeader>

        <StepBody>
          <StepContent>
            {children}
          </StepContent>
          <ActionBar>
            <button>back</button>
            <button>next</button>
          </ActionBar>
        </StepBody>

      </StepContainer>
    );
  }
}

Step.defaultProps = {
  children: 'Step Children',
  title: 'Step Title',
};


Step.propTypes = {
  children: PropTypes.node,
  isActive: PropTypes.bool,
  isComplete: PropTypes.bool,
  stepNumber: PropTypes.number,
  title: PropTypes.string,
};

export default Step;
