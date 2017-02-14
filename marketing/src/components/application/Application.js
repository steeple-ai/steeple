import React, { Component } from 'react';

// Import Router
import Router from 'react-router-dom/BrowserRouter';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';
import createHistory from 'history/createBrowserHistory'


// Import Route components.
import Hero from '../hero/Hero';
import Give from '../give/Give';

import {
  ApplicationContainer,
} from './styles';

const NoMatch = () => <Hero />;

class Application extends Component {
  render() {
    return (
      <Router history={createHistory()}>
        <ApplicationContainer>
          <Switch>
            <Route exact path="/" component={Hero} />

            <Route path="/give" component={Give} />

            <Route component={NoMatch}/>
          </Switch>
        </ApplicationContainer>
      </Router>
    );
  }
}

export default Application;
