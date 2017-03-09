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
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      name: '',
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
    this.handleChange = (name, value) => this.setState({
      [name]: value,
    });
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
      email,
      name,
      offering,
      paycheck,
      tithePercent,
      total,
    } = this.state;

    return (
      <GiveContainer>
        <Toolbar title="C3 Equippers" />

        <MainWrapper>

          <Stepper
            stepIndex={1}
          >
            <StepOne
              email={email}
              handleChange={this.handleChange}
              isRequired
              name={name}
              title="Who are you?"
            />
            <StepTwo
              handleChange={this.handleChange}
              isRequired
              offering={offering}
              paycheck={paycheck}
              tithePercent={tithePercent}
              title="Tithe & Offering"
              total={total}
            />
            <StepThree
              isRequired
              title="Payment Information"
              handleChange={this.handleChange}
            />
          </Stepper>
        </MainWrapper>
      </GiveContainer>
    );
  }
}

export default Give;
