import React, { Component, PropTypes } from 'react';

import forEach from 'lodash/forEach';
import Input from 'react-toolbox/lib/input/Input';

import Step from '../../../components/step/Step';

class StepOne extends Component {
  componentWillUpdate() {
    const {
      email,
      isRequired,
      name,
      toggleCanChangeStep,
    } = this.props;

    if (isRequired) {
      let canMoveToNextStep = true;

      forEach([name, email], (value) => {
        canMoveToNextStep = !!value && value !== '';
      });

      toggleCanChangeStep(canMoveToNextStep);
    }
  }

  render() {
    const {
      email,
      handleChange,
      name,
    } = this.props;

    return (
      <Step { ...this.props }>
        <Input
          icon="person"
          label='Name'
          name='name'
          onChange={(value) => handleChange('name', value)}
          required
          type='text'
          value={name}
        />
        <Input
          icon="email"
          label='Email'
          name='email'
          onChange={(value) => handleChange('email', value)}
          required
          type='email'
          value={email}
        />
      </Step>
    );
  }
}

StepOne.propTypes = {
  email: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
};

export default StepOne;
