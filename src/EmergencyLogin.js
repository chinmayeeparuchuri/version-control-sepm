// src/EmergencyLogin.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const EmergencyLogin = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleLogin = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/EmergencyInfo");
    }, 200);
  };

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  return (
    <div className={`admin-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      <div className="admin-box">
        <h2 className="admin-title">UNIQUE ID</h2>
        <input type="text" placeholder="Enter Unique ID" className="admin-input" />
        <button className="admin-button" onClick={handleLogin}>LOGIN</button>
        <button className="admin-back-button" onClick={handleBack}>BACK TO MAIN PAGE</button>
      </div>
    </div>
  );
};

export default EmergencyLogin;
