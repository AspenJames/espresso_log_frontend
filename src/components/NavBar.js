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

  const handleLogout = (event) => {
    event.preventDefault();
    props.logoutUser();
  }

  return (
    <nav>
      <div className='nav-wrapper deep-purple darken-3'>
        <NavLink to='/' className="left hide-on-small-only" exact><img alt="logo" src={logo}/></NavLink>
        { props.user.id === null 
          ? (
            <ul className="right">
              <li className={active('/')}><NavLink to='/' exact>Home</NavLink></li>
              <li className={active('/login')}><NavLink to='/login' exact>Login</NavLink></li>
              <li className={active('/signup')}><NavLink to='/signup' exact>Sign Up</NavLink></li>
            </ul>
          )
          : (
            <ul className="right">
              <li className={active('/')}><NavLink to='/' exact>Home</NavLink></li>
              <li className={active('/cafes')}><NavLink to='/cafes' exact>Cafes</NavLink></li>
              <li><a href="#!" onClick={handleLogout}>Log Out</a></li>
            </ul>
          )}
      </div>
    </nav>
  )
}

export default withRouter(NavBar);