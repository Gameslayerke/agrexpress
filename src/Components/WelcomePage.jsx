import React from "react";
import { useNavigate } from "react-router-dom";
import "../Styles/WelcomePage.css";

function WelcomePage() {
  const navigate = useNavigate();

  const handleContinue = () => {
    navigate("/login");
  };

  return (
    <div className="welcome-container">
      <button className="continue-button" onClick={handleContinue}>
        Continue
      </button>
    </div>
  );
}

export default WelcomePage;
