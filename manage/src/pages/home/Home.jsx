import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import {
  containerStyles,
} from './styles';

class Home extends PureComponent {
  render() {
    return (
      <Paper
        style={containerStyles}
        zDepth={1}
      >
        home
      </Paper>
    );
  }
}

export default Home;
