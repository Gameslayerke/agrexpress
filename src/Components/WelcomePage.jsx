import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/navbar"); // Navigate to Navbar route
    // OR navigate("/") if navbar is your main page
  };

  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Pick-N-go</h1>
      <p className="welcome-subtitle">
        Fast. Reliable. Smart Delivery.
      </p>
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default WelcomePage;