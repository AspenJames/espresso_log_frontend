import React from 'react';
import { Route, Redirect, withRouter } from 'react-router';

const CafeRoute = ({ component: Component, ...rest }) => {

  const isAdmin = () => {
    debugger;
    return false;
  }
  
  const isApproved = () => {
    return false;
  }

  return (<Route {...rest} render={props => {
    if (isAdmin()) {
      return <Component admin='true' {...props} />
    } else if (isApproved()) {
      return <Component {...props} />
    } else {
      return <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }} />
    }
  }} />)
};


export default withRouter(CafeRoute);