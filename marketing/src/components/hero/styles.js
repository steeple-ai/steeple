import { styled } from 'styletron-react';

import { color } from '../../styles/';

export const HeroContainer = styled('div', {
  backgroundImage: 'linear-gradient(135deg, rgb(255, 87, 34) 0%, rgb(255, 87, 34) 70.8vh, rgb(255, 193, 7) 70.8vh, rgb(255, 87, 34) 100%)',
  // background: color.deepOrange500,

  flex: 1,

  padding: '197px 64px 0 260px',
});

export const Title = styled('h1', {
  fontSize: '64px',
  fontWeight: 400,
  color: color.white,

  marginTop: '67px',
  marginLeft: '26px',
});
