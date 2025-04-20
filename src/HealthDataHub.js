import React from "react";
import { useNavigate } from "react-router-dom";

const HealthDataHub = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="box">
        <h2 className="title">HEALTH DATA HUB</h2>

        <div className="button-group">
          <button className="button" onClick={() => navigate("/admin")}>ADMIN</button>
          <button className="button" onClick={() => navigate("/user")}>USER</button> {/* Navigate to User Login */}
          <button className="button" onClick={() => navigate("/emergency")}>EMERGENCY</button>
        </div>
      </div>
    </div>
  );
};

export default HealthDataHub;
