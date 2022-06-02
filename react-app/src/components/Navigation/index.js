import React, { useRef, useEffect } from "react";
import { NavLink, useHistory } from "react-router-dom";
import LogoutButton from "../auth/LogoutButton";

import "./index.css";

const NavBar = () => {
  const history = useHistory();
  const navBar = useRef();

  useEffect(() => {
    const splashContainer = document.querySelector(".splash-container");

    splashContainer.addEventListener("scroll", (e) => {
      if (splashContainer.scrollTop > 0) {
        navBar?.current?.classList.add("nav-shadow");
      } else {
        navBar?.current?.classList.remove("nav-shadow");
      }
    });
  }, []);

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
    <nav className="splash-nav-bar" ref={navBar}>
      <div className="splash-outer">
        <div className="global-limit">
          <div className="logo-wrap">
            <img src="/images/esena.png" />
          </div>
          <div className="right-nav">
            <button className="nav-about-btn">About</button>
            <button className="nav-login-btn">{navlink}</button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
