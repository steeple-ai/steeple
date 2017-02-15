import React, { Children, Component, PropTypes } from 'react';

import {
  StepperContainer,
} from './styles';

class Stepper extends Component {
  constructor (props) {
    super(props);

    this.state = {
      // Set activeStep to null and wait for componentWillMount to set
      // it's initial state based on props.
      activeStep: null,
    };

    // Helper function to pass in custom props to each step.
    this.renderChildren = () => {
      const {
        children,
      } = this.props;
      const {
        activeStep,
      } = this.state;

      // Use Children helper to map though all the children.
      return Children.map(children, (child, key) => {
        // Since stepNumber gets rendered, 0 index is a bad idea.
        const stepNumber = key + 1;

        return React.cloneElement(child, {
          isActive: stepNumber === activeStep,
          isComplete: stepNumber < activeStep,
          // Helper function to go back on step.
          onClickNext: () => this.setState(() => ({
            activeStep: stepNumber + 1,
          })),
          // Helper function to go forward one step.
          onClickBack: () => this.setState(() => ({
            activeStep: stepNumber - 1,
          })),
          stepNumber,
        });
      });
    }
  };

  componentWillMount() {
    const {
      activeStep,
    } = this.state;

    // We need to check if there is an active step already in state.
    // This would be true when Stepper gets called for the first time.
    if (!activeStep) {
      // Set the activeStep based on the prop that gets passed in.
      this.setState((prevState, props) => ({
        activeStep: props.stepIndex,
      }));
    }
  }

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
