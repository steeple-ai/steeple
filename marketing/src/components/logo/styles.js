import { styled } from 'styletron-react';

export const LogoContainer = styled('svg', (props) => {
  const {
    style,
  } = props;

  return {
    overflow: 'hidden',
    borderRadius: '100%', // Can be 100% since the logo is always a square.
    ...style,
  };
});
