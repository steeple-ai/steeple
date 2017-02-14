import React, { Component } from 'react';

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

        <Stepper>
          <Step
            title="Who are you?"
          >
            step content
          </Step>
        </Stepper>
      </GiveContainer>
    );
  }
}

export default Give;
