import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

export const StepperContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,

  padding: layout.stepper.space,
});
