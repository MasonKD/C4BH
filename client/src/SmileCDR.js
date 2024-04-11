import React from 'react';
import { useNavigate } from 'react-router-dom';
import './useCase.css';
import logoImage from './images/C4BHLogo.png';



const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const SmileCDR = () => {
  
  const navigate = useNavigate();

  
  

  const handleSignOut = () => {
    navigate('/');
  };

  

  return (
    <div className='main-container'>
      <header className="header">
        <Logo />
        <div className="user-participant">
          User: C4BH Admin
          <button className="signout-button" onClick={handleSignOut}>
            Sign Out
          </button>
          <button className="back-button" onClick={() => navigate(-1)}>Back</button>
        </div>
      </header>
      <main>
        
      </main>
    </div>
  );
};

export default SmileCDR;