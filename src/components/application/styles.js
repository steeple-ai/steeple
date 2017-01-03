import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  overflow: 'hidden',

  height: '100vh',
  width: '100vw',
});

export const titleStyles = {
  display: 'none',
};

export const tabsStyles = {
  width: '100%',
};

export const tabStyles = {
  padding: '0 24px',
  width: 'auto',
};

export const inkBarStyles = {
  background: 'white',
};

