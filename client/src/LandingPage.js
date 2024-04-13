import React from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const LandingPage = () => {
  // Handler for the Sign In button click https://sbx.connectingforbetterhealth.com/callback, local = http://localhost:3000/callback
  const navigate = useNavigate();
  const handleSignIn = () => {
    const clientId = '6ajbqdj9bvutetf9vrremr1clc';
    const redirectUri = encodeURIComponent('https://sbx.connectingforbetterhealth.com/callback');
    const signInUri = `https://sandbox-login.auth.us-east-2.amazoncognito.com/login?client_id=${clientId}&response_type=code&scope=email+openid+phone&redirect_uri=${redirectUri}`;
    window.location.assign(signInUri);
  };

  // Handler for the Sign Up button click, identical setup as sign in but could lead to a different path if needed
 const handleSignUp = () => {


  navigate('/DxfRegistration');
  };

  return (
    <div className="main-container">
      <main>
        <div className='landing-container'>
          <div className="welcome-container">
            <h1 className="welcome-message">Welcome to the DxF Sandbox</h1>
            <button onClick={handleSignIn} className="landing-button">Sign In</button>
            <button onClick={handleSignUp} className="landing-button">Sign Up</button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default LandingPage;



