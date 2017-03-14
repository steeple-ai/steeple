import React, { Children, Component, PropTypes } from 'react';

import {
  ButtonLeftStyled,
  ButtonRightStyled,
  ButtonArrowIcon,
  StepperBody,
  StepperFooter,
} from './styles';

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeStep: props.stepIndex,
      totalSteps: Children.count(props.children),
      ...Children.map(props.children, (child) => !child.props.isRequired),
    };

    /**
     * Helper function to go forward one step.
     */
    this.onClickNext = () => this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
    }));

    /**
     * Helper function to go backwords one step.
     */
    this.onClickBack = () => this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  /**
   * Helper function to pass in custom props to each step.
   * @returns {*}
   */
  renderChildren() {
    const {
      children,
    } = this.props;
    const {
      activeStep,
      totalSteps,
    } = this.state;

    if (activeStep > totalSteps) {
      console.warn(`'stepIndex' of ${activeStep} must be less than or equal to total children, ${totalSteps}.`);
    }

    // Use Children helper to map though all the children.
    return Children.map(children, (child, key) => {
      // Since stepNumber gets rendered, 0 index is a bad idea.
      const stepNumber = key + 1;
      const canChangeStep = this.state[key];

      return React.cloneElement(child, {
        ...child.props,
        canChangeStep,
        isActive: stepNumber === activeStep,
        isComplete: stepNumber < activeStep,
        isFirstStep: stepNumber === 1,
        stepNumber,
        toggleCanChangeStep: (canMoveToNextStep) => {
          // This is a hack. Changes to state can cause this to run over and over again with huge memory leak. Be
          // careful.

          if (canMoveToNextStep !== canChangeStep) {
            this.setState(() => ({
              [key]: canMoveToNextStep,
            }));
          }
        },
      });
    });
  }

  render() {
    const {
      activeStep,
      totalSteps,
    } = this.state;
    const canChangeStep = this.state[activeStep - 1];

    return [
      <StepperBody
        activeStep={activeStep}
        totalSteps={totalSteps}
      >
        {this.renderChildren()}
      </StepperBody>,

      <StepperFooter>
        { activeStep !== 1 && <ButtonLeftStyled onClick={this.onClickBack}>
          <ButtonArrowIcon className="material-icons">navigate_before</ButtonArrowIcon>
          Back
        </ButtonLeftStyled> }

        {activeStep !== totalSteps ? <ButtonRightStyled
          disabled={!canChangeStep}
          onClick={this.onClickNext}
          primary
          raised
        >
          next
          <ButtonArrowIcon className="material-icons">navigate_next</ButtonArrowIcon>
        </ButtonRightStyled> : <ButtonRightStyled
          disabled={!canChangeStep}
          primary
          raised
        >
          finish
        </ButtonRightStyled>}
      </StepperFooter>
    ];
  }
}

Stepper.propTypes = {
  children: PropTypes.node,
  stepIndex: PropTypes.number,
};

Stepper.defaultProps = {
  stepIndex: 1,
};

export default Stepper;
