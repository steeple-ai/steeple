export const tabsStyles = {
  paddingLeft: '12px',
  width: '700px',
  height: '64px',
};

export const tabItemContainerStyles = {
  height: '64px',
};

export const tabStyles = {
  width: 'auto',
};

export function getInkBarStyles(activeTabWidth, leftOffset) {
  return {
    background: 'white',
    left: `${leftOffset}px`,
    width: `${activeTabWidth}px`,
    transition: 'all 1s cubic-bezier(0.23, 1, 0.32, 1) 0ms',
  };
};
