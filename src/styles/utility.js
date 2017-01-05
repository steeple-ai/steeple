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

  position(position) {
    if (typeof position !== 'string') {
      console.warn(`Must pass string to 'position()', you passed ${position} which is ${typeof position}`);

      return;
    }

    const splitPosition = position.split(' ');
    let top;
    let right;
    let bottom;
    let left;

    if (splitPosition.length === 1) {
      top = right = bottom = left = splitPosition[0];
    } else if (splitPosition.length === 2) {
      top = bottom = splitPosition[0];
      right = left = splitPosition[1];
    } else if (splitPosition.length === 3) {
      top = splitPosition[0];
      right = left = splitPosition[1];
      bottom = splitPosition[2];
    } else if (splitPosition.length === 4) {
      top = splitPosition[0];
      right = splitPosition[1];
      bottom = splitPosition[2];
      left = splitPosition[3];
    }

    return {
      top,
      right,
      bottom,
      left,
    };
  },

  transition(isActive, duration) {
    return {
      transition: `all ${this.transitionTiming(isActive)} ${duration}ms`,
    };
  },

  transitionTiming: (isActive) => isActive ? 'ease-in' : 'ease-out',

  visibility: (isActive) => isActive ? {
    visibility: 'visible',
    opacity: 1,
  } : {
    visibility: 'hidden',
    opacity: 0,
  },
};
