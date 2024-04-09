import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Mirth.css';
import logoImage from './images/C4BHLogo.png';


const Logo = () => (
  <div className="logo">
    <img src={logoImage} alt="Connecting for Better Health" />
  </div>
);

const useCase = () => {
  
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
        </div>
      </header>
      <main>
       
      </main>
    </div>
  );
};

export default useCase;