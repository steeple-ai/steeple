import React from 'react';
import {
  browserHistory,
  Route,
  Router,
} from 'react-router';

import Application from './components/application/Application';

import Congregation from './pages/congregation/Congregation';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';

export default (
  <Router history={browserHistory}>
    <Route path="/" component={Application}>
      <Route path="congregation" component={Congregation} />

      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);