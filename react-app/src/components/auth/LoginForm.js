import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../store/session";

import NavBar from "../Navigation";
import "./auth.css";

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const loginDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-signup-form-container">
      {/* <NavBar /> */}
      <div className="corner-login-signup-btn-container">
        <span className="login-signup-msg">Do not have an account? </span>
        <Link to="/sign-up" exact={true} className="corner-login-signup-btn">
          <span>Sign Up</span>
        </Link>
      </div>
      <div className="left-image-container">
        <img src="/images/login-left.png" />
        <Link to="/">
          <img src="/images/esena.png" className="logo-left-image" />
        </Link>
      </div>
      <form onSubmit={onLogin} className="auth-form login">
        <div className="login-signup-error-container">
          {errors.map((error, ind) => {
            error = error.split(":")[1];
            return <div key={ind}>{error}</div>;
          })}
        </div>
        <div>
          {/* <label htmlFor="email">Email</label> */}
          <input
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={updateEmail}
          />
        </div>
        <div>
          {/* <label htmlFor="password">Password</label> */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={updatePassword}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <div>
          <button id="demo-btn" onClick={loginDemo}>
            Demo User
          </button>
        </div>
        <Link to="/sign-up" className="auth-form-link">
          Do not have an account? <span>Sign Up!</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
