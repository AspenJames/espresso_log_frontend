import React from 'react';
import { Route, Redirect } from 'react-router';

const AuthenticatedRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('phoenixAuthToken') ? (
      <Component {...props} />
    ) : (
      <Redirect to={{
        pathname: '/login',
        state: { from: props.location }
      }} />
    )
  )} />
)

export default AuthenticatedRoute;