import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 500); // Matches CSS animation time
  };

  return (
    <div className={`user-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      <h2 className="admin-title">ADMIN LOGIN</h2>
      <input type="text" placeholder="ID" className="admin-input" />
      <input type="password" placeholder="PASSWORD" className="admin-input" />
      <button className="admin-button">LOGIN</button>

      {/* Back Button with Fade-Out Effect */}
      <button className="admin-back-button" onClick={handleBack}>
        BACK TO MAIN PAGE
      </button>
    </div>
  );
};

export default AdminLogin;
