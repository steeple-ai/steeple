import { styled } from 'styletron-react';
import { layout } from '../../styles';

import Logo from '../logo/Logo';

export const NavigationContainer = styled('div', {
  position: 'relative', // Needs pos: r so that it renders above the content bellow.

  boxSizing: 'border-box',

  height: layout.navigation.height,

  padding: '8px 32px',

  '@media (max-width: 768px)': {
    padding: '8px 8px',
  },
});

const logoSize = '64px';

export const LogoStyled = styled(Logo, {
  margin: '8px 32px',

  height: logoSize,
  width: logoSize,

  '@media (max-width: 768px)': {
    margin: '8px 8px',
  },
});
