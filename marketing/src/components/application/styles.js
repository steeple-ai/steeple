import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),

  height: '100%',
});

