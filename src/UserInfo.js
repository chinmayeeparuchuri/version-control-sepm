// src/UserInfo.js
import React from "react";
import { useNavigate } from "react-router-dom";

const UserInfo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Navigates back to main page
  };

  return (
    <div
      className="admin-container fade-in"
      style={{ position: "relative", minHeight: "100vh" }}
    >
      <h2 className="admin-title">USER DASHBOARD</h2>
      <p style={{ color: "#f3f3f3", textAlign: "center" }}>
        Welcome! This is your personalized health data dashboard.
      </p>

      {/* Logout Button - Bottom Right */}
      <button onClick={handleLogout} className="user-logout-button">
        LOGOUT
      </button>
    </div>
  );
};

export default UserInfo;
