import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';

import Button from 'react-toolbox/lib/button/Button'


export const StepperContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,
  overflow: 'hidden',
});

export const StepperBody = styled('div', {
  flex: 1,
  ...utility.overflowY,

  position: 'relative',
});

export const StepperFooter = styled('div', {
  background: color.grey96,

  ...utility.flexFlow('row', 'nowrap'),
  justifyContent: 'space-between',
  alignItems: 'center',
  flexShrink: 0,

  height: '52px',

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
