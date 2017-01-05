import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import {
  containerStyles,
} from './styles';

class Status extends PureComponent {
  render() {
    return (
      <Paper
        style={containerStyles}
        zDepth={1}
      >
        status
      </Paper>
    );
  }
}

export default Status;
