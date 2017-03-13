import React, { Component, PropTypes } from 'react';

import {
  FormHeader,
  TotalAmount,
} from '../../typography';
import Step from '../../step/Step';

import {
  InputStyled,
  InputRow,
  InputSmallStyled,
} from './styles';

class StepThree extends Component {
  render() {
    const {
      creditCardCvc,
      creditCardExpiration,
      creditCardNumber,
      creditCardZip,
      handleChange,
      name,
      total,
    } = this.props;

    return (
      <Step { ...this.props } >
        <FormHeader>Total</FormHeader>
        <TotalAmount>
          ${total}
        </TotalAmount>

        <FormHeader>Mobile Payments</FormHeader>
        Apple Pay Logo Here.


        <FormHeader>Credit Card</FormHeader>
        <InputStyled
          label='Name on Card'
          name='name'
          onChange={(value) => handleChange('name', value)}
          required
          type='text'
          value={name}
        />
        <InputStyled
          label='Credit Card Number'
          name='creditCardNumber'
          onChange={(value) => handleChange('name', value)}
          required
          type='text'
          value={creditCardNumber}
        />

        <InputRow>
          <InputSmallStyled
            label='MM/YY'
            name='creditCardExpiration'
            onChange={(value) => handleChange('name', value)}
            required
            type='number'
            value={creditCardExpiration}
          />
          <InputSmallStyled
            label='CVC'
            name='creditCardCvc'
            onChange={(value) => handleChange('name', value)}
            required
            type='number'
            value={creditCardCvc}
          />
          <InputSmallStyled
            label='Zip'
            name='creditCardZip'
            onChange={(value) => handleChange('name', value)}
            required
            type='number'
            value={creditCardZip}
          />
        </InputRow>

      </Step>
    );
  }
}

StepThree.propTypes = {
  creditCardCvc: PropTypes.string,
  creditCardExpiration: PropTypes.string,
  creditCardNumber: PropTypes.string,
  creditCardZip: PropTypes.string,
  handleChange: PropTypes.func,
  name: PropTypes.string,
  total: PropTypes.string,
};

export default StepThree;
