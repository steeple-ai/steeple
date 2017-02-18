import React, { Component } from 'react';

import Toolbar from '../toolbar/Toolbar';
import Stepper from '../stepper/Stepper';
import StepOne from './stepOne/StepOne';
import StepTwo from './stepTwo/StepTwo';
import StepThree from './stepThree/StepThree';

import {
  GiveContainer,
  MainWrapper,
} from './styles';

class Give extends Component {
  render() {
    return (
      <GiveContainer>
        <Toolbar title="C3 Equippers" />

        <MainWrapper>

          <Stepper
            stepIndex={2}
          >
            <StepOne />
            <StepTwo />
            <StepThree />
          </Stepper>
        </MainWrapper>
      </GiveContainer>
    );
  }
}

export default Give;
