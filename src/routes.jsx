import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './containers/App';

const Routes = (props) => (
  <Router {...props}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default Routes;
