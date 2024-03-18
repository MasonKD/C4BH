import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Networking.css';
import logoImage from './images/C4BHLogo.png';
import './Networking.css';


const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const Networking = () => {
  
  const navigate = useNavigate();

  

  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };

  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div className="user-participant">
          User Participant: Provider A
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      </header>
      
      
    
    </div>
  );
};

export default Networking;