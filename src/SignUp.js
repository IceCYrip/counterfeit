import React, { useState } from "react";
import Navbar from "./components/Navbar";
import "./styles/SignUp.css";
import "./styles/SweetAlert2.css";

import { useNavigate } from "react-router-dom";

import axios from "axios";

import backendURL from "./url";
import Swal from "sweetalert2";

const SignUp = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [userType, setUserType] = useState('manufacturer')
  const userType = "manufacturer";

  const routeTo = useNavigate();

  const signUp = () => {
    const bodyForAPI = {
      fullName,
      email,
      password,
      userType,
    };

    axios
      .post(`${backendURL}/auth/createuser`, bodyForAPI)
      .then((res) => {
        window.alert("Account Created Successfully. Please login now");
        routeTo("/manufacturer");
      })
      .catch((error) =>
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message,
          customClass: {
            confirmButton: "btnError",
          },
          buttonsStyling: false,
        })
      );
  };

  return (
    <div className="signUpWrapper">
      <Navbar />
      <div className="signUpBody">
        <div className="bodyLeft">
          <img className="signUpImage" src="/loginPage.png" alt="Sign Up" />
        </div>
        <div className="bodyRight">
          <div className="formContainer">
            <h1>Sign Up</h1>
            <div className="signUpFieldsContainer">
              <label htmlFor="nameOfUser">Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="nameOfUser"
                onChange={(e) => setFullName(e.target.value)}
              />
            </div>
            <div className="signUpFieldsContainer">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signUpFieldsContainer">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                placeholder="Create a password"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="signUpBttnGrp">
              <button className="signInButton" onClick={() => signUp()}>
                Sign Up
              </button>
              <label className="signInText">
                Already have an account?{" "}
                <label
                  className="signInLink"
                  onClick={() => routeTo("/manufacturer")}
                >
                  Sign in
                </label>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
