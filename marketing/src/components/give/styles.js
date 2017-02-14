import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const GiveContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,
});
