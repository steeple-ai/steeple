import React, { PureComponent} from 'react';
import Paper from 'material-ui/Paper';

import { Button } from 'react-toolbox/lib/button/Button.js';

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
