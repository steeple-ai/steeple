import React, { Component, PropTypes } from 'react';

import Input from 'react-toolbox/lib/input/Input';

import {
  FormHeader,
  GreyText,
  TotalAmount,
} from '../../../components/typography';
import Step from '../../../components/step/Step';
import PercentInput from '../../../components/percentInput/PercentInput';

class StepTwo extends Component {
  componentWillUpdate(nextProps) {
    const {
      isRequired,
      toggleCanChangeStep,
    } = this.props;

    if (isRequired && !!Number(nextProps.total)) {
      toggleCanChangeStep(!!Number(nextProps.total));
    }
  }

  render() {
    const {
      handleChange,
      offering,
      paycheck,
      tithePercent,
      total,
    } = this.props;

    return (
      <Step { ...this.props }>
        <FormHeader>Tithe <GreyText>(optional)</GreyText></FormHeader>
        <Input
          icon='receipt'
          label='Last Paycheck'
          name='paycheck'
          onChange={(value) => handleChange('paycheck', value)}
          type='number'
          value={paycheck}
        />
        <PercentInput
          label='Tithe Percent'
          max={12}
          min={8}
          onChange={(value) => handleChange('tithePercent', value)}
          value={tithePercent}
        />

        <FormHeader>Offering</FormHeader>
        <Input
          icon='card_giftcard'
          label='Offering Amount'
          name='offering'
          onChange={(value) => handleChange('offering', value)}
          type='number'
          value={offering}
        />

        <FormHeader>Total</FormHeader>
        <TotalAmount>
          ${total}
        </TotalAmount>
      </Step>
    );
  }
}

StepTwo.propTypes = {
  handleChange: PropTypes.func,
  offering: PropTypes.string,
  paycheck: PropTypes.string,
  tithePercent: PropTypes.number,
  total: PropTypes.string,
};


export default StepTwo;
