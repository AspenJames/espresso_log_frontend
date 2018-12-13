import React from 'react';
import { Route, withRouter } from 'react-router';

const CafeRoute = ({ component: Component, ...rest }) => {

  const currCafeId = parseInt(rest.location.pathname.replace("/cafes/", ""));
  let cafeUser;
  if (rest.user.cafeUsers){
    cafeUser = rest.user.cafeUsers.find(c => c.cafe_id === currCafeId)
  }

  const isAdmin = () => {
    return cafeUser ? cafeUser.admin : false;
  }
  
  const isApproved = () => {
    return cafeUser ? cafeUser.approved : false;
  }

  return (<Route {...rest} render={props => {
    if (isAdmin()) {
      return <Component admin='true' approved='true' cafes={rest.cafes} {...props} />
    } else if (isApproved()) {
      return <Component approved='true' cafes={rest.cafes} {...props} />;
    } else {
      return <Component approved='false' cafes={rest.cafes} {...props} />
    }
  }} />)
};


export default withRouter(CafeRoute);