import React from 'react';
import './LandingPage.css'; 
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const LandingPage = () => {
  return (
    <div className="main-container">
      <header className="header">
        <Logo />
      </header>
      <div className="welcome-container">
        <h1 className="welcome-message">Welcome to the DxF Sandbox</h1>
        <button className="landing-button">Sign In</button>
        <button className="landing-button">Sign Up</button>
      </div>
    </div>
  );
};

export default LandingPage;

