import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const navigate = useNavigate();
  const [fadeOut, setFadeOut] = useState(false);

  const handleBack = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/");
    }, 200);
  };

  const handleLogin = () => {
    setFadeOut(true);
    setTimeout(() => {
      navigate("/userinfo");
    }, 200);
  };

  return (
    <div className={`user-container ${fadeOut ? "fade-out" : "fade-in"}`}>
      <div className="user-box">
        <h2 className="user-title">USER LOGIN</h2>
        <input type="text" placeholder="USERNAME" className="user-input" />
        <input type="password" placeholder="PASSWORD" className="user-input" />
        <button className="user-button" onClick={handleLogin}>LOGIN</button>
        <button className="user-back-button" onClick={handleBack}>
          BACK TO MAIN PAGE
        </button>
      </div>
    </div>
  );
};

export default UserLogin;
