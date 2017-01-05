import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

// Application wrapper. Setting flex, overall app dimensions, and overflow hidden.
export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  overflow: 'hidden',

  position: 'relative', // this is for Shadow.

  height: '100vh',
  width: '100vw',
});

export const Shadow = styled('div', (props) => {
  const {
    isActive,
  } = props;

  return {
    pointerEvents: 'none',

    position: 'absolute',
    ...utility.position(`${layout.navigation.height} 0 0`),

    boxShadow: 'inset 0px 5px 6px -3px rgba(0, 0, 0, 0.4)',

    height: '6px',

    ...utility.visibility(isActive),
    // ...utility.transition(isActive, 400),
    transition: 'all ease 400ms',
  };
});

// Main is our scroll controller. It helps propagate flex down the dom, and aligns the content in the center.
export const Main = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  alignItems: 'center',
  flex: 1,

  ...utility.overflowY,
});
