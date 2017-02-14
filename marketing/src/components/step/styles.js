import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';


export const StepContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),

  margin: layout.stepper.space,
});

export const StepHeader = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  alignItems: 'center',
});

const stepCountBorderWidth = 8;
const stepCountSize = '24px';

export const StepCount = styled('span', {
  background: color.amber500,

  fontSize: '13px',

  ...utility.flexFlow('row', 'nowrap'),
  justifyContent: 'center',
  alignItems: 'center',

  marginLeft: `-${stepCountBorderWidth}px`,

  borderRadius: '100%',
  border: `${stepCountBorderWidth}px solid ${color.white}`,

  height: stepCountSize,
  width: stepCountSize,
});

const stepTitleLeftSpace = 24 - stepCountBorderWidth;

export const StepTitle = styled('h1', {
  fontSize: '14px',
  color: color.textColor,

  marginLeft: `${stepTitleLeftSpace}px`,
});


export const StepBody = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
});

export const StepContent = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
});


export const ActionBar = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
});

