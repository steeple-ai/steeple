import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import Step from '../../step/Step';

class StepThree extends Component {
  render() {
    return <Step
      title="Payment Information"
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

export default StepThree;
