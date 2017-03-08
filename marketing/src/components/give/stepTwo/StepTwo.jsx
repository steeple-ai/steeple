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
      total: (0).toFixed(2)
    };

    /**
     * Change the passed in value of inputs when input changes.
     * @param name
     * @param value
     */
    this.handleChange = (name, value) => this.setState(() => ({
      [name]: value,
    }));

    this.renderTotal = () => {
      const {
        total,
      } = this.state;

      return total;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.paycheck !== this.state.paycheck || prevState.tithePercent !== this.state.tithePercent || prevState.offering !== this.state.offering) {
      this.setState(() => ({
        total: (((Number(this.state.tithePercent) / 100) * Number(this.state.paycheck)) + Number(this.state.offering)).toFixed(2)
      }))
    }
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
      <FormHeader>Tithe <GreyText>(optional)</GreyText></FormHeader>
      <Input
        icon='receipt'
        label='Last Paycheck'
        name='paycheck'
        onChange={(value) => this.handleChange('paycheck', value)}
        type='number'
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
        type='number'
        value={offering}
      />

      <FormHeader>Total</FormHeader>
      <TotalAmount>
        ${this.renderTotal()}
      </TotalAmount>

    </Step>;
  }
}

export default StepTwo;
