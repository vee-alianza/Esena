import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import NavBar from "../Navigation";
import { signUp } from "../../store/session";
import { addToAllUsers } from "../../store/teammates";

const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [occupation, setOccupation] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const user = useSelector((state) => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(
        signUp(firstName, lastName, occupation, bio, email, password)
      );
      if (data.errors) {
        setErrors(data.errors);
      } else {
        dispatch(addToAllUsers(data));
      }
    }
  };

  const updateFirstName = (e) => {
    setFirstName(e.target.value);
  };

  const updateLastName = (e) => {
    setLastName(e.target.value);
  };

  const updateOccupation = (e) => {
    setOccupation(e.target.value);
  };

  const updateBio = (e) => {
    setBio(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to="/" />;
  }

  return (
    <div className="login-signup-form-container">
      {/* <NavBar /> */}
      <div className="corner-login-signup-btn-container">
        <span className="login-signup-msg">Already have an account? </span>
        <Link to="/login" exact={true} className="corner-login-signup-btn">
          <span>Log In</span>
        </Link>
      </div>
      <div className="left-image-container">
        <img src="/images/login-left.png" />
        <Link to="/">
          <img src="/images/esena.png" className="logo-left-image" />
        </Link>
      </div>
      <form onSubmit={onSignUp} className="auth-form signup">
        <div>
          {errors.map((error, ind) => (
            <div key={ind}>{error}</div>
          ))}
        </div>
        <div>
          {/* <label>First Name</label> */}
          <input
            type="text"
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
            placeholder="First Name*"
          ></input>
        </div>
        <div>
          {/* <label>Last Name</label> */}
          <input
            type="text"
            name="firstName"
            onChange={updateLastName}
            value={lastName}
            placeholder="Last Name*"
          ></input>
        </div>
        <div>
          {/* <label>Occupation</label> */}
          <input
            type="text"
            name="occupation"
            onChange={updateOccupation}
            value={occupation}
            placeholder="Occupation*"
          ></input>
        </div>
        <div>
          {/* <label>Bio</label> */}
          <textarea
            type="text"
            name="bio"
            onChange={updateBio}
            value={bio}
            placeholder="Bio (optional)"
          ></textarea>
        </div>
        <div>
          {/* <label>Email</label> */}
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email*"
          ></input>
        </div>
        <div>
          {/* <label>Password</label> */}
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password*"
          ></input>
        </div>
        <div>
          {/* <label>Repeat Password</label> */}
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Repeat Password*"
          ></input>
        </div>
        <button type="submit">Sign Up</button>
        <Link to="/login" className="auth-form-link">
          Already have an account? <span>Log In!</span>
        </Link>
      </form>
    </div>
  );
};

export default SignUpForm;
