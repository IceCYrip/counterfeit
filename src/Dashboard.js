import React from "react";
import "./styles/Dashboard.css";

import Navbar from "./components/Navbar";
import ManufacturerDashboard from "./components/ManufacturerDashboard";
import BuyerDashboard from "./components/BuyerDashboard";

const Dashboard = () => {
  const user = localStorage.getItem("userType");

  return (
    <div
      className={
        user == "manufacturer" ? "manufacturerWrapper" : "buyerWrapper"
      }
    >
      <Navbar />
      {user == "manufacturer" ? <ManufacturerDashboard /> : <BuyerDashboard />}
    </div>
  );
};

export default Dashboard;
