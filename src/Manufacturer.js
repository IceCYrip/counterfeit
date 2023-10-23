import React from "react";
import Navbar from "./components/Navbar";
import "./styles/Manufacturer.css";
import { useNavigate } from "react-router-dom";

const Manufacturer = () => {
  const routeTo = useNavigate();

  const login = () => {
    //hard coded as of now. Dynamic after backend is done
    localStorage.setItem("userType", "manufacturer");
    routeTo("/dashboard");
  };

  return (
    <div className="loginWrapper">
      <Navbar />
      <div className="loginBody">
        <h1>Login</h1>
        <div className="loginContainer">
          <div className="inputFieldsContainer">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              placeholder="Enter email or username"
              name="username"
            />
          </div>
          <div className="inputFieldsContainer">
            <label htmlFor="password">Password</label>
            <input type="text" placeholder="Enter Password" name="password" />
          </div>
          <label className="forgotPassword">Forgot Password?</label>
          <div className="loginBttnGrp">
            <button className="loginButton" onClick={() => login()}>
              Login
            </button>
            <label className="signUpText">
              Don't have an account?{" "}
              <label className="signUpLink" onClick={() => routeTo("/sign-up")}>
                Sign Up
              </label>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Manufacturer;
