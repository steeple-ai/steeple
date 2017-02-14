import React, { Component, PropTypes } from 'react';

import {
  ActionBar,
  StepBody,
  StepContainer,
  StepContent,
  StepHeader,
  StepCount,
  StepTitle,
} from './styles';

class Step extends Component {
  render() {
    const {
      children,
      title,
    } = this.props;

    return (
      <StepContainer>
        <StepHeader>
          <StepCount>1</StepCount>

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
  title: PropTypes.string,
};

export default Step;
