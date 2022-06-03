import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";
import { login } from "../../store/session";
import ErrorMessage from "../ErrorMessage";
import "./auth.css";

import logo from "../../assets/esena.png";
import loginPic from "../../assets/login-left3.jpeg";

const LoginForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      const errors = {};
      if (Array.isArray(data)) {
        data.forEach((error) => {
          const label = error.split(":")[0].slice(0, -1);
          const message = error.split(":")[1].slice(1);
          errors[label] = message;
        });
      } else {
        errors.overall = data;
      }
      setErrorMessages(errors);
    }
  };

  const loginDemo = async (e) => {
    e.preventDefault();
    const data = await dispatch(login("demo@aa.io", "password"));
    if (data) {
      const errors = {};
      if (Array.isArray(data)) {
        data.forEach((error) => {
          const label = error.split(":")[0].slice(0, -1);
          const message = error.split(":")[1].slice(1);
          errors[label] = message;
        });
      } else {
        errors.overall = data;
      }
      setErrorMessages(errors);
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
      <div className="corner-login-signup-btn-container">
        <span className="login-signup-msg">Don't have an account? </span>
        <Link to="/sign-up" exact={"true"} className="corner-login-signup-btn">
          <span>Sign Up</span>
        </Link>
      </div>

      <div className="left-image-container">
        <img src={loginPic} alt="loginbanner" />
        <Link to="/">
          <img src={logo} className="logo-left-image" alt="logo" />
        </Link>
      </div>
      <form onSubmit={onLogin} className="auth-form login">
        {/* <div className="login-signup-error-container">
          {errors.map((error, ind) => {
            error = error.split(":")[1];
            return <div key={ind}>{error}</div>;
          })}
        </div> */}
        <h1>Log into Esena</h1>
        <div className="auth-input-group">
          <input
            name="email"
            type="text"
            required={true}
            value={email}
            onChange={updateEmail}
          />
          <label htmlFor="email" className="input-label">
            Email
          </label>
          <ErrorMessage label={""} message={errorMessages.email} />
        </div>
        <div className="auth-input-group">
          <input
            name="password"
            type="password"
            required={true}
            value={password}
            onChange={updatePassword}
          />
          <label htmlFor="email" className="input-label">
            Password
          </label>
          <ErrorMessage label={""} message={errorMessages.password} />
        </div>
        <div className="submit-group">
          <button type="submit">Login</button>

          <button id="demo-btn" onClick={loginDemo}>
            Demo User
          </button>
        </div>
        <Link to="/sign-up" className="auth-form-link">
          Don't have an account? <span>Sign Up!</span>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
