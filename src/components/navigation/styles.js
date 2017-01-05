import { styled } from 'styletron-react';
import { utility } from '../../styles';

export const Shadow = styled('div', (props) => {
  const {
    isActive,
  } = props;

  return {
    position: 'absolute',
    ...utility.position('0'),
    boxShadow: 'rgba(0, 0, 0, 0.156863) 0px 3px 10px, rgba(0, 0, 0, 0.227451) 0px 3px 10px',
    ...utility.visibility(isActive),
    ...utility.transition(isActive, 200),
  };
});

export const appBarStyles = {
  transition: 'all ease 200ms',
};

export const titleStyles = {
  flex: 0,
  width: '0',
};

export const logoStyles = {
  margin: 'auto 12px auto 0',
};
