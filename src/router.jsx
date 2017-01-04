import React from 'react';

// Import react-router stuff.
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';

// Import Application which is the main wrapper for the app, and includes any global components like navigation.
import Application from './components/application/Application';

// Import the different pages for the application.
import Congregation from './pages/congregation/Congregation';
import Home from './pages/home/Home';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import Offering from './pages/offering/Offering';
import Status from './pages/status/Status';
import Team from './pages/team/Team';

// This is a helper function for Router that lets us pass the routed pages through Application and allows us to have a
// page on /. The reason we are doing this here instead of the root index.js is because we need to pass the react-router
// props into Application for navigation purposes.
function createElement(Component, Props) {
  return (
    <Application Component={Component} {...Props} />
  );
}

export default (
  <Router history={browserHistory} createElement={createElement}>
    <Route path="/" component={Home} />
    <Route path="/congregation" component={Congregation} />
    <Route path="/team" component={Team} />
    <Route path="/offering" component={Offering} />
    <Route path="/status" component={Status} />

    <Route path="/*" component={NotFoundPage} />
  </Router>
);
