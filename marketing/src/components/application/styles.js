import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),

  minHeight: '100vh',
});

