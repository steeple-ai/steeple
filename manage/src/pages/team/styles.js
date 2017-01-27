import { styled } from 'styletron-react';
import { color, utility } from '../../styles';

export const TeamContainer = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  flex: 1,
  width: '100%',
});

export const listStyles = {
  boxSizing: 'border-box',
  borderRight: `1px solid ${color.grey85}`,
  width: '360px',
};
