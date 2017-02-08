import {styled} from 'styletron-react';

import Logotype from './logotype/Logotype';

export const LogotypeLightBlue = styled(Logotype, {
  top: '342px',
  left: '-180px',

  transform: 'rotate(-16.9deg)',
});

export const LogotypeDarkBlue = styled(Logotype, {
  top: '341px',
  left: '-269px',

  transform: 'rotate(16.9deg)',
});

export const Container = styled('div', {
  overflow: 'hidden',

  position: 'absolute',
  left: '50%',
  zIndex: '10',

  height: '100vh',
  width: '320px',

  transform: 'translateX(-50%)',
});

export const Circle = styled('div', {
  background: 'transparent',

  position: 'absolute',

  top: 'calc(-50vh - 159px - 60px + 25vh)',
  left: 'calc(-50vh - 128px)',


  margin: '32px 32px -196px',

  borderRadius: '100%',
  border: 'calc(50vh + 128px) solid #FF5722',

  height: '256px',
  width: '256px',
});


export const TriangleContainer = styled('div', {
  position: 'relative',
  zIndex: '10',

  marginTop: '25vh',
});
