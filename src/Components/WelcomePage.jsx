import React from "react";
import "../Styles/WelcomePage.css";

function WelcomePage() {
  return (
    <div className="welcome-container">
      <h1 className="welcome-title">Pick-N-go</h1>
      <p className="welcome-subtitle">
        Fast. Reliable. Smart Delivery.
      </p>
        <button className="continue-button">Continue</button>

    </div>
  );
}

export default WelcomePage;
