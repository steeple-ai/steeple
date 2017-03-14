import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

import Button from 'react-toolbox/lib/button/Button'

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

const iconSidePadding = '8px !important';

const baseButtonStyles = {
  display: 'flex !important', // Have to do this to override react-toolbox.

  boxShadow: 'none !important',

  minWidth: 'auto !important',
};

export const ButtonLeftStyled = styled(Button, {
  ...baseButtonStyles,

  paddingRight: '15px !important',
  paddingLeft: iconSidePadding,
});

export const ButtonRightStyled = styled(Button, {
  ...baseButtonStyles,

  marginLeft: 'auto',

  paddingRight: iconSidePadding,
  paddingLeft: '15px !important',
});

export const ButtonRightFinishStyled = styled(Button, {
  ...baseButtonStyles,

  marginLeft: 'auto',

  paddingRight: '15px !important',
  paddingLeft: '15px !important',
});

export const ButtonArrowIcon = styled('i', {
  alignSelf: 'center', // Safari doesn't inherit the alignment correctly from the parent.
});
