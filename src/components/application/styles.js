import { styled } from 'styletron-react';
import { utility } from '../../styles';

// Application wrapper. Setting flex, overall app dimensions, and overflow hidden.
export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  overflow: 'hidden',

  height: '100vh',
  width: '100vw',
});

// Main is our scroll controller. It helps propagate flex down the dom, and aligns the content in the center.
export const Main = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  alignItems: 'center',
  flex: 1,
  ...utility.overflowY,
});
