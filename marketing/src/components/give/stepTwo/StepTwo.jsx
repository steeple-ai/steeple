import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';
import Slider from 'react-toolbox/lib/slider/Slider';

import { FormHeader } from '../../typography';
import Step from '../../step/Step';
import PercentInput from '../../percentInput/PercentInput';

class StepTwo extends Component {
  constructor(props) {
    super(props);

    // The form is controlled. We need to manage the state of the inputs in this controller.
    this.state = {
      offering: '',
      paycheck: '',
      tithePercent: 8,
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
      offering,
      paycheck,
      tithePercent,
    } = this.state;

    return <Step
      title="Tithe & Offering"
      { ...this.props }
    >
      <FormHeader>Tithe</FormHeader>
      <Input
        icon='receipt'
        label='Paycheck'
        name='paycheck'
        onChange={(value) => this.handleChange('paycheck', value)}
        type='text'
        value={paycheck}
      />

      <PercentInput label='Tithe Percent'>
        <Slider
          max={12}
          min={4}
          onChange={(value) => this.handleChange('tithePercent', value)}
          pinned
          snaps
          step={1}
          value={tithePercent}
        />
      </PercentInput>

      <FormHeader>Offering</FormHeader>
      <Input
        icon='card_giftcard'
        label='Offering Amount'
        name='offering'
        onChange={(value) => this.handleChange('offering', value)}
        type='text'
        value={offering}
      />
    </Step>;
  }
}

export default StepTwo;
