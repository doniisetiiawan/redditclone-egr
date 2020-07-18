import React from 'react';
import { Route, Router, Switch } from 'react-router-dom';
import App from './containers/App';
import Posts from './containers/Posts';
import AddPost from './containers/AddPost';

const Routes = (props) => (
  <Router {...props}>
    <App />
  </Router>
);

export default Routes;
