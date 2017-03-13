import { styled } from 'styletron-react';
import { color, utility } from '../../styles';

import Percent from '../icons/Percent';

export const PercentContainer = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),
  flexShrink: 0,
});

export const PercentStyled = styled(Percent, (props) => {
  const {
    isActive,
  } = props;
  const stateStyles = isActive && {
    color: color.amber500,
  };

  return {
    margin: '12px',

    ...utility.inputTransition,
    ...stateStyles,
  };
});

const rowRightMargin = 14;

export const Row = styled('div', {
  ...utility.flexFlow('column', 'nowrap'),
  flex: 1,

  position: 'relative',

  marginRight: `-${rowRightMargin}px`,

  paddingTop: '33px',
  paddingBottom: '23px',
  paddingLeft: '4px',
});

export const InputLabel = styled('h1', (props) => {
  const {
    isActive,
  } =  props;
  const stateStyles = isActive ? {
    color: color.amber500,

    transform: 'translate3d(0, -26px, 0) scale(.8)',
  } : {
    color: color.inputLabelColor,

    transform: 'translate3d(0, 0, 0)',
  };

  return {
    fontSize: '16px',
    '-webkit-font-smoothing': 'antialiased',

    cursor: 'default',
    userSelect: 'none',

    position: 'absolute',
    top: '15px',

    marginRight: `${rowRightMargin}px`,
    marginBottom: '2px',
    marginLeft: '16px',

    transformOrigin: 'top left',
    ...utility.inputTransition,
    ...stateStyles,
  };
});

export const ValueRow = styled('div', {
  ...utility.flexFlow('row', 'nowrap'),

  position: 'relative',

  marginTop: '-4px',
  marginRight: '14px',
  marginLeft: '16px',
});


export const Value = styled('span', (props) => {
  const {
    left,
    isActive,
  } = props;
  let positionStyles;
  const stateStyles = isActive && {
    fontSize: '14px',
    color: color.amber500,
  };

  if (left === 100) {
    positionStyles = {
      right: '0%',
    };
  } else if (left === 0) {
    positionStyles = {
      left: `${0}%`,
    }
  } else {
    positionStyles = {
      left: `${left}%`,
      transform: 'translateX(-50%)',
    }
  }

  return {
    fontSize: '12px',
    color: 'hsla(0, 0%, 0%, .38)',

    position: 'absolute',
    ...positionStyles,
    ...stateStyles,
  };
});
