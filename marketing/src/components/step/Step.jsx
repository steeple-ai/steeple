import React, { Component, PropTypes } from 'react';

import Button from 'react-toolbox/lib/button/Button'

import {
  ActionBar,
  ButtonStyled,
  StepBody,
  StepContainer,
  StepContent,
  StepCount,
  StepHeader,
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
      canChangeStep,
      children,
      isActive,
      isComplete,
      isFirstStep,
      isLastStep,
      onClickBack,
      stepNumber,
      title,
    } = this.props;

    return (
      <StepContainer
        isActive={isActive}
        isFirstStep={isFirstStep}
        isLastStep={isLastStep}
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

        <StepBody isActive={isActive}>
          <StepContent>
            {children}
          </StepContent>
          <ActionBar>
            {stepNumber !== 1 && <Button onClick={onClickBack}>back</Button>}
            {!isLastStep ? <ButtonStyled
              onClick={this.onClickNext}
              primary
              raised
              disabled={!canChangeStep}
            >
              next
            </ButtonStyled> : <ButtonStyled
              primary
              raised
              disabled={!canChangeStep}
            >
              finish
            </ButtonStyled>}
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
