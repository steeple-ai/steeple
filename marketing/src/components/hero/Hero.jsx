import React, { Component } from 'react';

import Logotype from './logotype/Logotype';
import Shadow from './shadow/Shadow';

import {
  Circle,
  Container,
  LogotypeDarkBlue,
  LogotypeLightBlue,
  TriangleContainer,
} from './styles';

class Hero extends Component {
  render() {
    return (
      <div>
        <Logotype />

        <Shadow />

        <Container>
          <Logotype fill='#FFC107' />

          <Circle />

          <TriangleContainer>
            <div className="left-triangle-container">
              <div className="left-triangle">
                <LogotypeLightBlue fill='#3f51b5' />
              </div>
            </div>

            <div className="right-triangle-container">
              <div className="right-triangle">
                <LogotypeDarkBlue fill='#7987cb' />
              </div>
            </div>
          </TriangleContainer>

          <TriangleContainer>
            <div className="bottom-left" />
            <div className="bottom-right" />
          </TriangleContainer>
        </Container>
      </div>
    );
  }
}

export default Hero;
