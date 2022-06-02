
import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';

import "./index.css";

const NavBar = () => {
  const history = useHistory();
  console.log(history.location)

    let navlink;
  if (history.location.pathname == "/") {
    navlink = (
        <NavLink to="/login" exact={true} activeClassName="active">
          Get Started
        </NavLink>
    );
  } else if (history.location.pathname == "/login") {
    navlink = (
        <NavLink to="/sign-up" exact={true} activeClassName="active">
          Sign Up
        </NavLink>
    );
  } else if (history.location.pathname == "/sign-up") {
    navlink = (
        <NavLink to="/login" exact={true} activeClassName="active">
          Login
        </NavLink>
    );
  }
  return (
    <nav>
      <div>Logo</div>
      <NavLink
        to="/"
        exact={true}
        activeClassName="active"
        className="nav-home-btn"
      >
        Home
      </NavLink>
      <div className="nav-login-btn">{navlink}</div>
    </nav>
  );
}

export default NavBar;
