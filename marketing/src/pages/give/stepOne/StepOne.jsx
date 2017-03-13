import React, { Component, PropTypes } from 'react';

import forEach from 'lodash/forEach';
import Input from 'react-toolbox/lib/input/Input';

import {
  FormHeader,
} from '../../../components/typography';

import {
  StepStyled,
} from './styles';

class StepOne extends Component {
  componentWillUpdate() {
    const {
      email,
      firstName,
      isRequired,
      lastName,
      toggleCanChangeStep,
    } = this.props;

    if (isRequired) {
      let canMoveToNextStep = true;

      forEach([email, firstName, lastName], (value) => {
        canMoveToNextStep = !!value && value !== '';
      });

      toggleCanChangeStep(canMoveToNextStep);
    }
  }

  render() {
    const {
      email,
      firstName,
      handleChange,
      lastName,
    } = this.props;

    return (
      <StepStyled { ...this.props }>
        <FormHeader>Name</FormHeader>
        <Input
          icon="person"
          label='First'
          name='firstName'
          onChange={(value) => handleChange('firstName', value)}
          required
          type='text'
          value={firstName}
        />
        <Input
          icon="person"
          label='Last'
          name='lastName'
          onChange={(value) => handleChange('lastName', value)}
          required
          type='text'
          value={lastName}
        />

        <FormHeader>Contact</FormHeader>
        <Input
          icon="email"
          label='Email'
          name='email'
          onChange={(value) => handleChange('email', value)}
          required
          type='email'
          value={email}
        />
      </StepStyled>
    );
  }
}

StepOne.propTypes = {
  email: PropTypes.string,
  firstName: PropTypes.string,
  handleChange: PropTypes.func,
  lastName: PropTypes.string,
};

export default StepOne;
