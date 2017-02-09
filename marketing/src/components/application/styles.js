import { styled } from 'styletron-react';
import { layout, utility } from '../../styles';

export const ApplicationContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),

  minHeight: '100vh',
});

export const MainContent = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,
  ...utility.overflowY,

  marginTop: `-${layout.navigation.height}`,
});

