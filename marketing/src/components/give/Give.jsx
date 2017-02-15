import React, { Component } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import Toolbar from '../toolbar/Toolbar';
import Stepper from '../stepper/Stepper';
import Step from '../step/Step';

import {
  GiveContainer,
} from './styles';

class Give extends Component {
  render() {
    return (
      <GiveContainer>
        <Toolbar title="C3 Equippers" />

        <Stepper
          stepIndex={1}
        >
          <Step
            title="Who are you?"
          >
            <Input icon="person" type='text' label='Name' name='name' />
            <Input type='text' label='Email' name='email' />
          </Step>

          <Step
            title="Tithe & Offering"
          >
            step content
          </Step>

          <Step
            title="Payment Information"
          >
            step content
          </Step>
        </Stepper>
      </GiveContainer>
    );
  }
}

export default Give;
