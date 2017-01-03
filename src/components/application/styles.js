import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  overflow: 'hidden',

  height: '100vh',
  width: '100vw',
});
