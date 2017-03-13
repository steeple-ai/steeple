import React, { Component } from 'react';

import Stepper from '../../components/stepper/Stepper';
import StepOne from './stepOne/StepOne';
import StepOneTitle from './stepOne/StepOneTitle';
import StepTwo from './stepTwo/StepTwo';
import StepTwoTitle from './stepTwo/StepTwoTitle';
import StepThree from './stepThree/StepThree';
import StepThreeTitle from './stepThree/StepThreeTitle';

import {
  GiveContainer,
  MainWrapper,
} from './styles';

class Give extends Component {
  constructor(props) {
    super(props);

    this.state = {
      creditCardCvc: '',
      creditCardExpiration: '',
      creditCardNumber: '',
      creditCardZip: '',
      email: '',
      name: '',
      offering: '',
      paycheck: '',
      tithePercent: 10,
      total: (0).toFixed(2),
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
      creditCardCvc,
      creditCardExpiration,
      creditCardNumber,
      creditCardZip,
      email,
      name,
      offering,
      paycheck,
      tithePercent,
      total,
    } = this.state;

    return (
      <GiveContainer>

        <MainWrapper>

          <Stepper
            stepIndex={3}
          >
            <StepOne
              email={email}
              handleChange={this.handleChange}
              isRequired
              name={name}
              title={<StepOneTitle />}
            />
            <StepTwo
              handleChange={this.handleChange}
              isRequired
              offering={offering}
              paycheck={paycheck}
              tithePercent={tithePercent}
              title={<StepTwoTitle />}
              total={total}
            />
            <StepThree
              isRequired
              name={name}
              title={<StepThreeTitle />}
              handleChange={this.handleChange}
              total={total}
              creditCardCvc={creditCardCvc}
              creditCardExpiration={creditCardExpiration}
              creditCardNumber={creditCardNumber}
              creditCardZip={creditCardZip}
            />
          </Stepper>
        </MainWrapper>
      </GiveContainer>
    );
  }
}

export default Give;
