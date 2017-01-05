import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import {
  containerStyles,
} from './styles';

class Offering extends PureComponent {
  render() {
    return (
      <Paper
        style={containerStyles}
        zDepth={1}
      >
        offering
      </Paper>
    );
  }
}

export default Offering;
