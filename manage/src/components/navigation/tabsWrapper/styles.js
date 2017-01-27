import { layout } from '../../../styles';

export const tabsStyles = {
  paddingLeft: '12px',
  width: 'auto',
  height: layout.navigation.height,
};

export const tabItemContainerStyles = {
  height: layout.navigation.height,
};

export function getTabStyles(isActive) {
  // We want active tabs to not have hover state or pointer events so that users don't think of clicking them.
  const isActiveStyles = isActive && {
    cursor: 'default',
    pointerEvents: 'none',
  };

  return {
    userSelect: 'none',
    height: '100%',
    width: 'auto',
    ...isActiveStyles,
  };
};

export function getInkBarStyles(activeTabWidth, leftOffset) {
  return {
    background: 'white',
    left: `${leftOffset}px`,
    width: `${activeTabWidth}px`,
    transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
};
