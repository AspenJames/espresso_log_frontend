import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => {
  return (
    <div className='navbar'>
      <NavLink to='/' exact>Home</NavLink><span> | </span>
      { props.user === null 
        ? (
          <React.Fragment>
            <NavLink to='/login' exact>Login</NavLink><span> | </span>
            <NavLink to='/signup' exact>Sign Up</NavLink>
          </React.Fragment>
        )
        : (
          <React.Fragment>
            <NavLink to='/cafes' exact>Cafes</NavLink><span> | </span>
            <NavLink to='/logout' exact>Log Out</NavLink>
          </React.Fragment>
        )}
    </div>
  )
}

export default NavBar;