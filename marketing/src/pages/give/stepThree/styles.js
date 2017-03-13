import { styled } from 'styletron-react';
import { utility } from '../../../styles';

import Input from 'react-toolbox/lib/input/Input';

export const InputStyled = styled(Input, {
  paddingBottom: '0 !important',
});

const inputSmallSpacing = 16;

export const InputRow = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),

  marginRight: `-${inputSmallSpacing / 2}px`,
  marginLeft: `-${inputSmallSpacing / 2}px`,
});

export const InputSmallStyled = styled(InputStyled, {
  marginRight: `${inputSmallSpacing / 2}px !important`,
  marginLeft: `${inputSmallSpacing / 2}px !important`,
});

