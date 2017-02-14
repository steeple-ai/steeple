import React, { Component } from 'react';

import Toolbar from '../toolbar/Toolbar';

import {
  GiveContainer,
} from './styles';

class Give extends Component {
  render() {
    return (
      <GiveContainer>
        <Toolbar title="C3 Equippers" />
        Give!
      </GiveContainer>
    );
  }
}

export default Give;
