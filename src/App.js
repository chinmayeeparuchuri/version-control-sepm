import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HealthDataHub from "./HealthDataHub";
import AdminLogin from "./AdminLogin";
import UserLogin from "./UserLogin"; // Import the new User Login page
import UserInfo from "./UserInfo";
import "./App.css"; // Importing the global CSS styles
import EmergencyLogin from "./EmergencyLogin";
import EmergencyInfo from "./EmergencyInfo";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HealthDataHub />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/user" element={<UserLogin />} />
        <Route path="/userinfo" element={<UserInfo />} /> {/* New route */}
        <Route path="/emergency" element={<EmergencyLogin />} />
        <Route path="/emergencyinfo" element={<EmergencyInfo />} />
</Routes>
    </Router>
  );
}

export default App;
