import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import './Mirth.css';
import logoImage from './images/C4BHLogo.png';

const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const Mirth = () => {
  const navigate = useNavigate(); // Initialize navigate function

  // Handler for the Sign Out button
  const handleSignOut = () => {
    navigate('/'); // Redirects to the landing page
  };



  return (
    <div className="main-container">
      <header className="header">
        <Logo />
        <div>
          <div className="user-participant">User Participant: Provider A</div>
          <button className="signout-button" onClick={handleSignOut}>Sign Out</button> {/* Sign Out Button */}
        </div>
      </header>
      
    </div>
  );
};

export default Mirth;