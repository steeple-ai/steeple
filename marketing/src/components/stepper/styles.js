import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

import Button from 'react-toolbox/lib/button/Button'


export const StepperContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,
  overflow: 'hidden',
});

export const StepperBody = styled('div', ({ activeStep, totalSteps }) => {
  return {
    ...utility.flexFlow('row', 'nowrap'),
    flex: 1,
    ...utility.overflowY,

    width: `${totalSteps * 100}vw`,

    transition: `all ${window.innerWidth * 1.1}ms cubic-bezier(.4, 0, .2, 1) 100ms`,

    transform: `translateX(-${(activeStep - 1) * 100}vw)`,
  };
});

export const StepperFooter = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  justifyContent: 'space-between',
  alignItems: 'center',

  position: 'absolute',
  right: 0,
  bottom: 0,
  left: 0,

  height: `${layout.stepper.footerHeight}px`,

  padding: '0 8px',
});

const iconSidePadding = '2px';

export const ButtonLeftStyled = styled(Button, {
  display: 'flex !important', // Have to do this to override react-toolbox.

  minWidth: 'auto !important',

  paddingRight: iconSidePadding,
  paddingLeft: '8px !important',
});

export const ButtonRightStyled = styled(Button, {
  display: 'flex !important', // Have to do this to override react-toolbox.

  marginLeft: 'auto',

  minWidth: 'auto !important',

  paddingRight: '8px !important',
  paddingLeft: iconSidePadding,
});
