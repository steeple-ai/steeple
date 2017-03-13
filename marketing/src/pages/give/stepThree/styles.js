import { styled } from 'styletron-react';
import { color, utility } from '../../../styles';

import Step from '../../../components/step/Step';

import Input from 'react-toolbox/lib/input/Input';

export const StepStyled = styled(Step, {
  background: color.indigo500,
});


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

