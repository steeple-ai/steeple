import { styled } from 'styletron-react';

import { color, layout, utility } from '../../styles/';

export const HomeContainer = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,
  ...utility.overflowY,
});

export const MainContent = styled('div', {
  backgroundImage: 'linear-gradient(135deg, rgb(255, 87, 34) 0%, rgb(255, 87, 34) 70.8vh, rgb(255, 193, 7) 70.8vh, rgb(255, 87, 34) 100%)',
  // background: color.deepOrange500,

  flex: 1,

  marginTop: `-${layout.heroNavigation.height}`,

  padding: '197px 64px 0 260px',

  '@media (max-width: 1108px)': {
    padding: '197px 64px 0',
  },

  '@media (max-width: 767px)': {
    padding: '128px 16px 0',
  },
});


export const Title = styled('h1', {
  fontSize: '64px',
  color: color.white,

  marginTop: '67px',
  marginLeft: '26px',

  '@media (max-width: 767px)': {
    marginTop: '35px',
    marginLeft: 0,
  },
});
