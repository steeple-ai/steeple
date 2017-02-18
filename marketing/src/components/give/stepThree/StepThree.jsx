import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import Step from '../../step/Step';

class StepThree extends Component {
  constructor(props) {
    super(props);

    // The form is controlled. We need to manage the state of the inputs in this controller.
    this.state = {
      name: '',
      email: '',
    };

    /**
     * Change the passed in value of inputs when input changes.
     * @param name
     * @param value
     */
    this.handleChange = (name, value) => this.setState(() => ({
      [name]: value,
    }));
  }

  render() {
    const {
      email,
      name,
    } = this.state;

    return <Step
      title="Payment Information"
      { ...this.props }
    >
      <Input
        icon="person"
        label='Name'
        name='name'
        onChange={(value) => this.handleChange('name', value)}
        required
        type='text'
        value={name}
      />
      <Input
        icon="email"
        label='Email'
        name='email'
        onChange={(value) => this.handleChange('email', value)}
        required
        type='email'
        value={email}
      />
    </Step>;
  }
}

export default StepThree;
