import React, { Component } from 'react';

import Logotype from '../../components/logotype/Logotype';
import HomeNavigation from './homeNavigation/HomeNavigation';

import {
  HomeContainer,
  MainContent,
  Title,
} from './styles';

class Home extends Component {
  render() {
    return (
      <HomeContainer>
        <HomeNavigation />

        <MainContent>
          <Logotype />
          <Title>
            Offerings Powered by the future.
          </Title>
        </MainContent>
      </HomeContainer>
    );
  }
}

export default Home;
