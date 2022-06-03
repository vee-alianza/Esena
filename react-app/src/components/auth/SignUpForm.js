import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect, Link } from "react-router-dom";

import { signUp } from "../../store/session";
import { addToAllUsers } from "../../store/teammates";
import ErrorMessage from "../ErrorMessage";

import logo from "../../assets/esena.png";
import loginPic from "../../assets/login-left3.jpeg";

const SignUpForm = () => {
  const [errorMessages, setErrorMessages] = useState({});
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
        const errors = {};
        if (Array.isArray(data.errors)) {
          data.errors.forEach((error) => {
            const label = error.split(":")[0].slice(0, -1);
            const message = error.split(":")[1].slice(1);
            errors[label] = message;
          });
        } else {
          errors.overall = data;
        }
        setErrorMessages(errors);
      } else {
        dispatch(addToAllUsers(data));
      }
    } else {
      const errors = {};
      errors.repeatPassword = "Repeat password doesn't match Password";
      setErrorMessages(errors);
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
      <div className="corner-login-signup-btn-container">
        <span className="login-signup-msg">Already have an account? </span>
        <Link to="/login" exact={"true"} className="corner-login-signup-btn">
          <span>Log In</span>
        </Link>
      </div>
      <div className="left-image-container">
        <img src={loginPic} />
        <Link to="/">
          <img src={logo} className="logo-left-image" />
        </Link>
      </div>
      <form onSubmit={onSignUp} className="auth-form signup">
        <ErrorMessage label={""} message={errorMessages.overall} />
        <h1>Create an account</h1>
        <div>
          <input
            type="text"
            name="firstName"
            onChange={updateFirstName}
            value={firstName}
            placeholder="First Name*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.first_name} />
        </div>
        <div>
          <input
            type="text"
            name="firstName"
            onChange={updateLastName}
            value={lastName}
            placeholder="Last Name*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.last_name} />
        </div>

        <div>
          <input
            type="text"
            name="occupation"
            onChange={updateOccupation}
            value={occupation}
            placeholder="Occupation*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.occupation} />
        </div>
        <div>
          <textarea
            type="text"
            name="bio"
            onChange={updateBio}
            value={bio}
            placeholder="Bio (optional)"
          ></textarea>
          <ErrorMessage label={""} message={errorMessages.bio} />
        </div>
        <div>
          <input
            type="text"
            name="email"
            onChange={updateEmail}
            value={email}
            placeholder="Email*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.email} />
        </div>
        <div>
          <input
            type="password"
            name="password"
            onChange={updatePassword}
            value={password}
            placeholder="Password*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.password} />
        </div>
        <div>
          <input
            type="password"
            name="repeat_password"
            onChange={updateRepeatPassword}
            value={repeatPassword}
            required={true}
            placeholder="Repeat Password*"
          ></input>
          <ErrorMessage label={""} message={errorMessages.repeatPassword} />
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
