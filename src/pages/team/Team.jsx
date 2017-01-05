import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import {
  containerStyles,
} from './styles';

class Team extends PureComponent {
  render() {
    return (
      <Paper
        style={containerStyles}
        zDepth={1}
      >
        team
      </Paper>
    );
  }
}

export default Team;
