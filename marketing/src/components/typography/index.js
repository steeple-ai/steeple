import { styled } from 'styletron-react';
import { color } from '../../styles';

export const FormHeader = styled('h1', {
  fontSize: '14px',
  fontWeight: 600,
  color: color.white,
  '-webkit-font-smoothing': 'antialiased',

  marginTop: '2px',
  marginBottom: '1px',
});

export const TotalAmount = styled('h1', {
  fontFamily: '\'Space Mono\', monospace',
  fontSize: '32px',
  color: color.white,
  '-webkit-font-smoothing': 'antialiased',

  marginTop: '8px',
  marginBottom: '8px',
});

export const GreyText = styled('span', {
  color: color.inputLabelColor,
  '-webkit-font-smoothing': 'antialiased',
});
