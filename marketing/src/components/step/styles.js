import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';

import Button from 'react-toolbox/lib/button/Button'

const transition = 'all 300ms ease 100ms';

export const StepContainer = styled('div', (props) => {
  const {
    isActive,
    isLastStep,
  } = props;

  const stateStyles = isActive ? {
    flex: '1 1 48px',
  } : {
    flex: '0 1 48px',
  };

  // This is the grey line that runs under each step.
  const notLastStepStyles = !isLastStep && {
    '::before': {
      content: '""',

      background: color.grey88,

      position: 'absolute',
      top: '8px',
      left: '11px',
      bottom: '-24px',

      width: '1px',
    }
  };

  return {
    ...utility.flexFlow('column', 'nowrap'),

    position: 'relative',

    margin: layout.stepper.space,

    transition,

    ...stateStyles,
    ...notLastStepStyles,
  }
});

export const StepHeader = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative', // Need pos:r so that it renders above the line.
});

const stepCountBorderWidth = 8;
const stepCountSize = '24px';

export const StepCount = styled('span', (props) => {
  const {
    isActive,
    isComplete,
  } = props;

  const stateStyles = isComplete || isActive ? {
    background: color.amber500,
    color: color.textColor,
  } : {
    background: color.grey92,
    color: color.white,
  };


  return {
    fontSize: '13px',

    ...utility.flexFlow('row', 'nowrap'),
    justifyContent: 'center',
    alignItems: 'center',

    marginLeft: `-${stepCountBorderWidth}px`,

    borderRadius: '100%',
    border: `${stepCountBorderWidth}px solid ${color.white}`,

    height: stepCountSize,
    width: stepCountSize,

    transition,

    ...stateStyles,
  }
});

const stepTitleLeftSpace = 16 - stepCountBorderWidth;

export const StepTitle = styled('h1', {
  fontSize: '14px',
  color: color.textColor,

  marginLeft: `${stepTitleLeftSpace}px`,
});


export const StepBody = styled('div', (props) => {
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
    flex: 1,
    flexShrink: 0,

    paddingTop: '2px',
    paddingLeft: '40px',

    transition,

    ...stateStyles,
  };
});

export const StepContent = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  flex: 1,
});


export const ActionBar = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
});

export const ButtonStyled = styled(Button, {
  marginLeft: 'auto',

  boxShadow: 'none !important',
});
