import React from "react";
import { useNavigate } from "react-router-dom";

const EmergencyInfo = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/"); // Navigates back to main page
  };

  return (
    <div className="admin-container fade-in" style={{ position: "relative", minHeight: "100vh" }}>
      <h2 className="admin-title">EMERGENCY INFORMATION</h2>
      <p style={{ color: "#f3f3f3", textAlign: "center" }}>
        This is the emergency information page. Display all necessary emergency data here.
      </p>

      {/* Logout Button - Bottom Right */}
      <button
        onClick={handleLogout}
        className="emergency-logout-button"
      >
        LOGOUT
      </button>
    </div>
  );
};

export default EmergencyInfo;
