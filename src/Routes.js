import React from 'react';
import { Route } from 'react-router';

import UnAuthRoute from './components/UnAuthRoute';
import AuthenticatedRoute from './components/AuthenticatedRoute'
import Home from './components/Home';
import Signup from './containers/Signup';
import Login from './containers/Login';
import Cafes from './containers/Cafes';

const Routes = () => {
  return (
    <React.Fragment>
      <Route exact path='/' component={Home} />

      <UnAuthRoute exact path='/signup' component={Signup} />
      <UnAuthRoute exact path='/login' component={Login} />
      
      <AuthenticatedRoute exact path='/cafes' component={Cafes} />
    </React.Fragment>
  )
}

export default Routes;