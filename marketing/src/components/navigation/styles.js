import { styled } from 'styletron-react';
import { layout } from '../../styles';

export const NavigationContainer = styled('div', {
  position: 'relative', // Needs pos: r so that it renders above the content bellow.

  boxSizing: 'border-box',

  height: layout.navigation.height,

  padding: '8px 32px',
});

const logoSize = '64px';

export const LogoStyles = {
  margin: '8px 32px',

  height: logoSize,
  width: logoSize,
};
