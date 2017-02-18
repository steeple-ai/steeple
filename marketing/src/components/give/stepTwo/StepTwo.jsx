import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';
import Slider from 'react-toolbox/lib/slider/Slider';

import { FormHeader } from '../../typography';
import Step from '../../step/Step';

class StepTwo extends Component {
  constructor(props) {
    super(props);

    // The form is controlled. We need to manage the state of the inputs in this controller.
    this.state = {
      offering: '',
      paycheck: '',
    };

    /**
     * Change the passed in value of inputs when input changes.
     * @param name
     * @param value
     */
    this.handleChange = (name, value) => this.setState(() => ({
      [name]: value,
    }));

    this.sliderHandleChange = (slider, value) => {
      const newState = {};
      newState[slider] = value;
      this.setState(newState);
    };
  }

  render() {
    const {
      offering,
      paycheck,
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

      <Slider
        editable
        max={10}
        min={0}
        onChange={this.sliderHandleChange.bind(this, 'slider3')}
        pinned
        snaps
        step={1}
        value={this.state.slider3}
      />

      <FormHeader>Offering</FormHeader>
      <Input
        icon='card_giftcard'
        label='Offering Amount'
        name='offering'
        onChange={(value) => this.handleChange('offering', value)}
        type='offering'
        value={offering}
      />
    </Step>;
  }
}

export default StepTwo;
