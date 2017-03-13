import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

export const StepContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),

  width: '100vw',

  padding: `${layout.stepper.space * 2}px`,
});

export const StepTitle = styled('div', {
  marginTop: '13px',
  marginBottom: '15px',
});
