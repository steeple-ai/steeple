import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

export const StepContainer = styled('div', (props) => {
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

    position: 'absolute',
    ...utility.position('0'),

    padding: `${layout.stepper.space * 2}px`,

    transition: 'all 300ms ease 100ms',

    ...stateStyles,
  }
});

export const StepTitle = styled('div', {

});
