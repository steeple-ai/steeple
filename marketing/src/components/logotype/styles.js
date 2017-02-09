import { styled } from 'styletron-react';

export const LogotypeContainer = styled('svg', (props) => {
  const {
    style,
  } = props;

  return {
    ...style,

    '@media (max-width: 1108px)': {
      width: '100%',
      maxWidth: '589px',
      height: 'auto',
    }
  };
});
