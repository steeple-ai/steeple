import { styled } from 'styletron-react';
import { color, layout, utility } from '../../styles';

import Logo from '../logo/Logo';

const toolbarTopSpace = 12 / 2;
const toolbarSideSpace = 18 / 2;
const toolbarTitleSideSpace = 24 / 2;

export const ToolbarContainer = styled('div', {
  background: color.deepOrange500,

  ...utility.flexFlow('row', 'nowrap'),
  alignItems: 'center',
  flexShrink: 0,

  position: 'relative', // Needs pos: r so that it renders above the content bellow.

  boxSizing: 'border-box',

  height: layout.toolbar.height,

  padding: `${toolbarTopSpace}px ${toolbarSideSpace}px`,
});

const logoSize = '32px';

export const LogoStyled = styled(Logo, {
  margin: `${toolbarTopSpace}px ${toolbarTitleSideSpace}px ${toolbarTopSpace}px ${toolbarSideSpace}px`,

  height: logoSize,
  width: logoSize,
});

export const ToolbarTitle = styled('h1', {
  fontSize: '20px',
  letterSpacing: '0.71px',
  color: color.white,

  marginLeft: `${toolbarTitleSideSpace}px`,
});
