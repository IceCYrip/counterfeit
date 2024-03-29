import React, { useEffect } from "react";
import "./styles/App.css";
import Navbar from "./components/Navbar";
import { Link } from "react-router-dom";

function App() {
  const userDataString = localStorage.getItem("userData") ?? "";
  const userData = userDataString ? JSON.parse(userDataString ?? "") : {};

  useEffect(() => {
    localStorage.setItem("activeMenu", "home");
  }, []);

  return (
    <div className="homeWrapper">
      <Navbar />

      <div className="homeBody">
        <div className="bodyLeft">
          <h1>Your Trust, Our Technology</h1>
          <div className="bttnGrp">
            <span className="dashboardButton">
              {/* <Link to="/manufacturer">Add Product</Link> */}
              <Link to={userData?.id ? "/dashboard" : "/manufacturer"}>
                Manufacturer
              </Link>
            </span>
            <span className="dashboardButton">
              <Link to="/buyer">Verify Product</Link>
            </span>
          </div>
        </div>
        <br />
        <img
          className="dashboardImg"
          src="/dashboardImage.png"
          alt="Dashboard"
        />
      </div>
    </div>
  );
}

export default App;
