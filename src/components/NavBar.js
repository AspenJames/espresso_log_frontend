import React from 'react';
import { NavLink } from 'react-router-dom';
import { withRouter } from 'react-router';

import logo from "../logo.svg";

const NavBar = (props) => {
  const active = (location) => {
    return props.location.pathname === location
    ? "active"
    : null
  }

  return (
    <nav>
      <div className='nav-wrapper deep-purple darken-3'>
        <NavLink to='/' className="left" exact><img height='auto' alt="logo" src={logo}/></NavLink>
        { props.user.id === null 
          ? (
            <ul className="right">
              <li className={active('/login')}><NavLink to='/login' exact>Login</NavLink></li>
              <li className={active('/signup')}><NavLink to='/signup' exact>Sign Up</NavLink></li>
            </ul>
          )
          : (
            <ul className="right">
              <li className={active('/cafes')}><NavLink to='/cafes' exact>Cafes</NavLink></li>
              <li><NavLink to='/logout' exact>Log Out</NavLink></li>
            </ul>
          )}
      </div>
    </nav>
  )
}

export default withRouter(NavBar);