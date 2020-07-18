import React from 'react';
import { Router } from 'react-router-dom';
import App from './containers/App';

const Routes = (props) => (
  <Router {...props}>
    <App />
  </Router>
);

export default Routes;
