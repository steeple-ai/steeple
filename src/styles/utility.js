const overflow = {
  '-webkit-overflow-scrolling': 'touch',
};

export default {
  flexFlow: (direction, wrap) => ({ display: 'flex', flexFlow: `${direction} ${wrap}` }),
  overflowY: {
    overflowY: 'auto',
    ...overflow,
  },
  overflowX: {
    overflowX: 'auto',
    ...overflow,
  },
};
