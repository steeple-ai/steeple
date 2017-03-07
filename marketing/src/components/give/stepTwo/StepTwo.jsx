import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import {
  FormHeader,
  GreyText,
  TotalAmount,
} from '../../typography';
import Step from '../../step/Step';
import PercentInput from '../../percentInput/PercentInput';

class StepTwo extends Component {
  constructor(props) {
    super(props);

    // The form is controlled. We need to manage the state of the inputs in this controller.
    this.state = {
      offering: '',
      paycheck: '',
      tithePercent: 10,
      total: '0.00'
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
      total,
    } = this.state;

    return <Step
      title="Tithe & Offering"
      { ...this.props }
    >
      <FormHeader>Tithe <GreyText>(optional)</GreyText></FormHeader>
      <Input
        icon='receipt'
        label='Paycheck'
        name='paycheck'
        onChange={(value) => this.handleChange('paycheck', value)}
        type='text'
        value={paycheck}
      />
      <PercentInput
        label='Tithe Percent'
        max={12}
        min={8}
        onChange={(value) => this.handleChange('tithePercent', value)}
        value={tithePercent}
      />

      <FormHeader>Offering</FormHeader>
      <Input
        icon='card_giftcard'
        label='Offering Amount'
        name='offering'
        onChange={(value) => this.handleChange('offering', value)}
        type='text'
        value={offering}
      />

      <FormHeader>Total</FormHeader>
      <TotalAmount>
        ${total}
      </TotalAmount>

    </Step>;
  }
}

export default StepTwo;
