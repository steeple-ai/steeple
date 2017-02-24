import React, { Children, Component, PropTypes } from 'react';

import {
  StepperContainer,
} from './styles';

class Stepper extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // Set activeStep to null and wait for componentWillMount.
      activeStep: props.stepIndex,
      0: false,
      1: false,
      2: false,
      // ...Children.map(props.children, (child) => !child.props.isRequired),
    };

    /**
     * Helper function to pass in custom props to each step.
     * @returns {*}
     */
    this.renderChildren = () => {
      const {
        children,
      } = props;
      const {
        activeStep,
      } = this.state;
      const totalSteps = Children.count(children);

      if (activeStep > totalSteps) {
        console.warn(`'stepIndex' of ${activeStep} must be less than or equal to total children, ${totalSteps}.`);
      }

      // Use Children helper to map though all the children.
      return Children.map(children, (child, key) => {
        // Since stepNumber gets rendered, 0 index is a bad idea.
        const stepNumber = key + 1;

        // console.log(key, this.state[key]);


        return React.cloneElement(child, {
          canChangeStep: this.state[key],
          isActive: stepNumber === activeStep,
          isComplete: stepNumber < activeStep,
          isFirstStep: stepNumber === 1,
          isLastStep: stepNumber === totalSteps,
          /**
           * Helper function to go forward one step.
           */
          onClickNext: () => this.setState(() => ({
            activeStep: stepNumber + 1,
          })),
          /**
           * Helper function to go backwords one step.
           */
          onClickBack: () => this.setState(() => ({
            activeStep: stepNumber - 1,
          })),
          stepNumber,
          toggleCanChangeStep: (canMoveToNextStep) => {
            if (canMoveToNextStep !== this.state[key]) {
              this.setState({
                [key]: canMoveToNextStep,
              });
            }
          },
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
