import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const UnAuthRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    localStorage.getItem('phoenixAuthToken') ? (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    ) : (
      <Component {...props} />
      )
  )} />
)

export default UnAuthRoute;

/**
 * This route allows us to keep a logged-in user from 
 * accessing the forms at '/login' and '/signup'
 */