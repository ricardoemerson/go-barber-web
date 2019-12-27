import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Profile from '../pages/Profile/index';
import SignIn from '../pages/SignIn/index';
import SignUp from '../pages/SignUp/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={ SignIn } />
      <Route path="/register" component={ SignUp } />

      <Route path="/dashboard" component={ Dashboard } />
      <Route path="/profile" component={ Profile } />
    </Switch>
  );
}