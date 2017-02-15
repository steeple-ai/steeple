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
      onClickBack,
      onClickNext,
      stepNumber,
      title,
    } = this.props;

    return (
      <StepContainer isActive={isActive}>
        <StepHeader>
          <StepCount
            isActive={isActive}
            isComplete={isComplete}
          >
            {stepNumber}
          </StepCount>

          <StepTitle>{title}</StepTitle>
        </StepHeader>

        <StepBody isActive={isActive}>
          <StepContent>
            {children}
          </StepContent>
          <ActionBar>
            {stepNumber !== 1 && <button onClick={onClickBack}>back</button>}
            <button onClick={onClickNext}>next</button>
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
  onClickNext: PropTypes.func,
  onClickBack: PropTypes.func,
  stepNumber: PropTypes.number,
  title: PropTypes.string,
};

export default Step;
