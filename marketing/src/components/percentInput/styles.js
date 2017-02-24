import { styled } from 'styletron-react';
import { color, utility } from '../../styles';

import Percent from '../icons/Percent';

export const TithePercentContainer = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
});

export const PercentStyled = styled(Percent, {
  margin: '12px',
});

const rowRightMargin = 14;

export const Row = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,

  marginRight: `-${rowRightMargin}px`,

  paddingTop: '15px',
  paddingLeft: '4px',
});

export const InputLabel = styled('h1', {
  fontSize: '16px',
  color: color.inputLabelColor,

  cursor: 'default',
  userSelect: 'none',

  marginRight: `${rowRightMargin}px`,
  marginBottom: '2px',
  marginLeft: '16px',
});
