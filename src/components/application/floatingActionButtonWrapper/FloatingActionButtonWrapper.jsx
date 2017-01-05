import React, { PureComponent } from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

import {
  floatingActionButtonStyles,
} from './styles';

class FloatingActionButtonWrapper extends PureComponent {
  render() {
    return (
      <FloatingActionButton
        style={floatingActionButtonStyles}
      >
        <ContentAdd />
      </FloatingActionButton>
    );
  }
}

export default FloatingActionButtonWrapper;
