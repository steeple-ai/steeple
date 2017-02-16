import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import Step from '../../step/Step';

class StepTwo extends Component {
  render() {
    return <Step
      title="Tithe & Offering"
      { ...this.props }
    >
      <Input
        icon="person"
        label='Name'
        name='name'
        required
        type='text'
      />
      <Input
        icon="email"
        label='Email'
        name='email'
        required
        type='email'
      />
    </Step>;
  }
}

export default StepTwo;
