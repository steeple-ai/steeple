import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';

import Button from 'react-toolbox/lib/button/Button'
import Check from '../icons/Check';

const transition = 'all 300ms ease 100ms';

export const StepContainer = styled('div', (props) => {
  const {
    isActive,
    isFirstStep,
    isLastStep,
  } = props;

  const stateStyles = isActive ? {
    flexGrow: 1,
  } : {
    flexGrow: 0,
  };

  return {
    background: color.white,

    ...utility.flexFlow('column', 'nowrap'),
    flexShrink: 0,
    flexBasis: '40px',

    position: 'relative',

    padding: layout.stepper.space,

    transition,

    ...stateStyles,

    // This is the grey line that runs under each step.
    '::before': {
      content: '""',

      background: color.grey88,

      position: 'absolute',
      top: isFirstStep ? '16px' : '0px',
      left: '23px',
      bottom: isLastStep ? 'initial' : '-32px',

      height: isLastStep && '16px',
      width: '1px',
    }
  }
});

export const StepHeader = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  flexShrink: 0,

  position: 'relative', // Need pos:r so that it renders above the line.
});

const stepCountBorderWidth = 8;
const stepCountSize = '24px';

export const StepCount = styled('div', (props) => {
  const {
    isActive,
    isComplete,
  } = props;

  const stateStyles = isComplete || isActive ? {
    background: color.amber500,
  } : {
    background: color.grey92,
  };


  return {
    display: 'block',

    position: 'relative',

    marginLeft: `-${stepCountBorderWidth}px`,

    borderRadius: '100%',
    border: `${stepCountBorderWidth}px solid ${color.white}`,

    height: stepCountSize,
    width: stepCountSize,

    transition: 'all 4000ms ease',

    ...stateStyles,
  }
});

export const StepCountNumber = styled('span', (props) => {
  const {
    isActive,
    isComplete,
  } = props;
  const stateStyles = isComplete || isActive ? {
    color: color.textColor,
  } : {
    color: color.white,
  };

  return {
    display: 'block',

    fontSize: '13px',

    ...utility.visibility(!isComplete),

    position: 'absolute',
    top: '50%',
    left: '50%',

    transform: 'translate3d(-50%, -50%, 0)',

    transition,
    ...stateStyles,
  }
});


export const CheckStyled = styled(Check, (props) => {
  const {
    isComplete,
  } = props;
  const checkSize = '16px';

  return {
    ...utility.visibility(isComplete),

    position: 'absolute',
    top: '50%',
    left: '50%',

    height: checkSize,
    width: checkSize,

    transform: 'translate3d(-50%, -50%, 0)',

    transition,
  };
});

const stepTitleLeftSpace = 12 - stepCountBorderWidth;

export const StepTitle = styled('h1', {
  fontSize: '14px',
  color: color.textColor,

  marginTop: '10px',
  marginLeft: `${stepTitleLeftSpace}px`,
});


export const StepBody = styled('form', (props) => {
  const {
    isActive,
  } = props;

  const stateStyles = isActive ? {
    ...utility.visibility(isActive),
  }: {
    ...utility.visibility(isActive),
  };

  return {
    ...utility.flexFlow('column', 'nowrap'),
    flexShrink: 0,

    paddingTop: '2px',
    paddingLeft: '36px',

    transition,

    ...stateStyles,
  };
});

export const StepContent = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flexShrink: 0,
});


export const ActionBar = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  flexShrink: 0,
});

export const ButtonStyled = styled(Button, {
  marginLeft: 'auto',

  boxShadow: 'none !important',

  minWidth: '64px !important',
});
