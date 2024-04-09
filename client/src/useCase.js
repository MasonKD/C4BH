import React from 'react';
import { useNavigate } from 'react-router-dom';
import './useCase.css';
import logoImage from './images/C4BHLogo.png';
import useCaseImg1 from './images/use_case1.png';


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

  const handleUseCase1Doc = () => {
    window.location.href = "https://drive.google.com/drive/folders/1Um1DTMRnOn5cxoW-9J-_pc2yzriAq2j5?usp=drive_link"; // Redirects to the MPI site
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
        <div className='section' id="useCase-section">
          <h2 className="shared-title">Use Case #1</h2>
          <div className='img-holder'>
            <img src={useCaseImg1} alt="Connecting for Better Health" />
          </div>
          <button className="reg-button" onClick={handleUseCase1Doc}>Case Study Documents</button>
          
        </div>
      </main>
    </div>
  );
};

export default useCase;