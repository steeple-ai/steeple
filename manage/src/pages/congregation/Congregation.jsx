import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import {
  containerStyles,
} from './styles';

class Congregation extends PureComponent {
  render() {
    return (
      <Paper
        style={containerStyles}
        zDepth={1}
      >
        congregation
      </Paper>
    );
  }
}

export default Congregation;
