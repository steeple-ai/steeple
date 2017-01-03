import { styled } from 'styletron-react';

export const LogoContainer = styled('svg', (props) => {
  const {
    style,
  } = props;

  return {
    overflow: 'hidden',
    borderRadius: '10000px',
    ...style,
  };
});
