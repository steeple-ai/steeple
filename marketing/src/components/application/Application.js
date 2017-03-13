import React, { Component } from 'react';

// Import Router
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import createBrowserHistory from 'history/createBrowserHistory'

// Import Route components.
import Home from '../../pages/home/Home';
import Give from '../../pages/give/Give';

import {
  ApplicationContainer,
} from './styles';

const NoMatch = () => <Home />;

class Application extends Component {
  render() {
    return (
      <Router history={createBrowserHistory()}>
        <ApplicationContainer>
          <Switch>
            <Route exact path="/" component={Home} />

            <Route path="/give" component={Give} />

            <Route component={NoMatch}/>
          </Switch>
        </ApplicationContainer>
      </Router>
    );
  }
}

export default Application;
