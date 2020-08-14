import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Login from './pages/Login';
import Layout from './pages/Layout';
import NotFound from './pages/NotFound';

import AuthZone from './utils/AuthZone';

const App = () => (
  <Router>
    <Switch>
      <Route path='/login' component={Login} />
      <AuthZone path='/'>
        <Layout />
      </AuthZone>
      <Route path='*' component={NotFound} />
    </Switch>
  </Router>
);

export default App;